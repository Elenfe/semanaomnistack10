const express = require('express');

const app = express();

// Metodos http: 
//GET - Buscar uma informação
//POST - Criar
//PUT - Alterar
//DELETE - Deletar uma informação

//Tipos de parâmetros dentro do Express:

// Query Params: request.query (Filtros, ordenação, paginação, ...) Na maioria das vees usado apenas para o metodo GET
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
app.get('/', (request, response) => {
    return response.json({ message: 'Hello OmnisStack'});
});

app.listen(3333);
