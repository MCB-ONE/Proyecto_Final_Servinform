namespace WebApi.DTOs.Factura
{
    public class CreateLineaFacturaDto
    {
        public string Concepto { get; set; }
        public decimal PrecioUnitario { get; set; }
        public int Cantidad { get; set; }
    }
}
