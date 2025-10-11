import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { GiPlayButton } from 'react-icons/gi'
import { AiFillCaretDown } from 'react-icons/ai'
import Popup from '@/components/Popup'

const Snwbski = () => {
	// const reviews = [
	// 	{
	// 		opinion: null,
	// 		author: 'Marcel o Ebook Power Knees',
	// 		words: 'EWO',
	// 		words2: 'LUCJE',
	// 		image: '/img/opinion-ebook.webp',
	// 	},
	// 	{
	// 		opinion: null,
	// 		author: 'Sylwia o Ebook Power Knees',
	// 		words: 'PRO',
	// 		words2: 'GRES',
	// 		image: '/img/opinion-ebook2.webp',
	// 	},
	// ]

	// const [currentIndex, setCurrentIndex] = useState(0)

	// const goRight = () => {
	// 	setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
	// }
	// const [faqs, setFaqs] = useState([
	// 	{
	// 		question: 'Jestem po kontuzji, czy mogę ćwiczyć z Power Knees?',
	// 		answer:
	// 			'Jeśli właśnie wracasz do zdrowia, to wspaniale! Ale w takim przypadku zawsze trzeba być ostrożnym. Zadaj sobie pytanie, czy czujesz już pełną sprawność, czy proces leczenia został zakończony. Do treningów w  Power Knees niezbędne jest bycie zdrowym. Są tu też ćwiczenia, które byłyby zdecydowanie na korzyść po kontuzji, np. docisk, ale wiele też zależy od tego, jaką kontuzję masz za sobą. Ufaj swojemu ciału i wskazówkom fizjo oraz lekarza.',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Czy e-book zawiera ćwiczenia na schodach z insta?',
	// 		answer:
	// 			'Ćwiczenia dla riders z wykorzystaniem schodów można znaleźć na instagramie @powpow_riders. Są to pojedyncze ćwiczenia. Te, które możecie znaleźć w e-booku nie pokrywają się z nimi oraz tworzą plan 8-tygodniowy. W nim z kolei zawarta jest progresja, czyli wzrost ilości powtórzeń konkretnych ćwiczeń, ich stopień zaawansowania, złożoność oraz zastosowanie akcesoriów treningowych.   ',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Czy jest potrzebny sprzęt?',
	// 		answer:
	// 			'Nie jest niezbędny, ale bardzo fajnie jakby się pojawił. Jeśli nie od razu, to chociaż z czasem. W e-booku ćwiczyć będziesz głównie z gumą oporową i dyskiem sensorycznym. Są to akcesoria, które zdecydowanie warto mieć, są niedrogie, zajmują niewiele miejsca, a mocno wpłyną na efekty ćwiczeń. Jednak na samym początku możesz zacząć bez akcesoriów. W niektórych ćwiczeniach z gumą treningową będziesz mieć możliwość użycia małego ciężaru. We wszystkich ćwiczeniach z dyskiem możesz użyć poduszki. Podsumowując, na strat domowe zamienniki są w porządku. Po jednym/dwóch tygodniach ćwiczeń warto rozejrzeć się za sprzętem.',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Jak pobrać e-book po zakupie?',
	// 		answer:
	// 			'Gdy zrealizujesz zamówienie korzystając z płatności: \n -automatycznej, Twój e-book będzie dostępny do pobrania od razu po zakupie,\n -tradycyjnej, od razu po zaksięgowaniu wpłaty zamówienie zmieni status na zrealizowane, wtedy Twój e-book automatycznie pojawi się na Twoim e-mailu i/lub koncie w Pow Store.',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'W jakim formacie jest e-book?',
	// 		answer:
	// 			'Jest to e-książka, którą pobierzesz w formacie PDF. Najbardziej rekomendowane do jej odtworzenia są: smartfon, tablet, komputer. ',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Czy trening siły eksplozywnej poza sezonem też ma sens?',
	// 		answer:
	// 			'Tak. Zdecydowanie tak. Trenowanie eksplozywne to między innymi zachowanie wydajności mięśni, ale też mega test dla formy i ogromna dawka adrenaliny, więc czemu by sobie odmawiać? ',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Jak korzystać z Power Knees w trakcie sezonu?',
	// 		answer:
	// 			'Odpowiem pytaniem: Jaką jazdę planujesz? Park/stok, rekreacyjnie/freeride? Pod to zaplanuj resztę. Sporty śnieżne, niezależnie od dyscypliny, zawsze są intensywnym treningiem, przede wszystkim dla dolnego ciała. Możesz więc cały dzień na śniegu porównać do zmęczenia po W— F—. Cały dzień z deską czy nartami to też ogrom koncentracji, koordynacji, balansu, więc robienie W— V— w pełnej intensywności, w tym samym dniu, który spędziłeś na stoku, czy dzień później, nie do końca jest dobrym pomysłem. Ale fajnym pomysłem po dniu na stoku może być np. długi spacer czy relaksująca sesja jogi i oczywiście W— B— z e-booka. ',
	// 		isOpen: false,
	// 	},
	// 	{
	// 		question: 'Czy pojedyncze ćwiczenia z  planu można stosować w rozgrzewce przed jazdą na śniegu?',
	// 		answer:
	// 			'No jasne! Ćwiczenia na balans z  W— V— czy eksplozywne z W— F— na pewno pobudzą czucie głębokie, siłę eksplozywną, uruchomią mięśnie całego ciała i core do pracy. Na śniegu więc będziesz mieć fajny vibe, wzrośnie umiejętność dynamicznego manewrowania środkiem ciężkości, a umysł odpali się na śnieżne przygody, wzmocni się koncentracja, pobudzi kreatywność.',
	// 		isOpen: false,
	// 	},
	// ])

	// const toggleAnswer = index => {
	// 	const newFaqs = [...faqs]
	// 	newFaqs[index].isOpen = !newFaqs[index].isOpen
	// 	setFaqs(newFaqs)
	// }

	useEffect(() => {
		if (window.location.hash === '#faq') {
			const blogSection = document.getElementById('faq')
			if (blogSection) {
				blogSection.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	// const styleObject = {
	// 	marginTop: '20px',
	// 	background: 'transparent',
	// }
	// const bgcblockq = {
	// 	backgroundColor: 'white',
	// 	opacity: '0.85',
	// }

	const reviews = [
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
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const goRight = () => {
		setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)
	}

	return (
		<>
		{/* <Popup /> */}
			<Head>
				<title>Pow Pow Riders | Forma na snowboard i narty</title>
				<meta
					name='description'
					content='Odkryj jak poprawić swoją formę na snowboardzie i nartach z Pow Pow Riders. Oferujemy profesjonalne treningi i kursy, które pomogą Ci osiągnąć maksymalną wydajność i bezpieczeństwo na stoku.'
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

					<section className='ebook-infos'>
						<h1>
							FORMA NA<span> SNOWBOARD I NARTY</span>
						</h1>
						<div className='why-powpow'>
							<div className='why-content'>
								<h2 className='why-head'>trening mindset energia</h2>
								<ul>
									<li>8-tygodniowy program treningowo-rozwojowy w sportach zimowych oraz deskowych</li>
									<li>dwa plany treningowe różniące się stopniem zaawansowania </li>
									<li>ćwiczenia dedykowane dla riders</li>
									<li>13 ważnych tematów (podrozdziałów) o świadomym treningu, odporności, energii do sportu zimą </li>
									<li>osobna część ebooka o treningu mentalnym ridera zimowego</li>
									<li>#WORKBOOK a w nim ćwiczenia treningu mentalnego wspierające progres</li>
								</ul>
								<p className='dscrb-ebook-page'>
									<span>Część treningu sportowego</span> to przejrzyste, konkretne rozpiski na każdy dzień tygodnia
									przez 2 miesiące. Karty treningowe zawierają w sobie niezbędne do wykonania treningu informacje. Aż
									chcę się odpalić dobrą muzykę i zacząć trening!
								</p>
								<p className='dscrb-ebook-page'>
									{' '}
									Resztę wskazówek, tj. sposób wykonania wraz z dokładnym opisem każdego z ćwiczeń, poznasz, czytając
									karty poszczególnych ćwiczeń. To w nich poznasz dany ruch oraz skorygujesz swoją technikę. To bardzo
									ważne, aby trening spełniał swoje funkcje i był bezpieczny dla Twojego zdrowia.{' '}
								</p>
								<br></br>
								<p className='dscrb-ebook-page'>
									<span>Część treningu mentalnego</span> to bardzo trudno dostępna na polskim rynku wiedza o treningu
									mentalnym ridera zimowego. Przygotowanie holistyczne, jak też dbanie o zdrowie całościowo jest
									niepełne bez niej.
								</p>
								<p className='dscrb-ebook-page'>
									W tej części przeczytasz krótko o 3 ważnych tematach, na które należy zwrócić uwagę, a wskazówki w
									nich zawarte skonfrontować wewnętrznie samemu ze sobą, aby mieć pełną kontrolę nad własnym zdrowiem i
									rozwojem w śnieżnej pasji.
								</p>
								<br></br>
								<p className='dscrb-ebook-page'>
									<span>Ale to nie wszystko!</span> Ta część zawiera również #workbook, czyli zeszyt ćwiczeń. Tę część
									e-booka warto wydrukować i wypełniać zawsze kiedy będziesz szykować się do nowej ewolucji
									snowboardowej lub narciarskiej.
								</p>

								<div className='one-line-btn'>
									<div className='check-our-lessons'>
										<a href='https://page.co/tUWEKk' className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Czytam dalej
										</a>
									</div>
									<div className='check-our-lessons'>
										<a
											href='https://powpowriders.com/pow-store/produkt/8-tygodniowy-pogram-treningowo-rozwojowy-sporty-zimowe/'
											className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Chcę kupić e-book
										</a>
									</div>
								</div>
							</div>
							<div className='why-img'>
								<img src='/img/ebookks.webp' alt='logo promujące ebooka power knees od pow pow riders' />
							</div>
						</div>

						<style jsx>{`
							.ebook-infos h1 {
								font-size: 27px;
								padding-left: 3px;
								padding-right: 3px;
							}
							.why-powpow {
								margin-top: 25px;
								margin-bottom: 45px;
							}
							.why-powpow .why-content {
								margin-top: -50px;
								padding-bottom: 20px;
								padding-top: 20px;
							}
							.why-powpow .why-content .dscrb-ebook-page {
								padding-left: 6px;
								padding-right: 6px;
							}
							.why-powpow .why-content .check-our-lessons .link-to-sits-shop {
								margin-bottom: 0px;
							}
							.why-img img {
								height: auto;
							}
							.ebook-infos .why-powpow .why-content .why-head {
								color: #0097d0;
							}
							.ebook-infos h1 {
								letter-spacing: 4px;
							}
							.ebook-infos .why-powpow .why-content .one-line-btn .check-our-lessons:nth-child(1) .link-to-sits-shop {
								background-color: #cddfe9;
								color: black;
							}
							.ebook-infos
								.why-powpow
								.why-content
								.one-line-btn
								.check-our-lessons:nth-child(1)
								.link-to-sits-shop:hover {
								-webkit-box-shadow: 12px 12px 0px 1px #cddfe9;
								-moz-box-shadow: 12px 12px 0px 1px #cddfe9;
								box-shadow: 12px 12px 0px 1px #cddfe9;
								background-color: white;
							}
							@media (min-width: 300px) {
								.ebook-infos .why-powpow .why-content .one-line-btn .check-our-lessons .link-to-sits-shop {
									justify-content: center;
									width: 255px;
								}
							}
							@media (min-width: 620px) {
								.ebook-infos h1 span {
									display: inline;
								}
							}
							@media (min-width: 900px) {
								.ebook-infos h1 {
									font-size: 34px;
								}
							}
							@media (min-width: 980px) {
								.why-powpow .why-content {
									margin-top: 0px;
								}
								.why-img img {
									width: 350px;
									height: 350px;
								}
							}
							// @media (min-width: 1300px) {
							// 	.ebook-infos .why-powpow .why-content .one-line-btn {
							// 		display: flex;
							// 		gap: 20px;
							// 	}
							// }
						`}</style>
					</section>

					{/* <section id='faq-ebook'>
						<div className='faq-txt' id='faq'>
							<p className='dscrb-ebook-page'>
								<span>faq</span> Częste pytania o e-booka:
							</p>
							{faqs.map((faq, index) => (
								<>
									<div className='box-faq' key={index}>
										<p className='ask-ebook'>{faq.question}</p>
										<button
											onClick={() => toggleAnswer(index)}
											className='btn-faq'
											aria-label={faqs[index].isOpen ? 'Ukryj odpowiedź' : 'Pokaż odpowiedź'}>
											<AiFillCaretDown className='check' style={{ marginRight: 5 }} />
										</button>
									</div>
									{faq.isOpen && <p className='answ-ebook'>{faq.answer}</p>}
								</>
							))}
						</div>
						<div className='faq-img'>
							<img src='/img/mockup-three.webp' alt='' />
						</div>
					</section> */}
					{/* 
					<section className='reviews' style={styleObject}>
						<div className='review-head'>
							<h3 className='feel-head'>
								OPINIE O <span>EBOOK POWER KNEES</span>
							</h3>
						</div>

						<div id='content'>
							<div className='box-review-content'>
								<div className='testimonial'>
									<blockquote style={bgcblockq}>
										{reviews[currentIndex].opinion && <p className='review-txt'>{reviews[currentIndex].opinion}</p>}
										{reviews[currentIndex].image && (
											<img src={reviews[currentIndex].image} alt='Opinia w formie obrazu' className='opinion-img' />
										)}
										<div className='bgc-reviews-words'>
											{reviews[currentIndex].words && !reviews[currentIndex].image && (
												<p className='line-after'>{reviews[currentIndex].words}</p>
											)}
											{reviews[currentIndex].words2 && !reviews[currentIndex].image && (
												<p className='line-before'>{reviews[currentIndex].words2}</p>
											)}
											{reviews[currentIndex].words3 && !reviews[currentIndex].image && (
												<p className='line-after'>{reviews[currentIndex].words3}</p>
											)}
										</div>
										<button onClick={goRight}>{'>'}</button>
									</blockquote>
									<div className='who'></div>
									<p className='author'>{reviews[currentIndex].author}</p>
								</div>
							</div>
						</div>
						<style jsx>{`
							.reviews .review-head .feel-head {
								text-transform: uppercase;
								color: #0097d0;
								font-family: 'Bely Display', sans-serif;
								font-weight: 400;
							}
							@media (min-width: 620px) {
								.reviews .review-head .feel-head span {
									display: inline;
								}
							}
						`}</style>
					</section> */}

					<section className='ebook-session'>
						<div className='box-session'>
							<img src='/img/session-ebook.webp' alt='sesja zdjęciowa autorki dla ebooka' />
							<img src='/img/session-ebook2.webp' alt='sesja zdjęciowa autorki dla ebooka' />
						</div>
					</section>

					<section className='about-pp'>
						<div className='why-powpow'>
							<div className='why-content'>
								<h2 className='why-head'>Warsztaty dla Riders</h2>
								<p>
									Power People to przede wszystkim chęć dzielenia się wiedzą o zdrowiu, oparta o specjalistyczną wiedzę
									i doświadczenia kontuzji. To odzyskane zdrowie i wiara w to, że większość z nich można uniknąć.
									Powiemy Ci jak rozwijać się i cieszyć sezonem, Twoją pasją w pełni.
								</p>
								<p>
									Efekt warsztatów niesie zawsze ze sobą plusy w sportowym przygotowaniu, brak kontuzji, poszerzenie
									wiedzy o swoim ciele, naukę czytania symptomów spadku odporności oraz rozwój umiejętności jazdy i nowe
									ewolucje.
								</p>
								<div className='one-line-btn'>
									<div className='check-our-lessons'>
										<a href='https://page.co/5w8tf' className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Czytam dalej
										</a>
									</div>
									<div className='check-our-lessons'>
										<a href='/pow-store/produkt/warsztaty-przedsezonowe-10-12-11-23/' className='link-to-sits-shop'>
											<GiPlayButton className='check' />
											Zapisy
										</a>
									</div>
								</div>
							</div>
							<div className='why-img'>
								<img src='/img/warsztatypp.webp' alt='logo promujące warsztaty power people szkółki pow pow riders' />
							</div>
						</div>
						<style jsx>{`
							.why-powpow {
								margin-top: 25px;
								margin-bottom: 45px;
							}
							.why-powpow .why-content {
								margin-top: -50px;
								padding-bottom: 20px;
								padding-top: 20px;
							}
							.why-powpow .why-content .check-our-lessons .link-to-sits-shop {
								margin-bottom: 0px;
							}
							.why-img img {
								height: auto;
							}
							.why-powpow .why-content p {
								margin-top: 10px;
							}
							.about-pp .why-powpow .why-content .why-head {
								color: #0097d0;
							}
							.about-pp .why-powpow .why-content .one-line-btn .check-our-lessons:nth-child(1) .link-to-sits-shop {
								background-color: #cddfe9;
								color: black;
							}
							.about-pp
								.why-powpow
								.why-content
								.one-line-btn
								.check-our-lessons:nth-child(1)
								.link-to-sits-shop:hover {
								-webkit-box-shadow: 12px 12px 0px 1px #cddfe9;
								-moz-box-shadow: 12px 12px 0px 1px #cddfe9;
								box-shadow: 12px 12px 0px 1px #cddfe9;
								background-color: white;
							}
							@media (min-width: 300px) {
								.about-pp .why-powpow .why-content .one-line-btn .check-our-lessons .link-to-sits-shop {
									justify-content: center;
									width: 275px;
								}
							}
							// @media (min-width: 980px) {
							// 	.why-powpow .why-content {
							// 		padding-right: 25px;
							// 	}
							// }
							@media (min-width: 980px) {
								.why-img img {
									width: 350px;
									height: 350px;
								}
								.why-powpow .why-content {
									margin-top: 0px;
								}
							}
							// @media (min-width: 1300px) {
							// 	.about-pp .why-powpow .why-content .one-line-btn {
							// 		display: flex;
							// 		gap: 20px;
							// 	}
							// }
						`}</style>
					</section>

					<section className='reviews'>
						<div className='review-head'>
							<h4 className='feel-head'>
								Feeling naszych wspaniałych uczestniczek <span style={{ color: 'black' }}>opinie o pow pow riders</span>i uczestników szkoleń
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

export default Snwbski
