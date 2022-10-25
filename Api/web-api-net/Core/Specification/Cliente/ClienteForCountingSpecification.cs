using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Cliente
{
    public class ClienteForCountingSpecification: BaseSpecification<Core.Entities.Cliente>
    {
        public ClienteForCountingSpecification(ClienteSpecificationParams clienteParams)
            : base(x =>
               (
                   string.IsNullOrEmpty(clienteParams.Search)
                   || x.Nombre.Contains(clienteParams.Search)
                   || x.NIF.Contains(clienteParams.Search)
               ))
        {}
        public ClienteForCountingSpecification( ClienteSpecificationParams clienteParams, int empresaId)
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
