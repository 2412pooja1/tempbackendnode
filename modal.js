const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    fname:String,
    lname:String,
    roll_no:Number
})

module.exports=mongoose.model('pooja',studentSchema)