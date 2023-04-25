import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks";

export const TodoApp = () => {
	const { todos, todosCount, pendingTasks, deleteItem, toggleItem, addTodo } = useTodo();
	
	return (
		<>
			<h1>TodoApp: {todosCount} - <small>Pending: {pendingTasks}</small></h1>
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
