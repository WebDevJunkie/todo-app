const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../models/Todo');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const validId = mongoose.Types.ObjectId.isValid(req.params.id);
        
        if (!validId)
            return res.status(404).send('Todo not found');

        const todo = await Todo.findById(req.params.id);

        if (!todo)
            return res.status(404).send('Todo not found');

        res.json(todo);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const todo = new Todo({ title: req.body.title, description: req.body.description });
        await todo.save();
        res.send(todo);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.put('/:id', async (req, res) => {
    try {
        const validId = mongoose.Types.ObjectId.isValid(req.params.id);
        
        if (!validId)
            return res.status(404).send('Todo not found');

        const todo = await Todo.findById(req.params.id);

        if (!todo)
            return res.status(404).send('Todo not found');

        await Todo.findByIdAndUpdate(req.params.id, req.body);
        const returnTodo = await Todo.findById(req.params.id);
        res.json(returnTodo);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const validId = mongoose.Types.ObjectId.isValid(req.params.id);
        
        if (!validId)
            return res.status(404).send('Todo not found');

        const todo = await Todo.findById(req.params.id);

        if (!todo)
            return res.status(404).send('Todo not found');

        await todo.delete();
        res.json(todo);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
