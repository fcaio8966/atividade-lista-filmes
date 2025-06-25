const filmeModel = require('../models/filme.model');

function listarFilme(request, response) {
    // Chamar a função de listar filmes do model
    const filmes = filmeModel.listarFilmes(); // Corrigido: listarFilmes()

    // Renderizar a view 'listar-filmes' e passar os dados
    response.render('listar-filmes', { filmes });
}

module.exports = {
    listarFilme
};
