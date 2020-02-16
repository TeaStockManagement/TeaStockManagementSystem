var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var Rep_payment_schema = new Schema({
    orderID: {
        type: Number,
        require: true,
        unique: true
    },
    cash: Number,
    credit: Number,
    check: Number
});

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'orderID');
module.exports = mongoose.model('Rep_payment_schema', Rep_Payment);
