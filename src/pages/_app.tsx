import type {AppProps} from 'next/app'
import Head from 'next/head'
import {createGlobalStyle} from 'styled-components'

// Global sryle
const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMaeSystemFont, Segoe UI, Roboto, Oxygen, 
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
	box-sizing: border-box;
}

a {
	cursor: pointer;
	text-decoration: none;
	transition: .25s;
	color: #000;
}

ol, ul {
	list-style: none;
}
`

const MyApp = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<Head>
				<meta key="charset" content="utf-8" />
				<meta
					key="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maxmum-scale=5" />
				<meta property="og:locale" content="ja-JP" />
				<meta property="og:type" content="website" />
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
