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
        private readonly IEmpresaRepository _repository;

        public EmpresaController(IMapper mapper, IEmpresaRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<Pagination<EmpresaDto>>> GetAllEmpresasByUsuarioEmail([FromQuery]EmpresaSpecificationParams empresaParams)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var spec = new EmpresaWithClienteAndDireccionSpecification(empresaParams, emailUsuario);

            var empresas = await _repository.GetAllWithSpecAsync(spec);

            var specCount = new EmpresaForCountingSpecification(empresaParams, emailUsuario);

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
        public async Task<ActionResult<List<EmpresaDto>>> GetEmpresaByIdAndUsuarioEmail(int id)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var spec =new EmpresaWithClienteAndDireccionSpecification(id, emailUsuario);

            var empresa = await _repository.GetByIdWithSpecAsync(spec);

            return Ok(_mapper.Map<EmpresaDto>(empresa));
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<EmpresaDto>> CreateEmpresa(CreateEmpresaDto dto)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var result = await _repository.AddUsuarioEmpresa(_mapper.Map<Empresa>(dto), emailUsuario);

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

            var result = await _repository.UpdateUsuarioEmpresa(empresa, emailUsuario);


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

            var result = await _repository.DeleteEmpresaUsuario(id, emailUsuario);

            if (result == 0)
            {
                return BadRequest("No se ha podido borrar la empresa.");
            }

            return Ok();

        }





    }
}
