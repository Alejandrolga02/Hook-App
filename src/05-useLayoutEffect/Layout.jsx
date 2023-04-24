import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
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

			{isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

			<button onClick={() => increment(1)} className="btn btn-dark" disabled={isLoading}>
				Next Quote
			</button>
		</>
	);
};
