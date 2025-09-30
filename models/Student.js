const mongoose=require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

module.exports=mongoose.model('Student',studentSchema);
