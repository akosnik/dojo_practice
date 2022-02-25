using Microsoft.EntityFrameworkCore.Migrations;

namespace WeddingPlanner.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Weddings_Users_Wedder1UserId",
                table: "Weddings");

            migrationBuilder.DropForeignKey(
                name: "FK_Weddings_Users_Wedder2UserId",
                table: "Weddings");

            migrationBuilder.DropIndex(
                name: "IX_Weddings_Wedder1UserId",
                table: "Weddings");

            migrationBuilder.DropIndex(
                name: "IX_Weddings_Wedder2UserId",
                table: "Weddings");

            migrationBuilder.DropColumn(
                name: "Wedder1UserId",
                table: "Weddings");

            migrationBuilder.DropColumn(
                name: "Wedder2UserId",
                table: "Weddings");

            migrationBuilder.AddColumn<string>(
                name: "Wedder1",
                table: "Weddings",
                nullable: false);

            migrationBuilder.AddColumn<string>(
                name: "Wedder2",
                table: "Weddings",
                nullable: false);

            migrationBuilder.CreateIndex(
                name: "IX_Weddings_CreatorId",
                table: "Weddings",
                column: "CreatorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Weddings_Users_CreatorId",
                table: "Weddings",
                column: "CreatorId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Weddings_Users_CreatorId",
                table: "Weddings");

            migrationBuilder.DropIndex(
                name: "IX_Weddings_CreatorId",
                table: "Weddings");

            migrationBuilder.DropColumn(
                name: "Wedder1",
                table: "Weddings");

            migrationBuilder.DropColumn(
                name: "Wedder2",
                table: "Weddings");

            migrationBuilder.AddColumn<int>(
                name: "Wedder1UserId",
                table: "Weddings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Wedder2UserId",
                table: "Weddings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Weddings_Wedder1UserId",
                table: "Weddings",
                column: "Wedder1UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Weddings_Wedder2UserId",
                table: "Weddings",
                column: "Wedder2UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Weddings_Users_Wedder1UserId",
                table: "Weddings",
                column: "Wedder1UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Weddings_Users_Wedder2UserId",
                table: "Weddings",
                column: "Wedder2UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
