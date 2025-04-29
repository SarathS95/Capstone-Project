const {DataTypes, Model} = require('sequelize');
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false
    },
    postId: {
        type: DataTypes.INTEGER, allowNull: false
    },
    commentText: {
        type: DataTypes.STRING, allowNull: false
    }},

    {
        sequelize: sequelizeInstance, modelName: 'comment',
        timestamps: true, freezeTableName: true
    }

)
module.exports = Comment;