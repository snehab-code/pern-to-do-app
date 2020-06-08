import React, {useState} from 'react'

function TodoNew(props) {

	const [description, setDescription] = useState("")

	const handleChange = (e) => {
		const description = e.target.value
		setDescription(description)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const body = { description }
			const response = await fetch('http://localhost:5000/todos', {
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify(body)
			})
			window.location.reload()
		} catch(err) {
			console.error(err.message)
		}
	}

	return (
	<>
		<form className="d-flex" onSubmit = {handleSubmit}>
			<input type = "text" className="form-control" value={description} onChange={handleChange}/>
			<button className="btn btn-success">Add</button>
		</form>
	</>
	)
}

export default TodoNew