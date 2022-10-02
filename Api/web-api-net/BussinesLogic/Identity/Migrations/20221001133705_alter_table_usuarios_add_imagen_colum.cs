using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BussinesLogic.Identity.Migrations
{
    public partial class alter_table_usuarios_add_imagen_colum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreatedBy",
                table: "AspNetUsers",
                newName: "Imagen");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Imagen",
                table: "AspNetUsers",
                newName: "CreatedBy");
        }
    }
}
