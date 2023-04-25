import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
	{
		id: new Date().getTime(),
		description: "Learning React",
		done: false,
	},
	{
		id: new Date().getTime() + 10,
		description: "Joining a Gym",
		done: false,
	},
];

export const TodoApp = () => {
	const [todo, dispatch] = useReducer(todoReducer, initialState);

	return (
		<>
			<h1>TodoApp: 10 - <small>Pending: 10</small></h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<ul className="list-group">
						<li className="list-group-item d-flex justify-content-between">
							<span className="align-self-center" >Item 1</span>
							<button className="btn btn-danger">Delete</button>
						</li>
					</ul>
				</div>
				<div className="col-5">
					<h4>Add ToDo</h4>
					<hr />
					<form>
						<input type="text" placeholder="What do you want to do?" className="form-control" />
						<button className="btn btn-primary" type="submit"></button>
					</form>
				</div>
			</div>
		</>
	);
};
