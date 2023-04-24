import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
	const { quote, author } = !!data && data[0];

	if (hasError) {
		return <div className="alert alert-danger text-center">Something ocurred contact the admin</div>;
	}

	return (
		<>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			{isLoading ? (
				<div className="alert alert-info text-center">Loading...</div>
			) : (
				<blockquote className="blockquote text-end">
					<p className="mb-3">{quote}</p>
					<footer className="blockquote-footer">{author}</footer>
				</blockquote>
			)}

			<button onClick={() => increment(1)} className="btn btn-dark" disabled={isLoading}>
				Next Quote
			</button>
		</>
	);
};
