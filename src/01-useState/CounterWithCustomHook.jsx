import { useCounter } from "../hooks";

export const CounterWithCustomHook = () => {
	const { counter, decrement, increment, reset } = useCounter();

	return (
		<>
			<h1>Counter With Hook: {counter}</h1>
			<hr />
			<button onClick={() => increment(1)} className="btn btn-primary">
				+1
			</button>
			<button onClick={reset} className="btn btn-secondary">
				Reset
			</button>
			<button onClick={() => decrement(1)} className="btn btn-danger">
				-1
			</button>
		</>
	);
};
