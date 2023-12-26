const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Library = new Schema({
    type: String,
    name: String,
    description: String,
    image: String,
    url: String,
    views: Number,
});

module.exports = mongoose.model('Library', Library, 'library');