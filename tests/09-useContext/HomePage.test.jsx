const { render, screen } = require("@testing-library/react");
const { HomePage } = require("../../src/09-useContext/HomePage");
const { UserContext } = require("../../src/09-useContext/context/UserContext");

describe("tests in <HomePage />", () => {
	test("should show component user", () => {
		render(
			<UserContext.Provider value={{user: null}}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText('pre');
		expect( preTag.innerHTML ).toBe('null');
	});

	test("should show component without user", () => {
		const user = {
			id: 123,
			name: 'Alejandro Ivan',
			mail: 'alejandro@mail.com'
		}

		render(
			<UserContext.Provider value={{user}}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText('pre');
		expect( preTag.innerHTML ).toBe(JSON.stringify(user,null,3));
	});
});
