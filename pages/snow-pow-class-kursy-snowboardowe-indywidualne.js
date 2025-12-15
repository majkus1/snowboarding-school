import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Image from 'next/image'
import { GiPlayButton } from 'react-icons/gi'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import Head from 'next/head'
import Popup from '@/components/Popup'

const images = [
	'/img/gallery-sits/10-n.webp',
	'/img/gallery-sits/22-n.webp',
	'/img/gallery-sits/34.webp',
	'/img/gallery-sits/35-n.webp',
	'/img/gallery-sits/36-n.webp',
	'/img/gallery-sits/37-n.webp',
	'/img/gallery-sits/38-n.webp',
	'/img/gallery-sits/39-n.webp',
	'/img/gallery-sits/40-n.webp',
	'/img/gallery-sits/53-n.webp',
	'/img/gallery-sits/55-n.webp',
	'/img/gallery-sits/57-n.webp',
	'/img/gallery-sits/56-n.webp',
	'/img/gallery-sits/26-n.webp',
	'/img/gallery-sits/27-n.webp',
	'/img/gallery-sits/28-n.webp',
	'/img/gallery-sits/29-n.webp',
	'/img/gallery-sits/21-n.webp',
	'/img/gallery-sits/20-n.webp',
	'/img/gallery-sits/54-n.webp',
]

