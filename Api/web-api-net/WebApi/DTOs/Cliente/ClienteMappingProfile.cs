using AutoMapper;

namespace WebApi.DTOs.Cliente
{
    public class ClienteMappingProfile : Profile
    {
        public ClienteMappingProfile()
        {
            CreateMap<Core.Entities.Cliente, ClienteDto>().ReverseMap();
        }
    }
}
