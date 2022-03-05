const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    address: String,
}, {
    timestamps: true
})

UserSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified()) {
        return next()
    }
    user.password = bcrypt.hashSync(user.password, 10, process.env.SECRET_KEY);
    next();
})

UserSchema.methods.verifyPassword = function(password) {
    const user = this;
    return bcrypt.compareSync(password, user.password);
}

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;