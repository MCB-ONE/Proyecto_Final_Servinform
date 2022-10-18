using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.DTOs.Direccion;

namespace WebApi.Controllers
{
    public class DireccionController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<Direccion> _repository;

        public DireccionController(IMapper mapper, IGenericRepository<Direccion> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Direccion>>> GetAllDireccion()
        {

            var direcciones = await _repository.GetAllAsync();

            return Ok(_mapper.Map<IReadOnlyList<Direccion>, IReadOnlyList<DireccionDto>>(direcciones));
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<List<DireccionDto>>> GetDireccionById(int id)
        {
            var spec = new DireccionWithEmpresaOrClienteSpecification(id);

            var direccion = await _repository.GetByIdWithSpecAsync(spec);

            return Ok(_mapper.Map<DireccionDto>(direccion));
        }

        [HttpPost]
        public async Task<ActionResult<DireccionDto>> CreateDireccion(CreateDireccionDto dto)
        {
            var result = await _repository.Add(_mapper.Map<Direccion>(dto));

            if (dto.EmpresaId is null && dto.ClienteId is null)
            {
                throw new ArgumentException("Falta relacionar dirección con cliente o empresa");
            }


            if (result == 0)
            {
                throw new Exception("No se ha podido crear la nueva dirección");
            }

            return Ok(dto);
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<List<DireccionDto>>> UpdateDireccion(int id, Direccion direccionUpdated)
        {
            direccionUpdated.Id = id;
            direccionUpdated.UpdatedAt = DateTime.Now;
            direccionUpdated.IsDeleted = false;

            if (direccionUpdated.EmpresaId is null && direccionUpdated.ClienteId is null)
            {
                throw new ArgumentException("Falta relacionar dirección con cliente o empresa");
            }

            var result = await _repository.Update(_mapper.Map<Direccion>(direccionUpdated));

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
