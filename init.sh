
sequelize model:generate --name Technology --attributes name:string,url_logo:string,type:string

sequelize model:generate --name User --attributes username:string,password:string,email:string

sequelize model:generate --name Network --attributes id_user:integer,social_network:string,url_link:string

sequelize model:generate --name Location --attributes city:string,codezip:string,country:string

sequelize model:generate --name File --attributes type:string,id_user:integer,url_storage:string

sequelize model:generate --name Skill --attributes id_user:integer,id_technology:integer,name:string,content:text,url_illustration:string

sequelize model:generate --name Experience --attributes type:string,startedAt:date,finishedAt:date,title:string,location:string,content:text,url_logo:string,url_link:string

sequelize model:generate --name Profil --attributes userId:uuid,firstName:string,lastName:string,id_location:integer,job:string,birth:date,description:text,url_illustration:string

https://github.com/PierreGambarotto/tuto_sequelize

https://www.robinwieruch.de/minimal-node-js-babel-setup/

https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb
https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-part-two-3d7a82b8e00


sequelize db:migrate
sequelize db:migrate:undo:all

sequelize db:seed:all
sequelize db:seed:undo:all