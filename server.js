// Importar o módulo express
const express = require('express');

// Importar o controller
const filmeController = require('./controllers/filme.controller.js'); // Corrigido: letra minúscula

const app = express();

// Configura EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', './views');

// Rota para listar todos os filmes
app.get('/filmes', filmeController.listarFilme); // Corrigido: rota /filmes

// Configura a porta do servidor
app.listen(3000, function() {
    console.log("Servidor rodando com sucesso em http://localhost:3000");
});
