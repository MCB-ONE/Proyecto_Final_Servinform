using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
     public interface IClienteRepository : IGenericRepository<Cliente>
    {

        Task<int> AddCliente(Cliente cliente, string emailUsuario);
        Task<IReadOnlyList<Cliente>> GetAllClientesWithSpecAsync(ISpecification<Cliente> spec,  int empresaId,string usuarioEmail);
        Task<Cliente> GetClienteByIdWithSpecAsync(ISpecification<Cliente> spec, string usuarioEmail);

        Task<int> UpdateCliente(Cliente clienteUpdated, string usuarioEmail);

        Task<int> DeleteCliente(int id, string usuarioEmail);

    }
}
