const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    complet: {
        type: String,
        required: true,
        default: false
    }
});

const Todo = mongoose.model('todo', TodoSchema);

export default Todo;
