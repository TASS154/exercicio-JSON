
const fs = require('ts');
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const carrosPath = path.join(__dirname, 'carros.json');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Lendo os dados do arquivo JSON
let carrosData = fs.readFileSync(carrosPath, 'utf-8'); 
let carros = JSON.parse(carrosData);

fs.writeFileSync(carrosPath, JSON.stringify(carros, null, 2));
// Rota para exibir o formulário HTML
app.get('/adicionar-carro', (req, res) => {
});
res.sendFile(path.join(__dirname, 'adicionarcarro.html'));