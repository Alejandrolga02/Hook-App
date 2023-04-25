import PropTypes from "prop-types";

export const ShowIncrement = ({ increment }) => {
	console.log(`Me volvi a generar :(`);

	return (
		<button className="btn btn-primary" onClick={() => increment()}>
			Incrementar
		</button>
	);
};

ShowIncrement.propTypes = {
	increment: PropTypes.func.isRequired,
};
