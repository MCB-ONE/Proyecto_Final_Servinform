using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Direccion
{
    public class DireccionClienteForCountingSpecification : BaseSpecification<Core.Entities.DireccionCliente>
    {
        public DireccionClienteForCountingSpecification(DireccionSpecificationParams direccionParams)
            : base(x =>
                (
                    string.IsNullOrEmpty(direccionParams.Search)
                    || x.Calle.Contains(direccionParams.Search)
                    || x.Pais.Contains(direccionParams.Search)
                    || x.Ciudad.Contains(direccionParams.Search)
                    || x.CodigoPostal.Contains(direccionParams.Search)
                ))
        {
        }
    }
}
