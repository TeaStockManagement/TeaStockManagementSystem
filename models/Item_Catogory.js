var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var Item_CatogorySchema = new Schema({

     itemID:{
        type: Number,
        required: true,
        unque: true
     },
     itemname:String,
     sellunitprice:Number,
     buyunitprice:Number
    
    });
    

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'itemID');
module.exports = mongoose.model('Item_CatogorySchema', Item_Catogory);