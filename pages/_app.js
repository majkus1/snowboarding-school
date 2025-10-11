import '../styles/App.scss'
import '../styles/Home.scss'
import '../styles/Nav.scss'
import '../styles/Be-instructor-lessons-sits.scss'
import '../styles/Individual.scss'
import '../styles/Offer.scss'
import '../styles/Group.scss'
import '../styles/Contact.scss'
import '../styles/Faq.scss'
import '../styles/Popup.css';
import '../styles/warroz.css';
import '../styles/butter.css';
import ScrollToTop from '../components/scrolltotop'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ScrollToTop />
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
