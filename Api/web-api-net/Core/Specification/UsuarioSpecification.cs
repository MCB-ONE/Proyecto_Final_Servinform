﻿using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class UsuarioSpecification : BaseSpecification<Usuario>
    {
        public UsuarioSpecification(UsuarioSpecificationParams usuarioParams)
        : base(x => 
            (string.IsNullOrEmpty(usuarioParams.Search) || x.Nombre.Contains(usuarioParams.Search)) &&
            (string.IsNullOrEmpty(usuarioParams.Nombre) || x.Nombre.Contains(usuarioParams.Nombre)) &&
            (string.IsNullOrEmpty(usuarioParams.Apellido) || x.Nombre.Contains(usuarioParams.Apellido)) &&
            (string.IsNullOrEmpty(usuarioParams.Email) || x.Nombre.Contains(usuarioParams.Email))
        )
        {
            ApplyPaging(usuarioParams.PageSize * (usuarioParams.PageIndex - 1), usuarioParams.PageSize);

            if (!string.IsNullOrEmpty(usuarioParams.Sort))
            {
                switch (usuarioParams.Sort)
                {
                    case "nombreAsc":
                        AddOrderBy(usuarios => usuarios.Nombre);
                        break;
                    case "nombreDesc":
                        AddOrderByDescending(usuarios => usuarios.Nombre);
                        break;
                    case "emailAsc":
                        AddOrderBy(usuarios => usuarios.Email);
                        break;
                    case "emailDesc":
                        AddOrderByDescending(usuarios => usuarios.Email);
                        break;
                    default:
                        AddOrderBy(usuarios => usuarios.Nombre);
                        break;
                }
                  
            }

        }
    }
}
