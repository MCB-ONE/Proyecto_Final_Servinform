
namespace Core.Specification.DireccionEmpresa
{
    public class DireccionEmpresaForCountingSpecification : BaseSpecification<Core.Entities.DireccionEmpresa>
    {
        public DireccionEmpresaForCountingSpecification(SpecificationParams direccionParams)
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
