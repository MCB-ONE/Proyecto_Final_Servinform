using WebApi.DTOs.Direccion.DireccionCliente;
using WebApi.DTOs.Direccion.DireccionEmpresa;
using WebApi.DTOs.Empresa;

namespace WebApi.DTOs.Factura
{
    public class FacturaDto
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        public DateTimeOffset FechaExpedicion { get; set; }
        public decimal Subtotal { get; set; }
        public int Iva { get; set; }
        public decimal Total { get; set; }

        // Navigation properties
        public FacturaEmpresaDto Empresa { get; set; }
        public ClienteEmpresaDto Cliente { get; set; }
        public DireccionEmpresaDto DireccionEmpresa { get; set; }
        public DireccionClienteDto DireccionCliente { get; set; }

        public HashSet<LineaFacturaDto> LineasFactura { get; set; }
    }
}
