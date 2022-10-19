using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Direccion
{
    public class DireccionForCountingSpecification : BaseSpecification<Core.Entities.Direccion>
    {
        public DireccionForCountingSpecification(DireccionSpecificationParams direccionParams)
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
