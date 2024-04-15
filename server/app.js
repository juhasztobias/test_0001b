// Path: server/app.js
const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE'],
}));
app.use(express.json()) // for parsing application/json

const train = [];
app.get('/api', (req, res) => {
    res.send(train);
})

/**
 * POST: 
 */
app.post('/api/putFirst', (req, res) => {
    train.unshift(req.body.item);
    res.send(train);
})
app.post('/api/putLast', (req, res) => {
    train.push(req.body.item);
    res.send(train);
})

/**
 * DELETES:
 */
app.delete('/api/removeFirst', (req, res) => {
    train.shift();
    res.send(train);
})
app.delete('/api/removeLast', (req, res) => {
    train.pop();
    res.send(train);
})

const port = process.env.APP_PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

