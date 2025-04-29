const {DataTypes, Model} = require('sequelize');
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER, allowNull: false
    },
    postText: {
        type: DataTypes.STRING, allowNull: false
    },
    postImage: {
        type: DataTypes.STRING, allowNull: true
    }},
{
    sequelize: sequelizeInstance, modelName: 'post',
    timestamps: true, freezeTableName: true
}
)
module.exports = Post;