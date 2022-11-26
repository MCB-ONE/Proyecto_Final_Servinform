
namespace Core.Specification.Cliente
{
    public class ClienteForCountingSpecification: BaseSpecification<Core.Entities.Cliente>
    {
        public ClienteForCountingSpecification(SpecificationParams clienteParams)
            : base(x =>
               (
                   string.IsNullOrEmpty(clienteParams.Search)
                   || x.Nombre.Contains(clienteParams.Search)
                   || x.NIF.Contains(clienteParams.Search)
               ))
        {}
        public ClienteForCountingSpecification(SpecificationParams clienteParams, int empresaId)
            : base(x =>
                x.EmpresaId == empresaId &&
               (
                   string.IsNullOrEmpty(clienteParams.Search)
                   || x.Nombre.Contains(clienteParams.Search)
                   || x.NIF.Contains(clienteParams.Search)
               ))
        { }
    }
}
