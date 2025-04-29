const {DataTypes, Model} = require('sequelize');
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model {}

Like.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER, allowNull: false
    }},

    {
        sequelize: sequelizeInstance, modelName: 'like',
        timestamps: true, freezeTableName: true
    }
);
module.exports = Like;