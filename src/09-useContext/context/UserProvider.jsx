import { useState } from "react";

import PropTypes from 'prop-types';

import { UserContext } from "./UserContext";

// const user = {
// 	id: 123,
// 	name: 'Alejandro Lizarraga ',
// 	email: 'alejandro@google.com'
// }

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	
	return (
		// <UserContext.Provider value={{hola: 'Mundo', user}}>
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.array.isRequired
}
