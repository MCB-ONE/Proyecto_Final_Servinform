using AutoMapper;

namespace WebApi.DTOs.Direccion.DireccionEmpresa
{
    public class DireccionEmpresaMappingProfile : Profile
    {
        
        public DireccionEmpresaMappingProfile()
        {
            CreateMap<Core.Entities.DireccionEmpresa, DireccionEmpresaDto>().ReverseMap();
            CreateMap<Core.Entities.DireccionEmpresa, CreateDireccionEmpresaDto>().ReverseMap();
        }
    }
}
