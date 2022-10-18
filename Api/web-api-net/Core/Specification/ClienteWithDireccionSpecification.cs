using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class ClienteWithDireccionSpecification : BaseSpecification<Cliente>
    {
        public ClienteWithDireccionSpecification()
        {
            AddInclude(cliente => cliente.Direcciones);
            AddOrderBy(cliente => cliente.Nombre);
        }

        public ClienteWithDireccionSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(cliente => cliente.Direcciones);
        }
    }
}
