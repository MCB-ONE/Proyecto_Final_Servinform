using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification.Cliente;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.DTOs;
using WebApi.DTOs.Cliente;

namespace WebApi.Controllers
{
    public class ClienteController : BaseApiController
    {

        private readonly IMapper _mapper;
        private readonly IGenericRepository<Cliente> _repository;

        public ClienteController(IMapper mapper, IGenericRepository<Cliente> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }


        [HttpGet]
        public async Task<ActionResult<Pagination<ClienteDto>>> GetAllClientes([FromQuery] ClienteSpecificationParams clienteParams)
        {

            var spec = new ClienteWithDireccionSpecification(clienteParams);

            var clientes = await _repository.GetAllWithSpecAsync(spec);

            var specCount = new ClienteForCountingSpecification(clienteParams);

            var totalClientes = await _repository.CountAsync(specCount);

            var rounded = Math.Ceiling(Convert.ToDecimal(totalClientes / clienteParams.PageSize));
            var totalPages = Convert.ToInt32(rounded);
            var data = _mapper.Map<IReadOnlyList<Cliente>, IReadOnlyList<ClienteDto>>(clientes);

            return Ok(new Pagination<ClienteDto>
            {
                Count = totalClientes,
                PageCount = totalPages,
                Data = data,
                PageIndex = clienteParams.PageIndex,
                PageSize = clienteParams.PageSize
            });
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<List<Cliente>>> GetClienteById(int id)
        {
            var spec = new ClienteWithDireccionSpecification(id);

            var cliente = await _repository.GetByIdWithSpecAsync(spec);

            return Ok(_mapper.Map<ClienteDto>(cliente));
        }

        [HttpPost]
        public async Task<ActionResult<ClienteDto>> CreateCliente(CreateClienteDto dto)
        {
            var result = await _repository.Add(_mapper.Map<Cliente>(dto));

            if (result == 0)
            {
                throw new Exception("No se ha podido crear su nuevo cliente");
            }

            return Ok(dto);
        }

        [HttpPut("{id}")]

        public async Task<ActionResult<List<ClienteDto>>> UpdateCliente(int id, Cliente clienteUpdated )
        {
            clienteUpdated.Id = id;
            clienteUpdated.UpdatedAt = DateTime.Now;
            clienteUpdated.IsDeleted = false;

            var result = await _repository.Update(clienteUpdated);

            if (result == 0)
            {
                throw new Exception("No se ha podido actualizar el cliente");
            }

            return Ok(clienteUpdated);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCliente(int id)
        {
            var result = await _repository.Delete(id);

            if (result == 0)
            {
                throw new Exception("No se ha podido borrar el cliente");
            }

            return Ok();

        }
    }
}
