const mongoose = require('./index');

const schema = new mongoose.Schema(
  {
    title: String,
    score: Number,
  },
  {
    timestamps: true,
  }
);

const X = mongoose.model('X', schema);

module.exports = { X };
