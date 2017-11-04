const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false } ));

app.post('/createUser', (req, res) => {
  store
    .createUser({
		fullName: req.body.fullName,
		email: req.body.email,
		password: req.body.password
    })
    .then((id) => {
    	res.send(id[0]);
    })
    .catch((err) => {
    	throw new Error(err.message);
    });
});

app.get('/users', (req, res) => {
    store
        .getAllUsers()
        .then((users) => {
            res.send(users);
        })
        .catch((err) => {
            throw new Error(err.message);
        });
});

app.get('/users/:id', (req, res) => {
    store
        .getOneUser(req.params.id)
        .then((user) => {
            res.send(user);
        })
        .catch((err) => {
            throw new Error(err.message);
        });
});

app.put('/users', (req, res) => {
    store
        .updateUser(req.body.id, req.body)
        .then((user) => {
            res.status(200).end();
        })
        .catch((err) => {
            throw new Error(err.message);
        });
});

app.delete('/users/:id', (req, res) => {
    store
        .deleteUser(req.params.id)
        .then((user) => {
            res.status(200).end();
        })
        .catch((err) => {
            throw new Error(err.message);
        });
});


app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
});