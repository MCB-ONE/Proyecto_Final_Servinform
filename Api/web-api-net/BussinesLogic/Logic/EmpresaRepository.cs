using BussinesLogic.Data;
using Core.Entities;
using Core.Interfaces;
using Core.Specification.Empresa;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace BussinesLogic.Logic
{
    public class EmpresaRepository : GenericRepository<Empresa>, IEmpresaRepository
    {
        private readonly ApiDbContext _context;
        private readonly ILogger<EmpresaRepository> _logger;

        public EmpresaRepository(ApiDbContext context, ILogger<EmpresaRepository> logger): base(context, logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<int> AddUsuarioEmpresa(Empresa empresa, string emailUsuario)
        {
            _logger.LogWarning($"{nameof(EmpresaRepository)} - {nameof(AddUsuarioEmpresa)} - Warning Level Log");
            _logger.LogError($"{nameof(EmpresaRepository)} - {nameof(AddUsuarioEmpresa)} - Error Level Log");
            _logger.LogCritical($"{nameof(EmpresaRepository)} - {nameof(AddUsuarioEmpresa)} - Critical Log Level");

            if (empresa == null)
            {
                throw new ArgumentNullException("Entidad");
            }


            empresa.EmailUsuario = emailUsuario;

            _context.Set<Empresa>().Add(empresa);

            return await _context.SaveChangesAsync();
        }


        public async Task<int> UpdateUsuarioEmpresa (Empresa empresaUpdated, string usuarioEmail)
        {
            _logger.LogWarning($"{nameof(EmpresaRepository)} - {nameof(UpdateUsuarioEmpresa)} - Warning Level Log");
            _logger.LogError($"{nameof(EmpresaRepository)} - {nameof(UpdateUsuarioEmpresa)} - Error Level Log");
            _logger.LogCritical($"{nameof(EmpresaRepository)} - {nameof(UpdateUsuarioEmpresa)} - Critical Log Level");


            if (empresaUpdated == null)
            {
                throw new ArgumentNullException("entity");
            }


            var empresa = await _context.Set<Empresa>().FindAsync(empresaUpdated.Id);


            if (empresaUpdated.EmailUsuario is null || empresa.EmailUsuario != empresaUpdated.EmailUsuario)
            {
                throw new ArgumentNullException("No se ha podido actualizar la empresa. Email de usuario logeado y email empresa a actualizarno coinciden");
            }


            empresa.Id = empresaUpdated.Id;
            empresa.Nombre = empresaUpdated.Nombre;
            empresa.NIF = empresaUpdated.NIF;
            empresa.UpdatedAt = DateTime.Now;
            empresa.IsDeleted = false;


            //_context.Set<Empresa>().Attach(empresa);
            //_context.Entry(empresa).State = EntityState.Modified;

            return await _context.SaveChangesAsync();
        }

        public async Task<int> DeleteEmpresaUsuario(int id, string usuarioEmail)
        {

            _logger.LogWarning($"{nameof(EmpresaRepository)} - {nameof(DeleteEmpresaUsuario)} - Warning Level Log");
            _logger.LogError($"{nameof(EmpresaRepository)} - {nameof(DeleteEmpresaUsuario)} - Error Level Log");
            _logger.LogCritical($"{nameof(EmpresaRepository)} - {nameof(DeleteEmpresaUsuario)} - Critical Log Level");

            Empresa empresa = await _context.Set<Empresa>().FindAsync(id);

            if(empresa == null || empresa.EmailUsuario != usuarioEmail)
            {
                return 0;
            }


            _context.Set<Empresa>().Remove(empresa);

            return await _context.SaveChangesAsync();
        }


        // Método para aplicar las especificaciones que llegan por párametros y inculds
        private IQueryable<Empresa> ApplySpecification(ISpecification<Empresa> spec)
        {
            return SpecificationEvaluator<Empresa>.GetQuery(_context.Set<Empresa>().AsQueryable(), spec);
        }

    }
}
