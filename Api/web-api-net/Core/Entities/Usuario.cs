
namespace Core.Entities
{
    public enum Roles
    {
        Administrador,
        Usuario
    }
    public class Usuario: BaseEntity
    {
        public string Nombre { get; set; } 
        public string Apellido { get; set; } 
        public string Email { get; set; }
        public string Password { get; set; } 
        public Roles Rol { get; set; } = Roles.Usuario;

    }
}
