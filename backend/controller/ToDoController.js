const Todo = require('../models/ToDoListModel')
const mongoose = require('mongoose')

//get the whole todo list
const getTodos = async (req, res) => {
    const Todos = await Todo.find({}).sort({createdAt: -1})
    res.status(200).json(Todos)
    // res.json({mssg: 'Get the whole to do!'})
}

//get a single todo
const getTodo = async (req, res) => {
    const { id } = req.params
    if(!mongoose.isValidObjectId(id))
    res.status(404).json({error: 'No such todos with this ID'})
    const Todos = await Todo.findById(id)

    if (!Todos) {
        return res.status(404).json({error: 'No such Todo found'})
    }

    res.status(200).json(Todos)
    // res.json({mssg: 'Get a single to do!'})
}

//create a single todo
const createTodo = async (req, res) => {
    const {work, done} = req.body
      // add to the database
    let emptyFields = []
    if(!work)
    emptyFields.push('work')
     if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Atleast Write Something in the Above Field 🙁', emptyFields })
  }
    try {
        const Todos = await Todo.create({ work, done })
        res.status(200).json(Todos)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    // res.json({mssg: 'creating to do!'})
}


//delete a todo
const deleteTodo = async (req, res) => {
    const { id } = req.params
    if(!mongoose.isValidObjectId(id))
    res.status(404).json({error: 'No such todos with this ID'})
    const Todos = await Todo.findOneAndDelete({_id: id})

    if (!Todos) {
        return res.status(404).json({error: 'No such Todo found'})
    }

    res.status(200).json(Todos)
    // res.json({mssg: 'deleting to do!'})
}

module.exports = {
    getTodo,
    getTodos,
    createTodo,
    deleteTodo
}