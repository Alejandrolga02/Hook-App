const { renderHook, act } = require("@testing-library/react")
const { useForm } = require("../../src/hooks")

describe('tests in useForm', () => {
	const initialForm = {
		name: "Alejandro",
		email: "alejandro@mail.com"
	}

	test('should return default values', () => {
		const { result } = renderHook(() => useForm(initialForm));

		const { formState, onInputChange, onResetForm, name, email } = result.current;

		expect(result.current).toEqual({
			formState: initialForm,
			name: initialForm.name,
			email: initialForm.email,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function)
		});

		expect(formState).toEqual({
			name: "Alejandro",
			email: "alejandro@mail.com"
		});

		expect(typeof name).toBe('string');
		expect(typeof email).toBe('string');
		expect(onInputChange).toEqual(expect.any(Function))
		expect(onResetForm).toEqual(expect.any(Function))
	});

	test('should change form name', () => {
		const newValue = 'Ivan';

		const { result } = renderHook(() => useForm(initialForm));

		act(() => {
			const changeValue = {
				target: { 
					value: newValue, 
					name: 'name'
				}
			};

			result.current.onInputChange(changeValue);
		});

		expect(result.current.name).toBe(newValue)
		expect(result.current.formState.name).toBe(newValue)
	});

	test('should reset form', () => {
		const newValue = 'Ivan';

		const { result } = renderHook(() => useForm(initialForm));
		const { onResetForm, onInputChange } = result.current

		act(() => {
			const changeValue = {
				target: { 
					value: newValue, 
					name: 'name'
				}
			};

			onInputChange(changeValue);
			onResetForm();
		});

		expect(result.current.name).toBe(initialForm.name);
		expect(result.current.formState.name).toBe(initialForm.name);
		expect(result.current.formState).toEqual(initialForm);
	});
});