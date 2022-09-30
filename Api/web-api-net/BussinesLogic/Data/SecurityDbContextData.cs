
using Core.Entities;
using Microsoft.AspNetCore.Identity;

namespace BussinesLogic.Data
{
    /*Método para crear un usuario de Test al ejecutar la app en caso que no existan usuarios en la BDD*/
    public class SecurityDbContextData
    {
        public static async Task SeedUserAsync(UserManager<Usuario> userManager)
        {
            if (!userManager.Users.Any())
            {
                var usuario = new Usuario{
                    Nombre = "Test",
                    Apellido = "User",
                    UserName = "TestUser",
                    CreatedBy = "Seeder"
                    
                };

                await userManager.CreateAsync(usuario, "Test1234$");
            }
        }
    }
}
