using AutoMapper;

namespace WebApi.DTOs.Usuario
{
    /// <summary>
    /// Clase que configur el de mapeo de las entidades relacionadas con los usuarios
    /// </summary>
    public class UsuarioMappingProfile : Profile
    {
        /// <summary>
        /// Clase que configur el de mapeo de las entidades relacionadas con los usuarios
        /// </summary>
        public UsuarioMappingProfile()
        {
            CreateMap<Core.Entities.Usuario, UsuarioDto>().ReverseMap();
        }
    }
}
