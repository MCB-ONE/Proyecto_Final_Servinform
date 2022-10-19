using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification.Empresa;
using Microsoft.AspNetCore.Mvc;
using WebApi.DTOs;
using WebApi.DTOs.Empresa;

namespace WebApi.Controllers
{
    public class EmpresaController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Empresa> _repository;

        public EmpresaController(IMapper mapper, IGenericRepository<Empresa> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }


        [HttpGet]
        public async Task<ActionResult<Pagination<EmpresaDto>>> GetAllEmpresas([FromQuery]EmpresaSpecificationParams empresaParams)
        {

            var spec = new EmpresaWithClienteAndDireccionSpecification(empresaParams);

            var empresas = await _repository.GetAllWithSpecAsync(spec);

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

        public async Task<ActionResult<List<EmpresaDto>>> GetEmpresaById(int id)
        {
            var spec = new EmpresaWithClienteAndDireccionSpecification(id);

            var empresa = await _repository.GetByIdWithSpecAsync(spec);

            return Ok(_mapper.Map<EmpresaDto>(empresa));
        }

        [HttpPost]
        public async Task<ActionResult<EmpresaDto>> CreateEmpresa(CreateEmpresaDto dto)
        {
            var result = await _repository.Add(_mapper.Map<Empresa>(dto));

            if (result == 0)
            {
                throw new Exception("No se ha podido crear su nueva empresa");
            } 

            return Ok(dto);
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<List<EmpresaDto>>> UpdateEmpresa(int id, Empresa empresaUpdated)
        {
            empresaUpdated.Id = id; 
            empresaUpdated.UpdatedAt = DateTime.Now;
            empresaUpdated.IsDeleted = false;

            var result = await _repository.Update(empresaUpdated);

            if (result == 0)
            {
                throw new Exception("No se ha podido actualizar la empresa");
            }

            return Ok(empresaUpdated);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpresa(int id)
        {
            var result = await _repository.Delete(id);

            if (result == 0)
            {
                throw new Exception("No se ha podido borrar la empresa");
            }

            return Ok();

        }





    }
}
