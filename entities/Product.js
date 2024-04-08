const sequelize = require('../utils/connection')
const {DataTypes} = require('sequelize')
module.exports =  sequelize.define('product',{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
})

