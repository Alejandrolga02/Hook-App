import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<>
			<Link to="/" className="mx-2">
				Home
			</Link>
			<Link to="/about" className="mx-2">
				About
			</Link>
			<Link to="/login" className="mx-2">
				Login
			</Link>
		</>
	);
};
