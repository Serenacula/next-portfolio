// Fonts
import "@fontsource/great-vibes/400.css"
import "@fontsource/merriweather/400.css"
import "@fontsource/montserrat/400.css"

import "../css/globals.scss"

import Head from "next/head"
// My Components
import NavigationBar from "../components/NavigationBar/NavigationBar"





function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="description" content="Faylee Murray Browne's Portfolio" />
				<link rel="shortcut icon" href="/images/favicon.png" />
			</Head>
            
            <NavigationBar />

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
