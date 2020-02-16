var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var MetirialSchema = new Schema({

    metirialID: {
        type: Number,
        required: true,
        unque: true
    },
    Name: String
})


autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'metirialID');
module.exports = mongoose.model('MetirialSchema',Metirial );