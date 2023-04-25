import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, deleteItem, toggleItem }) => {
	return (
		<>
			<ul className="list-group">
				{
					todos.map((todo) => {
						return <TodoItem key={todo.id} todo={todo} deleteItem={deleteItem} toggleItem={toggleItem}  />
					})
				}
			</ul>
		</>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	deleteItem: PropTypes.func.isRequired,
	toggleItem: PropTypes.func.isRequired
};
