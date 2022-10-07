using BussinesLogic.Data;
using BussinesLogic.Logic;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Reflection;
using System.Text;
using System.Text.Json.Serialization;
using WebApi.DTOs.Usuario;

var builder = WebApplication.CreateBuilder(args);

// 2. Generar builder para servicio de Identity y configurarlo para poder gestionar la seguridad
var identityBuilder = builder.Services.AddIdentityCore<Usuario>();
identityBuilder = new IdentityBuilder(identityBuilder.UserType, identityBuilder.Services);
// 5. A�adir roles al servicio Identity
identityBuilder.AddRoles<IdentityRole>();

// 2.1 Seteamos donde se va a almacenar la informaci�n de identidad.
identityBuilder.AddEntityFrameworkStores<SecurityDbContext>();
/* 2.2 A�adimos la funcionalidad SigninManager => Permite instanciar un objeto UserManager para gestionar las transacciones con las tablas de seguridad */
identityBuilder.AddSignInManager<SignInManager<Usuario>>();

// 3. A�adimos servicio de autenticaci�n a la app
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Token:Key"])),
        ValidIssuer = builder.Configuration["Token:Issuer"],
        ValidateIssuer = true,
        ValidateAudience = false
    };
});

// 1. Conectarse a BDD SQL Express
// 1.2. A�adir DBcontext por defecto 
builder.Services.AddDbContext<ApiDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// 1.3 A�adir DBcontex para la seguridad
builder.Services.AddDbContext<SecurityDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("SecurityConnection"));
});

// A�ADIR SERVICIOS AL CONTAINER

// 3.1 Inyectar objeto que inicializa token service para utilizarlo en cualquier clase de la app
builder.Services.AddScoped<ITokenService, TokenService>();

// 5.1 A�adir system clock instance object => Permite agregar hora en la   ue se insertan nuevos registros en la tabla de seguridad
builder.Services.AddSingleton<ISystemClock, SystemClock>(); 

builder.Services.AddControllers();

// 7. A�adir politica de autorizaci�n
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("UserOnlyPolicy", policy => policy.RequireClaim("UserOnly", "User1"));
});

// 9. Habilitar CORS (Que entornos, que tipo de m�todos y cabeceras pueden acceder ala API y enviar peticiones
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CorsPolicity", builder =>
    {
        builder.AllowAnyOrigin();
        builder.AllowAnyMethod();
        builder.AllowAnyHeader();
    });
});


// 6 Servicio automapper
builder.Services.AddAutoMapper(typeof(UsuarioMappingProfile));

// Configuramos los controladores para que ignoren los posibles ciclos de entidades anidadas/ relacionadas
builder.Services.AddControllers().AddJsonOptions(options =>
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

//8. A�adir repositorio de seguridad
builder.Services.AddScoped(typeof(IGenericSecurityRepository<>), typeof(GenericSecurityRepository<>));


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(config =>
{
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = System.IO.Path.Combine(AppContext.BaseDirectory, xmlFile);
    config.IncludeXmlComments(xmlPath);
});

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

// 3.2 A�adir el servicio de autenticaci�n
app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();



// 4. M�todo para ejeciutar las migraciones con seeding data al iniciar la app
async void  RunMigration()
{
    var loggerFactory = app.Services.GetRequiredService<ILoggerFactory>();
    using var serviceScope = app.Services.GetRequiredService<IServiceScopeFactory>().CreateScope();

    try
    {
        //var userManager = serviceScope.Services.GetRequiredService<UserManager<Usuario>>();
        var userManager = serviceScope.ServiceProvider.GetRequiredService<UserManager<Usuario>>();
        var roleManager = serviceScope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        var securityContext = serviceScope.ServiceProvider.GetRequiredService<SecurityDbContext>();
        await securityContext.Database.MigrateAsync();
        await SecurityDbContextData.SeedUserAsync(userManager, roleManager);
    }
    catch (Exception ex)
    {
        var logger = loggerFactory.CreateLogger<Program>();
        logger.LogError(ex, "Error en el proceso de migraci�n inicial");

    }

}




