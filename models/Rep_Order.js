var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rep_schema = Schema({
    
    orderID:{
        type:Number,
        required:true,
        unique:true
    },
    orderdate:Date,
    diliverdate:Date,
    userID:Number,
    totalbill:Number,
    shopI: Number,
    
})