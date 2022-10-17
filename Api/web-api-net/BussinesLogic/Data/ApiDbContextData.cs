using Core.Entities;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace BussinesLogic.Data
{
    public class ApiDbContextData
    {
        public static async Task CargarDataAsync(ApiDbContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.Empresa.Any())
                {
                    var empresaData = File.ReadAllText("../BussinesLogic/Data/FakeData/empresa.json");
                    var empresas = JsonSerializer.Deserialize<List<Empresa>>(empresaData);
                    foreach (var empresa in empresas)
                    {
                        context.Empresa.Add(empresa);
                    }

                    await context.SaveChangesAsync();
                }
                if (!context.Cliente.Any())
                {
                    var clienteData = File.ReadAllText("../BussinesLogic/Data/FakeData/cliente.json");
                    var clientes = JsonSerializer.Deserialize<List<Cliente>>(clienteData);
                    foreach (var cliente in clientes)
                    {
                        context.Cliente.Add(cliente);
                    }

                    await context.SaveChangesAsync();
                }

                if (!context.Direccion.Any())
                {
                    var direccioData = File.ReadAllText("../BussinesLogic/Data/FakeData/direccion.json");
                    var direcciones = JsonSerializer.Deserialize<List<Direccion>>(direccioData);
                    foreach (var direccion in direcciones)
                    {
                        context.Direccion.Add(direccion);
                    }

                    await context.SaveChangesAsync();
                }



            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<ApiDbContextData>();
                logger.LogError(ex.Message);


            }
        }
    }
}
