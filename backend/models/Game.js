module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Game', {

        title: {
            type: DataTypes.STRING,
            unique: true
        }

    });

}