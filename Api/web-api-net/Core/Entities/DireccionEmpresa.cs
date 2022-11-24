namespace Core.Entities
{
    public class DireccionEmpresa: BaseDireccion
    {
        public int EmpresaId { get; set; }
        public Empresa Empresa { get; set; }
        public HashSet<Factura> Facturas { get; set; }
    }
}
