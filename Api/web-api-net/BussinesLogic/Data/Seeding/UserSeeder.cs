using Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinesLogic.Data.Seeding
{
    public class UserSeeder
    {
        static public void Seed(ModelBuilder modelBuilder)
        {
            DateTime creationDate = DateTime.Now;

            modelBuilder.Entity<Usuario>().HasData(
                new Usuario
                {
                    Id = 1,
                    Nombre = "Andrés",
                    Apellido = "Sainz",
                    Email = "andresain@gmail.com",
                    Password = "saiaie88721",
                    Rol = Roles.Usuario,
                    CreatedBy = "Seeder",
                    CreatedAt = creationDate,
                    IsDeleted = false,
                },
                new Usuario
                {
                    Id = 2,
                    Nombre = "Chritian",
                    Apellido = "Lopez",
                    Email = "lopez_ch@gmail.com",
                    Password = "lopse399al",
                    Rol = Roles.Usuario,
                    CreatedBy = "Seeder",
                    CreatedAt = creationDate,
                    IsDeleted = false,
                },
                new Usuario
                {
                    Id = 3,
                    Nombre = "Marc",
                    Apellido = "Ruiz",
                    Email = "marrruiz@gmail.com",
                    Password = "ruimaer438",
                    Rol = Roles.Usuario,
                    CreatedBy = "Seeder",
                    CreatedAt = creationDate,
                    IsDeleted = false,
                },
                new Usuario
                {
                    Id = 4,
                    Nombre = "Admin",
                    Apellido = "Test",
                    Email = "admin@gmail.com",
                    Password = "admin1234",
                    Rol = Roles.Administrador,
                    CreatedBy = "Seeder",
                    CreatedAt = creationDate,
                    IsDeleted = false,
                }
                );
        }
    }
}
