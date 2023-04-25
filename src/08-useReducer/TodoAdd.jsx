import PropTypes from 'prop-types'

export const TodoAdd = ({addTodo}) => {
	
	const handleSubmit = (e) => {
		e.preventDefault();

		const description = e.target.querySelector('#description').value;
		addTodo(description);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input id='description' type="text" placeholder="What do you want to do?" className="form-control" />
			<button className="btn btn-primary" type="submit">Add</button>
		</form>
	);
};

TodoAdd.propTypes = {
	addTodo: PropTypes.func.isRequired
}