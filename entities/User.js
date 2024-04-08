const sequelize = require('../utils/connection')
const {DataTypes} = require('sequelize')
module.exports = sequelize.define('user',{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
        
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    lastName: {
        type: DataTypes.STRING,
        allowNull:false
        // allowNull defaults to true
    },
    email:{
       type:DataTypes.STRING,
       allowNull:false    
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
