const mongoose = require('mongoose');

const mongoDBOptions = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }

mongoose.connect(process.env.MONGO_URL, mongoDBOptions, () => {
    console.log('Connected to MongoDB');
});