import { createContext, useContext } from "react";
import { SocketData, SocketAction } from "../../types/socket.types";

export const fallbackSocket: SocketData = {
	socket: null,
};

export const SocketContext = createContext<
	[SocketData, React.Dispatch<SocketAction>]
>([
	fallbackSocket,
	() => {
		return;
	},
]);
export const useSocket = () => {
	const context = useContext(SocketContext);
	if (context === undefined) {
		throw new Error("useSocket must be used within a SocketProvider");
	}
	return context;
};
