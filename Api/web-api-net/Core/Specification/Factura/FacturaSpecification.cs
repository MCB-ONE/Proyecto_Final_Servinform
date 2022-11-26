using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification.Factura
{
    public class FacturaSpecification : BaseSpecification<Core.Entities.Factura>
    {
        public FacturaSpecification(SpecificationParams facturaParams) : base(x =>
        (
            string.IsNullOrEmpty(facturaParams.Search)
            || x.FechaExpedicion.ToString("MMMM dd, yyyy").Contains(facturaParams.Search)
            || x.Cliente.Nombre.Contains(facturaParams.Search)
        ))
        {

            AddInclude(factura => factura.Empresa);
            AddInclude(factura => factura.DireccionEmpresa);
            AddInclude(factura => factura.Cliente);
            AddInclude(factura => factura.DireccionCliente);
            AddInclude(factura => factura.LineasFactura);

            ApplyPaging(facturaParams.PageSize * (facturaParams.PageIndex - 1), facturaParams.PageSize);

            if (!string.IsNullOrEmpty(facturaParams.Sort))
            {
                switch (facturaParams.Sort)
                {
                    case "fechaAsc":
                        AddOrderBy(empresa => empresa.FechaExpedicion);
                        break;

                    case "fechaDesc":
                        AddOrderByDescending(empresa => empresa.FechaExpedicion);
                        break;

                    default:
                        AddOrderByDescending(empresa => empresa.Id);
                        break;
                }
            }

        }

        public FacturaSpecification(int facturaId) : base(x => x.Id == facturaId)
        {
            AddInclude(factura => factura.Empresa);
            AddInclude(factura => factura.DireccionEmpresa);
            AddInclude(factura => factura.Cliente);
            AddInclude(factura => factura.DireccionCliente);
            AddInclude(factura => factura.LineasFactura);
        }

        public FacturaSpecification(SpecificationParams facturaParams, int empresaId) : base(x =>
                x.EmpresaId == empresaId &&
                (
                    string.IsNullOrEmpty(facturaParams.Search)
                    || x.FechaExpedicion.ToString("MMMM dd, yyyy").Contains(facturaParams.Search)
                    || x.Cliente.Nombre.Contains(facturaParams.Search)
                ))
        {

            AddInclude(factura => factura.Empresa);
            AddInclude(factura => factura.DireccionEmpresa);
            AddInclude(factura => factura.Cliente);
            AddInclude(factura => factura.DireccionCliente);
            AddInclude(factura => factura.LineasFactura);

            ApplyPaging(facturaParams.PageSize * (facturaParams.PageIndex - 1), facturaParams.PageSize);

            if (!string.IsNullOrEmpty(facturaParams.Sort))
            {
                switch (facturaParams.Sort)
                {
                    case "numeroAsc":
                        AddOrderBy(empresa => empresa.Numero);
                        break;

                    case "numeroDesc":
                        AddOrderByDescending(empresa => empresa.Numero);
                        break;

                    default:
                        AddOrderByDescending(empresa => empresa.Id);
                        break;
                }
            }

        }
    }
}
