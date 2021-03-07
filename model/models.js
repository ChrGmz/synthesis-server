const mongoose = require('./index');

//POKEMON
const topicSchema = new mongoose.Schema(
  {
    title: String,
    score: Number,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model('topics', topicSchema);

module.exports = { Topic };
