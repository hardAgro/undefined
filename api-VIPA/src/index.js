const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');



const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./Controllers/AuthController')(app);

app.get('/', function (req, res) {
    res.send('chegou');
  });

app.listen(4000);
