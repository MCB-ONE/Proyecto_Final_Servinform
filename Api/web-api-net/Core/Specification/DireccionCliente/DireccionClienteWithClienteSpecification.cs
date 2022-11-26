using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Direccion
{
    public class DireccionClienteWithClienteSpecification : BaseSpecification<Core.Entities.DireccionCliente>
    {
        public DireccionClienteWithClienteSpecification(SpecificationParams direccionParams)
            : base(x =>
                (
                    string.IsNullOrEmpty(direccionParams.Search)
                    || x.Calle.Contains(direccionParams.Search)
                    || x.Pais.Contains(direccionParams.Search)
                    || x.Ciudad.Contains(direccionParams.Search)
                    || x.CodigoPostal.Contains(direccionParams.Search)
                ))
        {
            AddInclude(dir => dir.Cliente);
            AddOrderBy(dir => dir.Ciudad);

            ApplyPaging(direccionParams.PageSize * (direccionParams.PageIndex - 1), direccionParams.PageSize);

            if (!string.IsNullOrEmpty(direccionParams.Sort))
            {
                switch (direccionParams.Sort)
                {
                    case "ciudadAsc":
                        AddOrderBy(d => d.Ciudad);
                        break;

                    case "ciudadDesc":
                        AddOrderByDescending(d => d.Ciudad);
                        break;

                    case "paisAsc":
                        AddOrderBy(d => d.Pais);
                        break;

                    case "paisDesc":
                        AddOrderByDescending(d => d.Pais);
                        break;
                    case "calleAsc":
                        AddOrderBy(d => d.Calle);
                        break;

                    case "calleDesc":
                        AddOrderByDescending(d => d.Calle);
                        break;

                    default:
                        AddOrderBy(d => d.Ciudad);
                        break;
                }
            }
        }

        public DireccionClienteWithClienteSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(dir => dir.Cliente);
        }
    }
}
