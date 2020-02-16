var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var PackageSchema = new Schema({

    packageID: {
        type: Number,
        required: true,
        unque: true
    },
    supplerorderID: Number,
    qty:Number,
    packagename:String,
    unitprice:Number,
    color:Number,
    metirialID:Number
})


autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'packageID');
module.exports = mongoose.model('PackageSchema', Package);