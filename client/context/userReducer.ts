import { UserState, UserAction } from "../types/user";

const UserReducer: React.Reducer<UserState, UserAction> = (state, action) => {
	switch (action.type) {
		case "SET":
			localStorage.setItem(
				"messengerUser",
				JSON.stringify({
					name: action.payload.name,
					room: action.payload.room,
				})
			);
			return {
				name: action.payload.name,
				room: action.payload.room,
			};
		case "UNSET":
			return {
				name: "",
				room: "",
			};
		default:
			return { ...state };
	}
};

export default UserReducer;
