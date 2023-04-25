import PropTypes from 'prop-types'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({addTodo}) => {
	const {onInputChange, description} = useForm({
		description: ''
	});
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (description.length < 3) return;  

		addTodo(description);
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='description' onChange={onInputChange} value={description} type="text" placeholder="What do you want to do?" className="form-control" />
			<button className="btn btn-primary" type="submit">Add</button>
		</form>
	);
};

TodoAdd.propTypes = {
	addTodo: PropTypes.func.isRequired
}