var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

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
    shopID: Number,
    
});

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'orderID');
module.exports = mongoose.model('Rep_Order', UserSchema);