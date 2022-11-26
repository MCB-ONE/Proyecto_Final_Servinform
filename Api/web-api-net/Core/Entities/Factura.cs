using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities

{
    public class Factura: BaseEntity
    {
        public int Numero { get; set; }
        public DateTimeOffset FechaExpedicion { get; set; }
        public decimal Subtotal { get; set; }
        public int Iva { get; set; }
        public decimal Total { get; set; }

        // Navigation properties
        public int EmpresaId { get; set; }
        public Empresa Empresa { get; set; }

        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }

        public int DireccionEmpresaId { get; set; }
        public DireccionEmpresa DireccionEmpresa { get;set; }

        public int DireccionClienteId { get; set; }
        public DireccionCliente DireccionCliente { get;set; }

        public HashSet<LineaFactura> LineasFactura { get; set; }

    }
}
