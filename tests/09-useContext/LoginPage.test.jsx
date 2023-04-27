const { render, screen, fireEvent } = require("@testing-library/react");
const { LoginPage } = require("../../src/09-useContext/LoginPage");
const { UserContext } = require("../../src/09-useContext/context/UserContext");

describe("tests in <LoginPage />", () => {
	test("should show the component without user", () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);

		expect(screen.getByText("null")).toBeTruthy();
	});

	test("should call setUser when button gets clicked", () => {
		const setUserMock = jest.fn();

		render(
			<UserContext.Provider value={{ user: null, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const buttonElement = screen.getByRole("button");
		fireEvent.click(buttonElement);
		expect(setUserMock).toHaveBeenCalledWith({
			id: 123,
			name: "Alejandro Ivan",
			mail: "alejandro@mail.com",
		});
	});
});
