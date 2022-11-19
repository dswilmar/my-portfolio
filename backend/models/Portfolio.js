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
    longDescription: {
        type: String
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        default: function() {return slug(this.title)}
    },
    image: {
        type: String,
        required: true
    },
    technologies: [
        {
            label: String,
            icon: String,
            iconType: String
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('portfolio', portfolioSchema);