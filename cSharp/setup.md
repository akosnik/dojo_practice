- dotnet new mvc --no-https -o PROJECTNAME

- Package install
- dotnet add package Pomelo.EntityFrameworkCore.MySql --version 3.1.1
- dotnet add package Microsoft.EntityFrameworkCore.Design --version 3.1.5

connection string in appsettings.json

MyContext file in models

AddDbContext to services in startup

using Microsoft.EntityFrameworkCore in HomeController

- setup HomeController function with \_context

make models

migrate

- dotnet ef migrations add FirstMigration

- dotnet ef database update

make form
