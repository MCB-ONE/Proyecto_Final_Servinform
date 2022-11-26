using AutoMapper;
using Core.Entities;
using WebApi.DTOs.Empresa;

namespace WebApi.DTOs.Factura
{
    public class FacturaMappingProfile : Profile
    {
        public FacturaMappingProfile()
        {
            CreateMap<Core.Entities.Factura, FacturaDto>().ReverseMap();

            CreateMap<Core.Entities.Factura, CreateFacturaDto>().ReverseMap();

            CreateMap<LineaFactura, LineaFacturaDto>().ReverseMap();

            CreateMap<LineaFactura, CreateLineaFacturaDto>().ReverseMap();

            CreateMap< Core.Entities.Empresa, FacturaEmpresaDto >().ReverseMap();

            CreateMap<Core.Entities.Cliente, ClienteEmpresaDto>();

        }
    }
}
