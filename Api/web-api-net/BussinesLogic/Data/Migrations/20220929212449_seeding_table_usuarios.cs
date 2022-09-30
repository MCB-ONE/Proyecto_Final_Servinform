using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BussinesLogic.Data.Migrations
{
    public partial class seeding_table_usuarios : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Usuarios",
                columns: new[] { "Id", "Apellido", "CreatedAt", "CreatedBy", "DeletedAt", "DeletedBy", "Email", "IsDeleted", "Nombre", "Password", "Rol", "UpdatedAt", "UpdatedBy" },
                values: new object[,]
                {
                    { 1, "Sainz", new DateTime(2022, 9, 29, 23, 24, 49, 337, DateTimeKind.Local).AddTicks(2271), "Seeder", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "andresain@gmail.com", false, "Andrés", "saiaie88721", 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null },
                    { 2, "Lopez", new DateTime(2022, 9, 29, 23, 24, 49, 337, DateTimeKind.Local).AddTicks(2271), "Seeder", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "lopez_ch@gmail.com", false, "Chritian", "lopse399al", 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null },
                    { 3, "Ruiz", new DateTime(2022, 9, 29, 23, 24, 49, 337, DateTimeKind.Local).AddTicks(2271), "Seeder", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "marrruiz@gmail.com", false, "Marc", "ruimaer438", 1, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null },
                    { 4, "Test", new DateTime(2022, 9, 29, 23, 24, 49, 337, DateTimeKind.Local).AddTicks(2271), "Seeder", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "admin@gmail.com", false, "Admin", "admin1234", 0, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Usuarios",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Usuarios",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Usuarios",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Usuarios",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
