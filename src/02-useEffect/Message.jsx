import { useEffect } from "react";

export const Message = () => {
	useEffect(() => {
		console.log("Message mounted");

		return () => {
			console.log("Message Unmounted");
		};
	}, []);

	return (
		<>
			<h3 className="mt-2">Usuario ya existe</h3>
		</>
	);
};
