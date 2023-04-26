import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("tests in <TodoItem />", () => {
	const todo = {
		id: 1682531606697,
		done: false,
		description: "Running a marathon",
	};

	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("should show Todo Pending to complete", () => {
		render(<TodoItem todo={todo} toggleItem={onToggleTodoMock} deleteItem={onDeleteTodoMock} />);

		const liElement = screen.getByRole("listitem");
		expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

		const spanElement = screen.getByLabelText("span");
		expect(spanElement.className).toBe("align-self-center");

		const iconElement = screen.getByRole("img", { name: "Pending icon" });
		expect(iconElement).toBeTruthy();
	});

	test("should show Todo completed", () => {
		const todo = {
			...todo,
			done: true,
		};

		render(<TodoItem todo={todo} toggleItem={onToggleTodoMock} deleteItem={onDeleteTodoMock} />);

		const liElement = screen.getByRole("listitem");
		expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

		const spanElement = screen.getByLabelText("span");
		expect(spanElement.className).toBe("align-self-center");

		const iconElement = screen.getByRole("img", { name: "Done icon" });
		expect(iconElement).toBeTruthy();
	});

	test("toggle button should call toggleItem when click", () => {
		render(<TodoItem todo={todo} toggleItem={onToggleTodoMock} deleteItem={onDeleteTodoMock} />);
		
		const toggleButton = screen.getByLabelText('toggle-button');
		
		fireEvent.click(toggleButton)
		expect(onToggleTodoMock).toHaveBeenCalled();
	});

	test("delete button should call deleteItem when click", () => {
		render(<TodoItem todo={todo} toggleItem={onToggleTodoMock} deleteItem={onDeleteTodoMock} />);
		
		const deleteButton = screen.getByLabelText('delete-button');
		
		fireEvent.click(deleteButton);
		expect(onDeleteTodoMock).toHaveBeenCalled();
	});
});
