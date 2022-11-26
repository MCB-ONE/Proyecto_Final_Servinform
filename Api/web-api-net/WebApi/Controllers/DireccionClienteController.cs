using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Core.Specification.Direccion;
using Microsoft.AspNetCore.Mvc;
using WebApi.DTOs;
using WebApi.DTOs.Direccion.DireccionCliente;

namespace WebApi.Controllers
{
    public class DireccionClienteController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<DireccionCliente> _repository;

        public DireccionClienteController(IMapper mapper, IGenericRepository<DireccionCliente> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<DireccionClienteDto>>> GetAllDireccion([FromQuery] SpecificationParams direccionParams)
        {

            var spec = new DireccionClienteWithClienteSpecification(direccionParams);

            var direcciones = await _repository.GetAllWithSpecAsync(spec);

            var specCount = new DireccionClienteForCountingSpecification(direccionParams);

            var totalDirecciones = await _repository.CountAsync(specCount);

            var rounded = Math.Ceiling(Convert.ToDecimal(totalDirecciones / direccionParams.PageSize));
            var totalPages = Convert.ToInt32(rounded);

            var data = _mapper.Map<IReadOnlyList<DireccionCliente>, IReadOnlyList<DireccionClienteDto>>(direcciones);

            return Ok(new Pagination<DireccionClienteDto>
            {
                Count = totalDirecciones,
                PageCount = totalPages,
                Data = data,
                PageIndex = direccionParams.PageIndex,
                PageSize = direccionParams.PageSize
            });
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<DireccionClienteDto>> GetDireccionById(int id)
        {
            var spec = new DireccionClienteWithClienteSpecification(id);

            var direccion = await _repository.GetByIdWithSpecAsync(spec);

            return Ok(_mapper.Map<DireccionClienteDto>(direccion));
        }

        [HttpPost]
        public async Task<ActionResult<DireccionClienteDto>> CreateDireccion(CreateDireccionClienteDto dto)
        {
            var result = await _repository.Add(_mapper.Map<DireccionCliente>(dto));

            if (dto.ClienteId == 0)
            {
                throw new ArgumentException("Falta relacionar dirección con cliente");
            }


            if (result == 0)
            {
                throw new Exception("No se ha podido crear la nueva dirección");
            }

            return Ok(dto);
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<List<DireccionClienteDto>>> UpdateDireccion(int id, DireccionCliente direccionUpdated)
        {
            direccionUpdated.Id = id;
            direccionUpdated.UpdatedAt = DateTime.Now;
            direccionUpdated.IsDeleted = false;

            if (direccionUpdated.ClienteId == 0)
            {
                throw new ArgumentException("Falta relacionar dirección con cliente");
            }

            var result = await _repository.Update(_mapper.Map<DireccionCliente>(direccionUpdated));

            if (result == 0)
            {
                throw new Exception("No se ha podido actualizar la dirección");
            }

            return Ok(direccionUpdated);

        }

        [HttpDelete("{id}")]
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
