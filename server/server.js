const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    //console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});


//  GET /todos/12121
app.get('/todos/:id', (req, res) => {
    //res.send(req.params);
    var id = req.params.id;

    //valid id using invalid 
        //404 = send back empty send: res.status(404).send(e);
    if (!ObjectID.isValid(id)) {
        console.log('ID is not valid');
        return res.status(404).send();
    }

    //findById
        //success
            //if todo - end it back
            //if no todo - send back 404 with empty body
        //error
            //400 - and send empty body back
    Todo.findById(id).then((todo) => {
        if (!todo) {
            console.log('Todo not found');
            return res.status(404).send();
        }
        
        console.log('Todo By Id', todo);
        res.send({todo});
    }).catch((e) => {
        console.log('ID is not Found');
        return res.status(400).send();
    });

});

app.delete('/todos/:id', (req, res) => {
    //get the id
    var id = req.params.id;

    //validate the id -> not valid? return 404
    if (!ObjectID.isValid(id)) {
        console.log('ID is not valid');
        return res.status(404).send();
    }

    //remove todo by id 
        //success
            //if no doc, send 404
            //if doc, send doc back with 200
        //error
            //400 empty body 
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            console.log('Todo not found');
            return res.status(404).send();
        }
        
        console.log('Remove Todo By Id', todo);
        res.send({todo});
    }).catch((e) => {
        console.log('ID is not Found');
        return res.status(400).send();
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};

/*
var newTodo2 = new Todo({
    text: 'Feed The cat'
});

newTodo2.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo', e);
});
*/



/*
var newUser1 = new User({
    email: 'test1@test.com'
});

newUser1.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo', e);
});
*/