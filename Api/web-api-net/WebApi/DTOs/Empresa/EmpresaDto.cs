using WebApi.DTOs.Cliente;
using WebApi.DTOs.Direccion;
using WebApi.DTOs.Direccion.DireccionEmpresa;

namespace WebApi.DTOs.Empresa
{
    public class EmpresaDto
    {
        public int Id { get; set; }
        public string EmailUsuario { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }

        public bool isActive { get; set; }

        public List<EmpresaCliente> Clientes { get; set; }

        public List<DireccionEmpresaDto> Direcciones { get; set; }
    }
}
