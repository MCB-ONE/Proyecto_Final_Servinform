using WebApi.DTOs.Direccion;

namespace WebApi.DTOs.Cliente
{
    public class ClienteDto
    {
        public string Id { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }

        public int EmpresaId { get; set;}

        public List<DireccionDto> Direcciones { get; set; }

    }
}
