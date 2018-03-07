var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
var multer = require('multer');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
        }
    });

    var upload = multer({ //multer settings
        storage: storage
    }).single('file');


    // Add headers
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5001');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    /** API path that will upload the files */
    app.post('/api/upload', function (req, res) {
        upload(req, res, function (err) {
            console.log(req.file);
            if (err) {
                res.json({
                    error_code: 1,
                    err_desc: err
                });
                return;
            }
            res.json({
                error_code: 0,
                err_desc: null
            });
        });
    });

    //Fetch all todos configured in DB
    app.get('/api/todo/test', function (req, resp) {

        Todos.find({}, function (err, todos) {
            if (err)
                throw err;

            resp.send(todos);
        });
    });

    //Fetch all todos configured with username passed as param
    app.get('/api/todo/username/:uname', function (req, resp) {

        Todos.find({
            username: req.params.uname
        }, function (err, todo) {
            if (err)
                throw err;

            resp.send(todo);
        });
    });


    //Fetch a todo with id(in-built) passed as param
    app.get('/api/todo/id/:id', function (req, resp) {

        Todos.findById({
            _id: req.params.id
        }, function (err, todo) {
            if (err)
                throw err;

            resp.send(todo);
        });
    });

    //Create or Update a todo with id (in-built) passed from body
    app.post('/api/todo', function (req, resp) {

        if (req.body._id) {
            Todos.findByIdAndUpdate(req.body._id, {
                name: req.body.name,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment,
            }, function (err) {
                if (err) throw err;

                resp.send('Updated');
            })
        } else {

            var newTodo = Todos({
                username: 'web',
                name: req.body.name,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment,
            });

            newTodo.save(function (err) {
                if (err) throw err;

                resp.send('Added');
            });
        }
    });

    //Remove a todo with id (in-built) passed as param
    app.delete('/api/todo/:id', function (req, resp) {

        Todos.findByIdAndRemove(req.params.id, function (err, todo) {
            if (err) throw err;

            resp.send('Deleted');
        });
    });

};