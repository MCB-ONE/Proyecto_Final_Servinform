using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebApi.DTOs.UserDtos;
using WebApi.Errors;

namespace WebApi.Controllers
{
    public class UsuarioController : BaseApiController
    {
        private readonly UserManager<Usuario> _userManager;
        private readonly SignInManager<Usuario> _signInManager;

        public UsuarioController(UserManager<Usuario> userManager, SignInManager<Usuario> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UsuarioDto>> Login(LoginDto loginDto)
        {
            var usuario = await _userManager.FindByEmailAsync(loginDto.Email);

            if (usuario is null)
                return Unauthorized(new CodeErrorResponse(401, "Email incorrecto"));

            /* Ejecutamos el login mediante el servicio _signInManager y su método CheckPasswordSignInAsync
             * => CheckPasswordSignInAsync: compara email y pasword contra la BDD */
            var resultado = await _signInManager.CheckPasswordSignInAsync(usuario, loginDto.Password, false);

            if(!resultado.Succeeded)
                return Unauthorized(new CodeErrorResponse(401, "Contraseña incorrecta"));

            return new UsuarioDto
            {
                Email = usuario.Email,
                UserName = usuario.UserName,
                Token = "Este es un token de PRUEBA",
                Nombre = usuario.Nombre,
                Apellido = usuario.Apellido,

            };
        }

        [HttpPost("registrar")]
        public async Task<ActionResult<UsuarioDto>> Registrar(RegistrarDto registrarDto)
        {
            var usuario = new Usuario
            {
                Email = registrarDto.Email,
                UserName = registrarDto.UserName,
                Nombre = registrarDto.Nombre,
                Apellido = registrarDto.Apellido
            };

            var resultado = await _userManager.CreateAsync(usuario, registrarDto.Password);

            if (!resultado.Succeeded)
                return BadRequest(new CodeErrorResponse(400));

            return new UsuarioDto
            {
                Email = usuario.Email,
                UserName = usuario.UserName,
                Nombre = usuario.Nombre,
                Apellido = registrarDto.Apellido,
                Token = "Este es un token de PRUEBA"
            };

        }

    }
}
