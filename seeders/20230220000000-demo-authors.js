'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.bulkInsert('Authors', [{
                name: 'John Smith',
                email: 'johnsmith@example.com',
                createdAt: new Date(),

                updatedAt: new Date()
            }], { updateOnDuplicate: ['name', 'updatedAt'] }),

            queryInterface.bulkInsert('Authors', [{
                name: 'Jane Doe',
                email: 'janedoe@example.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }], { updateOnDuplicate: ['name', 'updatedAt'] }),

            queryInterface.bulkInsert('Authors', [{
                name: 'Bob Johnson',
                email: 'bobjohnson@example.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }], { updateOnDuplicate: ['name', 'updatedAt'] }),

            queryInterface.bulkUpdate('Articles', { author_id: 1 }, {}),
            queryInterface.bulkUpdate('Articles', { author_id: 2 }, {}),
            queryInterface.bulkUpdate('Articles', { author_id: 3 }, {}),
        ]);
    },

    down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Authors', null, {});
    }
};