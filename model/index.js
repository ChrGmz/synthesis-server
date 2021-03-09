const mongoose = require('mongoose');
const DB_NAME = null;
const uri = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 1000,
});

module.exports = mongoose;
