import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav data-bs-theme="dark" className="navbar bg-body-tertiary rounded-3">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Navbar
				</Link>
				<ul className="d-flex flex-row gap-2 navbar-nav">
					<li className="nav-item">
						<NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ''}`} to="/">
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ''}`} to="/about">
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : ''}`} to="/login">
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
