const express = require('express');
const app = express();
const path = require('path');
var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/binary', (req, res) => {
    res.sendFile(path.join(__dirname + '/binary.html'));
});

app.use(express.static('public'));

app.listen(port);