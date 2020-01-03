const { Schema, model } = require('mongoose');

new Schema({
  title : String,
  content: { String, required: true},
  author: String,

}, {
  timestamps: true
});
