# NodeJS-Express Boilerplate


## Specs
- MVC pattern (Model > Route > Controller > Service)
- Classic NodeJS Dependences: Sequelize / Express / Cors / DotENV / HTTPERRORS
- esLint (airbnb config)
- Windows / Unix process platform rules
- Husky / Mocha
- EJS to show index/errors


## How to:
### Generate new model example:
sequelize model:generate --name Usuario --attributes name:string,surename:string,date:date,mail:string
### Create a new db schema:
sequelize db:create (crea una db con el nombre asignado en el .env)
### Migrate models and asociations:
sequelize db:migrate (migra las tablas creadas en sequelize a la db)
### Drop the db schema:
sequelize db:drop 

