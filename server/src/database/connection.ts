// to install knex : npm install knex
// to install sqlite3 : npm install sqlite3

import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), // __dirname retorna o diretório do arquivo que está executando ele
    },
    useNullAsDefault: true,
});

export default connection;

// Migrations = Histórico do banco de dados (mais de um desenvolvedor trabalhando no projeto)

