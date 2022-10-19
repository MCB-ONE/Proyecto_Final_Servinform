using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Cliente
{
    public class ClienteWithDireccionSpecification : BaseSpecification<Core.Entities.Cliente>
    {
        public ClienteWithDireccionSpecification(ClienteSpecificationParams clienteParams)
            : base(x =>
                (
                    string.IsNullOrEmpty(clienteParams.Search)
                    || x.Nombre.Contains(clienteParams.Search)
                    || x.NIF.Contains(clienteParams.Search)
                ))
        {
            AddInclude(cliente => cliente.Direcciones);


            ApplyPaging(clienteParams.PageSize * (clienteParams.PageIndex - 1), clienteParams.PageSize);

            if (!string.IsNullOrEmpty(clienteParams.Sort))
            {
                switch (clienteParams.Sort)
                {
                    case "nombreAsc":
                        AddOrderBy(c => c.Nombre);
                        break;

                    case "nombreDesc":
                        AddOrderByDescending(c => c.Nombre);
                        break;

                    case "nifAsc":
                        AddOrderBy(c => c.NIF);
                        break;

                    case "nifDesc":
                        AddOrderByDescending(c => c.NIF);
                        break;

                    default:
                        AddOrderBy(c => c.Nombre);
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
