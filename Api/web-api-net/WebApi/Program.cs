using BussinesLogic.Data;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// 2. Generar builder para servicio de Identity y configurarlo para poder gestionar la seguridad
var identityBuilder = builder.Services.AddIdentityCore<Usuario>();
identityBuilder = new IdentityBuilder(identityBuilder.UserType, identityBuilder.Services);
// 2.1 Seteamos donde se va a almacenar la información de identidad.
identityBuilder.AddEntityFrameworkStores<SecurityDbContext>();
/* 2.2 Añadimos la funcionalidad SigninManager => Permite instanciar un objeto UserManager para gestionar las transacciones con las tablas de seguridad */
identityBuilder.AddSignInManager<SignInManager<Usuario>>();

// 3. Añadimos servicio de autenticación a la app
builder.Services.AddAuthentication();

// 1. Conectarse a BDD SQL Express
// 1.2. Añadir DBcontext por defecto 
builder.Services.AddDbContext<ApiDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// 1.3 Añadir DBcontex para la seguridad
builder.Services.AddDbContext<SecurityDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("SecurityConnection"));
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 4.1 Ejecutar migraciones iniciales 
RunMigration();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();



// 4. Método para ejeciutar las migraciones con seeding data al iniciar la app
async void  RunMigration()
{
    var loggerFactory = app.Services.GetRequiredService<ILoggerFactory>();
    using var serviceScope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope();

    try
    {
        //var userManager = serviceScope.Services.GetRequiredService<UserManager<Usuario>>();
        var userManager = serviceScope.ServiceProvider.GetRequiredService<UserManager<Usuario>>();
        var securityContext = serviceScope.ServiceProvider.GetRequiredService<SecurityDbContext>();
        await securityContext.Database.MigrateAsync();
        await SecurityDbContextData.SeedUserAsync(userManager);
    }
    catch (Exception ex)
    {
        var logger = loggerFactory.CreateLogger<Program>();
        logger.LogError(ex, "Error en el proceso de migración inicial");

    }

}




