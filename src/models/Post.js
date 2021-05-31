const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    thumbnail: String,
    text: String,
    church: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Church'
    }
});

module.exports = mongoose.model('Post', PostSchema);