using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities

{
    public class Factura
    {
        public int Numero { get; set; }
        public int FechaExpedicion { get; set; }

        public decimal BaseImponible { get; set; }
        public Iva IVA { get; set; }
        public Irpf IRPF { get; set; }
        public decimal Total { get; set; }

    }
}
