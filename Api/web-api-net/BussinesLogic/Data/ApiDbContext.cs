using BussinesLogic.Data.Configuration;
using Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace BussinesLogic.Data
{
    public class ApiDbContext: DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {
        }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<DateTime>().HaveColumnType("date");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new EmpresaConfiguration());
            modelBuilder.ApplyConfiguration(new ClienteConfiguration());
            modelBuilder.ApplyConfiguration(new DireccionEmpresaConfiguration());
            modelBuilder.ApplyConfiguration(new DireccionClienteConfiguration());
            modelBuilder.ApplyConfiguration(new FacturaConfiguration());
            //modelBuilder.ApplyConfiguration(new LineaFacturaConfiguration());
        }

        public DbSet<Empresa> Empresa { get; set; }
        public DbSet<Cliente> Cliente { get; set; }
        public DbSet<DireccionEmpresa> DireccionEmpresa { get; set; }
        public DbSet<DireccionCliente> DireccionCliente { get; set; }

        public DbSet<Factura> Factura { get; set; }
        public DbSet<LineaFactura> LineaFactura { get; set; }

    }
}