const Ind = () => {
	const [sectionIndex, setSectionIndex] = useState(0)
	const [selectedImageIndex, setSelectedImageIndex] = useState(null)
	const [showAnswer1, setShowAnswer1] = useState(false)
	const [showAnswer2, setShowAnswer2] = useState(false)
	const [showAnswer3, setShowAnswer3] = useState(false)
	const [showAnswer4, setShowAnswer4] = useState(false)

	const handleImageClick12 = index => {
		setSelectedImageIndex(index)
	}

	const handleCloseClick12 = () => {
		setSelectedImageIndex(null)
	}

	const handleNextClick = e => {
		e.stopPropagation()
		setSelectedImageIndex(prevIndex => (prevIndex + 1) % images.length)
	}

	const handlePrevClick = e => {
		e.stopPropagation()
		setSelectedImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length)
	}
	const reviews = [
		{
			opinion:
				'Szkolenie pod okiem Kamili, choć spontanicznie zorganizowane, okazało się strzałem w 10-tkę. Intensywnie, bez czasu na nudę. Bardzo profesjonalne podejście. To był mój pierwszy wyjazd do Szczyrku, jak i na "większe stoki", więc obaw było sporo. Wszystkie niepewności, czy też zapytania, \n\nKamila na bieżąco i bardzo klarownie wyjaśniała w trakcie zajęć, jak i przed. Atmosfera na zajęciach bardzo przyjemna, lekka, luźna. Tryb szkolenia dostosowany do umiejętności ridera, ale też do warunków na stoku. Kama, dzięki ogromnej bazie wiedzy i doświadczeniu jest mistrzynią w przedstawianiu ćwiczeń, które kierunkują w stronę progresu. \n\nJeśli, tak jak ja, jesteś początkującym riderem i chcesz zrobić skok w czasoprzestrzeni swoich umiejętności, polecam Ci zajęcia z PowPow. Głowa puchnie od tego, co się zadzieje przez te kilka godzin mega skoncentrowanego treningu, a zajawka trzyma jeszcze przez długi, długi czas.',

			author: 'Piotr o szkoleniu: SNOW POW CLASS',
			words: 'ATMO',
			words2: 'SFERA',
			image: null,
		},
		{
			opinion:
				'Jeżeli chodzi o relacje z wyjazdów, bo brałem udział w kilku snow pow campach i szkoleniach sits, niesamowicie wiele się dowiedziałem, bardzo poszerzyłem horyzonty. \n\nDzięki współpracy z pow pow, mogę śmiało powiedzieć, że wszedłem na wyższy poziom w snowboardzie. \n\nTo czego nie mogę odmówić szkoleniom to to, że niesamowicie podniosły mi umiejętności i przygotowały mentalnie do pełnienia odpowiedzialnej roli instruktora i zetknięcia się z nauką innych już na kursie, kiedy zawsze byłem na nim uczeniem.',

			author: 'Filip o szkoleniu: Asystent Instruktora SITS, II stopień SITS, III stopień SITS, SNOW POW CAMP',
			words: 'WSPÓŁ',
			words2: 'PRACA',
			image: null,
		},
		{
			opinion:
				'PowPow przede wszystkim pozwoliło mi uwierzyć w swoje skille a chyba tego mi przede wszystkim brakowało. \n\nDuży nacisk w tej szkole jest kładziony na mindset ridera, a jak wiadomo od głowy wszystko się zaczyna...Później jak już moje nastawienie było inne szlifowanie tego z Kamilą stało się łatwiejsze. \n\nNa kursie asystenta oprócz solidnej dawki teorii PowPow serwuje przygotowanie praktyczne do prowadzenia zajęć. Generalnie rzecz ujmując jak szukasz progresu osiąganego na przyjemnej drodze PowPow jest dla Ciebie!',

			author: 'Dominik o szkoleniu: Asystent Instruktora SITS, II Stopień SITS, SNOW POW CLASS',
			words: 'MIND',
			words2: 'SET',
			image: null,
		},
		{
			opinion:
				'Najlepszy sezon na desce, jaki miałam. Kama wprowadza naprawdę świetną atmosferę, łatwo się przy niej uczy nowych rzeczy i przełamuje bariery. Sama jest bardzo inspirującym człowiekiem, wszechstronnie uzdolnionym i kreatywnym. Moje snowboardowe GURU serdecznie polecam, tym totalnie początkującym i tym zaawansowanym.',

			author: 'Ania o szkoleniu: SNOW POW CLASS',
			words: 'PRZE',
			words2: 'ŁAMANIE',
			image: null,
		},
		{
			opinion: null,

			author: 'Gosia o szkoleniu: SNOW POW CLASS',
			image: '/img/spc-opinion-new.webp',
		},
		{
			opinion: null,

			author: 'Marcel o szkoleniu: SNOW POW CLASS',
			image: '/img/opinion-screen-3.webp',
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const goRight = () => {
		setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
	}

	const handleRightArrowClick = () => {
		setSectionIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1))
	}

	const handleLeftArrowClick = () => {
		setSectionIndex(prevIndex => (prevIndex === 0 ? 2 : prevIndex - 1))
	}

	const styleObject = {
		paddingTop: '20px',
	}
	const margininfo = {
		paddingTop: '50px',
		paddingBottom: '50px',
	}
	const reviewStyle = {
		marginTop: '50px',
		background: 'transparent',
	}
	const bgcblockq = {
		backgroundColor: 'white',
		opacity: '0.8',
	}
	const styleSPCC = {
		paddingTop: '0px',
		marginBottom: '125px',
	}
	return (
		<>
		{/* <Popup /> */}
			<Head>
				<title>Snow-Pow-Class: Indywidualne Lekcje Snowboardowe z PowPowRiders</title>
				<meta
					name='description'
					content='Chcesz szybko i skutecznie nauczyć się jeździć na snowboardzie? Wybierz Snow-Pow-Class - indywidualne lekcje snowboardowe w PowPowRiders. Nasze lekcje są dostosowane do Twojego poziomu zaawansowania, tempa nauki oraz indywidualnych preferencji. Z nami osiągniesz swoje cele na stoku!'
				/>
			</Head>
			<Nav />
			<div className='wrapper'>
				<div className='page-container-ind'>
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
					<section className='snow-pow-class'>
						<div className='head-spc'>
							<h2>Snow Pow Class</h2>
							<h1>Indywidualny kurs snowboardowy</h1>
						</div>

						<div className='spc-content'>
							<div className='spc-txt'>
								<p className='advantage-ppr'>Na jednej zimie<span> się nie kończy!</span></p>
								<p>
									Wielu riders, którzy przyszli na Snow Pow Class, zapisują się od razu na Snow Pow Camp, Szkolenie
									Sits. Większość trenuje przed sezonem z Programem treningowo–rozwojowym Power Knees. Vibe i więź z
									ziomalami, niezależnie od wieku i niekończąca się ilość możliwości rozwoju.
								</p>
							</div>
						</div>

						<div className='spc-content'>
							<div className='spc-txt'>
								<p className='spc-txt-main'>
									Niezależnie od tego, czy pierwsza jazda na snowboardzie jest przed Tobą czy jeździsz na poziomie
									instruktorskim. <br></br> W Pow Pow Riders otrzymasz nowy kierunek rozwoju snowboardowego.
								</p>
								<p>Tutaj zawsze możesz mieć pewność:</p>
								<ul>
									<li>pełnego zaopiekowania i bezpieczeństwa na zajęciach</li>
									<li>doboru najbardziej właściwych ćwiczeń do poziomu zaawansowania</li>
									<li>świetnej, bezstresowej atmosfery</li>
									<li>profesjonalnego podejścia</li>
								</ul>
								<p style={styleObject}>
									Dzięki holistycznemu podejściu do sportów zimowych, zdrowia oraz dużej uwadze na potrzeby ridera, Snow
									Pow Class jest zawsze ukierunkowany na wydobycie ze snowboardzisty maksymalnego potencjału równolegle
									z miejscem na snowboardowy vibe i zajawkę.
								</p>
							</div>
						</div>
					</section>

					{/* TUTAJ KAFELEK */}

					<section className='reviews' style={reviewStyle}>
						<div className='review-head'>
							<h3 className='feel-head'>
								Feeling naszych wspaniałych uczestniczek <span>opinie o pow pow riders</span>i uczestników szkoleń
								snowboardowych i treningów.
							</h3>
						</div>

						<div id='content'>
							<div className='box-review-content'>
								{/* <div class='testimonial'>
									<blockquote style={bgcblockq}>
										<p className='review-txt'>{reviews[currentIndex].opinion}</p>
										<div className='bgc-reviews-words'>
											{reviews[currentIndex].words && <p className='line-after'>{reviews[currentIndex].words}</p>}
											{reviews[currentIndex].words2 && <p className='line-before'>{reviews[currentIndex].words2}</p>}
											{reviews[currentIndex].words3 && <p className='line-after'>{reviews[currentIndex].words3}</p>}
										</div>
										<button onClick={goRight}>{'>'}</button>
									</blockquote>
									<div className='who'></div>
									<p className='author'>{reviews[currentIndex].author}</p>
								</div> */}
								<div className='testimonial'>
									<blockquote style={bgcblockq}>
										{reviews[currentIndex].opinion && <p className='review-txt'>{reviews[currentIndex].opinion}</p>}
										{reviews[currentIndex].image && (
											<img src={reviews[currentIndex].image} alt='Opinia w formie obrazu' className='opinion-img' />
										)}
										<div className='bgc-reviews-words'>
											{reviews[currentIndex].words && !reviews[currentIndex].image && (
												<p>{reviews[currentIndex].words}</p>
											)}
											{reviews[currentIndex].words2 && !reviews[currentIndex].image && (
												<p>{reviews[currentIndex].words2}</p>
											)}
											{reviews[currentIndex].words3 && !reviews[currentIndex].image && (
												<p>{reviews[currentIndex].words3}</p>
											)}
										</div>
										<button onClick={goRight}>{'>'}</button>
									</blockquote>
									<div className='who'></div>
									<p className='author'>{reviews[currentIndex].author}</p>
								</div>
							</div>
						</div>
					</section>

					<section className='link-to-reserv-spc'>
						<a href='/pow-store/produkt/snow-pow-master-class-sits/'>
							<GiPlayButton className='check' style={{ marginRight: '6px' }} />
							Chcę się zapisać
						</a>
					</section>

					<section className='gallery'>
						<div className='container-img-lessons'>
							<div className='image-from-lessons'>
								{images.map((src, index) => (
									<img
										key={index}
										src={src}
										onClick={() => handleImageClick12(index)}
										alt='zdjęcie z jednego z kursów szkółki pow pow riders'
										loading='eager'
									/>
								))}
							</div>
						</div>
					</section>

					{selectedImageIndex !== null && (
						<div className='modal5' onClick={handleCloseClick12}>
							<button className='close5' onClick={handleCloseClick12}>
								X
							</button>
							<button className='prev' onClick={handlePrevClick}>
								{'<'}
							</button>
							<img src={images[selectedImageIndex]} alt='powiększony obraz' />
							<button className='next' onClick={handleNextClick}>
								{'>'}
							</button>
						</div>
					)}
				</div>

				<section className='snow-pow-class' style={styleSPCC}>
					<div className='spc-content'>
						<div className='spc-txt'>
							<p className='seeyou-p'>
								Za program szkoleń w Powder Power Riders odpowiedzialna jest Kamila Święczkowska. Instruktor Zawodowa
								SITS & Sędzia Freestyle PZS & Trenerka i przede wszystkim aktywna riderka.
							</p>
							<p className='seeyou'>TO JAK RIDERS, DO ZOBACZENIA NA ŚNIEGU? ;)</p>
						</div>
					</div>
				</section>

				<footer className='footer-company'>
						<div className='footer-company-txt'>
							<h6 className='company-name-cre'>CRE ∞ POWDER POWER RIDERS</h6>
						</div>
						<p>Współpracujemy z:</p>
						<div className='partners'>
							<div className='partner-box'>
								<a href='https://skleprugby.pl/' target='_blank' aria-label="Odwiedź stronę partnera gonga">
									<img src='/img/gonga.webp' width={60} height={60} alt='logo partnera gonga'/>
								</a>
								<a href='https://skleprugby.pl/' target='_blank'>
									Gonga <br></br> Surf
								</a>
							</div>
							<div className='partner-box'>
								<a href='https://domekbreloka.pl/' target='_blank' aria-label="Odwiedź stronę partnera domek breloka">
									<img src='/img/brelok.webp' width={60} height={60} alt='logo partnera domek breloka'/>
								</a>
								<a href='https://domekbreloka.pl/' target='_blank'>
									Domek <br></br> Breloka
								</a>
							</div>
							<div className='partner-box'>
								<a href='https://www.pzn.pl/' target='_blank' aria-label="Odwiedź stronę partnera pzn">
									<img src='/img/pnz.webp' width={60} height={60} alt='logo partnera pzn'/>
								</a>
								<a href='https://www.pzn.pl/' target='_blank'>
									PZN
								</a>
							</div>
							<div className='partner-box'>
								<a href='https://sits.org.pl/' target='_blank' aria-label="Odwiedź stronę partnera sits">
									<img src='/img/sitsfooter.webp' width={60} height={60} alt='logo partnera sits'/>
								</a>
								<a href='https://sits.org.pl/' target='_blank'>
									SITS
								</a>
							</div>
						</div>
					</footer>
			</div>
		</>
	)
}

export default Ind
