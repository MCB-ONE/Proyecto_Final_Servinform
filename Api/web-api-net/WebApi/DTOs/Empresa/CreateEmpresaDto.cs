namespace WebApi.DTOs.Empresa
{
    public class CreateEmpresaDto
    {
        public string EmailUsuario { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }
    }
}
