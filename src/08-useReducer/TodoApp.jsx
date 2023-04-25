import { useCallback, useReducer } from "react";
import { initialState, todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState);

	const addTodo = useCallback(
		(description) => {
			dispatch({
				type: '[TODO] Add Item',
				payload: {
					id: new Date().getTime(),
					done: false,
					description,
				}
			});
		}
	, []);

	return (
		<>
			<h1>TodoApp: 10 - <small>Pending: 10</small></h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} dispatch={dispatch} />
				</div>
				<div className="col-5">
					<h4>Add TODO</h4>
					<hr />
					<TodoAdd addTodo={addTodo} />
				</div>
			</div>
		</>
	);
};
