import { Slide, ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import UserProvider from "../context/userProvider";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<Component {...pageProps} />
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Slide}
			/>
		</UserProvider>
	);
}
