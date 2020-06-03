import path from 'path';
// não poderá ser usada a sintaxe export default pois o knex ainda não suporta essa sintaxe 

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'), // __dirname retorna o diretório do arquivo que está executando ele
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true,
};

// comando para criar as tabelas:
// npx knex migrate:latest --knexfile knexfile.ts migrate:latest