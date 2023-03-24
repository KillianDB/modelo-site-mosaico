const path = require('path');
const express = require('express');
const router = require('./router');

const app = express();

app.use(express.static(__dirname + '/public', { type: 'text/css' }));


app.set('view engine', 'ejs');

app.use(router);

app.listen(3000,()=>{
    console.log('Servidor rodando!')
})