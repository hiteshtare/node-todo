var Todos = require('../models/todoModel');

module.exports = function (app) {

    app.get('/api/setupTodos', function (req, resp) {

        //seed database
        var starterTodos = [{
            username: 'Hitesh',
            todo: 'Oven repair',
            isDone: false,
            hasAttachment: false,
        }, {
            username: 'Hitesh',
            todo: 'Purchase Amono Shrimps',
            isDone: true,
            hasAttachment: false,
        }, {
            username: 'Trupti',
            todo: 'Rent Laptop',
            isDone: true,
            hasAttachment: true,
        }];

        Todos.create(starterTodos, function (err, results) {
            resp.send(results);
        });

    });

};