import { useCallback, useEffect, useReducer, useState } from "react";
import { initialState, todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);
	const [pendingTasks, setPendingTasks] = useState(0);

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

	const deleteItem = useCallback(
		(id) => {
			return dispatch({
				payload: id,
				type: '[TODO] Delete Item',
			})
		}
	, []);

	const toggleItem = useCallback(
		(id) => {
			return dispatch({
				payload: id,
				type: '[TODO] Toggle Item',
			})
		}
	, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));

		const pendingTasksNumber = todos.reduce((counter, task) => {
			if (!task.done) {
				return counter + 1;
			}
			return counter;
		}, 0);
	
		setPendingTasks(pendingTasksNumber);
	}, [todos])
	
	return (
		<>
			<h1>TodoApp: {todos.length} - <small>Pending: {pendingTasks}</small></h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} deleteItem={deleteItem} toggleItem={toggleItem} />
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
