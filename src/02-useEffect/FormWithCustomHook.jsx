import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
	const { formState, onInputChange, username, email, password } = useForm({
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
		</>
	);
};
