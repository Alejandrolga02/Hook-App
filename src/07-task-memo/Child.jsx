import React from "react";
import PropTypes from "prop-types";

export const Child = React.memo(({ n, increment }) => {
	console.log("  Me volví a generar :(  ");

	return (
		<button className="btn btn-primary mr-3" onClick={() => increment(n)}>
			{n}
		</button>
	);
});

Child.propTypes = {
	n: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
};

Child.displayName = "Child";
