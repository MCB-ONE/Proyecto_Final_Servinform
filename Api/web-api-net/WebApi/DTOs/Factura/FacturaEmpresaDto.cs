namespace WebApi.DTOs.Factura
{
    public class FacturaEmpresaDto
    {
        public int Id { get; set; }
        public string EmailUsuario { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }
        public bool isActive { get; set; }
    }
}
