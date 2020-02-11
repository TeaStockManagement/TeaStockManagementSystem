var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var suppler_order_scheema = ({

    suppler_orderID:{
        type:Number,
        required:true,
        unque:true
    },
    orderdate: Date,
    diliverdate: Date,
    userID: Number,
    totalbill: Number,
    shopID: Number,

})

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'suppler_orderID');
module.exports = mongoose.model('suppler_order_scheema', UserSchema);