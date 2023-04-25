import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";
import { useCallback } from "react";

export const TodoList = ({ todos, dispatch }) => {

	const deleteItem = useCallback(
		(id) => {
			return dispatch({
				id,
				type: '[TODO] Delete Item',
			})
		}
	, []);

	return (
		<>
			<ul className="list-group">
				{
					todos.map((todo) => {
						return <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem}  />
					})
				}
			</ul>
		</>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};