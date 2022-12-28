import { Socket } from "socket.io-client";

export type SocketData = {
	socket: Socket | null;
};

type SetAction = {
	type: "SET";
	payload: SocketData;
};

type UnsetACtion = {
	type: "UNSET";
};

export type SocketAction = SetAction | UnsetACtion;
