using WebApi.DTOs.Empresa;

namespace WebApi.DTOs.Direccion.DireccionEmpresa
{
    public class DireccionEmpresaDto
    {
        public int Id { get; set; }
        public string Calle { get; set; }
        public int Numero { get; set; }
        public string CodigoPostal { get; set; }
        public string Ciudad { get; set; }
        public string Provincia { get; set; }
        public string Pais { get; set; }
        public int Telefono { get; set; }
        public string Email { get; set; }
        public string Web { get; set; }
    }
}
