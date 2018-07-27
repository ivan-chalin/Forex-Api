const mongoose = require('mongoose')


let pairSchema = new mongoose.Schema({
   name:{type:String, required:true}, 
   price:{type:Number, required:true}, 
})

let pair = mongoose.model('pair', pairSchema)

module.exports = pair