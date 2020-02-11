var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var ShopSchema = new Schema({
    shopID: {
        type: Number,
        require: true,
        unique: true
    },
    name: Number,
    address: Number,
    mobile: Number
});

autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'shopID');
module.exports = mongoose.model('ShopSchema', Shop);
