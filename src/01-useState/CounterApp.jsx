import { useState } from "react";

export const CounterApp = () => {
	const [{ counter1, counter2, counter3 }, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	return (
		<>
			<h1>Counter1: {counter1}</h1>
			<h1>Counter2: {counter2}</h1>
			<h1>Counter3: {counter3}</h1>

			<hr />

			<button
				onClick={() =>
					setCounter({
						counter1: counter1 + 1,
						counter2,
						counter3,
					})
				}
				className="btn btn-primary">
				+1
			</button>
			<button
				onClick={() =>
					setCounter(({ counter1, counter2, counter3 }) => ({
						counter1: counter1 - 1,
						counter2,
						counter3,
					}))
				}
				className="btn btn-danger">
				-1
			</button>
		</>
	);
};
