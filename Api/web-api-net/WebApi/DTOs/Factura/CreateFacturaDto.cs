namespace WebApi.DTOs.Factura
{
    public class CreateFacturaDto
    {
        public DateTimeOffset FechaExpedicion { get; set; }
        public int Iva { get; set; }
        public int EmpresaId { get; set; }
        public int DireccionEmpresaId { get; set; }
        public int ClienteId { get; set; }
        public int DireccionClienteId { get; set; }

        public HashSet<CreateLineaFacturaDto> LineasFactura { get; set; }
    }
}
