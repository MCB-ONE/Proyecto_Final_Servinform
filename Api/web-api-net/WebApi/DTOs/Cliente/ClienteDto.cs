    using WebApi.DTOs.Direccion;
using WebApi.DTOs.Direccion.DireccionCliente;

namespace WebApi.DTOs.Cliente
{
    public class ClienteDto
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }
        public int EmpresaId { get; set;}
        public List<DireccionClienteDto> Direcciones { get; set; }

    }
}
