import "../styles/globals.css";
import HeaderNav from "../components/headerNav";
import styles from "../styles/Home.module.css";

import "../node_modules/font-awesome/css/font-awesome.min.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
				<script src="https://apis.google.com/js/api.js"></script>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
				{/* <script src="https://kit.fontawesome.com/abd6f4ad8a.js" crossorigin="anonymous"></script> */}
				<link href="https://fonts.googleapis.com/css?family=Chivo" rel="stylesheet" />
				<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"></link>
				{/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/> */}
				<link
					href="https://fonts.googleapis.com/css?family=Chivo%7CPT+Sans%7CRaleway%7CUnna%7CPlayfair+Display%7CRoboto:300,400,500,700%7CRaleway:300,400,500,700%7COpen+Sans:300,400,500,700%7CChivo%3Abold%7CPT+Sans%3Abold%7CRaleway%3Abold%7CUnna%3Abold%7CPlayfair+Display%3Abold"
					rel="stylesheet"
					type="text/css"
				/>
				<script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
				<script
					src="https://code.jquery.com/jquery-3.5.1.min.js"
					integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
					crossorigin="anonymous"></script>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
					crossorigin="anonymous"></script>{" "}
			</Head>

			<HeaderNav />
			<main>
				<Component {...pageProps} />
			</main>
			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
			<script>feather.replace()</script>
		</div>
	);
}

export default MyApp;
