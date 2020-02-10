var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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


module.exports = mongoose.model('User', UserSchema);