using WebApi.DTOs.Cliente;
using WebApi.DTOs.Direccion;

namespace WebApi.DTOs.Empresa
{
    public class EmpresaDto
    {
        public string Id { get; set; }
        public string EmailUsuario { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }

        public List<ClienteEmpresaDto> Clientes { get; set; }

        public List<DireccionDto> Direcciones { get; set; }
    }
}
