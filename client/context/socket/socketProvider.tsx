import React, { useReducer } from "react";
import { SocketContext, fallbackSocket } from "./socketContext";
import SocketReducer from "./socketReducer";

const SocketProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(SocketReducer, fallbackSocket);
	return (
		<SocketContext.Provider value={[state, dispatch]}>
			{children}
		</SocketContext.Provider>
	);
};

export default SocketProvider;
