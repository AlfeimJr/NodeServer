//criando servidor express//
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const indexRoutes = require('./src/routes/')


app.use('/', indexRoutes)

//Identificando o ejs//
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'views'));

//Json e formulario
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//identificando a porta
app.listen(port, ()=>{
    console.log(`O servidor esta rodando na porta http://localhost:${port}`)
});