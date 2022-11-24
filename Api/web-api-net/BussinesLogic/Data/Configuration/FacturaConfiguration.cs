using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BussinesLogic.Data.Configuration
{
    public class FacturaConfiguration : IEntityTypeConfiguration<Factura>
    {
        public void Configure(EntityTypeBuilder<Factura> builder)
        {
            builder.Property(f => f.Numero).IsRequired();
            builder.Property(f => f.FechaExpedicion)
                .IsRequired();
            builder.Property(f => f.Subtotal)
                .HasColumnType("decimal(18,4)")
                .IsRequired();
            builder.Property(f => f.Iva).IsRequired();
            builder.Property(f => f.Total)
                .HasColumnType("decimal(18,4)")
                .IsRequired();

            builder.HasMany(c => c.LineasFactura)
                .WithOne(a => a.Factura)
                .HasForeignKey(a => a.FacturaId)
                .OnDelete(DeleteBehavior.Cascade);

        }
    }
}
