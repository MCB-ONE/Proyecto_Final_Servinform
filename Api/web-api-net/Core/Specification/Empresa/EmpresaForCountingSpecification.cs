using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Empresa
{
    public class EmpresaForCountingSpecification : BaseSpecification<Core.Entities.Empresa>
    {
        public EmpresaForCountingSpecification(EmpresaSpecificationParams empresaParams)
            : base(x =>  
                (
                    string.IsNullOrEmpty(empresaParams.Search) 
                    || x.Nombre.Contains(empresaParams.Search) 
                    || x.NIF.Contains(empresaParams.Search)
                ))
        {

        }

        public EmpresaForCountingSpecification(EmpresaSpecificationParams empresaParams, string emailUsuario)
    : base(x =>
           x.EmailUsuario == emailUsuario &&
        (
            string.IsNullOrEmpty(empresaParams.Search)
            || x.Nombre.Contains(empresaParams.Search)
            || x.NIF.Contains(empresaParams.Search)
        ))
        {

        }
    }
}
