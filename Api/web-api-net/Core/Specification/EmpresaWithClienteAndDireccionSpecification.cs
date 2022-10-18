using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class EmpresaWithClienteAndDireccionSpecification : BaseSpecification<Empresa>
    {
        public EmpresaWithClienteAndDireccionSpecification(string sort)
        {
            AddInclude(empresa => empresa.Clientes);
            AddInclude(empresa => empresa.Direcciones);
            if (string.IsNullOrEmpty(sort))
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

        public EmpresaWithClienteAndDireccionSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(empresa => empresa.Clientes);
            AddInclude(empresa => empresa.Direcciones);
        }
    }
}
