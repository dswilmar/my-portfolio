const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const api = require('./backend/routes');

app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
    
    //Express entregando os assets de producao
    app.use(express.static('frontend/build'));

    //Express entregando o index.html
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT;
app.listen(PORT);