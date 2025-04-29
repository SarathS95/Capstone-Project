const {DataTypes, Model} = require('sequelize');
const dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init({
    id:{
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    username:{
        type: DataTypes.STRING, allowNull: false
    },
    email:{
        type: DataTypes.STRING, allowNull: false, unique: true

    },
    password:{
        type: DataTypes.STRING, allowNull: false
    },
    profilePicture:{
        type: DataTypes.STRING, allowNull: true
    }},
{
    sequelize: sequelizeInstance, modelName: 'user',
    timestamps: true, freezeTableName: true
}
)
module.exports = User;