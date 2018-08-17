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
        res.setHeader('Access-Control-Allow-Origin', '*');

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
                payload: req.file //Success object with Db fields
            });
        });
    });

    //Fetch the file using name
    app.get('/api/todos/upload/:name', (req, res) => {
        res.sendFile(`${appDir}/uploads/${req.params.name}`);
    });

    //Fetch all todos configured
    app.get('/api/todos/', function (req, resp) {
        //Fetch records using Aggregate function
        Todos.aggregate([{

                $addFields: { //To add new field on the fly
                    Done: { //New field name
                        $cond: { //Condition
                            if: {
                                $eq: ["$isDone", true] //Equality operator
                            },
                            then: "Yes",
                            else: "No"
                        }
                    },
                    Attachment: { //New field name
                        $cond: {
                            if: {
                                $eq: ["$hasAttachment", true]
                            },
                            then: "Yes",
                            else: "No"
                        }
                    },
                    Attach_Count: { //New field name
                        $size: ["$files"] //Array Size calc operator
                    }
                }
            }]).allowDiskUse(true)
            .exec(function (err, todos) {
                if (err)
                    throw err;

                resp.send(todos);
            })

        // //Find all records
        // Todos.find({}, function (err, todos) {
        //     if (err)
        //         throw err;

        //     resp.send(todos);
        // }).sort({ //sorting the fields
        //     updated_at: -1,
        //     created_at: -1
        // });
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

        //if body has id(in-built) perform Update operation
        if (req.body._id) {

            //Find record by id(in-built) and update
            Todos.findByIdAndUpdate(req.body._id, {
                name: req.body.name,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment,
                updated_at: Date.now()
            }, function (err) {
                if (err)
                    throw err;

                resp.send('Updated');
            })
        } else { //Perform Insert operation

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
                if (err)
                    throw err;

                resp.send('Added');
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

    //Remove an attachment with id (in-built) and fileName passed as param
    app.delete('/api/todos/attachments/:id/:fileName', function (req, resp) {

        //Update records by id(in-built) 
        Todos.update({
                _id: req.params.id // id(in-built) first filter
            }, {
                $pull: { //Remove operator
                    files: { //Array from which records that meet the following condtion will be poopped
                        savedName: req.params.fileName
                    }
                }
            },
            function (err, todo) {
                if (err)
                    throw err;

                resp.send('Deleted');
            });
    });

    //Fetch all todos configured with username passed as param
    app.get('/api/todos/username/:uname', function (req, resp) {
        //Find all records with username
        Todos.find({
            username: req.params.uname
        }, function (err, todo) {
            if (err)
                throw err;

            resp.send(todo);
        });
    });
};