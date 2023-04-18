const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('User List');
});

router.get('/new', (req, res) => {
    res.send('User New Form');
});

router.post('/', (req, res) =>{
    res.send('Create user');
});

router.route('/:id').get((req, res) =>{
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`);
}).put((req, res) =>{
    res.send(`Update User With ID ${req.params.id}`);
}).delete((req, res) =>{
    res.send(`Delete User With ID ${req.params.id}`);
});

const users = [{name: 'Kyle'}, {name: 'Sally'}];
router.param('id', (req, res, next, id) => {
    console.log(id);
    req.user = users[id];
    next();
});

module.exports = router;