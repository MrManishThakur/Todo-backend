const { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } = require('../controllers/todo.controller');

const router = require('express').Router();

router.post('/todos', addTodo);
router.get('/gettodos', getAllTodos);
router.get('/gettodos/:id', toggleTodoDone)
router.put('/gettodos/:id', updateTodo);
router.delete('/gettodos/:id', deleteTodo);

module.exports = router