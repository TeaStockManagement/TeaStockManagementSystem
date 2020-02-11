var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var suppler_payment_schema = new Schema ({
    suppler_orderID:{
        type:Number,
        require:true,
        unique:true
    },
    cash:Number,
    credit:Number,
    check:Number
});

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'suppler_orderID');
module.exports = mongoose.model('suppler_order_scheema', SupplerOrder);
