import { createContext, useContext } from "react";
import { UserState, UserAction } from "../types/user";

export const fallbackUser: UserState = {
	name: "",
	room: "",
};

export const UserContext = createContext<
	[UserState, React.Dispatch<UserAction>]
>([
	fallbackUser,
	() => {
		return;
	},
]);
export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a CountProvider");
	}
	return context;
};
