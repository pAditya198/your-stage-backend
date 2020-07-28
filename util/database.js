const Sequelize = require("sequelize");
const credentials=require('./credentials');

const sequelize = new Sequelize(credentials.db,credentials.user,credentials.password,{
    dialect:"mysql",
    host: credentials.host,
    port:3306
});
module.exports = sequelize;