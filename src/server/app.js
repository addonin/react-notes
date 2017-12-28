const express = require('express');
const path = require('path');

const app = express();
const notes = require('./notes');

app.use(express.static(path.resolve(__dirname, '..', '../build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '../build', 'index.html'));
});

app.use('/notes', notes);

module.exports = app;