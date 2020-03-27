const express = require('express');
const routes = require('./routes')
const cors = require('cors')
const { errors } = require('celebrate')

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

module.exports = app


/**
 * Rota / recurso
 */

 /**
  * Metodos HTTP
  * GET - Buscar/Listar informação no backend
  * POST - Criar uma informação no backend
  * PUT - Alterar uma informação no backend
  * DELETE - Deletar uma informação no backend
  * 
  */

  /**
   * Tipos de parametros
   * 
   * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, Paginação)
   * Route Params: Parametros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL - MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server,
    * NoSQL - MOngoDB, CouchDB, Firebase etc
    */

    /**
     * Driver: SELECT * FROM USERS
     * Query Builder: table(users).select('*').where()
     */