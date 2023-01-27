const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('get All TODOS'));

router.get('/:id', (req, res) => res.send('Get Single TODO'));

router.post('/', (req, res) => res.send('Create TODO'));

router.put('/:id', (req, res) => res.send('Update TODO'));

router.delete('/:id', (req, res) => res.send('Delete TODO'));

module.exports = router;
