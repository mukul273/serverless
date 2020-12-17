const express = require('express');
const bodyParser = require('body-parser');
const app  = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.get('/', (req, res)=> {
    res.send("Hello from Express");
})

app.post('/hello', (req, res)=> {
    let body = req.body;
    body.message = "Hi!!, "+ body.name;
    res.json(body);
});

app.listen(3000, () => {
    console.log("Express Server is listening");
});