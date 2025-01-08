const express = require('express');
const app = express();

//Routes, //Method Http, Name, Function (Callback)
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000);