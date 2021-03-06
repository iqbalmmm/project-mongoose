var express = require('express');
var router = express.Router();

const {addUser, getUserById, getUser, updateUser, deleteUser} = require('./controller')


/* GET users listing. */
router.get('/', getUser);
router.get('/:id', getUserById);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
