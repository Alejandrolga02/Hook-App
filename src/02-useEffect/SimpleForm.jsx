import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "alejandrolga02",
		email: "alejandrolga@mail.com",
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { value, name } = target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		console.log("useEffect called");
	}, []);

	useEffect(() => {
		console.log("formState changed");
	}, [formState]);

	useEffect(() => {
		console.log("email changed");
	}, [email]);

	return (
		<>
			<h1>Simple Form</h1>
			<hr />

			<input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
			<input type="email" className="form-control mt-3" placeholder="user@mail.com" name="email" value={email} onChange={onInputChange} />

			{username === "alejandrolga02" && <Message />}
		</>
	);
};
