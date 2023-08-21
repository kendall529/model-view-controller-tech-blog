const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Posts extends Model {}

Posts.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        date: {
            type: DataTypes.DATEONLY,
        },

        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id',
                unique: false
            }
        },

        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'comments',
                key: 'id',
                unique: true
            }
        },


    },
    {
        hooks: {
            afterCreate: async (newCreator) => {
                Comments.create({user_id: newCreator.created_by})
            }
        },

        sequelize, 
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: "posts",
    }
);

module.exports = Posts;