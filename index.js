const express = require('express')
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://CarteBleach:r3tardkyle17098@react-blog.pt384.mongodb.net/test?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('DB connected'))
        .catch(err => console.error(err))



app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(5000)