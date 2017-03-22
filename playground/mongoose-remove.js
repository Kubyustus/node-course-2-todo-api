const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove all from db
//Todo.remove({}).then((result) => {
//    console.log(result);
//});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '58d14018f302fb9698cccbaa'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('58d14018f302fb9698cccbaa').then((todo) => {
    console.log(todo);
});