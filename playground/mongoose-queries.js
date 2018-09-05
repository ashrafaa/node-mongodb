const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5b8eb93202f5235efabcb26611';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('To dos: ', todos);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log(`Id not found`);
    }
    console.log(`Todo : ${todo}`);
}).catch(e => console.log(e));