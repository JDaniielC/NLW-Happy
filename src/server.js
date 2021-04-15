//Quando começar o server vai na raiz do projeto e dá npm init -y
//Depois pode instalar o express, npm install express

const express = require('express');
const path = require('path');
const pages = require('./pages.js')

const server = express();

server
    //utilizando os arquivos estáticos (conseguir pegar a rota do public)
    .use(express.static('public'))
    //configurar templeage engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //criar uma rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

//ligar o servidor
server.listen(3000)