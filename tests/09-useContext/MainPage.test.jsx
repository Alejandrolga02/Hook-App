const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../src/09-useContext");
const { MemoryRouter } = require("react-router-dom");

describe("tests in <MainApp />", () => {
	test("should show HomePage", () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('Home Page')).toBeTruthy();
		const navLink = screen.getByRole('link', {name: 'Home'});
		expect(navLink.className).toBe("nav-link active");
	});

	test("should show LoginPage", () => {
		render(
			<MemoryRouter initialEntries={['/login']} >
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('Login Page')).toBeTruthy();
		
		const navLink = screen.getByRole('link', {name: 'Login'});
		expect(navLink.className).toBe("nav-link active");
	});

	test("should show AboutPage", () => {
		render(
			<MemoryRouter initialEntries={['/about']} >
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('About Page')).toBeTruthy();
		const navLink = screen.getByRole('link', {name: 'About'});
		expect(navLink.className).toBe("nav-link active");
	});

	test("should show AboutPage when url not found", () => {
		render(
			<MemoryRouter initialEntries={['/abafsadfout']} >
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('About Page')).toBeTruthy();
		const navLink = screen.getByRole('link', {name: 'About'});
		expect(navLink.className).toBe("nav-link active");
	});
});
