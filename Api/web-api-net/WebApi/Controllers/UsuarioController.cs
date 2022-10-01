using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using WebApi.DTOs.UserDtos;
using WebApi.Errors;

namespace WebApi.Controllers
{
    public class UsuarioController : BaseApiController
    {
        private readonly UserManager<Usuario> _userManager;
        private readonly SignInManager<Usuario> _signInManager;
        private readonly ITokenService _tokenServcie;
        private readonly IPasswordHasher<Usuario> _passwordHasher;

        public UsuarioController(UserManager<Usuario> userManager, SignInManager<Usuario> signInManager, ITokenService tokenServcie, IPasswordHasher<Usuario> passwordHasher)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenServcie = tokenServcie;
            _passwordHasher = passwordHasher;
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

            if (!resultado.Succeeded)
                return Unauthorized(new CodeErrorResponse(401, "Contraseña incorrecta"));

            return new UsuarioDto
            {
                Email = usuario.Email,
                UserName = usuario.UserName,
                Token = _tokenServcie.CreateToken(usuario), // Usar token service para generar el token
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
                Token = _tokenServcie.CreateToken(usuario), // Usar token service para generar el token
            };

        }

        [HttpPut("actualizar/{id}")]
        public async Task<ActionResult<UsuarioDto>> Actualizar(string id, RegistrarDto registrarDto)
        {
            var usuario = await _userManager.FindByIdAsync(id);

            if (usuario is null)
                return NotFound(new CodeErrorResponse(404, $"El usuario con id {id} no existe"));

            usuario.Nombre = registrarDto.Nombre;
            usuario.Apellido = registrarDto.Apellido;
            usuario.PasswordHash = _passwordHasher.HashPassword(usuario, registrarDto.Password);

            var resultado = await _userManager.UpdateAsync(usuario);

            if (!resultado.Succeeded)
                return BadRequest(new CodeErrorResponse(400, $"No se ha podido actualizar el usuario con id{id}"));


            return new UsuarioDto
            {
                Nombre = usuario.Nombre,
                Apellido = usuario.Apellido,
                Email = usuario.Email,
                UserName = usuario.UserName,
                Token = _tokenServcie.CreateToken(usuario),
                Imagen = usuario.Imagen
            };

        }

        [Authorize]
        [HttpGet]
        // Método para recuperar el ususrio actual a partir de un JWT
        // El token se pasa en los headers de la request, por eso el método no lo recive cómo parámetro
        public async Task<ActionResult<UsuarioDto>> GetUsuario()
        {
            // El usuario ha de mandar el token obligatoriamente y por eso podemos acceder a los claims.
            var email = HttpContext.User?.Claims?.FirstOrDefault(claim => claim.Type == ClaimTypes.Email)?.Value;

            var usuario = await _userManager.FindByEmailAsync(email);

            return new UsuarioDto
            {
                Nombre = usuario.Nombre,
                Apellido = usuario.Apellido,
                UserName = usuario.UserName,
                Email = usuario.Email,
                Token = _tokenServcie.CreateToken(usuario)
            };
        }

        // Método para evaluar la existencia de un email ya registrado en la BDD
        [HttpGet("emailValido")]
        public async Task<ActionResult<bool>> EmailValido([FromQuery] string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user is null)
                return false;

            return true;
        }

    }
}
