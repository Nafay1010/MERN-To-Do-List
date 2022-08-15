const express = require('express')

const {
    getTodos,
    getTodo,
    createTodo,
    deleteTodo  
} = require('../controller/ToDoController')

const router = express.Router()

//get the whole todos
router.get('/',getTodos)


//get a single todos
router.get('/:id', getTodo)

//creating todo
router.post('/', createTodo)

//deleting todo
router.delete('/:id', deleteTodo)


module.exports = router