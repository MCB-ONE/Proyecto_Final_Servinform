    using BussinesLogic.Data;
using Core.Entities;
using Core.Interfaces;
using Core.Specification.Empresa;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinesLogic.Logic
{
    public class EmpresaService : IEmpresaService
    {
        private readonly ApiDbContext _context;
        private readonly ILogger<GenericRepository<Empresa>> _logger;

        public EmpresaService(ApiDbContext context, ILogger<GenericRepository<Empresa>> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<IReadOnlyList<Empresa>> GetAllUsuarioEmpresasWithSpecAsync(EmpresaUsuarioWithClienteAndDireccionSpecification spec)
        {
            _logger.LogWarning($"{nameof(GenericRepository<Empresa>)} - {nameof(GetAllUsuarioEmpresasWithSpecAsync)} - Warning Level Log");
            _logger.LogError($"{nameof(GenericRepository<Empresa>)} - {nameof(GetAllUsuarioEmpresasWithSpecAsync)} - Error Level Log");
            _logger.LogCritical($"{nameof(GenericRepository<Empresa>)} - {nameof(GetAllUsuarioEmpresasWithSpecAsync)} - Critical Log Level");

            return await ApplySpecification(spec).ToListAsync();
        }

        public async Task<Empresa> GetUsuarioEmpresaByIdWithSpecAsync(EmpresaUsuarioWithClienteAndDireccionSpecification spec)
        {
            _logger.LogWarning($"{nameof(GenericRepository<Empresa>)} - {nameof(GetUsuarioEmpresaByIdWithSpecAsync)} - Warning Level Log");
            _logger.LogError($"{nameof(GenericRepository<Empresa>)} - {nameof(GetUsuarioEmpresaByIdWithSpecAsync)} - Error Level Log");
            _logger.LogCritical($"{nameof(GenericRepository<Empresa>)} - {nameof(GetUsuarioEmpresaByIdWithSpecAsync)} - Critical Log Level");

            return await ApplySpecification(spec).FirstOrDefaultAsync();
        }

        public async Task<int> AddUsuarioEmpresa(Empresa empresa, string emailUsuario)
        {
            _logger.LogWarning($"{nameof(GenericRepository<Empresa>)} - {nameof(AddUsuarioEmpresa)} - Warning Level Log");
            _logger.LogError($"{nameof(GenericRepository<Empresa>)} - {nameof(AddUsuarioEmpresa)} - Error Level Log");
            _logger.LogCritical($"{nameof(GenericRepository<Empresa>)} - {nameof(AddUsuarioEmpresa)} - Critical Log Level");

            if (empresa == null)
            {
                throw new ArgumentNullException("Entidad");
            }


            empresa.EmailUsuario = emailUsuario;

            _context.Set<Empresa>().Add(empresa);

            return await _context.SaveChangesAsync();
        }


        public async Task<int> UpdateUsuarioEmpresa (Empresa empresa, string usuarioEmail)
        {
            _logger.LogWarning($"{nameof(GenericRepository<Empresa>)} - {nameof(UpdateUsuarioEmpresa)} - Warning Level Log");
            _logger.LogError($"{nameof(GenericRepository<Empresa>)} - {nameof(UpdateUsuarioEmpresa)} - Error Level Log");
            _logger.LogCritical($"{nameof(GenericRepository<Empresa>)} - {nameof(UpdateUsuarioEmpresa)} - Critical Log Level");

            if (empresa == null)
            {
                throw new ArgumentNullException("entity");
            }

            if(usuarioEmail != empresa.EmailUsuario) {
                throw new ArgumentNullException("No se ha podido actualizar la empresa. Email de usuario logeado y email empresa a actualizar no coinciden");
            }

            _context.Set<Empresa>().Attach(empresa);
            _context.Entry(empresa).State = EntityState.Modified;

            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeleteEmpresaUsuario(int id, string usuarioEmail)
        {

            _logger.LogWarning($"{nameof(GenericRepository<Empresa>)} - {nameof(DeleteEmpresaUsuario)} - Warning Level Log");
            _logger.LogError($"{nameof(GenericRepository<Empresa>)} - {nameof(DeleteEmpresaUsuario)} - Error Level Log");
            _logger.LogCritical($"{nameof(GenericRepository<Empresa>)} - {nameof(DeleteEmpresaUsuario)} - Critical Log Level");

            Empresa empresa = await _context.Set<Empresa>().FindAsync(id);

            if(empresa == null || empresa.EmailUsuario != usuarioEmail)
            {
                return 0;
            }


            _context.Set<Empresa>().Remove(empresa);

            return await _context.SaveChangesAsync();
        }

        private IQueryable<Empresa> ApplySpecification(ISpecification<Empresa> spec)
        {
            return SpecificationEvaluator<Empresa>.GetQuery(_context.Set<Empresa>().AsQueryable(), spec);
        }


    }
}
