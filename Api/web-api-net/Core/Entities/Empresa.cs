
namespace Core.Entities
{
    public class Empresa: BaseEntity
    {
        public string EmailUsuario { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }
        public bool isActive { get; set; }
        public HashSet<Cliente> Clientes { get; set; }
        public HashSet<DireccionEmpresa> Direcciones { get; set; }
        public HashSet<Factura> Facturas { get; set; }

    }
}
