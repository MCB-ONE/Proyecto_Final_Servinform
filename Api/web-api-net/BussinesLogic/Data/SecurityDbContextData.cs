
using Core.Entities;
using Microsoft.AspNetCore.Identity;

namespace BussinesLogic.Data
{
    /*Método para crear un usuario de Test al ejecutar la app en caso que no existan usuarios en la BDD*/
    public class SecurityDbContextData
    {
        public static async Task SeedUserAsync(UserManager<Usuario> userManager, RoleManager<IdentityRole> roleManager)
        {
            if (!userManager.Users.Any())
            {
                var usuario = new Usuario{
                    Nombre = "Test",
                    Apellido = "Admin",
                    UserName = "TestAdmin",
                    Email = "test.admin@gmail.com",
                    
                };

                await userManager.CreateAsync(usuario, "Admin1234$");
            }

            if (!roleManager.Roles.Any())
            {
                var role = new IdentityRole
                {
                    Name = "ADMIN"
                };
                await roleManager.CreateAsync(role);
            }

        }
    }
}
