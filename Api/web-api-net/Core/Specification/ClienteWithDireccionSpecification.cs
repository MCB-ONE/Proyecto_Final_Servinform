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
        public ClienteWithDireccionSpecification(string sort)
        {
            AddInclude(cliente => cliente.Direcciones);

            if (!string.IsNullOrEmpty(sort))
            {
                switch (sort)
                {
                    case "nombreAsc":
                        AddOrderBy(empresa => empresa.Nombre);
                        break;

                    case "nombreDesc":
                        AddOrderByDescending(empresa => empresa.Nombre);
                        break;

                    case "nifAsc":
                        AddOrderBy(empresa => empresa.NIF);
                        break;

                    case "nifDesc":
                        AddOrderByDescending(empresa => empresa.NIF);
                        break;

                    default:
                        AddOrderBy(empresa => empresa.Nombre);
                        break;
                }
            }
        }

        public ClienteWithDireccionSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(cliente => cliente.Direcciones);
        }
    }
}
