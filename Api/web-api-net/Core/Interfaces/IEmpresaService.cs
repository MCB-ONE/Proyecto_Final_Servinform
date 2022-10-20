using Core.Entities;
using Core.Specification.Empresa;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IEmpresaService
    {
        Task<int> AddUsuarioEmpresa(Empresa empresa, string emailUsuario);
        Task<IReadOnlyList<Empresa>> GetAllUsuarioEmpresasWithSpecAsync( EmpresaUsuarioWithClienteAndDireccionSpecification spec);

        Task<Empresa> GetUsuarioEmpresaByIdWithSpecAsync(EmpresaUsuarioWithClienteAndDireccionSpecification spec);
        Task<int> UpdateUsuarioEmpresa(Empresa empresa, string usuarioEmail);

        Task<int> DeleteEmpresaUsuario(int id, string usuarioEmail);

    }
}
