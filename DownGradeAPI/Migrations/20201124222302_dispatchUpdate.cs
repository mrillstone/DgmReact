using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DownGradeAPI.Migrations
{
    public partial class dispatchUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Dispatches");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Dispatches",
                newName: "Id");

            migrationBuilder.CreateTable(
                name: "Contributors",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contributors", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contributors");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Dispatches",
                newName: "id");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Dispatches",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
