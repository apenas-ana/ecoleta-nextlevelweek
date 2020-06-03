import Knex from 'knex'; // tipos do knex (geralmente bibliotecas de tipo começam com letra maiúscula.)

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex) {
    // VOLTAR ATRÁS (DELETAR A TABELA)
    return knex.schema.dropTable('items');
}