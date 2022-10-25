using BussinesLogic.Data;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinesLogic.Logic
{
    public class ClienteRepository : GenericRepository<Cliente>, IClienteRepository
    {

        readonly ApiDbContext _context;
        readonly ILogger _logger;

        public ClienteRepository(ApiDbContext context, ILogger<ClienteRepository> logger) : base(context, logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<int> AddCliente(Cliente cliente, string emailUsuario)
        {

            if (cliente == null)
            {
                throw new ArgumentNullException("cliente");
            }

            var isValid = await ClienteIsValid(cliente.EmpresaId, emailUsuario);

            if (!isValid)
            {
                return 0;
            }

            _context.Set<Cliente>().Add(cliente);

            return await _context.SaveChangesAsync();
        }

        public async Task<IReadOnlyList<Cliente>> GetAllClientesWithSpecAsync(ISpecification<Cliente> spec, int empresaId, string usuarioEmail)
        {
            var empresa = await _context.Set<Empresa>().FindAsync(empresaId);

            if(empresa is null)
            {
                return null;
            }

            var isValid = await ClienteIsValid(empresaId, usuarioEmail);

            if (!isValid)
            {
                return null;
            }

            return await GetAllWithSpecAsync(spec); 
        }

        public async Task<Cliente> GetClienteByIdWithSpecAsync(ISpecification<Cliente> spec, string usuarioEmail)
        {
            var cliente = await this.GetByIdWithSpecAsync(spec);

            var isValid = await ClienteIsValid(cliente.EmpresaId, usuarioEmail);

            if (!isValid)
            {
                return null;
            }

            return cliente;

        }

        public async Task<int> UpdateCliente( Cliente clienteUpdated, string usuarioEmail)
        {

            var cliente = await _context.Set<Cliente>().FindAsync(clienteUpdated.Id);

            if (clienteUpdated == null || cliente == null)
            {
                throw new ArgumentNullException("entity");
            }

            var isValid = await ClienteIsValid(cliente.EmpresaId, usuarioEmail);


            if (clienteUpdated.EmpresaId != cliente.EmpresaId || !isValid)
            {
                return 0;
            }
            cliente.Nombre = clienteUpdated.Nombre;
            cliente.NIF = clienteUpdated.NIF;
            cliente.UpdatedAt = DateTime.Now;
            cliente.IsDeleted = false;

            _context.Set<Cliente>().Attach(cliente);
            _context.Entry(cliente).State = EntityState.Modified;


            return await _context.SaveChangesAsync();

        }

        public async Task<int> DeleteCliente(int id, string usuarioEmail)
        {
            var cliente = await _context.Set<Cliente>().FindAsync(id);
            if (cliente is null)
            {
                return 0;
            }

            var isValid = await ClienteIsValid(cliente.EmpresaId, usuarioEmail);

            if (!isValid)
            {
                return 0;
            }

            _context.Set<Cliente>().Remove(cliente);

            return await _context.SaveChangesAsync();

        }

        private async Task<Boolean> ClienteIsValid(int empresaId, string usuarioEmail)
        {
            var empresa = await _context.Set<Empresa>().FindAsync(empresaId);


            if (empresa.EmailUsuario != usuarioEmail)
            {
                return false;
            }

            return true;
        }
    }
}
