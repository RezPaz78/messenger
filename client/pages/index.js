import Head from "next/head";
import styles from "../styles/Home.module.css";
export default function Home() {
	return (
		<>
			<Head>
				<title>Messenger</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h2>Welcome to the chat app!</h2>
			</main>
		</>
	);
}