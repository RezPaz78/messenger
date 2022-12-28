export type UserState = {
	name: string;
	room: string;
};

type SetAction = {
	type: "SET";
	payload: UserState;
};

type UnsetACtion = {
	type: "UNSET";
};

export type UserAction = SetAction | UnsetACtion;
