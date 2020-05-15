Running Project : node ./bin/www

create table sequelize : sequelize-cli model:generate --name User --attributes name:string,label:string,picture:string,email:string,phone:string,website:string,summary:string

migration Database : sequelize-cli db:migrate



create seed : sequelize-cli seed:generate --name proyek-seed
running seed : sequelize-cli db:seed:all