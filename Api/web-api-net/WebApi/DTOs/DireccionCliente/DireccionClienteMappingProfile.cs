using AutoMapper;

namespace WebApi.DTOs.Direccion.DireccionCliente
{
    public class DireccionClienteMappingProfile : Profile
    {
        public DireccionClienteMappingProfile()
        {
            CreateMap<Core.Entities.DireccionCliente, DireccionClienteDto>().ReverseMap();
            CreateMap<Core.Entities.DireccionCliente, CreateDireccionClienteDto>().ReverseMap();
        }
    }
}
