import React, {useState, useEffect} from 'react'

function TodoList(props) {

	const [todos, setTodos] = useState([])

	const getTodos = async() => {
		try {
			const response = await fetch("http://localhost:5000/todos")
			console.log(response)
			const jsonData = await response.json()
			setTodos(jsonData)
		} catch(err) {
			console.error(err.message)
		}
	}

	useEffect(() => {
		getTodos()	
	}, [])
	// limit to one request with []

	return (
	<>
		<table className="table table-striped text-center">
		<thead>
			<th>Description</th>
			<th>Edit</th>
			<th>Delete</th>
		</thead>
  		<tbody>
			{
				todos.map(todo => {
					return (
					<tr>
						<td>{todo.description}</td>
						<td><button className="btn btn-primary">Edit</button></td>
						<td><button className="btn btn-danger">Delete</button></td>
					</tr>
					)
				})
			}
  		</tbody>
		</table>
	</>
	)
}

export default TodoList