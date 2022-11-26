using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Core.Specification.DireccionEmpresa;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.DTOs;
using WebApi.DTOs.Direccion.DireccionEmpresa;

namespace WebApi.Controllers
{
    public class DireccionEmpresaController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<DireccionEmpresa> _repository;

        public DireccionEmpresaController(IMapper mapper, IGenericRepository<DireccionEmpresa> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<Pagination<DireccionEmpresaDto>>> GetAllDireccion([FromQuery] SpecificationParams direccionParams)
        {

            var spec = new DireccionEmpresaWithEmpresaSpecification(direccionParams);

            var direcciones = await _repository.GetAllWithSpecAsync(spec);

            var specCount = new DireccionEmpresaForCountingSpecification(direccionParams);

            var totalDirecciones = await _repository.CountAsync(specCount);

            var rounded = Math.Ceiling(Convert.ToDecimal(totalDirecciones / direccionParams.PageSize));
            var totalPages = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<DireccionEmpresa>, IReadOnlyList<DireccionEmpresaDto>>(direcciones);

            return Ok(new Pagination<DireccionEmpresaDto>
            {
                Count = totalDirecciones,
                PageCount = totalPages,
                Data = data,
                PageIndex = direccionParams.PageIndex,
                PageSize = direccionParams.PageSize
            });
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<DireccionEmpresaDto>> GetDireccionById(int id)
        {
            var spec = new DireccionEmpresaWithEmpresaSpecification(id);

            var direccion = await _repository.GetByIdWithSpecAsync(spec);

            return Ok(_mapper.Map<DireccionEmpresaDto>(direccion));
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult<DireccionEmpresaDto>> CreateDireccion(CreateDireccionEmpresaDto dto)
        {
            var result = await _repository.Add(_mapper.Map<DireccionEmpresa>(dto));

            if (dto.EmpresaId == 0)
            {
                throw new ArgumentException("Falta relacionar dirección con cliente o empresa");
            }


            if (result == 0)
            {
                throw new Exception("No se ha podido crear la nueva dirección");
            }

            return Ok(dto);
        }

        [HttpPut("actualizar/{id}")]
        [Authorize]

        public async Task<ActionResult<List<DireccionEmpresaDto>>> UpdateDireccion(int id, DireccionEmpresa direccionUpdated)
        {
            direccionUpdated.Id = id;       
            direccionUpdated.UpdatedAt = DateTime.Now;
            direccionUpdated.IsDeleted = false;

            if (direccionUpdated.EmpresaId == 0)
            {
                throw new ArgumentException("Falta relacionar dirección con empresa");
            }

            var result = await _repository.Update(_mapper.Map<DireccionEmpresa>(direccionUpdated));

            if (result == 0)
            {
                throw new Exception("No se ha podido actualizar la dirección");
            }

            return Ok(direccionUpdated);

        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteDirección(int id)
        {
            var result = await _repository.Delete(id);

            if (result == 0)
            {
                throw new Exception("No se ha podido borrar la dirección");
            }

            return Ok();

        }
    }
}
