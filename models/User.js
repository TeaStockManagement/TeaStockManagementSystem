var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({

    userID: {
        type: Number,
        unique: true,
        required: tru
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    email:{
       type:String,
       unique:true,
       required:true
    },
    password: {
        type: String,
        required: true
    },
    mobile_number:{
        type:Number,
        unique:true
    },
    nic:{
        type:Number,
        unique:true
    },
    dob:Date,
    address:String,
    position:String,
    profile_pic:String,
    created: { type: Date },
    updated: { type: Date, default: Date.now },
    

});

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);