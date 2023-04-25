export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case '[TODO] Add Item':
			return [action.payload , ...state];

		case '[TODO] Delete Item':
			return state.filter(task => task.id !== action.payload);

		case '[TODO] Toggle Item':
			return state.map((task) => {
				if (task.id === action.payload) {
					return {
						...task,
						done: !task.done
					}
				}
				return task;
			});

		default:
			return state;
	}
}