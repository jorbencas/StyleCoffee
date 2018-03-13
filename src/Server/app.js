require('dotenv/config')
const open = require('open');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('./dist'));
app.use(express.static('./'));

app.listen(port, () => {
    console.log(`Servidor corriendo por http://localhost/:${port}`);
    open(`http://localhost:${port}`);
})


