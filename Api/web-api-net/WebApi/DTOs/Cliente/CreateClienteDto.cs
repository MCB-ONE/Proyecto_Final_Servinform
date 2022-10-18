namespace WebApi.DTOs.Cliente
{
    public class CreateClienteDto
    {
        public int EmpresaId { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }
    }
}
