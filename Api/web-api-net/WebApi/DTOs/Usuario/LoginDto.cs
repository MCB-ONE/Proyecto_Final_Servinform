namespace WebApi.DTOs.Usuario
{
    /// <summary>
    /// Clase para generar un objeto de transferencia entre el cliente y el servidor
    /// </summary>
    public class LoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
