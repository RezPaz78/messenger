import { useState, useEffect } from "react";
import { SocketData } from "../../../types/socket.types";

interface IMessage {
	username: string;
	message: string;
	__createdtime__: string;
}

const Messages = ({ socket }: { socket: SocketData }) => {
	const [messagesRecieved, setMessagesReceived] = useState<IMessage[]>([]);

	// Runs whenever a socket event is recieved from the server
	useEffect(() => {
		socket.socket?.on("receive_message", (data) => {
			console.log(data);
			setMessagesReceived((state) => [
				...state,
				{
					message: data.message,
					username: data.username,
					__createdtime__: data.__createdtime__,
				},
			]);
		});

		// Remove event listener on component unmount
		return () => {
			socket.socket?.off("receive_message");
		};
	}, [socket]);

	// dd/mm/yyyy, hh:mm:ss
	function formatDateFromTimestamp(timestamp: string) {
		const date = new Date(timestamp);
		return date.toLocaleString();
	}

	return (
		<div>
			{messagesRecieved.map((msg) => (
				<div key={msg.message}>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<span>{msg.username}</span>
						<span>{formatDateFromTimestamp(msg.__createdtime__)}</span>
					</div>
					<p>{msg.message}</p>
					<br />
				</div>
			))}
		</div>
	);
};

export default Messages;
