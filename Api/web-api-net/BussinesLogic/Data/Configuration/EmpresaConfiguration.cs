using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BussinesLogic.Data.Configuration
{
    public class EmpresaConfiguration : IEntityTypeConfiguration<Empresa>
    {
        public void Configure(EntityTypeBuilder<Empresa> builder)
        {
            builder.Property(p => p.EmailUsuario)
                .IsRequired();

            builder.Property(p  => p.Nombre)
                .IsRequired()
                .HasMaxLength(256);

            builder.Property(p => p.NIF)
                .IsRequired()
                .HasMaxLength(9)
                .IsFixedLength();

            builder.HasMany(c => c.Direcciones)
                .WithOne(a => a.Empresa)
                .HasForeignKey(a => a.EmpresaId);


        }
    }
}
