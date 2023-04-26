import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('tests in todoReducer', () => {
	const initialState = [
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
	];

	test('should return state', () => {
		const newState = todoReducer(initialState, {});
		expect(newState).toEqual(initialState);
	});

	test('should add a todo', () => {
		const newTodo = {
			"id": 1682531606697,
			"done": false,
			"description": "Running a marathon"
		}

		const action = {
			type: '[TODO] Add Item',
			payload: newTodo
		}

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(initialState.length + 1);
		expect(newState).toContain(action.payload);
		expect(newState).toEqual([newTodo, ...initialState]);
	});

	test('should delete a todo', () => {
		const deletedIndex = 1;
		const action = {
			type: '[TODO] Delete Item',
			payload: initialState[deletedIndex].id
		}

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(initialState.length-1);
		expect(newState).not.toContain(initialState[deletedIndex]);
	});

	test('should toggle a todo', () => {
		const toggledId = 1;
		const firstAction = {
			type: '[TODO] Toggle Item',
			payload: initialState[toggledId].id
		}

		const secondAction = {
			type: '[TODO] Toggle Item',
			payload: initialState[3].id
		}

		const newState = todoReducer(initialState, firstAction);
		expect(newState[toggledId].done).toBeTruthy();

		const finalState = todoReducer(newState, secondAction);

		expect(finalState[3].done).toBeFalsy();
		expect(finalState.length).toBe(initialState.length);
	});
})