import { fireEvent, render, screen } from "@testing-library/react";
import { TodoAdd } from "../../src/08-useReducer/TodoAdd";

describe("tests in <TodoAdd/>", () => {
	test("should add a todo", () => {
		const addTodo = jest.fn();
		const newTodo = 'Running a marathon';
		
		render(<TodoAdd addTodo={addTodo} />);

		const inputElement = screen.getByRole('textbox');
		const formElement = screen.getByRole('form', {name: 'form'});

		fireEvent.change(inputElement, {
			target:{
				name: 'description',
				value: newTodo
			}
		});
		fireEvent.submit(formElement);
		expect(inputElement.value).toBeFalsy();
		expect(addTodo).toHaveBeenCalledTimes(1);
		expect(addTodo).toHaveBeenCalledWith(newTodo);
	});

	test("should not add a todo if description is too short", () => {
		const addTodo = jest.fn();
		const wrongDescription = 'Ru';
		
		render(<TodoAdd addTodo={addTodo} />);

		const inputElement = screen.getByRole('textbox');
		const formElement = screen.getByRole('form', {name: 'form'});

		fireEvent.change(inputElement, {
			target:{
				name: 'description',
				value: wrongDescription
			}
		});
		fireEvent.submit(formElement);

		expect(inputElement.value).toBe(wrongDescription);
		expect(addTodo).not.toHaveBeenCalled();
	});
});
