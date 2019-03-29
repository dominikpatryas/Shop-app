using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop.API.Migrations
{
    public partial class isRent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isRent",
                table: "Cars",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isRent",
                table: "Cars");
        }
    }
}
