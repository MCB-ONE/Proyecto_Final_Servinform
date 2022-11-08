namespace WebApi.DTOs.Usuario
{
    /// <summary>
    /// Clase para generar un objeto de transferencia entre el cliente y el servidor
    /// </summary>
    public class UsuarioDto
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Token { get; set; }
        public string Imagen { get; set; }
        public bool Admin { get; set; }
    }
}
