import React from 'react'
import PropTypes from "prop-types";

import circleCheck from './img/circle-check.svg';
import circleX from './img/circle-x.svg';

export const TodoItem = React.memo(({ todo, deleteItem, toggleItem }) => {
	const handleDeleteItem = () => {
		deleteItem(todo.id);
	}

	const handleToggleItem = () => {
		toggleItem(todo.id);
	}

	return (
			<li className="list-group-item d-flex justify-content-between">
				<span aria-label='span' className="align-self-center">{todo.description}</span>
				<div>
					<button aria-label='delete-button' className="btn btn-danger" onClick={handleDeleteItem}>Delete</button>
					<button aria-label='toggle-button' className="btn btn-light" onClick={handleToggleItem}>
						{
							(todo.done)
								? <img src={circleCheck} alt="Done icon" />
								: <img src={circleX} alt="Pending icon" />
						}
					</button>
				</div>
			</li>
	);
});

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	deleteItem: PropTypes.func.isRequired,
	toggleItem: PropTypes.func.isRequired
};
TodoItem.displayName = "TodoItem";
