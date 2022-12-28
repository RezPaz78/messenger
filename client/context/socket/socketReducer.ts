import { SocketData, SocketAction } from "../../types/socket.types";

const SocketReducer: React.Reducer<SocketData, SocketAction> = (
	state,
	action
) => {
	switch (action.type) {
		case "SET":
			return { socket: action.payload.socket };
		case "UNSET":
			return { socket: null };
		default:
			return { ...state };
	}
};

export default SocketReducer;
