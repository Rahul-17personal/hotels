const mongoose = require('mongoose');

const mongourl = 'mongodb://localhost:27017/hotels'

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