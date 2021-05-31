const mongoose = require('mongoose');

const ChurchSchema = new mongoose.Schema({
    email: String,
    church: String,
    posts:[],
    chapels:[],
    faithful:[]
});

module.exports = mongoose.model('Church', ChurchSchema);