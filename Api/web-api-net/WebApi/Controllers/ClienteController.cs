using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Core.Specification.Cliente;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WebApi.DTOs;
using WebApi.DTOs.Cliente;

namespace WebApi.Controllers
{
    public class ClienteController : BaseApiController
    {

        private readonly IMapper _mapper;
        private readonly IClienteRepository _clienteRepository;

        public ClienteController(IMapper mapper, IClienteRepository clienteRepository)
        {
            _mapper = mapper;
            _clienteRepository = clienteRepository;
        }


        // Método que retorna todos los registros de clientes (admin)
        [HttpGet]
        [Authorize(Roles = "ADMIN")]
        public async Task<ActionResult<Pagination<ClienteDto>>> GetAllClientes(int empresaId,  [FromQuery] SpecificationParams clienteParams)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var spec = new ClienteWithDireccionSpecification(clienteParams, empresaId);

            var clientes = await _clienteRepository.GetAllClientesWithSpecAsync(spec, empresaId, emailUsuario);

            if(clientes is null)
            {
                return NotFound();
            }

            var specCount = new ClienteForCountingSpecification(clienteParams);

            var totalClientes = await _clienteRepository.CountAsync(specCount);

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


        [HttpGet("empresa/{id}")]
        [Authorize]
        public async Task<ActionResult<Pagination<ClienteDto>>> GetAllClientesByEmpresaId(int id, [FromQuery] SpecificationParams clienteParams)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var spec = new ClienteWithDireccionSpecification(clienteParams, id);

            var clientes = await _clienteRepository.GetAllClientesWithSpecAsync(spec, id, emailUsuario);

            if (clientes is null)
            {
                return NotFound();
            }

            var specCount = new ClienteForCountingSpecification(clienteParams, id);

            var totalClientes = await _clienteRepository.CountAsync(specCount);

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

        //Método que retorna un cliente por su id (ADMIN)
        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<List<Cliente>>> GetClienteById(int id)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var spec = new ClienteWithDireccionSpecification(id);

            var cliente = await _clienteRepository.GetClienteByIdWithSpecAsync(spec, emailUsuario);

            if(cliente == null)
            {
                return BadRequest();
            }

            return Ok(_mapper.Map<ClienteDto>(cliente));
        }


        // Método para crear un cliente de una empresa existente(ADMIN)
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<ClienteDto>> CreateCliente(CreateClienteDto dto)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            var result = await _clienteRepository.AddCliente(_mapper.Map<Cliente>(dto), emailUsuario);

            if (result == 0)
            {
                return BadRequest("No se ha podido crear su nuevo cliente");
            }

            return Ok(dto);
        }

        [HttpPut("actualizar/{id}")]
        [Authorize]
        public async Task<ActionResult<List<ClienteDto>>> UpdateCliente(int id, Cliente clienteUpdated )
        {

            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;

            clienteUpdated.Id = id;

            var result = await _clienteRepository.UpdateCliente(clienteUpdated, emailUsuario);

            if (result == 0)
            {
                throw new Exception("No se ha podido actualizar el cliente");
            }

            return Ok(clienteUpdated);

        }

        [HttpDelete("eliminar/{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteCliente(int id)
        {
            var emailUsuario = HttpContext.User?.Claims?.FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
            var result = await _clienteRepository.DeleteCliente(id, emailUsuario);

            if (result == 0)
            {
                throw new Exception("No se ha podido borrar el cliente");
            }

            return Ok();

        }
    }
}
