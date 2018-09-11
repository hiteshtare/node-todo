var Todos = require('../models/todoModel');

module.exports = function (app) {

    app.get('/setupTodos', function (req, resp) {

        //seed database
        var starterTodos = [{
            username: 'Hitesh',
            name: 'Oven repair',
            isDone: false,
            hasAttachment: false,
        }, {
            username: 'Hitesh',
            name: 'Purchase Amono Shrimps',
            isDone: true,
            hasAttachment: false,
        }, {
            username: 'Trupti',
            name: 'Rent Laptop',
            isDone: true,
            hasAttachment: true,
        }];

        Todos.create(starterTodos, function (err, results) {
            resp.send(results);
        });

    });

};