import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Head from "next/head";
import Image from "next/image";
import { MdPlace } from "react-icons/md";
import { GiPlayButton } from "react-icons/gi";
import Slider from "@/components/Slider";
import { AiOutlineRight, AiOutlineLeft, AiFillCaretDown } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Popup from '@/components/Popup'

const imagesone = [
  "/img/camp-gallery/freestyle/41.webp",
  "/img/camp-gallery/freestyle/42.webp",
  "/img/camp-gallery/freestyle/44.webp",
  "/img/camp-gallery/freestyle/45.webp",
  "/img/camp-gallery/freestyle/46.webp",
  "/img/camp-gallery/freestyle/47.webp",
  // ... inne zdjęcia
];

const imagestwo = [
  "/img/camp-gallery/freestyle/fs day PowPowRiders (4).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (8).webp",
  // '/img/camp-gallery/freestyle/fs day PowPowRiders (9).jpg',
  "/img/camp-gallery/freestyle/fs day PowPowRiders (12).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (14).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (15).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (17).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (21).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (22).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (23).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (24).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (25).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (26).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (27).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (28).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (29).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (30).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (31).webp",
  "/img/camp-gallery/freestyle/fs day PowPowRiders (33).webp",
];

const imagesthree = [
  "/img/camp-gallery/domekipoza/1.webp",
  "/img/camp-gallery/domekipoza/2.webp",
  "/img/camp-gallery/domekipoza/3.webp",
  "/img/camp-gallery/domekipoza/4.webp",
  "/img/camp-gallery/domekipoza/5.webp",
  "/img/camp-gallery/domekipoza/6.webp",
  "/img/camp-gallery/domekipoza/7.webp",
  "/img/camp-gallery/domekipoza/8.webp",
  "/img/camp-gallery/domekipoza/9.webp",
  "/img/camp-gallery/domekipoza/10.webp",
  "/img/camp-gallery/domekipoza/11.webp",
  "/img/camp-gallery/domekipoza/48.webp",
  "/img/camp-gallery/domekipoza/51.webp",
  "/img/camp-gallery/domekipoza/fs day PowPowRiders (1).webp",
  "/img/camp-gallery/domekipoza/fs day PowPowRiders (3).webp",
];

