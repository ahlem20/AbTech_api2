const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    roles: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('user', userSchema);
