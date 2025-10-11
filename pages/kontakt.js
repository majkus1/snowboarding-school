import Nav from '@/components/Nav'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import Popup from '@/components/Popup'

const Contact = () => {
	return (
		<>
		{/* <Popup /> */}
			<Head>
				<title>Pow Pow Riders | Kontakt</title>
				<meta
					name='description'
					content='Dołącz do naszej społeczności snowboardowej! Skontaktuj się z Pow Pow Riders i dowiedz się, jak możesz stać się częścią naszego świata.'
				/>
			</Head>
			<Nav />
			<div className='wrapper'>
				<div className='page-container'>
					<div className='head-social'>
						<a href='https://www.tiktok.com/@powpow_riders' target='_blank' className='tt-link'>
							<Image src='/img/tt.webp' width={28} height={28} alt='mini logo tiktoka' />
						</a>
						<a href='https://www.instagram.com/powpow_riders/' className='ig-link' target='_blank'>
							<Image src='/img/ig.webp' width={28} height={28} alt='mini logo instagrama' />
						</a>
						<a
							href='https://www.linkedin.com/in/kamila-%C5%9Bwi%C4%99czkowska-8aaab424a/?locale=es_ES'
							className='lin-link'
							target='_blank'>
							<Image src='/img/in.webp' width={28} height={28} alt='mini logo linkedin' />
						</a>
					</div>
					<section className='contact'>
						<h2 style={{ marginLeft: '20px' }}>Kontakt</h2>
						<div className='info'>
							<div className='box-info'>
								<BsTelephone className='icont' style={{ marginRight: '7px' }} />
								<p>tel.</p><a href='tel:+48796200308'>+48796200308</a>
							</div>
							<p>dostępny: pon.-pt. 9–17 sob. 10-13</p>
							<div className='box-info' style={{ marginTop: '20px' }}>
								<AiOutlineMail className='iconm' style={{ marginRight: '7px' }} />
								<a href='mailto:powpowriders@gmail.com'>powpow.riders@gmail.com</a>
							</div>
						</div>
						{/* <p>Przygotowujemy dla Was specjalne konsultacje z instruktorami i trenerami.</p>
						<p>Już niedługo więcej informacji...</p>
						<p className='info-localization'>
							Szkolenia snowboardowe odbywają się w Szczyrku i na Słowacji - Jasna (Chopok).<br></br> W resortach sieci
							GOPASS
						</p> */}
					</section>
					<section id='company-data-contact'>
						<h6>DANE FIRMY</h6>
						<p>Kamila Święczkowska CRE ∞ POWDER POWER RIDERS</p>
						<p>ul. Krzysztofa Kamila Baczyńskiego 37, 16-001 Kleosin</p>
						<p style={{ color: 'black', textDecoration: 'none' }}>Nip: 9662144961</p>
						<p style={{ color: 'black', textDecoration: 'none' }}>Regon: 387535155</p>
						<p style={{ color: 'black', textDecoration: 'none' }}>Nr konta: PL74 1140 2004 0000 3102 8070 7864</p>
						
					</section>
					<section className='insta-feed'>
						<div className='insta-head'>
							<h6>
								Zaobserwuj instagram<span> i bądź na bieżąco</span>
							</h6>
						</div>
						<div className='wrapper-insta'>
							<div className='insta-line'>
								<a href='https://www.instagram.com/powpow_riders/' target='_blank'>
									<img src='/img/ig.webp' alt='logo instagrama bez tła' width='50' height='50' /> <p>@powpow_riders</p>
								</a>
							</div>
							<a href='https://www.instagram.com/powpow_riders/' target='_blank' className='insta-posts-mob'>
								<div className='column'>
									<img
										src='/img/ig1-mob.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
									<img
										src='/img/ig2-mob.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
									<img
										src='/img/1ig.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
								</div>
								<div className='column'>
									<img
										src='/img/2ig.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
									<img
										src='/img/3ig.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
									<img
										src='/img/4ig.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
								</div>
								<div className='column'>
									<img
										src='/img/5ig.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
									<img
										src='/img/6ig.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
									<img
										src='/img/7ig.webp'
										alt='post z instagrama'
										width='142'
										height='142'
										className='img-posts-ig'
									/>
								</div>
							</a>
							<a href='https://www.instagram.com/powpow_riders/' target='_blank' className='insta-posts'>
								<div className='column'>
									<img src='/img/ig1.webp' alt='post z instagrama' width='383' height='383' className='img-posts-ig' />
									<img src='/img/ig2.webp' alt='post z instagrama' width='383' height='383' className='img-posts-ig' />
									<img
										src='/img/1ig.webp'
										alt='post z instagrama'
										width='383'
										height='383'
										className='img-posts-ig'
									/>
								</div>
								<div className='column'>
									<img
										src='/img/2ig.webp'
										alt='post z instagrama'
										width='383'
										height='383'
										className='img-posts-ig'
									/>
									<img src='/img/3ig.webp' alt='post z instagrama' width='383' height='383' className='img-posts-ig' />
									<img src='/img/4ig.webp' alt='post z instagrama' width='383' height='383' className='img-posts-ig' />
								</div>
								<div className='column'>
									<img src='/img/5ig.webp' alt='post z instagrama' width='383' height='383' className='img-posts-ig' />
									<img src='/img/6ig.webp' alt='post z instagrama' width='383' height='383' className='img-posts-ig' />
									<img src='/img/7ig.webp' alt='post z instagrama' width='383' height='383' className='img-posts-ig' />
								</div>
							</a>
						</div>
					</section>
					<footer className='footer-company'>
						<div className='footer-company-txt'>
							<h6 className='company-name-cre'>CRE ∞ POWDER POWER RIDERS</h6>
						</div>
						<p>Współpracujemy z:</p>
						<div className='partners'>
							<div className='partner-box'>
								<a href='https://skleprugby.pl/' target='_blank' aria-label='Odwiedź stronę partnera gonga'>
									<img src='/img/gonga.webp' width={60} height={60} alt='logo partnera gonga' />
								</a>
								<a href='https://skleprugby.pl/' target='_blank'>
									Gonga <br></br> Surf
								</a>
							</div>
							<div className='partner-box'>
								<a href='https://domekbreloka.pl/' target='_blank' aria-label='Odwiedź stronę partnera domek breloka'>
									<img src='/img/brelok.webp' width={60} height={60} alt='logo partnera domek breloka' />
								</a>
								<a href='https://domekbreloka.pl/' target='_blank'>
									Domek <br></br> Breloka
								</a>
							</div>
							<div className='partner-box'>
								<a href='https://www.pzn.pl/' target='_blank' aria-label='Odwiedź stronę partnera pzn'>
									<img src='/img/pnz.webp' width={60} height={60} alt='logo partnera pzn' />
								</a>
								<a href='https://www.pzn.pl/' target='_blank'>
									PZN
								</a>
							</div>
							<div className='partner-box'>
								<a href='https://sits.org.pl/' target='_blank' aria-label='Odwiedź stronę partnera sits'>
									<img src='/img/sitsfooter.webp' width={60} height={60} alt='logo partnera sits' />
								</a>
								<a href='https://sits.org.pl/' target='_blank'>
									SITS
								</a>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</>
	)
}

export default Contact
