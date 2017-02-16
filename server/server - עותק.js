var {mongoose} = require('./db/mongoose');



//var newTodo = new Todo({
//    text: 'Cook dinner'
//});

//var newTodo2 = new Todo({
//    text: 'Do homework',
//    completed: true,
//    completedAt: 123
//})

//newTodo2.save().then((doc) => {
//    console.log(JSON.stringify(doc, undefined, 2));
//}, (e) => {
//    console.log('Unable to save todo', e);
//});



var newUser1 = new User({
    email: 'test1@test.com'
});

newUser1.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save User', e);
});