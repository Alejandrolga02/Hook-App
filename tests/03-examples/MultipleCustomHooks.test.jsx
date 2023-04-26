import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("tests in <MultipleCustomHooks />", () => {
	const mockIncrement = jest.fn();
	useCounter.mockReturnValue({
		counter: 1,
		increment: mockIncrement
	});

	beforeEach(() => {
		jest.clearAllMocks();
	})

	test("should show default component", () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
			hasError: null,
		});

		render(<MultipleCustomHooks />);
		expect(screen.getByText("Loading..."));
		expect(screen.getByText("Breaking Bad Quotes"));

		const nextButton = screen.getByRole("button", { name: "Next Quote" });
		expect(nextButton.disabled).toBeTruthy();
	});

	test("should show a Quote", () => {
		useFetch.mockReturnValue({
			data: [{ author: "Alejandro", quote: "Test" }],
			isLoading: false,
			hasError: null,
		});

		const { container } = render(<MultipleCustomHooks />);
		expect(container).toMatchSnapshot();
		expect(screen.getByText("Test")).toBeTruthy();
		expect(screen.getByText("Alejandro")).toBeTruthy();

		const nextButton = screen.getByRole("button", { name: "Next Quote" });
		expect(nextButton.disabled).toBeFalsy();
		screen.debug();
	});

	test("should call increment function", () => {
		useFetch.mockReturnValue({
			data: [{ author: "Alejandro", quote: "Test" }],
			isLoading: false,
			hasError: null,
		});

		render(<MultipleCustomHooks />);

		const nextButton = screen.getByRole("button", { name: "Next Quote" });
		fireEvent.click(nextButton);

		expect(mockIncrement).toHaveBeenCalled();
	});
});
