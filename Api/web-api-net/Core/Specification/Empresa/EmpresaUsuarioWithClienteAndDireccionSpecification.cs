using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Empresa
{
    public class EmpresaUsuarioWithClienteAndDireccionSpecification : BaseSpecification<Core.Entities.Empresa>
    {
        public EmpresaUsuarioWithClienteAndDireccionSpecification(string usuarioEmail, EmpresaSpecificationParams empresaParams)
            : base(x =>
                x.EmailUsuario == usuarioEmail && 
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

        public EmpresaUsuarioWithClienteAndDireccionSpecification(int id, string usuarioEmail) : base(x => x.Id == id && x.EmailUsuario == usuarioEmail)
        {
            AddInclude(empresa => empresa.Clientes);
            AddInclude(empresa => empresa.Direcciones);
        }
    }
}
