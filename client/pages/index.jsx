import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import io from "socket.io-client";

export default function Home() {
	const socket = io.connect("http://localhost:4000");
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");

	const joinRoom = () => {
		if (room !== "" && username !== "") {
			socket.emit("join_room", { username, room });
			router.replace("/chat");
		}
		// TODO: handle else
	};

	return (
		<>
			<Head>
				<title>Messenger</title>
				<meta
					name="description"
					content="This is a messenger app built using NextJs, Socket.io & Flask"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="h-full w-full bg-black flex items-center justify-center">
				<div className="pt-8 bg-white pb-10 px-10 border flex flex-col items-center border-gray-500 rounded-lg">
					<h1 className="font-bold text-lg mb-5 dark:text-white">{`Welcome to Messenger`}</h1>

					<input
						className="border w-full text-center focus:outline-none py-2 border-gray-500 rounded"
						placeholder="Enter a username"
						onChange={e => setUsername(e.target.value)}
					/>

					<select
						onChange={e => setRoom(e.target.value)}
						className="mt-5 w-full focus:outline-none border border-gray-500 text-center rounded py-1"
					>
						<option>-- Select Room --</option>
						<option value="javascript">JavaScript</option>
						<option value="node">Node</option>
						<option value="express">Express</option>
						<option value="react">React</option>
					</select>

					<button
						onClick={joinRoom}
						className="mt-10 rounded py-2 text-white bg-blue-600 w-full hover:bg-blue-800 transition-all ease-in-out"
					>
						Join Room
					</button>
				</div>
			</main>
		</>
	);
}
