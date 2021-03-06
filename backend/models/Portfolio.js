const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('slug');

const portfolioSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true        
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function() {return slug(this.title)}
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('portfolio', portfolioSchema);