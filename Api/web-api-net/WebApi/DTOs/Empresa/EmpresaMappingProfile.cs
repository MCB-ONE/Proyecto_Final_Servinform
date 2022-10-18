using AutoMapper;

namespace WebApi.DTOs.Empresa
{
    public class EmpresaMappingProfile : Profile
    {
        public EmpresaMappingProfile()
        {
            CreateMap<Core.Entities.Empresa, EmpresaDto>().ReverseMap();

            CreateMap<CreateEmpresaDto, Core.Entities.Empresa>();

            CreateMap<Core.Entities.Cliente, ClienteEmpresaDto>();
        }
    }
}
