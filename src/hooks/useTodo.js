import { useCallback, useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);
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

	const todosCount = todos.length;

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
	}, [todos]);

	return {
		todos,
		addTodo,
		deleteItem,
		toggleItem,
		pendingTasks,
		todosCount
	}
}