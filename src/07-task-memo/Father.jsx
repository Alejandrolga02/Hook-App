import { Child } from "./Child";
import { useState } from "react";

export const Father = () => {
	const numeros = [2, 4, 6, 8, 10];
	const [valor, setValor] = useState(0);

	const increment = (num) => {
		setValor(valor + num);
	};

	return (
		<div>
			<h1>Padre</h1>
			<p> Total: {valor} </p>

			<hr />

			{numeros.map((n) => (
				<Child key={n} n={n} increment={increment} />
			))}
		</div>
	);
};
