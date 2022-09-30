using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinesLogic.Data.Configuration
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.Property(p => p.Nombre)
                .IsRequired()
                .HasMaxLength(250);
            builder.Property(p => p.Apellido)
                .IsRequired()
                .HasMaxLength(250);
            builder.Property(p => p.Email)
                .IsRequired()
                .HasMaxLength(250);
            builder.Property(p => p.Rol)
                .HasDefaultValue(Roles.Usuario)
                .HasConversion<string>();
            builder.HasIndex(u => u.Email)
                .IsUnique();


        }
    }
}
