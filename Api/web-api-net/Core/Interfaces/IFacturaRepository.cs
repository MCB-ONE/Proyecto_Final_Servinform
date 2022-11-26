using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IFacturaRepository : IGenericRepository<Factura>
    {
        Task<int> AddFacturaAsync(string emailUsuario, Factura factura, IReadOnlyList<LineaFactura> lineasFactura);

        Task<int> UpdateFacturaAsync(int id, Factura factura);

    }
}
