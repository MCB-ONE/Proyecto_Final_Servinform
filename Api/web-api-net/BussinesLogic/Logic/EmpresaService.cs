    using BussinesLogic.Data;
using Core.Entities;
using Core.Interfaces;
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
    }
}
