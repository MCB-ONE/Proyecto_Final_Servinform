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
    public class DireccionClienteConfiguration : IEntityTypeConfiguration<DireccionCliente>
    {
        public void Configure(EntityTypeBuilder<DireccionCliente> builder)
        {
            builder.Property(p => p.Calle)
                .HasMaxLength(50)
                .IsRequired();
            builder.Property(p => p.Numero)
                .IsRequired();
            builder.Property(p => p.CodigoPostal)
                .HasMaxLength(5);
            builder.Property(p => p.Ciudad)
                .HasMaxLength(50)
                .IsRequired();
            builder.Property(p => p.Provincia)
                .HasMaxLength(50)
                .IsRequired();
            builder.Property(p => p.Pais)
                .HasMaxLength(50)
                .IsRequired();
            builder.HasMany(c => c.Facturas)
                .WithOne(a => a.DireccionCliente)
                .HasForeignKey(a => a.DireccionClienteId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
