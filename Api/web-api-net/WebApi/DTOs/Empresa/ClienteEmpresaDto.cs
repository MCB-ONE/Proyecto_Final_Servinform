﻿using WebApi.DTOs.Direccion;

namespace WebApi.DTOs.Empresa
{
    public class ClienteEmpresaDto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string NIF { get; set; }
        public string Logo { get; set; }
    }
}
