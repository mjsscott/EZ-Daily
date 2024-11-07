const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const DB_URI = 'mongodb://localhost:27017/EZDaily';
    await mongoose.connect(DB_URI);
    console.log('Connected to MongoDB!')
  } catch (err) {
    console.error('Error connectiong to MongoDB: ', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;