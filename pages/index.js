import React, { useState, useEffect } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import { GiPlayButton } from 'react-icons/gi'
import Link from 'next/link'
import Nav from '../components/Nav'
import Head from 'next/head'
import Popup from '@/components/Popup'

const Home = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [lastScrollTop, setLastScrollTop] = useState(0)
	const [selectedImage2, setSelectedImage2] = useState(null)
	const [selectedImage3, setSelectedImage3] = useState(null)

	const handleImageClick2 = src => {
		setSelectedImage2(src)
	}
	const handleCloseClick2 = () => {
		setSelectedImage2(null)
	}

	const handleImageClick3 = src => {
		setSelectedImage3(src)
	}
	const handleCloseClick3 = () => {
		setSelectedImage3(null)
	}

	const reviews = [
		{
			opinion:
				'Mega polecam Szkolenia SITS z POW POW RIDERS. W mojej jeździe zmieniło się wszystko, na plus, ale najbardziej pewność siebie na desce.\nPomogło mi zrobić duży progres na skoczniach i przeszkodach. Atmosfera, jaką się tworzy na kursie bardzo pomaga w podnoszeniu skilla oraz próbowaniu nowych rzeczy, każdy każdego motywuje, każdy każdemu kibicuje. Zajęcia super prowadzone.\nPani Kamila zawsze pomocna + największy motywator jakiego można spotkać. Pow Pow Familly 🔥',

			author: 'Witek o szkoleniu: Asystent Instruktora SITS',
			words: 'PRO',
			words2: 'GRES',
			image: null,
		},
		{
			opinion:
				'Szkolenie Sits to był bardzo intensywny tydzień, nigdy w tak krótkim czasie nie dowiedziałem się tyle o snowboardingu ile podczas tego tygodnia. Jestem dumny z opanowania skrętu ciętego WN i ze śmigu ciętego, w ogóle jazda na krawędzi stała się pewna i trzymająca się nawet na lodzie. Wszystkie skręty cięte wjechały na wyższy poziom:) Przełamałem się też po traumatycznych przeżyciach z przeszłości do skoku na skoczni. Polecam szkołę snowboardingu POW POW Riders GDYŻ: \n \n>instruktorzy POW POW kompleksowo dbają o każdego uczestnika szkolenia\n >mają indywidualne podejście\n >tworzą rodzinną, ciepłą atmosferę \n>oprócz szkolenia na desce na stoku prowadzą również treningi mentalne i ogólnorozwojowe.\n\n Dla Kamili, właścicielki POW POW RIDERS, snowboarding to nie tylko sposób na zarabianie pieniędzy, ale pasja, serce, ona tym żyje, tym oddycha. To zaraźliwe. Kama Kama Kama Kamili ON. Co więcej, wartości etyczne, kultura osobista i zrozumienie innych mają w POW POW duże znaczenie, w związku z tym czujesz się bezpiecznie i zaopiekowany. Co nie zdarza się często. Bardzo ważne jest też to, że POW POW to nie tylko szkoła, to rodzina, która zostaje z Tobą na dłużej, oczywiście tylko wtedy jeśli tego chcesz i potrzebujesz. Family meet vol. 1 to tradycja, która dla mnie zrodziła się z chęci bycia częścią wspólnoty riders respektujących zrównoważony rozwój, wolność, jedność, ceniących moment i piękno gór.',

			author: 'Beniamin o szkoleniu: III stopień SITS, SNOW POW CLASS',
			words: 'PA',
			words2: 'SJA',
			image: null,
		},
		{
			opinion:
				'Miałem przyjemność zrealizować z powpow riders szereg wyjazdów, w trakcie których szlifowałem swoje umiejętności snowboardowe. Lekcje były organizowane w bardzo elastyczny i efektywny sposób, z nastawieniem na kluczowe techniki jazdy i ewolucje. \n\nOsiąganie kolejnych stopni umiejętności było oparte o zintegrowane trenowanie składowych komponentów, a zajęcia były omawiane w trakcie analiz video. Pozwoliło mi to na wyeliminowanie podstawowych błędów nabytych w trakcie własnych lat nauki, których nawet nie byłem świadom. \n\nDodatkowo zaczęły mi wychodzić coraz częściej ewolucje, o których zawsze marzyłem. Zajęcia były prowadzone w bezpieczny i przemyślany sposób, pozwalający skupić się na tym co najważniejsze, czyli dobrej i przyjemnej jeździe w zacnym towarzystwie ! ',

			author: 'Kacper o szkoleniu: Asystent Instruktora SITS / SNOW POW CLASS / SNOW POW CAMP / FREESTYLE DAY',
			words: 'FREE',
			words2: 'STYLE',
			image: null, // brak obrazu
		},
		{
			opinion:
				'Pow Pow Riders wymiata pod wieloma aspektami. Cieszę się, że miałam okazje uczestniczyć w ich kursie SiTS, podczas którego w mojej głowie poszerzyło się rozumowanie snowboardingu ;) \n\nByło kameralnie i to było dużym plusem podczas kursu, był bezpośredni kontakt z instruktorką Kamilą i bardzo ciepła atmosfera, którą stwarzała instruktorka. Kurs polegał nie tylko i wyłącznie na poszerzaniu wiedzy teoretycznej czy też praktycznej, bo praktyki było najwięcej, co bardzo cenię. \n\nDziało się znacznie więcej. Była okazja do wspólnych analiz, pytań i odpowiedzi, rozmów, podczas których można było dowiedzieć się bardzo wiele cennych informacji. Najbardziej podjarana jestem tym, że niektóre elementy, które Kamila przeplatała podczas jazdy na stoku, odblokowały mi myślenie i kreatywność, którą wykorzystam podczas swoich lekcji jako instruktorka. \n\nPow Pow Riders to pro wybór na instruktora, jest sztos ! Na pewno nie poprzestanę na kursie asystenta i myślę, że dalszy krok do przodu będzie z Pow Pow, bo to świetny wybór ;)',

			author: 'Brygida o szkoleniu: Asystent Instruktora SITS',
			words: 'PRA',
			words2: 'KTY',
			words3: 'KA',
			image: null,
		},
		{
			opinion:
				'Tydzień spędzony z Pow Pow Riders był fantastyczny. Jakość nauczania była doskonała, z doświadczonymi instruktorami, którzy mieli świetne podejście do nauczania, pomagając na wszystkich poziomach doskonalić swoje umiejętności. \n\nWidać, że robią to z pasji i wkładają w to całe serce. Atmosfera była przyjazna i wspierająca zarówno na stoku jak i w naszym domu – miejscu zakwaterowania. Nie ma nic lepszego jak mieszanie z ludźmi dzielącymi tę sama zajawkę co Ty. Jestem dumny z mojego progresu freestylowego oraz z tego, że udało mi się wziąć udział w kursie SiTS i zaliczyć go pozytywnie. \n\nZdecydowanie poprawiła mi się technika jazdy iii zdecydowanie polecam Pow Pow Riders. Kamila – właścicielka szkoły to osoba z ogromną wiedzą, doświadczeniem jak i  kreatywnością. Na zajęciach jest super atmosfera, potrafi wesprzeć jak i zmotywować. Nauka nowych elementów przychodzi z łatwością. Gorąco polecam! 🏂🏂',

			author: 'Krzysiek o szkoleniu: II Stopień SITS, Asystent Instruktora SITS',
			words: 'KREA',
			words2: 'TYWNOŚĆ',
			image: null, // brak obrazu
		},
		{
			opinion:
				'Jestem niezwykle zadowolony z tygodniowego szkolenia na Asystenta Instruktora w Pow Pow Riders. Jakość szkolenia była znakomita. Instruktorzy podchodzili do nauczania w sposób profesjonalny, ale jednocześnie przyjazny i zrozumiały. \n\nIch pasja i wiedza na temat snowboardu były inspirujące, co pozwoliło mi nie tylko poprawić technikę jazdy, ale także nabrać pewności siebie na snowboardzie, zarówno jeżdżąc na "słabszą" nogę, jak i podczas freestyleu. Warto też dodać, że instruktorzy oferowali nieocenione wsparcie mentalne, co dodatkowo pomogło mi uwierzyć w swoje umiejętności. \n\nSerdecznie polecam tę szkołę każdemu, kto pragnie rozwijać się jako snowboardzista i instruktor. Rozwój z Pow Pow Riders dzięki profesjonalnym instruktorom, świetnej jakości szkolenia i w przyjaznej atmosferze.',

			author: 'Michał o szkoleniu: Asystent Instruktora SITS',
			words: 'WSPA',
			words2: 'RCIE',
			image: null,
		},
		{
			opinion:
				'Za mną już kilkanaście sezonów na desce, więc z początku myślałem, że jedynie wyćwiczę to co już potrafię i niczego nowego się nie nauczę. No a jednak. Kamila zauważyła błędy w technice i freestyle i eliminowała je u mnie na stoku. \n\nĆwiczenia, które proponowała, pomogły mi przełamać się w jeździe na drugą nogę, pozbyć się złych nawyków i lęków przed niektórymi trikami, a nawet pokazała mi, jak lepiej wykonać triki, które umiałem. Kama to świetna instruktorka, dobiera najlepsze ćwiczenia dla każdego stopnia zaawansowania. \n\nZmęczenie! Kama chyba nie zna tego słowa. Jest bardzo zaangażowana w nauczanie, czasem nawet po nocy z ekipą oglądaliśmy nasze nagrania ze stoku :d Mówiła nam, co trzeba poprawić żeby trik wyglądał lepiej. Ciągle w dobrym humorze i pozytywnym nastawieniu do swoich uczniów – ziomali.',

			author: 'Konrad o szkoleniu: SNOW POW CAMP',
			words: 'ZIO',
			words2: 'MA',
			words3: 'LE',
			image: null,
		},
		{
			opinion: null,

			author: 'Gosia o szkoleniu: SNOW POW CLASS',
			image: '/img/spc-opinion-new.webp',
		},
		{
			opinion: null,

			author: 'Jakub o szkoleniu: Asystent Instruktora SITS',
			image: '/img/opinion-screen.webp',
		},
		{
			opinion: null,

			author: 'Piotr o szkoleniu: SNOW POW CLASS',
			image: '/img/opinion-screen-2.webp',
		},
		{
			opinion: null,

			author: 'Bartek o szkoleniu: Asystent Instruktora SITS',
			image: '/img/opinion-screen-4.webp',
		},
		// {
		// 	opinion: null,

		// 	author: 'UZUPEŁNIĆ',
		// 	image: '/img/opinion-screen-3.webp',
		// },
		{
			opinion: null,

			author: 'Marcel o szkoleniu: II stopień SITS',
			image: '/img/screen-opiniones.webp',
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
			opinion:
				'Szkolenie pod okiem Kamili, choć spontanicznie zorganizowane, okazało się strzałem w 10-tkę. Intensywnie, bez czasu na nudę. Bardzo profesjonalne podejście. To był mój pierwszy wyjazd do Szczyrku, jak i na "większe stoki", więc obaw było sporo. Wszystkie niepewności, czy też zapytania, \n\nKamila na bieżąco i bardzo klarownie wyjaśniała w trakcie zajęć, jak i przed. Atmosfera na zajęciach bardzo przyjemna, lekka, luźna. Tryb szkolenia dostosowany do umiejętności ridera, ale też do warunków na stoku. Kama, dzięki ogromnej bazie wiedzy i doświadczeniu jest mistrzynią w przedstawianiu ćwiczeń, które kierunkują w stronę progresu. \n\nJeśli, tak jak ja, jesteś początkującym riderem i chcesz zrobić skok w czasoprzestrzeni swoich umiejętności, polecam Ci zajęcia z PowPow. Głowa puchnie od tego, co się zadzieje przez te kilka godzin mega skoncentrowanego treningu, a zajawka trzyma jeszcze przez długi, długi czas.',

			author: 'Piotr o szkoleniu: SNOW POW CLASS',
			words: 'ATMO',
			words2: 'SFERA',
			image: null,
		},
		{
			opinion:
				'Szkolenie 10/10. Dużo usystematyzowało mi wiedzę z poprzednich szkoleń, mogłam sprawdzić siebie bardziej. Zdecydowanie poprawiłam technikę, a to wszystko w mega super atmosferze. Serdecznie polecam każdemu Pow Pow Riders. Super podejście do kursantów w trakcie kursu, jak i po.',

			author: 'Marta o szkoleniu: Asystent Instruktora SITS',
			words: '10/',
			words2: '10',
			image: null,
		},
		{
			opinion:
				'Jeżeli chodzi o relacje z wyjazdów, bo brałem udział w kilku snow pow campach i szkoleniach sits, niesamowicie wiele się dowiedziałem, bardzo poszerzyłem horyzonty. \n\nDzięki współpracy z pow pow, mogę śmiało powiedzieć, że wszedłem na wyższy poziom w snowboardzie. \n\nTo czego nie mogę odmówić szkoleniom to to, że niesamowicie podniosły mi umiejętności i przygotowały mentalnie do pełnienia odpowiedzialnej roli instruktora i zetknięcia się z nauką innych już na kursie, kiedy zawsze byłem na nim uczeniem.',

			author: 'Filip o szkoleniu: Asystent Instruktora SITS, II stopień SITS, III stopień SITS, SNOW POW CAMP',
			words: 'WSPÓŁ',
			words2: 'PRACA',
			image: null, // brak obrazu
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
				'\nSnow Pow Camp = dużo godzin spędzonych na stoku, dużo różnych ćwiczeń na zajęciach, które były bardzo pomocne w doskonaleniu naszej technicznej jazdy. Łatwy dostęp do instruktorów, możliwość zadawania pytań na stoku, jak i poza nim. Rozgrzewka! Nieduże grupy. Podczas tej edycji były też tyczki, przejazd slalomem na czas. Był to dla mnie ważny krok w przełamywaniu barier w snowboardowej nauce. \n\nOrganizacja = dokładny plan, rozpiska zajęć na każdy dzień. Warunki mieszkalne super, lokalizacja! Ciekawe zajęcia "postokowe", gdzie była merytoryka, dodatkowa teoria oraz wspólna rozrywka np. oglądanie filmu, gry, wyjście na festiwal sportowo-muzyczny Snowfest !! Pow Pow to holistyczne podejście. Na Campie były zajęcia oddechowe, zdrowa kuchnia! Dla mnie są to ważne aspekty.',

			author: 'Maja o szkoleniu: II stopień SITS, Asystent Instruktora SITS, SNOW POW CAMP',
			words: 'HOLI',
			words2: 'STY',
			words3: 'CZNIE',
			image: null,
		},
		{
			opinion:
				'Było extra na Snow Pow Camp! Mega mi się podobało. Atmosfera mega miła, dyskusje chłopaków na kanapie niezapomniane.',

			author: 'Zoja o szkoleniu: SNOW POW CAMP',
			words: 'ATMO',
			words2: 'SFERA',
			image: null,
		},
		{
			opinion:
				'Bardzo podobała mi się nasza współpraca podczas Snow Pow Camp. Rodzinna, przyjazna, swobodna i to było niezapomniane.',

			author: 'Zuza o szkoleniu: SNOW POW CAMP',
			words: 'SWO',
			words2: 'BODA',
			image: null,
		},
		{
			opinion:
				'Zarówno ludzie jak i atmosfera w trakcie Snow Pow Campu były cudowne.',

			author: 'Helena o szkoleniu: SNOW POW CAMP',
			words: 'LU',
			words2: 'DZIE',
			image: null,
		},
		{
			opinion:
				'Było cudownie na Snow Pow Camp. Szkolenia, organizacja wszystkich szczegółów od posiłków po treningi, morsowanie bosą stopą. 10/10 gwiazdek i uśmiechów.',

			author: 'Kasia o szkoleniu: SNOW POW CAMP ',
			words: 'ORGA',
			words2: 'NIZACJA',
			image: null,
		},
		{
			opinion:
				'Snow Pow Camp to był obóz, którego potrzebowałem. Chwili relaksu i odpoczynku od codzienności. Spędziłem miło czas z super ekipą.',

			author: 'Filip o szkoleniu: SNOW POW CAMP',
			words: 'MIŁY',
			words2: 'CZAS',
			image: null,
		},
		{
			opinion:
				'Kamilę znam jako trenerkę personalną. Zawsze dostrzega, czego potrzebują inni, podtrzymuje motywację i wzmacnia mentalnie :) i to wszystko z całym sercem! Niezwykle wszechstronna i zawsze pozytywna ',

			author: 'Laura o warsztatach: POWER PEOPLE',
			words: 'MOTY',
			words2: 'WACJA',
			image: null,
		},
		{
			opinion:
				'Kama z Pow Pow Riders jest najbardziej profesjonalną instruktorką, jaką znam, a do tego też potrafi świetnie motywować  Treningi z nią to sama przyjemność : )',
			author: 'Małgosia o warsztatach: POWER PEOPLE',
			words: 'PRZY',
			words2: 'JEM',
			words3: 'NOŚĆ',
			image: null,
		},
		{
			opinion:
				'Pasja i profesjonalizm, wszechstronny rozwój, dążenie do celu — tak postrzegam Kamę. Jest naprawdę dobra w tym co robi, w treningu motorycznym i w snowboardingu.',
			author: 'Natalia o warsztatach: POWER PEOPLE',
			words: 'ROZ',
			words2: 'WÓJ',
			image: null,
		},
		{
			opinion:
				'Żeby być konkretną i się zbytnio nie rozpisywać — Trenerka Kamila = czysty profesjonalizm i przy tym fajne podejście do ludzi, polecam',
			author: 'Ola o warsztatach: POWER PEOPLE',
			words: 'PROFESJO',
			words2: 'NALIZM',
			image: null,
		},
		{
			opinion:
				'Kama jest mega inspirującą i kreatywną osobą. Zawsze wkłada serducho we wszystko, co robi. Uwaga, bo potrafi zarazić swoją zajawką w taki sposób, że nigdy nie wypniesz się już z dechy  Dziewczyna z pozytywnym vibem, skarbnica wiedzy z indywidualnym podejściem do każdego!  Niewiele jest takich duszyczek w sportowej branży jak ona  Polecam ',
			author: 'Karolina o warsztatach: POWER PEOPLE',
			words: 'INSPI',
			words2: 'RACJA',
			image: null,
		},
		{
			opinion:
				'Jeszcze raz dziękuję za zajęcia <3 i chciałam Ci powiedzieć, że było mi bardzo miło gdy, cały czas starałaś się włączać mnie w rozmowę, zagadywałaś o taniec, żebym nie poczuła się poza snowboardowym towarzystwem ;) Do tego jeszcze po zajęciach mi powiedziałaś, że uwielbiasz osoby inwestujące w swój rozwój, że to najlepsze co mogę zrobić. \n\nZaskoczyło mnie to, bo dla mnie to Ty jesteś taką inspirującą osobą i po prostu słowa uznania z Twojej strony dużo dla mnie znaczą :) Zajęcia same w sobie były dla mnie, studentki fizjoterapii i aktywnej osoby, rzeczywiście wartościowe, postaram się stosować poznane ćwiczenia, muszę tylko kupić dysk :d \n\nMam nadzieję, że jeszcze kiedyś się spotkamy na kolejnym kursie czy warsztatach. Chociażby to, co trochę słyszałam w Waszej rozmowie o przełamywaniu własnych barier w głowie, psychologii sportu - ja również uważam że mam ogromne bariery psychiczne (i staram się często wychodzić poza swoją ,,strefę komfortu"), więc gdybyś prowadziła tego typu zajęcia to też chętnie przyjdę :)',
			author: 'Marta o warsztatach: POWER PEOPLE',
			words: 'PRZEŁA',
			words2: 'MANIE',
			words3: 'BARIER',
			image: null,
		},
		{
			opinion:
				'Hejka! Brałam udział w warsztatach Power People, organizowanym przez Pow pow riders. Jestem bardzo zadowolona z całego kursu! Na każdych zajęciach zdobywałyśmy nowe umiejętności oraz ćwiczyłyśmy już poznane techniki, dowiadywałyśmy się technice, wzmacniałyśmy kondycję, a najważniejsze że się mega bawiłyśmy! \n\nZajęcia były w kameralnym gronie co pozwoliło nam szybko pokonać nieśmiałość, a także każda z nas mogła liczyć na indywidualne podejście prowadzącej i pomoc w poprawie techniki. Wszystkie zajęcia były dobrze zorganizowane i zaplanowane, ale uczestniczki również miały wpływ na ich przebieg. \n\nW czasie tych 11 tygodni zauważyłam u siebie poprawę gibkości, zwinności, kondycji, pewności siebie, a świadomość, że dzisiaj wieczorkiem będzie Power People, niejednokrotnie poprawiała mi nastrój na cały dzień. Wielkie dzięki!',
			author: 'Marta o warsztatach: POWER PEOPLE',
			words: 'UMIEJĘ',
			words2: 'TNOŚCI',
			image: null,
		},
		{
			opinion:
				'Mega polecam interakcje z POWPOW. Kamila jest świetną organizatorką. Dawno temu skakałam z nią na trampach, a ostatnio miałam okazję brać udział w jej kursie Power People (Kama? Kiedy następne? ) Polecanko - wartościowe zajęcia, poznałam technikę, wzmocniłam ciałko i świetnie się bawiłam. 3w1 choć profity można wymieniać bez końca. Czekam na info z nowymi zajęciami.',
			author: 'Dominika o warsztatach: POWER PEOPLE',
			words: 'POLE',
			words2: 'CANKO',
			image: null,
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const goRight = () => {
		setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
	}

	useEffect(() => {
		const onScroll = () => {
			const { pageYOffset } = window
			if (pageYOffset > lastScrollTop) {
				setIsScrolled(false)
			} else if (pageYOffset < lastScrollTop) {
				setIsScrolled(true)
			}
			setLastScrollTop(pageYOffset <= 0 ? 0 : pageYOffset)
		}

		window.addEventListener('scroll', onScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [lastScrollTop])

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 2) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', scrollListener)

		return () => {
			window.removeEventListener('scroll', scrollListener)
		}
	}, [])

	useEffect(() => {
		if (window.location.hash === '#blog') {
			const blogSection = document.getElementById('blog')
			if (blogSection) {
				blogSection.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	return (
		<>
		{/* <Popup /> */}
			<Head>
				<title>POW POW RIDERS | POWDER POWER RIDERS</title>
				<meta
					name='description'
					content='Snowboard z Pow Pow Riders! Profesjonalna szkoła oferująca kursy snowboardowe, treningi mentalne, program treningowy. Dołącz do nas!'
				/>
			</Head>
			<div className='wrapper'>
				<Nav />
				<div className='page-container'>
					<section className='home'>
						<div className='image-container'>
							<ParallaxProvider>
								<Parallax speed={-10}>
									<img
										src='/img/IMG_3771.webp'
										className='mobileheadimg'
										width={'100%'}
										height={885}
										loading='eager'
										alt='zdjęcie grupowe podczas szkolenia na stoku narciarskim'
									/>
								</Parallax>
							</ParallaxProvider>
							<ParallaxProvider>
								<Parallax speed={-30}>
									<img
										src='/img/main-img-medium-2.webp'
										alt='zdjęcie grupowe podczas szkolenia na stoku narciarskim'
										className='mediumheadimg'
										width={'100%'}
										height={750}
										loading='eager'
									/>
								</Parallax>
							</ParallaxProvider>
							<ParallaxProvider>
								<Parallax speed={-40}>
									<img
										src='/img/newdekstopheaderimg.png'
										alt='zdjęcie grupowe z flagą szkółki podczas szkolenia na stoku narciarskim'
										className='desktopheadimg'
										width={'100%'}
										height={950}
										loading='eager'
									/>
								</Parallax>
							</ParallaxProvider>

							<div className='centerhead'>
								<h1>Pow Pow Riders</h1>
								<h2 className='new'>Cześć, Riders!</h2>
								<div className='btns'>
									<div className='btn-flex'>
										<Link href='/kurs-weekendowy.html' className='btn-ones'>
											<GiPlayButton className='checks' />
											Weekendowy progres
										</Link>
									<Link href='/spring-snow-pow-camp-lodowiec.html' className='btn-twos'>
										<GiPlayButton className='checks' />
										<span className='neon-yellow-text'>Camp na lodowcu</span>
									</Link>
									</div>
									<div className='btn-flex'>
										<Link href='/szkolenia-sits.html' className='btn-thre'>
											<GiPlayButton className='checks' />
											Chcę zostać Instruktorem
										</Link>
										<Link href='/kurs-butteringowy-snowboard.html' className='btn-four'>
											<GiPlayButton className='checks' />
											Chcę rozwijać się we freestyle
										</Link>
									</div>
								</div>
								<div className='btns'>
									<div className='btn-flex'>
										<Link href='/snowboardowa-polkolonia.html' className='btn-twos newbtnmain'>
											<GiPlayButton className='checks' />
											Półkolonie snowboardowe
										</Link>
										<Link href='https://page.co/tUWEKk' className='btn-thre newbtnmain' target='_blank'>
											<GiPlayButton className='checks' />
											Forma na snowboard
										</Link>
									</div>
								</div>
							</div>
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
						</div>
					</section>

					<section className='ebook'>
						<div className='ebook-content'>
							<div className='ebooktxt'>
								<h2>Program treningowo-rozwojowy w sportach zimowych oraz deskowych</h2>
								<ul>
									<li>Czy chcesz robić postępy, progres, ale nie wiesz, od czego zacząć?</li>
									<li>Czy miał_ś kiedykolwiek kontuzję?</li>
									<li>Czy zdarzyło Ci się kiedyś nie czuć zajawy z jazdy przez brak energii?</li>
									<li>
										Czy czujesz, że treningi, które robisz, są niewystarczające do wymagających górskich warunków, czy
										na snowpark?
									</li>
									<li>Czy zdarzyło Ci się rozchorować zimą?</li>
									<li>Jak oceniasz swoją odporność?</li>
									<li>Czy czujesz blokady mentalne, aby zacząć jeździć freestylowo?</li>
								</ul>
								<div class='link-to-ebook-container'>
									<a href='https://page.co/tUWEKk' className='link-to-ebook'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Czytam dalej
									</a>
								</div>
							</div>
							<Image
								src='/img/ebook-mockup-desktop.webp'
								alt='mockup programu treningowego ridera szkoły pow pow riders'
								sizes='100vw'
								className='mockup-desktop'
								style={{ width: '50%', height: '500' }}
								width={0}
								height={500}
							/>
						</div>
					</section>

					<section className='ebookmobile'>
						<div className='ebook-content-mobile'>
							<div className='ebooktxtmmobile'>
								<h2>Program treningowo-rozwojowy w sportach zimowych oraz deskowych</h2>
							</div>
							<Image
								src='/img/mockup-mobile-ebook.webp'
								alt='mockup programu treningowego ridera szkoły pow pow riders'
								sizes='100vw'
								className='mockup-desktop'
								style={{ width: '100%', height: '100%' }}
								width={0}
								height={0}
							/>
							<a href='https://page.co/tUWEKk' className='moblink-to-book'>
								<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Chcę poznać program
							</a>
						</div>
					</section>

					<section className='lessons-road'>
						<div className='road-img'>
							<img
								src='/img/mockup-1.webp?v=2'
								onClick={() => handleImageClick3('/img/mockup-one.webp?v=2')}
								alt='mockup ebooka pow pow riders'
								width='442'
								height='681'
								className='mockup-desk'
							/>
							<img
								src='/img/mockup-2-new.webp'
								onClick={() => handleImageClick3('/img/mockup-two.webp')}
								alt='mockup ebooka pow pow riders'
								width='221'
								height='341'
								className='mockup-mob'
							/>
							<img
								src='/img/mockup-3-new.webp'
								onClick={() => handleImageClick3('/img/mockup-three.webp?v=2')}
								alt='mockup ebooka pow pow riders'
								width='221'
								height='341'
								className='mockup-mob'
							/>
							<img
								src='/img/mockup-mob-3.webp'
								onClick={() => handleImageClick3('/img/mockup-four.webp?v=2')}
								alt='mockup ebooka pow pow riders'
								width='221'
								height='341'
								className='mockup-mob'
							/>
							<img
								src='/img/mockup-3.webp?v=2'
								onClick={() => handleImageClick3('/img/mockup-three.webp?v=2')}
								alt='mockup ebooka pow pow riders'
								width='442'
								height='681'
								className='mockup-desk'
							/>
							<img
								src='/img/powpow-mockup-8.webp'
								onClick={() => handleImageClick3('/img/mockup-four.webp?v=2')}
								alt='mockup ebooka pow pow riders'
								width='442'
								height='681'
								className='mockup-desk'
							/>
						</div>
						<style jsx>{`
							.lessons-road {
								margin-top: 0px;
							}
							.lessons-road .road-img {
								margin-top: 80px;
							}
							.lessons-road .road-img .mockup-desk {
								display: none;
								width: 25%;
								height: auto;
							}
							.lessons-road .road-img .mockup-mob {
								height: auto;
							}
							@media (min-width: 880px) {
								.lessons-road .road-img .mockup-desk {
									display: block;
								}
								.lessons-road .road-img .mockup-mob {
									display: none;
								}
							}
						`}</style>
					</section>

					<section className='snowboard-lessons'>
						<h3>Szkolenia snowboardowe</h3>
						<div className='boxes-lessons'>
							<div className='lessons-sits'>
								<div className='lesson'>
									<p>II Stopień SITS</p>
									<Link href='/II-stopien-sits.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdzam
									</Link>
								</div>
								<div className='lesson'>
									<p>III Stopień SITS</p>
									<Link href='/III-stopien-sits.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdzam
									</Link>
								</div>
								<div className='lesson'>
									<p>Asystent Instruktora SITS</p>
									<Link href='/asystent-instruktora-sits.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdzam
									</Link>
								</div>
							</div>
							<div className='lessons-ppr'>
								<div className='lesson'>
									<p>Kursy Indywidualne</p>
									<Link href='/snow-pow-class-kursy-snowboardowe-indywidualne.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdzam
									</Link>
								</div>
								<div className='lesson'>
									<p>Szkolenia Grupowe</p>
									<Link href='/spring-snow-pow-camp-lodowiec.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdzam
									</Link>
								</div>
								
							</div>
							<div className='lessons-ppr'>

							<div className='lesson'>
									<p>Freestyle na stoku & snowparku</p>
									<Link href='/kurs-butteringowy-snowboard.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdzam
									</Link>
								</div>
								<div className='lesson'>
									<p>Półkolonia</p>
									<Link href='/snowboardowa-polkolonia.html'>
										<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Sprawdzam
									</Link>
								</div>
							</div>
						</div>
					</section>

					<section className='reviews'>
						<div className='review-head'>
							<h4 className='feel-head'>
								Feeling naszych wspaniałych uczestniczek <span>opinie o pow pow riders</span>i uczestników szkoleń
								snowboardowych i treningów.
							</h4>
						</div>

						<div id='content'>
							<div className='box-review-content'>
								<div className='testimonial'>
									<blockquote>
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

					<section className='blog' id='blog'>
						<h5>BLOG RIDERA</h5>
						<div className='one-group-art'>
						<div className='box-article firsts'>
								<h6>Tam jest najlepszy śnieg na ziemi!</h6>
								<p>
								Zastanawiałaś/łeś się kiedyś, jakie jest Twoje wymarzone miejsce na snowboarding na świecie? Takie, które sprawia, że serce zaczyna bić szybciej, a cel ten wydaje się niemal nieosiągalny. Jaki snowpark, freeride czy resort jest na Twojej snowboardowej bucket list? Może heliboarding? A może wejście ze sprzętem na Kasprowy czy Łomnicki Szczyt i zjazd z niego?[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/tam-jest-najlepszy-snieg-na-ziemi/'>Czytam więcej...</Link>
								</div>
							</div>
						</div>
						<div className='one-group-art'>
							<div className='box-article'>
								<h6>Plusy i minusy bycia Instruktorem Snowboardu</h6>
								<p>
									Instruktor Snowboardu SITS to nie tylko wysokie kwalifikacje i możliwość szkolenia riderów w Polsce i
									na europejskich lodowcach, czyli fajny pomysł na pracę zarobkową.[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/plusy-i-minusy-bycia-instruktorem-snowboardu/'>Czytam więcej...</Link>
								</div>
							</div>
							<div className='box-article'>
								<h6>Sporty zimowe a badania okresowe</h6>
								<p>
									Zdrowy organizm to dużo energii do uprawiania sportów zimowych przez cały sezon. To radość i zajawka z
									jazdy. To brak przeziębień, przeciążeń[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/sporty-zimowe-a-badania-okresowe/'>Czytam więcej...</Link>
								</div>
							</div>
						</div>
						<div className='one-group-art'>
							<div className='box-article'>
								<h6>Naturalne suplementy — apiterapia w sportach zimowych</h6>
								<p>
									Nie policzę, ile razy słyszałam od riders historie o byciu zmarzlakiem. Ale to nie jest tak, że
									jesienią i zimą trzeba chorować.[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/naturalne-suplementy-apiterapia-w-sportach-zimowych/'>Czytam więcej...</Link>
								</div>
							</div>
							<div className='box-article'>
								<h6>Trening ridera sportów zimowych</h6>
								<p>
									Power Knees krok po kroku przez 4 lub 8 tygodni przygotowuje ridera do sezonu zimowego; przede
									wszystkim pod kątem formy fizycznej, ale również mentalnej. […]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/trening-ridera-sportow-zimowych/'>Czytam więcej...</Link>
								</div>
							</div>
						</div>
						<div className='one-group-art'>
							<div className='box-article'>
								<h6>LODOWIEC | co musisz wiedzieć, zanim spakujesz snowboard i ruszysz na trzytysięcznik</h6>
								<p>
									Dwa tygodnie temu zgłosił się do mnie rodzic 12-letniego chłopca z pytaniem o lekcje snowboardowe z
									ukierunkowaniem na pierwszy w życiu shred na lodowcu.[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/https-www-instagram-com-powpow_riders/'>Czytam więcej...</Link>
								</div>
							</div>
							<div className='box-article'>
								<h6>Najbardziej odjechane zawody & event snowboardowy</h6>
								<p>
									Edycja 2022 stała pod znakiem zapytania. Nie tylko ze względu na sytuację na świecie, ale też niepewne
									warunki pogodowe.[…]
								</p>
								<div className='link-to-more'>
									<Link href='/pow-store/najbardziej-odjechane-zawody-event-snowboardowy/'>Czytam więcej...</Link>
								</div>
							</div>
						</div>
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

					<section id='company-data-home'>
						<h6>DANE FIRMY</h6>
						<p>Kamila Święczkowska CRE ∞ POWDER POWER RIDERS</p>
						<p>ul. Krzysztofa Kamila Baczyńskiego 37, 16-001 Kleosin</p>
						<p style={{ color: 'black', textDecoration: 'none', cursor: 'text', pointerEvents: 'none' }}>Nip: 9662144961</p>
						<p style={{ color: 'black', textDecoration: 'none', cursor: 'text', pointerEvents: 'none' }}>Regon: 387535155</p>
						<p style={{ color: 'black', textDecoration: 'none', cursor: 'text', pointerEvents: 'none' }}>Nr konta: PL74 1140 2004 0000 3102 8070 7864</p>
						<p>E-mail: <a href='mailto:powpow.riders@gmail.com'>powpow.riders@gmail.com</a></p>
						<p>Telefon: <a href='tel:+48796200308'>796200308</a> <br></br> dostępny: pon.-pt. 9–17 sob. 10-13</p>
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

					{selectedImage2 && (
						<div className='modal2' onClick={handleCloseClick2}>
							<button className='close2' onClick={handleCloseClick2}>
								X
							</button>
							<img src={selectedImage2} alt='powiększony obraz' />
						</div>
					)}
					{selectedImage3 && (
						<div className='modal-new' onClick={handleCloseClick3}>
							<button className='close-new' onClick={handleCloseClick3}>
								X
							</button>
							<img src={selectedImage3} alt='powiększony obraz' />
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Home
