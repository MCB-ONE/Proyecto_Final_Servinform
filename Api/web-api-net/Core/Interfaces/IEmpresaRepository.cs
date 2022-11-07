using Core.Entities;
using Core.Specification.Empresa;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IEmpresaRepository : IGenericRepository<Empresa>
    {
        Task<int> AddUsuarioEmpresa(Empresa empresa, string emailUsuario);
        Task<int> UpdateUsuarioEmpresa(Empresa empresaUpdated, string usuarioEmail);
        Task<int> DeleteEmpresaUsuario(int id, string usuarioEmail);

    }
}
