'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('authors', [
            {
                name: 'John Doe',
                email: 'johndoe@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Jane Smith',
                email: 'janesmith@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('authors', null, {});
    },
};