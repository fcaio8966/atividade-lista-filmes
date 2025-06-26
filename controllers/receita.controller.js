const receitaModel = require('../models/Receita.model');

function listarReceitas(request, response) {
    // Chamar a função de listar receitas do model
    const receitas = receitaModel.listarReceitas(); // Correto: listarReceitas()

    // Renderizar a view 'listar-receitas' e passar os dados
    response.render('listar-receitas', { receitas }); // Enviar o array chamado "receitas"
}

module.exports = {
    listarReceitas
};
