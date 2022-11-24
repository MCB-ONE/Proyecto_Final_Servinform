using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BussinesLogic.Data.Configuration
{
    public class ClienteConfiguration : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> builder)
        {
            builder.Property(p  => p.Nombre)
                .IsRequired()
                .HasMaxLength(256);

            builder.Property(p => p.NIF)
                .IsRequired()
                .HasMaxLength(9)
                .IsFixedLength();

            builder.HasMany(c => c.Direcciones)
                .WithOne(a => a.Cliente)
                .HasForeignKey(a => a.ClienteId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(c => c.Facturas)
                .WithOne(a => a.Cliente)
                .HasForeignKey(a => a.ClienteId)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
