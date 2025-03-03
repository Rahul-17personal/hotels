const mongoose = require('mongoose');
require('dotenv').config();

//const mongourl = 'mongodb://localhost:27017/hotels'
const mongourl = process.env.MONGODB_URL;

mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected');
});

db.on('error', () => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;