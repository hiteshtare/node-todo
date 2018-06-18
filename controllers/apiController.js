var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
var appDir = path.dirname(require.main.filename); //gets absolute path

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, 'uploads/') //name of the upload directory
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now(); //upload file name calculation
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
    app.post('/api/todos/upload', function (req, res) {
        upload(req, res, function (err) {
            console.log(req.file);
            if (err) {
                res.json({
                    success: false,
                    status: 0,
                    payload: err
                });
                return;
            }
            res.send({
                success: true,
                status: 0,
                payload: req.file
            });
        });
    });

    //Fetch the file using name
    app.get('/api/todos/upload/:name', (req, res) => {
        res.sendFile(`${appDir}/uploads/${req.params.name}`);
    });

    //Fetch all todos configured
    app.get('/api/todos/', function (req, resp) {

        //Find all records
        Todos.find({}, function (err, todos) {
            if (err)
                throw err;

            resp.send(todos);
        }).sort({ //sorting the fields
            updated_at: -1,
            created_at: -1
        });
    });

    //Fetch a todo with id(in-built) passed as param
    app.get('/api/todos/id/:id', function (req, resp) {

        //Find records by id(in-built)
        Todos.findById({
            _id: req.params.id
        }, function (err, todo) {
            if (err)
                throw err;

            resp.send(todo);
        });
    });

    //Create or Update a todo with id (in-built) passed from body
    app.post('/api/todos', function (req, resp) {

        //if body has  id(in-built)
        if (req.body._id) {

            //Find record by id(in-built) and update
            Todos.findByIdAndUpdate(req.body._id, {
                name: req.body.name,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment,
                updated_at: Date.now()
            }, function (err) {
                if (err) {
                    console.log(err);
                    resp.send('Something went wrong!');
                } else {
                    resp.send('Updated');
                }
            })
        } else {

            //Create new record
            var newTodo = Todos({
                username: 'web',
                name: req.body.name,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment,
                created_at: Date.now(),
                files: req.body.files // storing attachment details
            });

            newTodo.save(function (err) {
                if (err) {
                    console.log(err);
                    resp.send('Something went wrong!');
                } else {
                    resp.send('Added');
                }
            });
        }
    });

    //Remove a todo with id (in-built) passed as param
    app.delete('/api/todos/:id', function (req, resp) {

        //Find record by id(in-built) and remove
        Todos.findByIdAndRemove(req.params.id, function (err, todo) {
            if (err) throw err;

            resp.send('Deleted');
        });
    });

    //Remove a todo with id (in-built) passed as param
    app.delete('/api/todos/attachments/:id/:fileName', function (req, resp) {

        // Todos.collection.find({
        //     files: {
        //         $elemMatch: {
        //             'savedName': req.params.fileName
        //         }
        //     }
        // });

        // Todos.collection.update({
        //         _id: req.params.id
        //     }, {
        //         $pull: {
        //             'files': {
        //                 savedName: req.body.fileName
        //             }
        //         }
        //     },
        //     function (err, todo) {

        //         if (err) {
        //             return done(err);
        //         }

        //     });

        // Todos.findOne({
        //         'files': {
        //             $elemMatch: {
        //                 savedName: req.body.fileName
        //             }
        //         }
        //     },
        //     function (err, todo) {

        //         if (err) {
        //             return done(err);
        //         }

        //     });

        //Find records by id(in-built)
        // Todos.findById({
        //     _id: req.params.id
        // }, function (err, todo) {
        //     if (err)
        //         throw err;

        //     //Find record by id(in-built) and remove
        //     todo.files.findOne({
        //             'savedName': req.params.fileName
        //         },
        //         function (err, todo) {
        //             if (err) throw err;

        //             resp.send('Deleted');
        //         });
        // });

    });

    //Fetch all todos configured with username passed as param
    app.get('/api/todos/username/:uname', function (req, resp) {

        //Find all records using username
        Todos.find({
            username: req.params.uname
        }, function (err, todo) {
            if (err)
                throw err;

            resp.send(todo);
        });
    });
};