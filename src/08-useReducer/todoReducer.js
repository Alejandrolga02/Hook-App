export const initialState = [
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

export const todoReducer = (initialState = [], action) => {
	switch (action.type) {
		case '[TODO] Add Item':
			return [action.payload , ...initialState];

		case '[TODO] Delete Item':
			return initialState.filter(val => val.id !== action.id);

		case '[TODO] Toggle Item':
			return initialState.map((value) => {
				if (value.id === action.id) {
					return {
						...value,
						done: !value.done
					}
				}
				return value;
			});

		default:
			return initialState;
	}
}