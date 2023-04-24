import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
	const paragraphRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		const { height, width } = paragraphRef.current.getBoundingClientRect();
		setBoxSize({ height, width });
	}, []);

	return (
		<>
			<blockquote
				className="blockquote text-end"
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "end",
				}}>
				<p className="mb-3" ref={paragraphRef}>
					{quote}
				</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>

			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};

Quote.propTypes = {
	quote: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};
