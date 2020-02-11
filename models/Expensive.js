var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var ExpensiveSchema = new Schema({
 
    expensiveID:{
        type:Number,
        required:true
    },
    Expensive_type:String,
    amount:Number,
    Date:Date,
    UserID:Number
    
});


autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, 'expensiveID');
module.exports = mongoose.model('User', UserSchema);