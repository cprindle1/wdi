var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
        description: String,
        complete: Boolean
});

var Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;
