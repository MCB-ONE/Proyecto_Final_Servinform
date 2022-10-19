using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Empresa
{
    public class EmpresaWithClienteAndDireccionSpecification : BaseSpecification<Core.Entities.Empresa>
    {
        public EmpresaWithClienteAndDireccionSpecification(EmpresaSpecificationParams empresaParams)
            : base(x =>
                (
                    string.IsNullOrEmpty(empresaParams.Search)
                    || x.Nombre.Contains(empresaParams.Search)
                    || x.NIF.Contains(empresaParams.Search)
                ))
        {
            AddInclude(empresa => empresa.Clientes);
            AddInclude(empresa => empresa.Direcciones);

            ApplyPaging(empresaParams.PageSize * (empresaParams.PageIndex - 1), empresaParams.PageSize);


            if (!string.IsNullOrEmpty(empresaParams.Sort))
            {
                switch (empresaParams.Sort)
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
