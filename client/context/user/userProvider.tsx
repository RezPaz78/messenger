import React, { useReducer } from "react";
import { UserContext, fallbackUser } from "./userContext";
import UserReducer from "./userReducer";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(UserReducer, fallbackUser);
	return (
		<UserContext.Provider value={[state, dispatch]}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