const Group = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navbarRef = useRef(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionIndex2, setSectionIndex2] = useState(0);
  const [sectionIndex3, setSectionIndex3] = useState(0);
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    // Funkcja do aktualizacji szerokości okna
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Ustawienie początkowej szerokości
    handleResize();

    // Nasłuchiwanie zmiany rozmiaru okna
    window.addEventListener("resize", handleResize);

    // Oczyszczenie nasłuchiwania
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRightArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleLeftArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleRightArrowClick2 = () => {
    setSectionIndex2((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleLeftArrowClick2 = () => {
    setSectionIndex2((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleRightArrowClick3 = () => {
    setSectionIndex3((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleLeftArrowClick3 = () => {
    setSectionIndex3((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleImageClick3 = (src) => {
    setSelectedImage3(src);
  };
  const handleCloseClick3 = () => {
    setSelectedImage3(null);
  };

  const reviews = [
    {
      opinion:
        "Jeżeli chodzi o relacje z wyjazdów, bo brałem udział w kilku snow pow campach i szkoleniach sits, niesamowicie wiele się dowiedziałem, bardzo poszerzyłem horyzonty. \n\nDzięki współpracy z pow pow, mogę śmiało powiedzieć, że wszedłem na wyższy poziom w snowboardzie. \n\nTo czego nie mogę odmówić szkoleniom to to, że niesamowicie podniosły mi umiejętności i przygotowały mentalnie do pełnienia odpowiedzialnej roli instruktora i zetknięcia się z nauką innych już na kursie, kiedy zawsze byłem na nim uczeniem.",

      author:
        "Filip o szkoleniu: SNOW POW CAMP, Asystent Instruktora SITS, II stopień SITS, III stopień SITS",
      words: "WSPÓŁ",
      words2: "PRACA",
      image: null, // brak obrazu
    },
    {
      opinion:
        "Było extra na Snow Pow Camp! Mega mi się podobało. Atmosfera mega miła, dyskusje chłopaków na kanapie niezapomniane.",

      author: "Zoja o szkoleniu: SNOW POW CAMP",
      words: "ATMO",
      words2: "SFERA",
      image: null,
    },
    {
      opinion:
        "Bardzo podobała mi się nasza współpraca podczas Snow Pow Camp. Rodzinna, przyjazna, swobodna i to było niezapomniane.",

      author: "Zuza o szkoleniu: SNOW POW CAMP",
      words: "SWO",
      words2: "BODA",
      image: null,
    },
    {
      opinion:
        "Zarówno ludzie jak i atmosfera w trakcie Snow Pow Campu były cudowne.",

      author: "Helena o szkoleniu: SNOW POW CAMP",
      words: "LU",
      words2: "DZIE",
      image: null,
    },
    {
      opinion:
        "Było cudownie na Snow Pow Camp. Szkolenia, organizacja wszystkich szczegółów od posiłków po treningi, morsowanie bosą stopą. 10/10 gwiazdek i uśmiechów.",

      author: "Kasia o szkoleniu: SNOW POW CAMP ",
      words: "ORGA",
      words2: "NIZACJA",
      image: null,
    },
    {
      opinion:
        "Snow Pow Camp to był obóz, którego potrzebowałem. Chwili relaksu i odpoczynku od codzienności. Spędziłem miło czas z super ekipą.",

      author: "Filip o szkoleniu: SNOW POW CAMP",
      words: "MIŁY",
      words2: "CZAS",
      image: null,
    },
    {
      opinion:
        "Mega polecam Szkolenia SITS z POW POW RIDERS. W mojej jeździe zmieniło się wszystko, na plus, ale najbardziej pewność siebie na desce.\nPomogło mi zrobić duży progres na skoczniach i przeszkodach. Atmosfera, jaką się tworzy na kursie bardzo pomaga w podnoszeniu skilla oraz próbowaniu nowych rzeczy, każdy każdego motywuje, każdy każdemu kibicuje. Zajęcia super prowadzone.\nPani Kamila zawsze pomocna + największy motywator jakiego można spotkać. Pow Pow Familly 🔥",

      author: "Witek o szkoleniu: Asystent Instruktora SITS",
      words: "PRO",
      words2: "GRES",
      image: null,
    },
    {
      opinion:
        "Szkolenie Sits to był bardzo intensywny tydzień, nigdy w tak krótkim czasie nie dowiedziałem się tyle o snowboardingu ile podczas tego tygodnia. Jestem dumny z opanowania skrętu ciętego WN i ze śmigu ciętego, w ogóle jazda na krawędzi stała się pewna i trzymająca się nawet na lodzie. Wszystkie skręty cięte wjechały na wyższy poziom:) Przełamałem się też po traumatycznych przeżyciach z przeszłości do skoku na skoczni. Polecam szkołę snowboardingu POW POW Riders GDYŻ: \n \n>instruktorzy POW POW kompleksowo dbają o każdego uczestnika szkolenia\n >mają indywidualne podejście\n >tworzą rodzinną, ciepłą atmosferę \n>oprócz szkolenia na desce na stoku prowadzą również treningi mentalne i ogólnorozwojowe.\n\n Dla Kamili, właścicielki POW POW RIDERS, snowboarding to nie tylko sposób na zarabianie pieniędzy, ale pasja, serce, ona tym żyje, tym oddycha. To zaraźliwe. Kama Kama Kama Kamili ON. Co więcej, wartości etyczne, kultura osobista i zrozumienie innych mają w POW POW duże znaczenie, w związku z tym czujesz się bezpiecznie i zaopiekowany. Co nie zdarza się często. Bardzo ważne jest też to, że POW POW to nie tylko szkoła, to rodzina, która zostaje z Tobą na dłużej, oczywiście tylko wtedy jeśli tego chcesz i potrzebujesz. Family meet vol. 1 to tradycja, która dla mnie zrodziła się z chęci bycia częścią wspólnoty riders respektujących zrównoważony rozwój, wolność, jedność, ceniących moment i piękno gór.",

      author: "Beniamin o szkoleniu: III stopień SITS, SNOW POW CLASS",
      words: "PA",
      words2: "SJA",
      image: null,
    },
    {
      opinion:
        "Pow Pow Riders wymiata pod wieloma aspektami. Cieszę się, że miałam okazje uczestniczyć w ich kursie SiTS, podczas którego w mojej głowie poszerzyło się rozumowanie snowboardingu ;) \n\nByło kameralnie i to było dużym plusem podczas kursu, był bezpośredni kontakt z instruktorką Kamilą i bardzo ciepła atmosfera, którą stwarzała instruktorka. Kurs polegał nie tylko i wyłącznie na poszerzaniu wiedzy teoretycznej czy też praktycznej, bo praktyki było najwięcej, co bardzo cenię. \n\nDziało się znacznie więcej. Była okazja do wspólnych analiz, pytań i odpowiedzi, rozmów, podczas których można było dowiedzieć się bardzo wiele cennych informacji. Najbardziej podjarana jestem tym, że niektóre elementy, które Kamila przeplatała podczas jazdy na stoku, odblokowały mi myślenie i kreatywność, którą wykorzystam podczas swoich lekcji jako instruktorka. \n\nPow Pow Riders to pro wybór na instruktora, jest sztos ! Na pewno nie poprzestanę na kursie asystenta i myślę, że dalszy krok do przodu będzie z Pow Pow, bo to świetny wybór ;)",

      author: "Brygida o szkoleniu: Asystent Instruktora SITS",
      words: "PRA",
      words2: "KTY",
      words3: "KA",
      image: null,
    },
    {
      opinion:
        'Jestem niezwykle zadowolony z tygodniowego szkolenia na Asystenta Instruktora w Pow Pow Riders. Jakość szkolenia była znakomita. Instruktorzy podchodzili do nauczania w sposób profesjonalny, ale jednocześnie przyjazny i zrozumiały. \n\nIch pasja i wiedza na temat snowboardu były inspirujące, co pozwoliło mi nie tylko poprawić technikę jazdy, ale także nabrać pewności siebie na snowboardzie, zarówno jeżdżąc na "słabszą" nogę, jak i podczas freestyleu. Warto też dodać, że instruktorzy oferowali nieocenione wsparcie mentalne, co dodatkowo pomogło mi uwierzyć w swoje umiejętności. \n\nSerdecznie polecam tę szkołę każdemu, kto pragnie rozwijać się jako snowboardzista i instruktor. Rozwój z Pow Pow Riders dzięki profesjonalnym instruktorom, świetnej jakości szkolenia i w przyjaznej atmosferze.',

      author: "Michał o szkoleniu: Asystent Instruktora SITS",
      words: "WSPA",
      words2: "RCIE",
      image: null,
    },
    {
      opinion:
        "Za mną już kilkanaście sezonów na desce, więc z początku myślałem, że jedynie wyćwiczę to co już potrafię i niczego nowego się nie nauczę. No a jednak. Kamila zauważyła błędy w technice i freestyle i eliminowała je u mnie na stoku. \n\nĆwiczenia, które proponowała, pomogły mi przełamać się w jeździe na drugą nogę, pozbyć się złych nawyków i lęków przed niektórymi trikami, a nawet pokazała mi, jak lepiej wykonać triki, które umiałem. Kama to świetna instruktorka, dobiera najlepsze ćwiczenia dla każdego stopnia zaawansowania. \n\nZmęczenie! Kama chyba nie zna tego słowa. Jest bardzo zaangażowana w nauczanie, czasem nawet po nocy z ekipą oglądaliśmy nasze nagrania ze stoku :d Mówiła nam, co trzeba poprawić żeby trik wyglądał lepiej. Ciągle w dobrym humorze i pozytywnym nastawieniu do swoich uczniów – ziomali.",

      author: "Konrad o szkoleniu: SNOW POW CAMP",
      words: "ZIO",
      words2: "MA",
      words3: "LE",
      image: null,
    },
    {
      opinion: null,

      author: "Gosia o szkoleniu: SNOW POW CLASS",
      image: "/img/spc-opinion-new.webp",
    },
    {
      opinion: null,

      author: "Jakub o szkoleniu: Asystent Instruktora SITS",
      image: "/img/opinion-screen.webp",
    },
    {
      opinion: null,

      author: "Piotr o szkoleniu: SNOW POW CLASS",
      image: "/img/opinion-screen-2.webp",
    },
    {
      opinion: null,

      author: "Bartek o szkoleniu: Asystent Instruktora SITS",
      image: "/img/opinion-screen-4.webp",
    },
    // {
    // 	opinion: null,

    // 	author: 'UZUPEŁNIĆ',
    // 	image: '/img/opinion-screen-3.webp',
    // },
    {
      opinion: null,

      author: "Marcel o szkoleniu: II stopień SITS",
      image: "/img/screen-opiniones.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goRight = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const targetDate = new Date("2024-02-19T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60), // Dodajemy sekundy
    };
  }

  const handleImageClick2 = (src) => {
    setSelectedImage2(src);
  };

  const handleCloseClick2 = () => {
    setSelectedImage2(null);
  };

  useEffect(() => {
    const onScroll = () => {
      const { pageYOffset } = window;
      if (pageYOffset > lastScrollTop) {
        setIsScrolled(false);
      } else if (pageYOffset < lastScrollTop) {
        setIsScrolled(true);
      }
      setLastScrollTop(pageYOffset <= 0 ? 0 : pageYOffset);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
    {/* <Popup /> */}
      <Head>
        <title>
          Półkolonie Snowboardowe | POW POW RIDERS
        </title>
        <meta
          name="description"
          content="Snowboardowa półkolonia dla dzieci i młodzieży – nauka jazdy, profesjonalni instruktorzy, aktywny wypoczynek i świetna zabawa na stoku. Zarezerwuj miejsce już dziś!"
        />
      </Head>
      <div className="wrapper">
        <div className="page-container">
          <div className="head-social">
            <a
              href="https://www.tiktok.com/@powpow_riders"
              target="_blank"
              className="tt-link"
            >
              <Image
                src="/img/tt.webp"
                width={28}
                height={28}
                alt="mini logo tiktoka"
              />
            </a>
            <a
              href="https://www.instagram.com/powpow_riders/"
              className="ig-link"
              target="_blank"
            >
              <Image
                src="/img/ig.webp"
                width={28}
                height={28}
                alt="mini logo instagrama"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/kamila-%C5%9Bwi%C4%99czkowska-8aaab424a/?locale=es_ES"
              className="lin-link"
              target="_blank"
            >
              <Image
                src="/img/in.webp"
                width={28}
                height={28}
                alt="mini logo linkedin"
              />
            </a>
          </div>
          <Nav />
          <section className="boot-camp-welcome">
            {/* <h1 style={{ paddingLeft: "25px", paddingRight: "25px" }}>
              Holistyczne Campy Zimowe<br></br>z indywidualnym podejściem do
              uczestnika
            </h1> */}
            <h2>PÓŁKOLONIE SNOWBOARDOWE</h2>

            <div className="container-opinion">
              <img
                src="/img/snow-pow-camp/15.webp"
                className="opinion-welcome"
                onClick={() => handleImageClick3("/img/snow-pow-camp/15.webp")}
                alt="opinia o snow pow camp"
              />
              <img
                src="/img/snow-pow-camp/14.webp "
                className="opinion-welcome"
                onClick={() => handleImageClick3("/img/snow-pow-camp/14.webp")}
                alt="opinia o snow pow camp"
              />
            </div>
            <div className="become-instructor colonie" style={{ display: "flex", justifyContent: "center" }}>
              <div className="programm-block">
                <div className="all-blocks">
                  <img
                    src="/img/_Shop Icon-półkolonia.png"
                    loading="eager"
                    alt="logo szkolenia spc"
                    sizes="100vw"
                    className="image-block"
                    style={{ width: "100%", height: "350" }}
                    width={0}
                    height={350}
                  />
                  <img
                    src="/img/_Shop Icon-półkolonia.png"
                    loading="eager"
                    alt="logo szkolenia spc"
                    sizes="100vw"
                    className="image-block-medium"
                    style={{ width: "100%", height: "440" }}
                    width={0}
                    height={440}
                  />
                  <img
                    src="/img/_Shop Icon-półkolonia.png"
                    loading="eager"
                    alt="logo szkolenia spc"
                    sizes="100vw"
                    className="image-block-xl"
                    style={{ width: "100%", height: "540" }}
                    width={0}
                    height={540}
                  />
                  <div className="img-container">
                    <img
                      src="/img/_Shop Icon-półkolonia.png"
                      loading="eager"
                      alt="logo szkolenia spc"
                      sizes="100vw"
                      className="image-block-xl-two"
                      style={{ width: "100%", height: "370" }}
                      width={0}
                      height={370}
                    />
                  </div>
                  {/* {sectionIndex === 0 && (
                    <div className="buttons-to-slider">
                      <div className="left-btn">
                        <button onClick={handleLeftArrowClick}>
                          {windowWidth <= 980 ? (
                            <AiOutlineRight />
                          ) : (
                            <AiOutlineLeft />
                          )}
                        </button>
                        <p className="btn-dscrb">Szczegóły</p>
                      </div>
                    </div>
                  )} */}
                  {sectionIndex === 1 && (
                    <div className="buttons-to-slider">
                      <div className="left-btn">
                        <button onClick={handleLeftArrowClick}>
                          <AiOutlineLeft />
                        </button>
                        <p className="btn-dscrb">Termin</p>
                      </div>
                      {/* <div className='right-btn'>
												<button onClick={handleRightArrowClick}>
													<AiOutlineRight />
												</button>
												<p className='btn-dscrb'>Szczegóły</p>
											</div> */}
                    </div>
                  )}
                  {sectionIndex === 2 && (
                    <div className="buttons-to-slider">
                      {/* <div className='left-btn'>
												<button>
													<AiOutlineLeft />
												</button>
												<p className='btn-dscrb' style={{ textDecoration: 'line-through' }}>Szczegóły</p>
											</div> */}
                      <div className="right-btn">
                        <button onClick={handleRightArrowClick}>
                          {windowWidth <= 980 ? (
                            <AiOutlineRight />
                          ) : (
                            <AiOutlineLeft />
                          )}
                        </button>
                        <p className="btn-dscrb">Termin</p>
                      </div>
                    </div>
                  )}

                  <div className="blocks-content" id="butters">
                    {sectionIndex === 0 && (
                      <>
                        <div className="top-row">
                          <div className="name-butters">
                            <p className="row-name">Rodzaj</p>
                          </div>
                          <div className="name-butters">
                            <p
                              className="row-place-date"
                              style={{ whiteSpace: "nowrap" }}
                            >
                              Termin i miejsce
                            </p>
                          </div>
                          <div className="name-butters">
                            <p className="row-reservation">Rezerwacja</p>
                          </div>
                        </div>

                        {/* <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>2 dniowa półkolonia</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">19–20.01.2025</p>
                            <p className="wit-place">
                              <MdPlace /> Czarny Groń
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <a href="https://forms.gle/UWoRaHf9xXZ2gMrNA" target="_blank">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </a>
                          </div>
                        </div>

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>4 dniowa półkolonia</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">21–22.01.2025</p>
                            <p className="wit-place">
                              <MdPlace /> Czarny Groń
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <a href="https://forms.gle/UWoRaHf9xXZ2gMrNA" target="_blank">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </a>
                          </div>
                        </div> */}

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>Zapisy na sezon 25/26</p>
                          </div>

                          <div className="where-is-it">
                            <p className="wit-date">Całodniowe zajęcia/ pakiety kilkudniowe w okresie<br></br> 9–22.02.25</p>
                            <p className="wit-place">
                              <MdPlace /> Szczyrk
                            </p>
                          </div>
                          
                          <div className="write-me-to-butter">
                            <a href="https://docs.google.com/forms/d/1ohe8uEhUrAZc1HsadMbJLWgy4BnPzYMpvDDEO2eEjkw/viewform" target="_blank">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </a>
                          </div>
                        </div>
                        {/* <p style={{ fontSize: "20px", paddingTop: "10px" }}>Cena półkolonii dwudniowej – <span style={{ color: "#0097d0" }}>937 zł</span></p>
                        <p style={{ fontSize: "20px", paddingTop: "10px" }}>Cena półkolonii czterodniowej – <span style={{ color: "#0097d0" }}>1607 zł</span>
                        </p> */}
                      </>
                    )}

                    {sectionIndex === 2 && <></>}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='timer'>
							<p>Najbliższy Camp za:</p>
							{isMounted && (
								<div className='time'>
									<span className='day'>{timeLeft.days} dni, </span>
									<span>{timeLeft.hours} h, </span>
									<span>{timeLeft.minutes} min, </span>
									<span>{timeLeft.seconds} sek</span>
								</div>
							)}
						</div> */}

            {/* <div className='slider'>
							<Slider images={images} />
						</div> */}

            {/* <style jsx>{`
							.boot-camp-welcome .become-instructor .programm-block .all-blocks .buttons-to-slider {
								justify-content: end;
							}
						`}</style> */}
          </section>
          <section className="about-boot-camp">
            <h3>O PÓŁKOLONIACH</h3>
            <div className="content-about-camp">
              <div className="column-about">
                <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>CZAS NA ŚNIEGU TO NIE TYLKO NAUKA</p>
                  </div>
                  <p className="justifytxt">
                    To w końcu ferie! Nasze zajęcia snowboardowe prowadzone są w
                    przyjaznej atmosferze, gdzie dzieci uczą się techniki jazdy
                    przez ciekawe i angażujące ćwiczenia. Instruktorzy dbają,
                    aby każde zadanie było interesujące i rozwijało ich
                    kreatywność. Dzięki możliwości aktywnego uczestniczenia w
                    rozgrzewkach i zabawach, dzieci szybciej się integrują i
                    lepiej zapamiętują nowe umiejętności.
                  </p>
                </div>
                <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>TECHNIKA, PASJA, BEZPIECZEŃSTWO</p>
                  </div>
                  <p className="justifytxt">
                    Naszą pasją jest wspieranie rozwoju młodych snowboardzistów
                    i zapewnienie im bezpiecznej przestrzeni do nauki. W Powder
                    Power Riders szkolenia prowadzą doświadczeni instruktorzy z
                    polskiej czołówki, którzy mają bogate doświadczenie w pracy
                    na stoku i w snowparku oraz z dziećmi. Dzięki ich wiedzy i
                    pasji dzieci zyskują solidne podstawy techniczne oraz
                    inspirację do dalszej przygody ze sportami zimowymi.
                  </p>
                </div>
              </div>
              <div className="column-about">
                <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>NAGRANIA, KTÓRE UCZĄ I CIESZĄ</p>
                  </div>
                  <p className="justifytxt">
                    Obserwacja swojej jazdy na wideo, połączona z omówieniem
                    przez instruktora, to cenna lekcja w procesie rozwoju.
                    Podczas każdego szkolenia nagrywamy wybrany przejazd
                    snowboardowy lub ewolucję freestyle. Nagrania te stanowią
                    także świetną pamiątkę, do której zarówno dzieci, jak i
                    rodzice chętnie wracają, dzieląc się nią z bliskimi.
                  </p>{" "}
                </div>
                <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>W SPORTOWEJ I ZIMOWEJ PRZYJAŹNI SIŁA</p>
                  </div>
                  <p className="justifytxt">
                    Nie stawiamy na wielkie zimowiska. Cenimy kameralne grupy,
                    które sprzyjają budowaniu bliskich relacji i pozwalają na
                    indywidualne podejście do każdego uczestnika. Mniejsze grupy
                    na stoku to również większa przestrzeń do rozwoju i lepsza
                    możliwość skupienia się na technice jazdy.
                  </p>
                </div>
              </div>
              {/* <div className='list'>
								<img src='/img/snowboard.png' className='icon-about-camp' />
								<p>TRENING MENTALNY W SPORCIE</p>
							</div>
							<p>Pracujemy z treningiem mentalnym w sporcie!</p> <br></br>
							<p>
								Nie ma w sporcie nic ważniejszego niż zdrowie i dobre nastawienie. Nowe wyzwania i wychodzenie ze strefy
								komfortu, jakim jest nauka snowboardingu od podstaw lub trenowanie nowych ewolucji, wymaga wiele
								determinacji.
							</p>{' '}
							<br></br>
							<p>
								Podczas zajęć na Snow Pow Boot Camp nasz młody rider może zrozumieć swój lęk, pomagamy przełamywać
								mentalne blokady, pracujemy nad pewnością siebie i nauką zarządzania stresem, aby snowboardzista
								rozwijał się z lekkością, pewnością siebie i czystą zajawką{' '}
							</p>{' '}
							<br></br>
							<p>
								Warsztaty treningu mentalnego w sporcie, trening koncentracji są bardzo ważne w bezpiecznym i efektywnym
								rozwoju snowboardowym.{' '}
							</p>{' '}
							<br></br>
							<p>Warsztat pod okiem Trenera Mentalnego w sporcie. </p> */}
            </div>

            <div className="box-mental">
              <h2 className="mental-head">TRENING MENTALNY W SPORCIE</h2>

              <div className="mental-content">
                <p>
                  Nie ma w sporcie nic ważniejszego niż zdrowie i dobre
                  nastawienie. W Pow Pow liczą się zdrowe nawyki, holistyczne
                  podejście do sportów zimowych, oparte o trening sportowy,
                  trening mentalny i energię - odporność. Nowe wyzwania i
                  wychodzenie ze strefy komfortu, jakim jest nauka jazdy od
                  podstaw lub trenowanie nowych ewolucji, wymaga wiele
                  determinacji. Podczas zajęć na śniegu na półkolonii naszym
                  młodym riders, pomagamy przełamywać mentalne blokady,
                  zrozumieć lęk i pracować nad pewnością siebie oraz nauką
                  zarządzania stresem, aby każdy rider rozwijał się z lekkością,
                  pewnością siebie i czystą zajawką. Program oraz ćwiczenia są
                  pod okiem Trenera Mentalnego w sporcie.
                </p>
              </div>
            </div>
            <div className="slider">
              <Slider images={imagesone} />
            </div>

            {/* <div className='btn-i-want-camp'>
							<button>
								<Link href='/pow-store/'>
									<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Chcę jechać na Camp
								</Link>
							</button>
						</div> */}
          </section>
          <section className="box-mental" style={{ marginTop: "70px" }}>
            <h2 className="mental-head">GDZIE JEŹDZIMY?</h2>
            <div className="content-resort">
              <div className="linksresort">
                <div className="resortul">
                  <p>STOKI NARCIARSKIE</p>
                  <Link href="https://www.czarnygron.pl/" target="_blank">
                    <img
                      src="/img/snow-pow-camp/place-localizer-green.webp"
                      style={{ marginRight: 5, width: "25px" }}
                      alt="ikonka lokalizacji"
                    />
                    SZCZYRK MOUNTAIN RESORT
                  </Link>
                </div>
                <div className="advantageresort">
                  <div className="content-plus">
                    <img
                      src="/img/snow-pow-camp/accept-circular-button-outline.png"
                      alt="ikonka akceptacji"
                    />
                    <p>
                      Różnorodność stoków pozwala na
                      dopasowanie zajęć do ich tematyki oraz umiejętności
                      naszych snowboardzistów.
                    </p>
                  </div>
                  {/* <p style={{ marginBottom: '17px' }}>nie dla nas długie dojazdy</p> */}

                  {/* <p className='placeweatherandlevel'>
										Wybór resortu uzależniony jest od warunków pogodowych oraz programu w dany dzień szkoleniowy
									</p> */}
                  {/* <p style={{ marginBottom: '17px' }}>dopasowanie ich pod temat zajęć i umiejętności </p> */}
                </div>
              </div>
              {/* <p className="placeweatherandlevel">
                Wybór resortu uzależniony jest od warunków pogodowych oraz
                programu w dany dzień szkoleniowy
              </p> */}
              <div className="big-image-resort">
                <img src="/img/mapa-smr.webp" alt="mapa ośrodka czarny gron" />
              </div>
              
            </div>
            {/* <div className='why-img-content'>
								<div className='why-img-container'>
									<img
										src='/img/kamila-mpi-podium.webp'
										onClick={() => handleImageClick('/img/kamila-mpi-podium.webp')}
										alt='kamila właścicielka szkółki pow pow riders odbierająca gratulacje na podium mistrzostw polski instruktorów 2023'
									/>
									<img
										src='/img/kamila-snwb.webp'
										onClick={() => handleImageClick('/img/kamila-snwb.webp')}
										alt='kamila instruktorka i właścicielka szkółki podczas slalomu giganta na mpi 2018'
									/>
								</div>
							</div> */}
            {/* <div className='why-img'>
							<img
								src='/img/logo.webp'
								alt='kamila właścicielka szkółki pow pow riders odbierająca gratulacje na podium mistrzostw polski instruktorów 2023'
							/>
						</div> */}
          </section>
          <div className="slider">
            <Slider images={imagestwo} />
          </div>

          <section className="box-mental">
            <h3 className="mental-head">Półkolonie z Pow Pow to:</h3>
            {/* <div className='box-with-price'>
                           <img src='/img/snow-pow-camp/styczen.png' /><p>2149 zł</p>
						</div>
						<div className='box-with-price'>
                           <img src='/img/snow-pow-camp/luty.png' /><p>2399 zł</p>
						</div> */}
            {/* <div className='headers-price-box'>
							<h3 className='mental-head'>Cena SNOW POW BOOT CAMP obejmuje:</h3>
							<div className='box-with-price'>
								<img src='/img/snow-pow-camp/styczen.png' />
								<p>2149 zł</p>
							</div>
							<div className='box-with-price'>
								<img src='/img/snow-pow-camp/luty.png' />
								<p>2399 zł</p>
							</div>
						</div> */}

            <div className="price-box">
              <div className="list-pirce">
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  profesjonalne szkolenie snowboardowe z wykwalifikowaną kadrą
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  karnety na każdy dzień szkolenia
                </p>
                
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  podział na grupy szkoleniowe pod względem zaawansowania
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  kameralne grupy pozwalające na indywidualne podejście
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  freestyle jam – jazdy w snowparku – naukę ewolucji – dotyczy
                  grup zaawansowanych
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  videoanalizę z omówieniem instruktorskim
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  opiekę instruktorską podczas całego dnia na stoku
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  prezent dla snowboardzisty
                </p>
                
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  certyfikacje umiejętności po szkoleniu – indywidualna karta
                  snowboardowa
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  kreatywny rozbudowany program: rozwój, rekreacja, integracja
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  wsparcie trenera mentalnego w sporcie, przez cały czas trwania
                  szkolenia
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  zajęcia oparte o budowanie odporności psychicznej młodych
                  snowboardzistów
                </p>
                <p>
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  opiekę kadry przez cały czas trwania szkolenia
                </p>
              </div>
            </div>
            
            <div className="price-box-two">
              <p style={{paddingBottom: "12px"}}>
                <img
                  src="/img/snow-pow-camp/snowboarding.webp"
                  alt="ikonka snowboardera"
                />
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <strong>SPRZĘT</strong>
                  <span>
                    Jeśli uczestnik nie posiada własnego sprzętu, można
                    wypożyczyć go na miejscu bądź wcześniej w wypożyczalni
                    miejskiej. Zalecamy wypożyczenie deski na cały czas trwania
                    półkolonii. Instruktorzy przed zajęciami zawsze sprawdzają
                    sprzęt, aby zapewnić odpowiednie bezpieczeństwo i komfort
                    jazdy. Kask jest obowiązkowy.
                  </span>
                </span>
              </p>
              <p style={{paddingBottom: "12px"}}>
                
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ marginLeft: "37px" }}>
                    Jeśli potrzebują Państwo dodatkowych wskazówek dotyczących
                    doboru sprzętu snowboardowego, chętnie prześlemy szczegółowe
                    informacje mailowo. Sugerujemy, aby na czas półkolonii
                    wybrać sprzęt z wypożyczalni, szczególnie jeśli jest to
                    pierwsza przygoda dziecka ze snowboardem.
                  </span>
                </span>
              </p>

			  <p style={{paddingBottom: "12px"}}>
                <img
                  src="/img/snow-pow-camp/snowboarding.webp"
                  alt="ikonka snowboardera"
                />
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <strong>DOJAZD</strong>
                  <span>
				  Z GRUPĄ: Oferujemy dojazd zorganizowany z Krakowa, wynajętym przez nas busem z kierowcą, cena uzależniona jest od ilości chętnych. Liczba miejsc jest ograniczona. Możliwy jest wspólny dojazd rodzica z dzieckiem transportem zorganizowanym. 
                  </span>
				  <span>Polecamy również zakwaterowanie na miejscu w trakcie półkolonii.</span>
				  <span>Wybraną opcję dojazdu należy zaznaczyć, w dedykowanym formularzu, podczas zapisywania dziecka na półkolonie.</span>
                <span>Z RODZICEM: Możliwy jest dowóz dziecka oraz odebranie ze stoku narciarskiego.</span>
				</span>
              </p>

			  <p style={{paddingBottom: "12px"}}>
                <img
                  src="/img/snow-pow-camp/snowboarding.webp"
                  alt="ikonka snowboardera"
                />
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <strong>UBEZPIECZENIE</strong>
                  <span>
				  Zalecamy, aby każdy uczestnik posiadał ubezpieczenie NNW i OC na czas półkolonii.
                  </span>
                </span>
              </p>
            </div>
          </section>

          <section className="box-mental">
            <div className="boot-camp-why-ppr">
              <h4 className="mental-head">
                DLACZEGO KURSY SNOWBOARDOWE Z POW POW RIDERS?
              </h4>
              <div className="contents-why-boot-camp">
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>HOLISTYCZNE SPOJRZENIE NA SPORT, ZDROWIE I ROZWÓJ</p>
                </div>
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>BEZPIECZEŃSTWO, ROZWÓJ, DOBRA ZABAWA NA PIERWSZYM MIEJSCU</p>
                </div>
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>PROFESJONALNE SZKOLENIE</p>
                </div>
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>DOBRA ENERGIA</p>
                </div>
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>ZAJAWKA I KREATYWNOŚĆ </p>
                </div>
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>KAMERALNE GRONO UCZESTNIKÓW ORAZ PRZYJAŹNIE NA LATA </p>
                </div>
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>INDYWIDUALNE PODEJŚCIE, NAWET PODCZAS ZAJĘĆ W GRUPIE</p>
                </div>
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>DOŚWIADCZENI INSTRUKTORZY</p>
                </div>
                <div className="boot-camp-why-content">
                  <img
                    src="/img/snow-pow-camp/accept-circular-button-outline.png"
                    alt="znaczek akceptacji"
                  />
                  <p>PRAKTYKA TRENINGU MENTALNEGO RIDERA</p>
                </div>
              </div>
              <p className="end-why">
			  Dbamy o to, aby atmosfera była zawsze przyjazna, dzięki czemu zdrowa dla umysłu, jak też motywująca do rozwoju i uśmiechu ;)
              </p>
            </div>

            
          </section>
          
          <section className="box-mental">
            {/* <h2 className='why-head'>Kadra szkoleniowa</h2> */}
            <h5 className="mental-head">
              {/* Drodzy rodzice! kochających aktywność nastolatków :)<br></br> To już niedługo! */}
              Drodzy rodzice! kochających aktywność nastolatków :)<br></br> To już niedługo!<br></br>
              {/* <span style={{ color: "black" }} className="other-head">
                Drodzy rodzice! kochających aktywność nastolatków :)<br></br> To
                już niedługo!
              </span> */}
            </h5>
            <div className="parents-box-content">
              <div className="parents-box-content-txt">
                <img
                  src="/img/snow-pow-camp/accept-circular-button-outline.png"
                  alt="znaczek akceptacji"
                />
                <p>Twoje dziecko ma 10–16 lat</p>
              </div>
              <div className="parents-box-content-txt">
                <img
                  src="/img/snow-pow-camp/accept-circular-button-outline.png"
                  alt="znaczek akceptacji"
                />
                <p>
				Jego marzeniem jest nauczenie się jazdy na snowboardzie, ale zależy Ci, aby od samego początku miało dobre nawyki.
                </p>
              </div>
              <div className="parents-box-content-txt">
                <img
                  src="/img/snow-pow-camp/accept-circular-button-outline.png"
                  alt="znaczek akceptacji"
                />
                <p>
				Twoje dziecko świetnie jeździ na snowboardzie, ale wciąż chce więcej i więcej, mówi o trickach, o skokach.. chcesz mu umożliwić rozwój i zależy Ci, aby był on bezpieczny.
                </p>
              </div>
              <div className="parents-box-content-txt">
                <img
                  src="/img/snow-pow-camp/accept-circular-button-outline.png"
                  alt="znaczek akceptacji"
                />
                <p>
				Twoje dziecko zaczęło już przygodę ze snowboardem, zjeżdża samodzielnie, ale poprawa techniki i profesjonalne zajęcia, to to czego dla niego szukasz.
                </p>
              </div>
			  <div className="parents-box-content-txt">
                <img
                  src="/img/snow-pow-camp/accept-circular-button-outline.png"
                  alt="znaczek akceptacji"
                />
                <p>
				Termin podczas ferii: Małopolskich, Kujawsko–Pomorskich, Lubuskich, Świętokrzyskich, Wielkopolskich
                </p>
              </div>
            </div>
            <div className="btn-contact">
              <button className="question-about-camp">
                <Link href="/kontakt.html">
                  <GiPlayButton className="checks" style={{ marginRight: 5 }} />
                  SKONTAKTUJ SIĘ
                </Link>
              </button>
              <div className="telicon-sbc">
                <BsTelephone className="icont" />
                <a href="tel:+48796200308">+48 796 200 308</a>
              </div>
            </div>
            {/* <div className='why-img-content'>
								<div className='why-img-container'>
									<img src='/img/snow-pow-camp/domekbreloka.png' />
								</div>
							</div> */}
          </section>





          <section className="about-boot-camp" style={{ paddingTop: "20px" }}>
            <h3>RAMOWY PROGRAM ZAJĘĆ</h3>
            <div className="content-about-camp plantime">
              <div className="column-about" style={{ display: "flex", flexDirection: "column" }}>
                <div className="one-column">
                  
                </div>

                <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>9:15 – 14:45 – zajęcia na stoku:
                    </p>
                  </div>
                  <p className="justifytxt">
                  zbiórka na stoku,
                  </p><br></br>
                  <p className="justifytxt">
                  rozgrzewka snowboardowa – zabawy, animacje, integracja oraz przede wszystkim przygotowanie fizyczne oraz mentalne dzieci do zajęć,
                  </p><br></br>
                  <p className="justifytxt">
                  sprawdzenie sprzętu i ubioru – aby był pełen komfort i bezpieczeństwo
                  </p><br></br>
                  <p className="justifytxt">
                  9:30 – rozpoczęcie szkolenia snowboardowego
                  </p>
                </div>

                <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>12:00 – przerwa</p>
                  </div>
                  <p className="justifytxt">
                   czas na uzupełnienie energii
                  </p>
                </div>
                

              </div>
              <div className="column-about" style={{ display: "flex", flexDirection: "column" }}>
              <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>Kontynuacja szkolenia snowboardowego</p>
                  </div>
                  <p className="justifytxt">
                  kolejna porcja świetnej zabawy na stoku oraz nauki techniki jazdy
                  </p>
                </div>
              

                <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>15:00 – zbiórka na stoku:</p>
                  </div>
                  <p className="justifytxt">
                  dzieci odebrane przez rodziców zostają z nimi
                  </p><br></br>
                </div>


                {/* <div className="one-column">
                  <div className="list">
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                    />
                    <p>Kontynuacja szkolenia snowboardowego</p>
                  </div>
                  <p className="justifytxt">
                  kolejna porcja świetnej zabawy na stoku oraz nauki techniki jazdy
                  </p>
                </div> */}
              </div>
              
              {/* <div className='list'>
								<img src='/img/snowboard.png' className='icon-about-camp' />
								<p>TRENING MENTALNY W SPORCIE</p>
							</div>
							<p>Pracujemy z treningiem mentalnym w sporcie!</p> <br></br>
							<p>
								Nie ma w sporcie nic ważniejszego niż zdrowie i dobre nastawienie. Nowe wyzwania i wychodzenie ze strefy
								komfortu, jakim jest nauka snowboardingu od podstaw lub trenowanie nowych ewolucji, wymaga wiele
								determinacji.
							</p>{' '}
							<br></br>
							<p>
								Podczas zajęć na Snow Pow Boot Camp nasz młody rider może zrozumieć swój lęk, pomagamy przełamywać
								mentalne blokady, pracujemy nad pewnością siebie i nauką zarządzania stresem, aby snowboardzista
								rozwijał się z lekkością, pewnością siebie i czystą zajawką{' '}
							</p>{' '}
							<br></br>
							<p>
								Warsztaty treningu mentalnego w sporcie, trening koncentracji są bardzo ważne w bezpiecznym i efektywnym
								rozwoju snowboardowym.{' '}
							</p>{' '}
							<br></br>
							<p>Warsztat pod okiem Trenera Mentalnego w sporcie. </p> */}
            </div>

            

            {/* <div className='btn-i-want-camp'>
							<button>
								<Link href='/pow-store/'>
									<GiPlayButton className='checks' style={{ marginRight: 5 }} /> Chcę jechać na Camp
								</Link>
							</button>
						</div> */}
          </section>





         
          {/* <section className='opinion-maja'>
						<img src='/img/snow-pow-camp/12.webp' />
					</section> */}
          <section className="reviews" style={{ marginTop: "20px" }}>
            <div className="review-head">
              <h4 className="feel-head">
                Feeling naszych wspaniałych uczestniczek{" "}
                <span>opinie o pow pow riders</span>i uczestników szkoleń
                snowboardowych i treningów.
              </h4>
            </div>

            <div id="content">
              <div className="box-review-content">
                <div className="testimonial">
                  <blockquote>
                    {reviews[currentIndex].opinion && (
                      <p className="review-txt">
                        {reviews[currentIndex].opinion}
                      </p>
                    )}
                    {reviews[currentIndex].image && (
                      <img
                        src={reviews[currentIndex].image}
                        alt="Opinia w formie obrazu"
                        className="opinion-img"
                      />
                    )}
                    <div className="bgc-reviews-words">
                      {reviews[currentIndex].words &&
                        !reviews[currentIndex].image && (
                          <p>{reviews[currentIndex].words}</p>
                        )}
                      {reviews[currentIndex].words2 &&
                        !reviews[currentIndex].image && (
                          <p>{reviews[currentIndex].words2}</p>
                        )}
                      {reviews[currentIndex].words3 &&
                        !reviews[currentIndex].image && (
                          <p>{reviews[currentIndex].words3}</p>
                        )}
                    </div>
                    <button onClick={goRight}>{">"}</button>
                  </blockquote>
                  <div className="who"></div>
                  <p className="author">{reviews[currentIndex].author}</p>
                </div>
              </div>
            </div>
          </section>
          {/* <section className='box-mental' style={{ marginTop: '50px', opacity: '0.7' }}>
						<p className='mental-head'>ORGANIZATOR</p>
						<p className='organization-txt'>
							Szkoła snowboardingu POWDER POWER RIDERS objęta jest patronatem Stowarzyszenia Instruktorów i Trenerów
							Snowboardu SITS.
						</p>
					</section> */}

       
          {/* <section className='info-soon'>
						<p>
							Szczegółowe informacje wkrótce.<br></br> <br></br>SNOW POW BOOT CAMP DLA MŁODZIEŻY<br></br>
							<span>23–28.01.2024<br></br> 19–25.02.2024</span><br></br><br></br> SNOW POW BOOT CAMP DLA DOROSŁYCH<br></br> SNOW POW BOOT CAMP SEASON
							OPENING<br></br>
							<br></br>Poznaj nasze wcześniejsze edycje :)
						</p>
					</section> */}
          {/* <section className='photos-snow-pow-camp'>
						<Image
							alt=''
							src='/img/snow-pow-camp/6.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/6.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/7.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/7.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/8.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/8.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/9.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/9.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/10.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/10.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/12.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/12.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/13.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/13.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/14.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/14.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/15.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/15.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/17.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/17.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/18.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/18.webp')}
						/>
						<Image
							alt=''
							src='/img/snow-pow-camp/1.webp'
							quality={100}
							width='100'
							height='100'
							// Make the image display full width
							style={{
								width: '100%',
								height: 'auto',
							}}
							onClick={() => handleImageClick2('/img/snow-pow-camp/1.webp')}
						/>
					</section> */}
          {/* <section className="org">
            <p>
              CRE ∞ POWDER POWER RIDERS<br></br> Kamila Święczkowska<br></br>{" "}
              16-001 Kleosin <br></br>ul. Baczyńskiego 37<br></br> NIP:
              9662144961<br></br> www.powpowriders.com<br></br> + 48 796200308
            </p>
          </section> */}

		  <section className="org" style={{ display: "flex", flexDirection: "column" }}>
            
			<p>Organizator: CRE ∞ POWDER POWER RIDERS Kamila Święczkowska<br></br>
			16-001 Kleosin ul. Baczyńskiego 37 NIP: 9662144961</p>

			<p style={{ paddingTop: "20px" }}><a href="tel:+48796200308" style={{ margin: "0px 10px", color: "black", textDecoration: "none" }}>+48796200308</a> www.powpowriders.com <a href="mailto:powpow.riders@gmail.com" style={{ margin: "0px 10px", color: "black", textDecoration: "none" }}>powpow.riders@gmail.com</a></p>
          </section>
          <footer className="footer-company">
            <div className="footer-company-txt">
              <h6 className="company-name-cre">CRE ∞ POWDER POWER RIDERS</h6>
            </div>
            <p>Współpracujemy z:</p>
            <div className="partners">
              <div className="partner-box">
                <a
                  href="https://skleprugby.pl/"
                  target="_blank"
                  aria-label="Odwiedź stronę partnera gonga"
                >
                  <img
                    src="/img/gonga.webp"
                    width={60}
                    height={60}
                    alt="logo partnera gonga"
                  />
                </a>
                <a href="https://skleprugby.pl/" target="_blank">
                  Gonga <br></br> Surf
                </a>
              </div>
              <div className="partner-box">
                <a
                  href="https://domekbreloka.pl/"
                  target="_blank"
                  aria-label="Odwiedź stronę partnera domek breloka"
                >
                  <img
                    src="/img/brelok.webp"
                    width={60}
                    height={60}
                    alt="logo partnera domek breloka"
                  />
                </a>
                <a href="https://domekbreloka.pl/" target="_blank">
                  Domek <br></br> Breloka
                </a>
              </div>
              <div className="partner-box">
                <a
                  href="https://www.pzn.pl/"
                  target="_blank"
                  aria-label="Odwiedź stronę partnera pzn"
                >
                  <img
                    src="/img/pnz.webp"
                    width={60}
                    height={60}
                    alt="logo partnera pzn"
                  />
                </a>
                <a href="https://www.pzn.pl/" target="_blank">
                  PZN
                </a>
              </div>
              <div className="partner-box">
                <a
                  href="https://sits.org.pl/"
                  target="_blank"
                  aria-label="Odwiedź stronę partnera sits"
                >
                  <img
                    src="/img/sitsfooter.webp"
                    width={60}
                    height={60}
                    alt="logo partnera sits"
                  />
                </a>
                <a href="https://sits.org.pl/" target="_blank">
                  SITS
                </a>
              </div>
            </div>
          </footer>

          {selectedImage3 && (
            <div className="modal-new" onClick={handleCloseClick3}>
              <button className="close-new" onClick={handleCloseClick3}>
                X
              </button>
              <img src={selectedImage3} alt="powiększony obraz" />
            </div>
          )}
        </div>
      </div>

      {selectedImage2 && (
        <div className="modal2" onClick={handleCloseClick2}>
          <button className="close2" onClick={handleCloseClick2}>
            X
          </button>
          <img src={selectedImage2} alt="powiększony obraz" />
        </div>
      )}
      <style jsx>{`
			@media (max-width: 980px) {
			.become-instructor .programm-block .all-blocks .buttons-to-slider  {
				
				top: -25px;
			}
			.become-instructor .programm-block .all-blocks .buttons-to-slider .right-btn button {
				font-size: 25px;
				color: black;
				border: 3px solid #30c5b0;
			}
			.become-instructor .programm-block .all-blocks .buttons-to-slider .left-btn button {
				font-size: 25px;
				color: black;
				border: 3px solid #30c5b0;
			}
			.become-instructor .programm-block .all-blocks .buttons-to-slider .right-btn .btn-dscrb {
				color: black;
			}
			.become-instructor .programm-block .all-blocks .buttons-to-slider .left-btn .btn-dscrb {
				color: black;
			}
		}
			.wrapper .page-container .modal-new img {
					width: 95%;
				}
			
			@media (min-width: 590px) {
				.wrapper .page-container .modal-new img {
					width: 50%;
				}
			}
			@media (min-width: 981px) {
				.become-instructor .programm-block .all-blocks .buttons-to-slider .right-btn button {
					font-size: 25px;
					color: black;
					border: 3px solid white;
				}
				.become-instructor .programm-block .all-blocks .buttons-to-slider .left-btn button {
					font-size: 25px;
					color: black;
					border: 3px solid white;
				}
			}
			.reviews .review-head .feel-head span {
				color: #30c5b0;
			}
			.why-powpow .why-content .why-head {
				color: #30c5b0;
			}
			@media (min-width: 980px) {
				.boot-camp-welcome .become-instructor {
					display: flex;
					justify-content: center;
				}
			.boot-camp-welcome .become-instructor .programm-block {
             width: 950px;
			}
		}
			.reviews {
				margin-top: 50px;
			}
			.why-powpow {
				margin-top: 70px;
			}
			.why-powpow .why-content {
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: -30px;
				// padding: 6px;
			}
				@media (min-width: 980px) {
					// .why-powpow .why-content .why-img-content .why-img-container {
					// 	flex-direction: column;
					// 	align-items: center;
					// }
					.why-powpow .why-content {
						padding-right: 25px;
					}
			}
				}
				.reviews {
					margin-top: 25px;
				}
				.boot-camp-welcome .become-instructor .programm-block .all-blocks .blocks-content .details-info {
					align-items: center;
				}
				@media (min-width: 1285px) {
					.boot-camp-welcome .become-instructor .programm-block {
						margin-right: 190px;
						margin-left: 190px;
					}
				}
				@media (min-width: 1315px) {
					.boot-camp-welcome .become-instructor .programm-block {
						margin-right: 265px;
						margin-left: 265px;
					}
				}
				// @media (min-width: 1024px) {
				// 	.modal2 {
				// 	 display: none;
				// 	}
				// 	} */}
				// @media (max-width: 900px) {.brelokcontent:nth-child(1) {
				// 	margin-top: 25px;
				// 	padding: 10px;
				// }
			}
			@media (max-width: 980px) {
			.become-instructor .programm-block .all-blocks .blocks-content .details-info {
				padding-top: 0px;
			}
			.become-instructor .programm-block .all-blocks .blocks-content .details-info .reservation {
				margin-top: 15px;
			}
			}
			.box-mental {
				margin-bottom: 45px;
			}
			`}</style>
    </>
  );
};

export default Group;
