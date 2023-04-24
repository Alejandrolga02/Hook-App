import { useForm } from "../hooks";

export const FormWithCustomHook = () => {
	const { onInputChange, onResetForm, username, email, password } = useForm({
		username: "",
		email: "",
		password: "",
	});

	return (
		<>
			<h1>Form with custom hook</h1>
			<hr />

			<input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
			<input type="email" className="form-control mt-3" placeholder="user@mail.com" name="email" value={email} onChange={onInputChange} />
			<input type="password" className="form-control mt-3" placeholder="pass123" name="password" value={password} onChange={onInputChange} />
			<button onClick={onResetForm} className="btn btn-primary m-0 mt-2">
				Reset
			</button>
		</>
	);
};
