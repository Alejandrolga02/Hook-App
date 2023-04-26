import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks";

describe('tests in useCounter hook', () => {
	test('should return default values', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, decrement, increment, reset } = result.current;

		expect(counter).toBe(10);
		expect(decrement).toEqual(expect.any(Function))
		expect(increment).toEqual(expect.any(Function))
		expect(reset).toEqual(expect.any(Function))
	})

	test('should should generate a counter with 100 value', () => {
		const { result } = renderHook(() => useCounter(100))
		const { counter } = result.current;
		expect(counter).toBe(100);
	});

	test('should increment counter when executing increment function', () => {
		const initialValue = 100;
		const { result } = renderHook(() => useCounter(initialValue));
		const { increment } = result.current;

		act(() => {
			increment(1);
			increment(2);
			increment(3);
		});

		expect(result.current.counter).toBe(initialValue + 6);
	});

	test('should decrement counter when executing decrement function', () => {
		const initialValue = 100;
		const { result } = renderHook(() => useCounter(initialValue));
		const { decrement } = result.current;

		act(() => {
			decrement(1);
			decrement(2);
			decrement(3);
		});

		expect(result.current.counter).toBe(initialValue - 6);
	});

	test('should do reset counter when executing reset function', () => {
		const initialValue = 100;
		const { result } = renderHook(() => useCounter(initialValue));
		const { decrement, reset } = result.current;

		act(() => {
			decrement(1);
			decrement(2);
			decrement(3);

			reset();
		});

		expect(result.current.counter).toBe(initialValue);
	});
})