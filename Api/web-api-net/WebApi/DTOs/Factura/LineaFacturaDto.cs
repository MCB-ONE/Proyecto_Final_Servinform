namespace WebApi.DTOs.Factura
{
    public class LineaFacturaDto
    {
        public string Concepto { get; set; }
        public decimal PrecioUnitario { get; set; }
        public int Cantidad { get; set; }
        public decimal Total { get; set; }
    }
}
