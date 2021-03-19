const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail}= require('validator');


const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
    },
    password: {
        type: String,
        require: [true, 'please enter a password'],
        minlength: [6,'Minimum passowrd is 6 characters']
    }
});

//fire function after user saved to db

userSchema.post('save', function(doc, next){
    console.log('new user was created and saved', doc);
    next();
})
//fire function befre user saved to db

userSchema.pre('save', function(next){
    console.log('new user about to created and saved', this);
    next();
})

const User = mongoose.model('user', userSchema)
module.exports = User;