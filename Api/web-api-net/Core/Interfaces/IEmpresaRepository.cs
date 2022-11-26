using Core.Entities;

namespace Core.Interfaces
{
    public interface IEmpresaRepository : IGenericRepository<Empresa>
    {
        Task<int> AddUsuarioEmpresa(Empresa empresa, string emailUsuario);
        Task<int> UpdateUsuarioEmpresa(Empresa empresaUpdated, string usuarioEmail);

        Task<Empresa> ActivateUsuarioEmpresa(int empresaId, string usuarioEmail);
        Task<int> DeleteEmpresaUsuario(int id, string usuarioEmail);

        

    }
}
