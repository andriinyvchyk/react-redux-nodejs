const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    email:{type: String, required:true},
    password:{type: String, required:true},
    date:{type: Date, default: Date.now }
});

const Users = mongoose.model('users', UsersSchema)

module.exports = Users;