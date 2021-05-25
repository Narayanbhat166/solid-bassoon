const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(4567, () => console.log('Listening on port 4567'))
