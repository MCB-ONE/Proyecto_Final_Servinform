using AutoMapper;
using BussinesLogic.Logic;
using Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    public class EmpresaController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly GenericRepository<Empresa> _securityRepository;

        public EmpresaController(IMapper mapper, GenericRepository<Empresa> securityRepository)
        {
            _mapper = mapper;
            _securityRepository = securityRepository;
        }


    }
}
