const mongoose = require('mongoose');
const url = `mongodb://localhost:27017/todoApp`;

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });

var Todo = mongoose.model('ToDo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var User = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newTodo = new Todo({
    text: 'Eat lunch',
    completed: false,
    completedAt: new Date().getTime()
});

newTodo.save().then(res => {
    console.log(`Document added: ${JSON.stringify(res)}`);
}, err => {
    console.log(`Error when saving: ${err}`);
});

var newUser = new User({
    email: 'abc@abc.com'
});

newUser.save().then(res => {
    console.log(`User added: ${JSON.stringify(res, undefined, 2)}`);
}, err => {
    console.log(`Error ${err}`);
});