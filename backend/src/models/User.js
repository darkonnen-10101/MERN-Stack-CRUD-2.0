const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username : {String, trim: true, unique: true},


}, {
  timestamps: true
});

module.exports = model('User', userSchema);
