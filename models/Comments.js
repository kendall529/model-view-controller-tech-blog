const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comments extends Model {}

Comments.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
                unique: false,
            }
        },

        date: {
            type: DataTypes.DATEONLY,

        }
    },

    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true, 
        underscored: true,
        modelName: "comments"
    }
)