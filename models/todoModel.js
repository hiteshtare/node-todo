var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    name: String,
    isDone: Boolean,
    hasAttachment: Boolean,
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }
});

var todos = mongoose.model('Todos', todoSchema);

module.exports = todos;