const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        // defaultValue: 'John Doe',
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unquie: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unquie: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
