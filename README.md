# 🏔️ Aconcagua - Node Boilerplate
Earn time with this powerful, scalable and easy to config boilerplate. 

## Install
```bash
npx create-aconcagua-app <projectname> 
```

## 💾 Specs
- Node v14.x
- MVCS pattern (Model > Route > Controller > Service)
- Classic NodeJS Dependences: Sequelize / Express / Cors / DotENV / HTTPERRORS
- esLint (airbnb config)
- Windows / Unix process platform rules
- Husky / Mocha
- Helpers: Success, Errors & Async Handler
- Github action to prevent "bypass errors"


## 💡 How to:
### Generate new model example:
sequelize model:generate --name User --attributes name:string,surename:string,date:date,mail:string
### Create a new db schema:
sequelize db:create
### Migrate models and asociations:
sequelize db:migrate
### Drop the db schema:
sequelize db:drop 

## 🚩 Recommendations:
Change the branches on the yaml file

![image](https://user-images.githubusercontent.com/79473217/173420432-9ce18dfc-7191-4268-8271-47a0277f3797.png)

![image](https://user-images.githubusercontent.com/79473217/173420157-05844a6e-ddf6-4b95-a7c4-034c79dbfe95.png)


