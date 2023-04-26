import { render } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("tests in TodoApp", () => {
	useTodo.mockReturnValue({
		todos: [
			{
				"id": 1682531633586,
				"done": false,
				"description": "Get a job"
			},
			{
				"id": 1682531630837,
				"done": false,
				"description": "Joining a Gym"
			},
			{
				"id": 1682531621087,
				"done": false,
				"description": "Graduate from School"
			},
			{
				"id": 1682531606667,
				"done": true,
				"description": "Learn React"
			}
		],
		todosCount: 4,
		pendingTasks: 3,
		deleteItem: jest.fn(),
		toggleItem: jest.fn(),
		addTodo: jest.fn(),
	});

	test("should show component", () => {
		const { container } = render(<TodoApp />);
		expect(container).toMatchSnapshot();
	});
});
