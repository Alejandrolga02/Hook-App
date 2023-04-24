import { useRef } from "react";

export const FocusScreen = () => {
	const inputRef = useRef();

	const onClick = () => {
		// document.querySelector("input").select();
		console.log(inputRef);
	};

	return (
		<>
			<h1>Focus Screen</h1>
			<hr />

			<input ref={inputRef} type="text" placeholder="Ingrese su nombre" className="form-control" />

			<button className="btn btn-success mt-2" onClick={onClick}>
				Set focus
			</button>
		</>
	);
};
