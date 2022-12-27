import Head from "next/head";
import { useUser } from "../../context/userContext";
import { useEffect, useState } from "react";
import { UserState } from "../../types/user";
import { Logout, Send } from "iconsax-react";
import { useRouter } from "next/router";

const Chat = () => {
	const [user, dispatch] = useUser();
	const [lsUser, setLsUser] = useState<UserState>();
	const [message, setMessage] = useState<string>("");
	const router = useRouter();

	useEffect(() => {
		const userData = localStorage.getItem("messengerUser");
		userData && setLsUser(JSON.parse(userData));
	}, []);

	const logoutHandler = () => {
		localStorage.clear();
		dispatch({ type: "UNSET" });
		router.replace("/");
	};

	return (
		<>
			<Head>
				<title>Messenger | Chat</title>
				<meta
					name="description"
					content="This is a messenger app built using NextJs, Socket.io & Flask"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="h-screen bg-[#EFF5F5] relative">
				{/* Navbar */}
				{user.name !== "" ? (
					<nav className="flex bg-[#497174] px-3 text-white h-14 w-full fixed top-0 items-center justify-between">
						<Logout onClick={logoutHandler} />
						<span className="font-bold text-lg">{user.room.toUpperCase()}</span>
						<span>{user.name}</span>
					</nav>
				) : (
					lsUser && (
						<nav className="flex bg-[#497174] px-3 text-white h-14 w-full fixed top-0 items-center justify-between">
							<Logout onClick={logoutHandler} />
							<span className="font-bold text-lg">
								{lsUser.room.toUpperCase()}
							</span>
							<span>{lsUser.name}</span>
						</nav>
					)
				)}

				{/* Messages */}
				{/* TODO: messages appear in the bottom of the page */}
				<section className="pt-20 px-5">
					<span>{message}</span>
				</section>

				{/* Input Field */}
				<div className="absolute bottom-0 w-full">
					<input
						type="text"
						placeholder="message..."
						className="w-full focus:outline-none h-16 px-3"
						onChange={(e) => setMessage(e.target.value)}
					/>
					{/* TODO: onClick Event */}
					<Send
						color="#EB6440"
						variant="Bold"
						className="z-40 absolute bottom-5 right-5"
					/>
				</div>
			</main>
		</>
	);
};

export default Chat;
