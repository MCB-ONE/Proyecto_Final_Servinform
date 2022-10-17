namespace Core.Entities
{
    public class Direccion: BaseEntity
    {
        public string Calle { get; set; }
        public int Numero { get; set; }
        public string CodigoPostal { get; set; }
        public string Ciudad { get; set; }
        public string Provincia { get; set; }
        public string Pais { get; set; }
        public int Telefono { get; set; }
        public string Email { get; set; }
        public string Web { get; set; }

        public int? EmpresaId { get; set; }
        public int? ClienteId { get; set; }


        // Navigation properties
        public Empresa Empresa { get; set; }
        public Cliente Cliente { get; set; }



    }
}
