import React from 'react'
import PropTypes from "prop-types";

export const TodoItem = React.memo(({ todo, deleteItem }) => {
	const handleDeleteItem = () => {
		deleteItem(todo.id);
	}

	return (
			<li className="list-group-item d-flex justify-content-between">
				<span className="align-self-center">{todo.description}</span>
				<span className="align-self-center">
				{
					(todo.done)
						? 'Done'
						: 'Pending'
				}
				</span>
				<button className="btn btn-danger" onClick={handleDeleteItem}>Delete</button>
			</li>
	);
});

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	deleteItem: PropTypes.func
};
TodoItem.displayName = "TodoItem";
