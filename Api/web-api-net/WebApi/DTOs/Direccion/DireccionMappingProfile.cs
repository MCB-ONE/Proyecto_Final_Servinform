using AutoMapper;

namespace WebApi.DTOs.Direccion
{
    public class DireccionMappingProfile : Profile
    {
        public DireccionMappingProfile()
        {
            CreateMap<Core.Entities.Direccion, DireccionDto>().ReverseMap();
            CreateMap<Core.Entities.Direccion, CreateDireccionDto>().ReverseMap();
        }
    }
}
