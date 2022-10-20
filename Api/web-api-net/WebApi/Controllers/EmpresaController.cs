using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification.Empresa;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WebApi.DTOs;
using WebApi.DTOs.Empresa;

namespace WebApi.Controllers
{
    public class EmpresaController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IEmpresaService _empresaService;
        private readonly IGenericRepository<Empresa> _repository;

        public EmpresaController(IMapper mapper, IEmpresaService empresaService, IGenericRepository<Empresa> repository)
        {
            _mapper = mapper;
            _empresaService = empresaService;
            _repository = repository;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<Pagination<EmpresaDto>>> GetAllEmpresas([FromQuery]EmpresaSpecificationParams empresaParams)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var spec = new EmpresaUsuarioWithClienteAndDireccionSpecification(emailUsuario ,empresaParams);

            var empresas = await _empresaService.GetAllUsuarioEmpresasWithSpecAsync(spec);

            var specCount = new EmpresaForCountingSpecification(empresaParams);

            var totalEmpresas = await _repository.CountAsync(specCount);

            var rounded = Math.Ceiling(Convert.ToDecimal(totalEmpresas / empresaParams.PageSize));
            var totalPages = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<Empresa>, IReadOnlyList<EmpresaDto>>(empresas);

            return Ok(new Pagination<EmpresaDto>
            {
                Count = totalEmpresas,
                PageCount = totalPages,
                Data = data,
                PageIndex = empresaParams.PageIndex,
                PageSize = empresaParams.PageSize
            });
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<List<EmpresaDto>>> GetEmpresaById(int id)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            //var spec = new EmpresaWithClienteAndDireccionSpecification(id);

            //var empresa = await _repository.GetByIdWithSpecAsync(spec);

            var spec =new EmpresaUsuarioWithClienteAndDireccionSpecification(id, emailUsuario);

            var empresa = await _empresaService.GetUsuarioEmpresaByIdWithSpecAsync(spec);

            return Ok(_mapper.Map<EmpresaDto>(empresa));
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<EmpresaDto>> CreateEmpresa(CreateEmpresaDto dto)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var result = await _empresaService.AddUsuarioEmpresa(_mapper.Map<Empresa>(dto), emailUsuario);

            if (result == 0)
            {
                throw new Exception("No se ha podido crear su nueva empresa");
            } 

            return Ok(dto);
        }



        [HttpPut("actualizar/{id}")]
        [Authorize]
        public async Task<ActionResult<List<EmpresaDto>>> UpdateEmpresa(int id, Empresa empresaUpdated)
        {

            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var empresa = await _repository.GetByIdAsync(id);

            if (empresa.Id != id)
            {
                return BadRequest("No se ha podido actualizar la empresa.");
            }

            if (empresa.EmailUsuario != emailUsuario)
            {
                return BadRequest("No se ha podido actualizar la empresa.");
            }

            empresa.Id = id;
            empresa.Nombre = empresaUpdated.Nombre;
            empresa.NIF = empresaUpdated.NIF;
            empresa.UpdatedAt = DateTime.Now;
            empresa.IsDeleted = false;

            var result = await _empresaService.UpdateUsuarioEmpresa(empresa, emailUsuario);


            if (result == 0)
            {
                throw new Exception("No se ha podido actualizar la empresa");
            }

            return Ok(empresaUpdated);

        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteEmpresa(int id)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var result = await _empresaService.DeleteEmpresaUsuario(id, emailUsuario);

            if (result == 0)
            {
                return BadRequest("No se ha podido borrar la empresa.");
            }

            return Ok();

        }





    }
}
