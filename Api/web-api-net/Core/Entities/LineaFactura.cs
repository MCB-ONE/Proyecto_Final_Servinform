﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class LineaFactura
    {
        public string Producto { get; set; }
        public string Descripcion { get; set; }
        public decimal PrecioUnitario { get; set; }
        public int Cantidad { get; set; }
        public decimal Total { get; set; }

    }
}
