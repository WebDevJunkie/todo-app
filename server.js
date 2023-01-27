const express = require('express');

const app = express();

app.get('/test', (req, res) => res.json({ msg: 'Test Passed' }) );

app.listen(4000, () => {
    console.log('App listening on port 5000');
});
