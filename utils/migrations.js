const User = require('../entities/User')
const Product = require('../entities/Product')
Product.belongsTo(User,{
    foreignKey:"addedBy",
    targetKey:'id'
})
User.hasMany(Product,{
    foreignKey:'addedBy'
})
module.exports = {User,Product}