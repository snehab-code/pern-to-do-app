const express = require('express')
const router = express.Router()
const pool = require('./db')

router.get('/', (req, res) => {
	res.json('hello')
})

router.get('/todos', async(req, res) => {
	try {
		const todos = await pool.query('SELECT * FROM todo')
		res.json(todos.rows)
	} catch (err) {
		console.error(err.message)
	}
})

router.get('/todos/:todoId', async(req, res) => {
	const todoId = req.params.todoId
	try {
		const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [todoId])
		res.json(todo.rows[0])
	} catch(err) {
		console.error(err.message)
	}
})

router.post('/todos', async(req, res) => {
	try {
		const description = req.body.description
		// const {description} = req.body
		const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description])
		
		res.json(newTodo.rows[0])
		// returning returns the data inserted
		// $1 is placeholder for description - like in C?
	} catch(err) {
		console.error(err.message)
	}
})

router.put('/todos/:todoId', async(req, res) => {
	try {
		const id = req.params.todoId
		const description = req.body.description
		console.log(id, description)
		const updatedTodo = await pool.query(
			'UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *', 
			[description, id])

		res.json(updatedTodo.rows[0])
	} catch(err) {
		console.error(err.message)
	}
})

router.delete('/todos/:id', async(req, res) => {
	try {
		const {id} = req.params
		const deletedTodo = await pool.query(
			'DELETE FROM todo WHERE todo_id = $1 RETURNING *',
			[id]
		)
		res.json(deletedTodo.rows[0])
	}catch(err) {
		console.log(err.message)
	}
})

module.exports = router