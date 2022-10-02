using Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace BussinesLogic.Data
{
    /* IdentityDbContext de Microsoft.AspNetCore.Identity.EntityFrameworkCore ya provee todas las entidades necesarias para generar y gestionar un sistema de seguridad basado en roles
     */
    public class SecurityDbContext : IdentityDbContext<Usuario>
    {
        public SecurityDbContext(DbContextOptions<SecurityDbContext> options) : base(options)
        {
        }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<DateTime>().HaveColumnType("date");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
