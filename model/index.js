const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/codemocracy';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 1000,
});

module.exports = mongoose;
