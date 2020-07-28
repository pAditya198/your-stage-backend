const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        is: ["^[a-z]+$", "i"],
      },
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    email: Sequelize.STRING,
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: 10,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        min: 4,
        notNull: true,
      },
    },
  }
);

module.exports = User;
