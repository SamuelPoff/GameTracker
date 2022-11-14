const config = require('../config/config');

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const userModel = require("./User");
const gameModel = require("./Game");

const db = {};

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db.options);

//Auto setup models with Sequelize

console.log("Automaticaclly setting up Sequelize Models");

db.User = userModel(sequelize, Sequelize.DataTypes);
db.Game = gameModel(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;