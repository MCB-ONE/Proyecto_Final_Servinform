using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class DireccionCliente: BaseDireccion
    {
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }
        public HashSet<Factura> Facturas { get; set; }
    }
}
