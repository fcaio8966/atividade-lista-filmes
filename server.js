// Importar o módulo express
const express = require('express');

// Importar o controller
const ReceitaController = require('./controllers/receita.controller');

const app = express();

// Configurar EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', './views');

// Rota para listar todas as receitas
app.get('/receitas', ReceitaController.listarReceitas);

// Iniciar o servidor
app.listen(3000, function() {
    console.log("Servidor rodando com sucesso")
})