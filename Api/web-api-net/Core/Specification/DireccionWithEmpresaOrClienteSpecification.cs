using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class DireccionWithEmpresaOrClienteSpecification : BaseSpecification<Direccion>
    {
        public DireccionWithEmpresaOrClienteSpecification()
        {
            AddInclude(dir => dir.Cliente);
            AddInclude(dir => dir.Empresa);
            AddOrderBy(dir => dir.Ciudad);
        }

        public DireccionWithEmpresaOrClienteSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(dir => dir.Cliente);
            AddInclude(dir => dir.Empresa);
        }
    }
}
