using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Cliente
    {
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }
        public Direccion Direccion { get; set; }
        public Empresa Empresa { get; set; }
    }
}
