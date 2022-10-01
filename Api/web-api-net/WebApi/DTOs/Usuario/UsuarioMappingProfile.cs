using AutoMapper;

namespace WebApi.DTOs.Usuario
{
    public class UsuarioMappingProfile : Profile
    {
        public UsuarioMappingProfile()
        {
            CreateMap<Core.Entities.Usuario, UsuarioDto>();
        }
    }
}
