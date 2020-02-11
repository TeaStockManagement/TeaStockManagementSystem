var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var suppler_item_schema = new Schema({
    suppler_orderID: {
        type: Number,
        require: true,
        unique: true
    },
    qty: Number,
    itemID: Number,
    package_item: Number
});

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'suppler_orderID');
module.exports = mongoose.model('suppler_item_schema', Suppler_Item);
