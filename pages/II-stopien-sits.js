import { useState } from "react";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import { MdPlace } from "react-icons/md";
import { GiPlayButton } from "react-icons/gi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { ImFolderDownload } from "react-icons/im";
import Head from "next/head";
import Popup from "@/components/Popup";

const IISits = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleCloseClick12 = () => {
    setSelectedImageIndex(null);
  };

  const handleNextClick = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = (e) => {
    e.stopPropagation();
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const reviews = [
    {
      opinion:
        "Pow Pow Riders wymiata pod wieloma aspektami. Cieszę się, że miałam okazje uczestniczyć w ich kursie SiTS, podczas którego w mojej głowie poszerzyło się rozumowanie snowboardingu ;) \n\nByło kameralnie i to było dużym plusem podczas kursu, był bezpośredni kontakt z instruktorką Kamilą i bardzo ciepła atmosfera, którą stwarzała instruktorka. Kurs polegał nie tylko i wyłącznie na poszerzaniu wiedzy teoretycznej czy też praktycznej, bo praktyki było najwięcej, co bardzo cenię. \n\nDziało się znacznie więcej. Była okazja do wspólnych analiz, pytań i odpowiedzi, rozmów, podczas których można było dowiedzieć się bardzo wiele cennych informacji. Najbardziej podjarana jestem tym, że niektóre elementy, które Kamila przeplatała podczas jazdy na stoku, odblokowały mi myślenie i kreatywność, którą wykorzystam podczas swoich lekcji jako instruktorka. \n\nPow Pow Riders to pro wybór na instruktora, jest sztos ! Na pewno nie poprzestanę na kursie asystenta i myślę, że dalszy krok do przodu będzie z Pow Pow, bo to świetny wybór ;)",

      author: "Brygida o szkoleniu: Asystent Instruktora SITS",
      words: "PRA",
      words2: "KTY",
      words3: "KA",
      image: null, // brak obrazu
    },
    {
      opinion:
        "Miałem przyjemność zrealizować z powpow riders szereg wyjazdów, w trakcie których szlifowałem swoje umiejętności snowboardowe. Lekcje były organizowane w bardzo elastyczny i efektywny sposób, z nastawieniem na kluczowe techniki jazdy i ewolucje. \n\nOsiąganie kolejnych stopni umiejętności było oparte o zintegrowane trenowanie składowych komponentów, a zajęcia były omawiane w trakcie analiz video. Pozwoliło mi to na wyeliminowanie podstawowych błędów nabytych w trakcie własnych lat nauki, których nawet nie byłem świadom. \n\nDodatkowo zaczęły mi wychodzić coraz częściej ewolucje, o których zawsze marzyłem. Zajęcia były prowadzone w bezpieczny i przemyślany sposób, pozwalający skupić się na tym co najważniejsze, czyli dobrej i przyjemnej jeździe w zacnym towarzystwie ! ",

      author:
        "Kacper o szkoleniu: Asystent Instruktora SITS / SNOW POW CLASS / SNOW POW CAMP / FREESTYLE DAY",
      words: "FREE",
      words2: "STYLE",
      image: null, // brak obrazu
    },
    {
      opinion:
        "Mega polecam Szkolenia SITS z POW POW RIDERS. W mojej jeździe zmieniło się wszystko, na plus, ale najbardziej pewność siebie na desce.\nPomogło mi zrobić duży progres na skoczniach i przeszkodach. Atmosfera, jaką się tworzy na kursie bardzo pomaga w podnoszeniu skilla oraz próbowaniu nowych rzeczy, każdy każdego motywuje, każdy każdemu kibicuje. Zajęcia super prowadzone.\nPani Kamila zawsze pomocna + największy motywator jakiego można spotkać. Pow Pow Familly 🔥",

      author: "Witek o szkoleniu: Asystent Instruktora SITS",
      words: "PRO",
      words2: "GRES",
      image: null, // brak obrazu
    },
    {
      opinion:
        "Szkolenie Sits to był bardzo intensywny tydzień, nigdy w tak krótkim czasie nie dowiedziałem się tyle o snowboardingu ile podczas tego tygodnia. Jestem dumny z opanowania skrętu ciętego WN i ze śmigu ciętego, w ogóle jazda na krawędzi stała się pewna i trzymająca się nawet na lodzie. Wszystkie skręty cięte wjechały na wyższy poziom:) Przełamałem się też po traumatycznych przeżyciach z przeszłości do skoku na skoczni. Polecam szkołę snowboardingu POW POW Riders GDYŻ: \n \n>instruktorzy POW POW kompleksowo dbają o każdego uczestnika szkolenia\n >mają indywidualne podejście\n >tworzą rodzinną, ciepłą atmosferę \n>oprócz szkolenia na desce na stoku prowadzą również treningi mentalne i ogólnorozwojowe.\n\n Dla Kamili, właścicielki POW POW RIDERS, snowboarding to nie tylko sposób na zarabianie pieniędzy, ale pasja, serce, ona tym żyje, tym oddycha. To zaraźliwe. Kama Kama Kama Kamili ON. Co więcej, wartości etyczne, kultura osobista i zrozumienie innych mają w POW POW duże znaczenie, w związku z tym czujesz się bezpiecznie i zaopiekowany. Co nie zdarza się często. Bardzo ważne jest też to, że POW POW to nie tylko szkoła, to rodzina, która zostaje z Tobą na dłużej, oczywiście tylko wtedy jeśli tego chcesz i potrzebujesz. Family meet vol. 1 to tradycja, która dla mnie zrodziła się z chęci bycia częścią wspólnoty riders respektujących zrównoważony rozwój, wolność, jedność, ceniących moment i piękno gór.",

      author: "Beniamin o szkoleniu: III Stopień SITS, SNOW POW CLASS",
      words: "PA",
      words2: "SJA",
      image: null, // brak obrazu
    },
    {
      opinion:
        'Jestem niezwykle zadowolony z tygodniowego szkolenia na Asystenta Instruktora w Pow Pow Riders. Jakość szkolenia była znakomita. Instruktorzy podchodzili do nauczania w sposób profesjonalny, ale jednocześnie przyjazny i zrozumiały. \n\nIch pasja i wiedza na temat snowboardu były inspirujące, co pozwoliło mi nie tylko poprawić technikę jazdy, ale także nabrać pewności siebie na snowboardzie, zarówno jeżdżąc na "słabszą" nogę, jak i podczas freestyleu. Warto też dodać, że instruktorzy oferowali nieocenione wsparcie mentalne, co dodatkowo pomogło mi uwierzyć w swoje umiejętności. \n\nSerdecznie polecam tę szkołę każdemu, kto pragnie rozwijać się jako snowboardzista i instruktor. Rozwój z Pow Pow Riders dzięki profesjonalnym instruktorom, świetnej jakości szkolenia i w przyjaznej atmosferze.',

      author: "Michał o szkoleniu: Asystent Instruktora SITS",
      words: "WSPA",
      words2: "RCIE",
      image: null, // brak obrazu
    },
    {
      opinion:
        "Jeżeli chodzi o relacje z wyjazdów, bo brałem udział w kilku snow pow campach i szkoleniach sits, niesamowicie wiele się dowiedziałem, bardzo poszerzyłem horyzonty. \n\nDzięki współpracy z pow pow, mogę śmiało powiedzieć, że wszedłem na wyższy poziom w snowboardzie. \n\nTo czego nie mogę odmówić szkoleniom to to, że niesamowicie podniosły mi umiejętności i przygotowały mentalnie do pełnienia odpowiedzialnej roli instruktora i zetknięcia się z nauką innych już na kursie, kiedy zawsze byłem na nim uczeniem.",

      author:
        "Filip o szkoleniu: Asystent Instruktora SITS, II stopień SITS, III stopień SITS, SNOW POW CAMP",
      words: "WSPÓŁ",
      words2: "PRACA",
      image: null, // brak obrazu
    },
    {
      opinion:
        "PowPow przede wszystkim pozwoliło mi uwierzyć w swoje skille a chyba tego mi przede wszystkim brakowało. \n\nDuży nacisk w tej szkole jest kładziony na mindset ridera, a jak wiadomo od głowy wszystko się zaczyna...Później jak już moje nastawienie było inne szlifowanie tego z Kamilą stało się łatwiejsze. \n\nNa kursie asystenta oprócz solidnej dawki teorii PowPow serwuje przygotowanie praktyczne do prowadzenia zajęć. Generalnie rzecz ujmując jak szukasz progresu osiąganego na przyjemnej drodze PowPow jest dla Ciebie!",

      author:
        "Dominik o szkoleniu: Asystent Instruktora SITS, II Stopień SITS, SNOW POW CLASS",
      words: "MIND",
      words2: "SET",
      image: null,
    },
    {
      opinion:
        "Tydzień spędzony z Pow Pow Riders był fantastyczny. Jakość nauczania była doskonała, z doświadczonymi instruktorami, którzy mieli świetne podejście do nauczania, pomagając na wszystkich poziomach doskonalić swoje umiejętności. \n\nWidać, że robią to z pasji i wkładają w to całe serce. Atmosfera była przyjazna i wspierająca zarówno na stoku jak i w naszym domu – miejscu zakwaterowania. Nie ma nic lepszego jak mieszanie z ludźmi dzielącymi tę sama zajawkę co Ty. Jestem dumny z mojego progresu freestylowego oraz z tego, że udało mi się wziąć udział w kursie SiTS i zaliczyć go pozytywnie. \n\nZdecydowanie poprawiła mi się technika jazdy iii zdecydowanie polecam Pow Pow Riders. Kamila – właścicielka szkoły to osoba z ogromną wiedzą, doświadczeniem jak i  kreatywnością. Na zajęciach jest super atmosfera, potrafi wesprzeć jak i zmotywować. Nauka nowych elementów przychodzi z łatwością. Gorąco polecam! 🏂🏂",

      author:
        "Krzysiek o szkoleniu: II Stopień SITS, Asystent Instruktora SITS",
      words: "KREA",
      words2: "TYWNOŚĆ",
      image: null, // brak obrazu
    },
    {
      opinion: null,

      author: "Jakub o szkoleniu: Asystent Instruktora SITS",
      image: "/img/opinion-screen.webp",
    },
    {
      opinion: null,

      author: "Piotrek o szkoleniu: SNOW POW CLASS",
      image: "/img/opinion-screen-2.webp",
    },
    // {
    // 	opinion: null,

    // 	author: 'UZUPEŁNIĆ',
    // 	image: '/img/opinion-screen-4.webp',
    // },
    {
      opinion: null,

      author: "Marcel o szkoleniu: II stopień SITS",
      image: "/img/screen-opiniones.webp",
    },
    {
      opinion:
        "Szkolenie 10/10. Dużo usystematyzowało mi wiedzę z poprzednich szkoleń, mogłam sprawdzić siebie bardziej. Zdecydowanie poprawiłam technikę, a to wszystko w mega super atmosferze. Serdecznie polecam każdemu Pow Pow Riders. Super podejście do kursantów w trakcie kursu, jak i po.",

      author: "Marta o szkoleniu: Asystent Instruktora SITS",
      words: "10/",
      words2: "10",
      image: null,
    },
    {
      opinion:
        '\nSnow Pow Camp = dużo godzin spędzonych na stoku, dużo różnych ćwiczeń na zajęciach, które były bardzo pomocne w doskonaleniu naszej technicznej jazdy. Łatwy dostęp do instruktorów, możliwość zadawania pytań na stoku, jak i poza nim. Rozgrzewka! Nieduże grupy. Podczas tej edycji były też tyczki, przejazd slalomem na czas. Był to dla mnie ważny krok w przełamywaniu barier w snowboardowej nauce. \n\nOrganizacja = dokładny plan, rozpiska zajęć na każdy dzień. Warunki mieszkalne super, lokalizacja! Ciekawe zajęcia "postokowe", gdzie była merytoryka, dodatkowa teoria oraz wspólna rozrywka np. oglądanie filmu, gry, wyjście na festiwal sportowo-muzyczny Snowfest !! Pow Pow to holistyczne podejście. Na Campie były zajęcia oddechowe, zdrowa kuchnia! Dla mnie są to ważne aspekty.',

      author:
        "Maja o szkoleniu: II stopień SITS, Asystent Instruktora SITS, SNOW POW CAMP",
      words: "HOLI",
      words2: "STY",
      words3: "CZNIE",
      image: null,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goRight = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };
  const handleImageClick2 = (src) => {
    setSelectedImage2(src);
  };
  const handleImageClick4 = (src) => {
    setSelectedImage4(src);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };
  const handleCloseClick2 = () => {
    setSelectedImage2(null);
  };
  const handleCloseClick3 = () => {
    setSelectedImage3(null);
  };
  const handleCloseClick4 = () => {
    setSelectedImage4(null);
  };

  const handleRightArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleLeftArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const styleObject = {
    marginTop: "100px",
    background: "transparent",
  };
  const bgcblockq = {
    backgroundColor: "white",
    opacity: "0.7",
  };

  return (
    <>
      {/* <Popup /> */}
      <Head>
        <title>Pow Pow Riders | II Stopień SITS</title>
        <meta
          name="description"
          content="Dołącz do społeczności instruktorów i trenerów snowboardu w Polsce. II Stopień SITS w Pow Pow Riders otwiera nowe możliwości."
        />
      </Head>
      <Nav />
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
          <section className="become-instructor">
            <div className="sits-head-one-page">
              <h1>II Stopień SITS</h1>
              <h2>
                <span>
                  z Pow Pow Riders{" "}
                  <span style={{ display: "block" }}>Sezon 2025/2026</span>
                </span>
              </h2>
            </div>
            <div className="new-container-blocks">
              <div className="programm-block">
                <div className="all-blocks">
                  <img
                    src="/img/2-levels-sits.webp"
                    loading="eager"
                    alt="logo szkolenia sits"
                    sizes="100vw"
                    className="image-block"
                    style={{ width: "100%", height: "350" }}
                    width={0}
                    height={350}
                  />
                  <img
                    src="/img/2-levels-sits.webp"
                    loading="eager"
                    alt="logo szkolenia sits"
                    sizes="100vw"
                    className="image-block-medium"
                    style={{ width: "100%", height: "440" }}
                    width={0}
                    height={440}
                  />
                  <img
                    src="/img/2-levels-sits.webp"
                    loading="eager"
                    alt="logo szkolenia sits"
                    sizes="100vw"
                    className="image-block-xl"
                    style={{ width: "100%", height: "540" }}
                    width={0}
                    height={540}
                  />
                  <div className="img-container">
                    <img
                      src="/img/2-levels-sits.webp"
                      loading="eager"
                      alt="logo szkolenia sits"
                      sizes="100vw"
                      className="image-block-xl-two"
                      style={{ width: "100%", height: "370" }}
                      width={0}
                      height={370}
                    />
                  </div>
                  {sectionIndex === 0 && (
                    <div className="buttons-to-slider">
                      <div className="left-btn">
                        <button
                          onClick={handleLeftArrowClick}
                          aria-label="przesuń"
                        >
                          <AiOutlineLeft />
                        </button>
                        <p className="btn-dscrb">O resorcie</p>
                      </div>
                      <div className="right-btn">
                        <button
                          onClick={handleRightArrowClick}
                          aria-label="przesuń"
                        >
                          <AiOutlineRight />
                        </button>
                        <p className="btn-dscrb">O szkoleniu</p>
                      </div>
                    </div>
                  )}
                  {sectionIndex === 1 && (
                    <div className="buttons-to-slider">
                      <div className="left-btn">
                        <button
                          onClick={handleLeftArrowClick}
                          aria-label="przesuń"
                        >
                          <AiOutlineLeft />
                        </button>
                        <p className="btn-dscrb">Nasze kursy</p>
                      </div>
                      <div className="right-btn">
                        <button
                          onClick={handleRightArrowClick}
                          aria-label="przesuń"
                        >
                          <AiOutlineRight />
                        </button>
                        <p className="btn-dscrb">O resorcie</p>
                      </div>
                    </div>
                  )}
                  {sectionIndex === 2 && (
                    <div className="buttons-to-slider">
                      <div className="left-btn">
                        <button
                          onClick={handleLeftArrowClick}
                          aria-label="przesuń"
                        >
                          <AiOutlineLeft />
                        </button>
                        <p className="btn-dscrb">O szkoleniu</p>
                      </div>
                      <div className="right-btn">
                        <button
                          onClick={handleRightArrowClick}
                          aria-label="przesuń"
                        >
                          <AiOutlineRight />
                        </button>
                        <p className="btn-dscrb">Nasze kursy</p>
                      </div>
                    </div>
                  )}
                  <div className="blocks-content">
                    {sectionIndex === 0 && (
                      <>
                        <div className="top-row">
                          <p className="row-name">Rodzaj</p>
                          <p className="row-place-date">Termin i miejsce</p>
                          <p className="row-reservation">Rezerwacja</p>
                        </div>
                        

                        <div className="details-info">
                            <div className="title-programm">
                              <p>
                              Kurs z/bez egzaminu
                              </p>
                            </div>

                            <div className="date-where">
                              <p className="place">
                                <MdPlace />
                                Szczyrk
                              </p>
                              <p className="date">11–16.01.26</p>
                            </div>
                            <div className="reservation">
                              <Link
                                href="/pow-store/produkt/ii-sits-kurs-z-egzaminem/"
                                className="link-to-shop"
                              >
                                <GiPlayButton
                                  className="checks"
                                  style={{ marginRight: 5 }}
                                />
                                Zapisuję się
                              </Link>
                            </div>
                          </div>

                        
                      </>
                    )}
                    {sectionIndex === 1 && (
                      <div className="description-programms">
                        <p className="description-programms-txt">
                          <strong>II stopień sprawności SITS</strong> – kurs
                          przeznaczony dla osób średniozaawansowanych i
                          zaawansowanych. Jego uzyskanie jest potwierdzeniem
                          umiejętności technicznych w zakresie podstawowych i
                          średniozaawansowanych ewolucji snowboardowych. Daje
                          możliwość przystąpienia do kursu na III stopień
                          sprawności oraz do kursu Asystenta Instruktora SITS.{" "}
                          <br></br>
                          <br></br>
                          {/* <strong>
                            Egzamin weryfikacyjny na II stopień sprawności SITS
                          </strong>{" "} */}
                          {/* – mogą do niego przystąpić osoby, które w toku
                          indywidualnego zdobywania umiejętności, chcą
                          potwierdzić swój poziom jazdy. Egzamin przeznaczony
                          dla osób średniozaawansowanych i zaawansowanych. Jego
                          uzyskanie jest potwierdzeniem umiejętności
                          technicznych w zakresie podstawowych i
                          średniozaawansowanych ewolucji snowboardowych. Daje
                          możliwość przystąpienia do kursu na III stopień
                          sprawności oraz do kursu Asystenta Instruktora SITS. */}
                        </p>
                        <div className="plan-course">
                          <p>Przykładowy plan kursu:</p>
                          <p>(kliknij na tabelkę, aby powiększyć)</p>
                          <img
                            src="/img/table-IIST.webp"
                            onClick={() =>
                              handleImageClick4("/img/table-IIST.webp")
                            }
                            className="img-plan-course"
                            alt="tabelka ze szczegółami każdego dnia kursu"
                          />
                        </div>
                      </div>
                    )}
                    {sectionIndex === 2 && (
                      <div className="description-programm">
                        <div className="images-resort">
                          <div
                            className="zoom-map"
                            onClick={() => handleImageClick("/img/bsa.webp")}
                          >
                            <img
                              src="/img/bsa.webp"
                              loading="eager"
                              alt="plan ośrodka beskid sport arena na mapie"
                              width={120}
                              height={70}
                              className="maps-bsa"
                            />
                            <br></br>
                            <p>(powiększ +)</p>
                          </div>

                          <div className="link-to-resort">
                            <GiPlayButton />{" "}
                            <a
                              href="https://beskidsportarena.pl/"
                              target="blank"
                            >
                              Poznaj resort<br></br>Beskid Sport Arena
                            </a>
                          </div>
                        </div>

                        <div className="images-resort">
                          <div
                            className="zoom-map"
                            onClick={() =>
                              handleImageClick4("/img/mapa-smr.webp")
                            }
                          >
                            <img
                              src="/img/mapa-smr.webp"
                              loading="eager"
                              alt="plan ośrodka smr w szczyrku"
                              width={120}
                              height={70}
                              className="maps-bsa"
                            />
                            <br></br>
                            <p>(powiększ +)</p>
                          </div>

                          <div className="link-to-resort">
                            <GiPlayButton />{" "}
                            <a
                              href="https://www.szczyrkowski.pl/"
                              target="blank"
                            >
                              Poznaj resort<br></br>Szczyrk Mountain Resort
                            </a>
                          </div>
                        </div>

                        <div className="images-resort">
                          <div
                            className="zoom-map"
                            onClick={() =>
                              handleImageClick("/img/map_winter_2024_a4.jpg")
                            }
                          >
                            <img
                              src="/img/map_winter_2024_a4.jpg"
                              loading="eager"
                              alt="plan ośrodka beskid sport arena na mapie"
                              width={120}
                              height={70}
                              className="maps-bsa"
                            />
                            <br></br>
                            <p>(powiększ +)</p>
                          </div>

                          <div className="link-to-resort">
                            <GiPlayButton />{" "}
                            <a href="https://www.jasna.sk/pl/" target="blank">
                              Poznaj resort<br></br>Jasna - Chopok
                            </a>
                          </div>
                        </div>

                        <div className="images-resort">
                          <div
                            className="zoom-map"
                            onClick={() => handleImageClick("/img/lom.jpg")}
                          >
                            <img
                              src="/img/lom.jpg"
                              loading="eager"
                              alt="plan ośrodka beskid sport arena na mapie"
                              width={120}
                              height={70}
                              className="maps-bsa"
                            />
                            <br></br>
                            <p>(powiększ +)</p>
                          </div>

                          <div className="link-to-resort">
                            <GiPlayButton />{" "}
                            <a
                              href="https://www.vt.sk/stredisko/strediska/tatranska-lomnica?gad_source=1&gclid=Cj0KCQjw6uWyBhD1ARIsAIMcADpIny3XxCUBtZ3LJ_gjCsIFloDhiaRNXZGljNo2xWaxya6Fzg2coFsaArcQEALw_wcB"
                              target="blank"
                            >
                              Poznaj resort<br></br>Tatranská Lomnica
                            </a>
                          </div>
                        </div>

                        <div className="images-resort">
                            <div
                              className="zoom-map"
                              onClick={() =>
                                handleImageClick4("/img/pleso.webp")
                              }
                            >
                              <img
                                src="/img/pleso.webp"
                                loading="eager"
                                alt="plan ośrodka smr w szczyrku"
                                width={120}
                                height={70}
                                className="maps-bsa"
                              />
                              <br></br>
                              <p>(powiększ +)</p>
                            </div>

                            <div className="link-to-resort">
                              <GiPlayButton />{" "}
                              <a
                                href="https://www.vt.sk/pl/stredisko/strediska/strbske-pleso"
                                target="blank"
                              >
                                Poznaj resort<br></br>Štrbské Pleso
                              </a>
                            </div>
                          </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="new-write-course">
              <h2>WAŻNE INFORMACJE:</h2>
              <p className="information-about-write">
                <strong>Termin:</strong> wybierzesz bezpośrednio w sklepie Pow
                Store. Teraz wystarczy, że naciśniesz przycisk wybranego
                produktu. <br />
                <strong>Zakwaterowanie i wyżywienie:</strong> w terminie przed
                kursowym otrzymasz maila z propozycją noclegów grupowych.
              </p>
            </div>
            <style jsx>{`
              @media (min-width: 980px) {
                .become-instructor
                  .programm-block
                  .all-blocks
                  .blocks-content
                  .description-programm {
                  flex-direction: row;
                  padding-top: 50px;
                  justify-content: space-around;
                }
              }
            `}</style>
          </section>

          <section className="lessons-road">
            <h2 className="head-undpage">Droga szkoleniowa</h2>

            <div className="road-img">
              <img
                src="/img/new-sits-rules.webp"
                onClick={() => handleImageClick2("/img/new-sits-rules.webp")}
                alt="szczegóły dotyczące kursów SITS"
              />
              <img
                src="/img/szkolenie.webp"
                onClick={() => handleImageClick2("/img/szkolenie.webp")}
                alt="szczegóły dotyczące kursów SITS"
              />
            </div>
            <div className="road-img">
              <div className="othermaterial">
                <a href="https://sits.org.pl/materials" target="blank">
                  Materiały SITS
                </a>
                <ImFolderDownload />
              </div>
            </div>
          </section>

          <section className="why-powpow">
            <div className="why-content">
              <h3 className="why-head">
                Dlaczego kursy <span>SITS z Pow Pow Riders?</span>
              </h3>
              <p>
                W POW POW mamy holistyczne podejście do snowboardingu, zdrowia i
                umiejętności ridera. To nasza cecha wyróżniająca. Dbamy o to,
                aby podczas kursów każdy rider wzmacniał skill z techniki jazdy,
                freestylowy, jak też aby jego/jej świadomość treningowa, zdrowia
                rosła. Zarówno w formie sportowej, jak też treningu mentalnym w
                sporcie.
              </p>
              <br></br>
              <p>
                Takie podejście to większy progres i świadomość siebie na desce
                oraz w pracy, jako przyszły instruktor snowboardu. To również
                dużo bardziej satysfakcjonująca jazda, z pełnym zrozumieniem dla
                wszystkich ups and downs w trakcie własnego rozwoju
                snowboardowego.
              </p>
              <div className="why-img-content">
                <div className="why-img-container">
                  <img
                    src="/img/article-ebook-2.webp"
                    onClick={() => handleImageClick("/img/article-ebook.webp")}
                    alt="dokument potwierdzający partnerstwo szkółki pow pow riders z SITS"
                  />
                  <img
                    src="/img/book-1.webp"
                    onClick={() => handleImageClick("/img/book.webp")}
                    alt="screen z informatora SITS dotyczący artykułu o programie treningowym"
                  />
                </div>
              </div>
              <div className="why-img-content" style={{ marginTop: "5px" }}>
                <div className="why-img-container">
                  <img
                    src="/img/articles-2425.webp"
                    onClick={() => handleImageClick("/img/articles-2425.webp")}
                    alt="screen z informatora SITS dotyczący artykułu o programie treningowym"
                  />
                </div>
              </div>
              <div className="check-our-lessons">
                <a href="/pow-store/" className="link-to-sits-shop">
                  <GiPlayButton className="check" />
                  Zapisy na szkolenia SITS
                </a>
              </div>
            </div>
            <div className="why-img">
              <img src="/img/sits.webp" alt="logo SITS" />
            </div>
          </section>

          <section className="why-powpow">
            <div className="why-content">
              <h4 className="why-head">
                Kierownik wyszkolenia w Pow Pow Riders
              </h4>
              <p>
                W szkole licencjonowanej SITS, Powder Power Riders kierownikiem
                wyszkolenia jest{" "}
                <span className="instructor-name">Kamila Święczkowska</span>,
                będąca w czołówce polskich instruktorów SITS. Instruktor
                Zawodowa SITS & Sędzia Freestyle PZS & Trenerka i przede
                wszystkim aktywna riderka. Kamila jest Trenerką Mentalną w
                sporcie. Podczas zajęć snowboardowych dużą uwagę przykłada do
                rozwoju mindsetu ridera. Ważne jest dla niej aby rider robił
                zarówno progres w jeździe jak i budował siłę mentalną. Poniżej
                zdjęcia z Mistrzostw Polski Instruktorów SITS: dekoracja
                zwycięzców 2023 oraz slalom gigant 2018.
              </p>
              <div className="why-img-content">
                <div className="why-img-container">
                  <img
                    src="/img/kamila-mpi-podium.webp"
                    onClick={() =>
                      handleImageClick("/img/kamila-mpi-podium.webp")
                    }
                    alt="kamila właścicielka szkółki pow pow riders odbierająca gratulacje na podium mistrzostw polski instruktorów 2023"
                  />
                  <img
                    src="/img/personalfoto.webp"
                    onClick={() => handleImageClick("/img/personalfoto.webp")}
                    alt="kamila instruktorka i właścicielka szkółki podczas slalomu giganta na mpi 2018"
                  />
                </div>
              </div>
            </div>
            {/* <div className='why-img'>
							<img
								src='/img/logo.webp'
								alt='kamila właścicielka szkółki pow pow riders odbierająca gratulacje na podium mistrzostw polski instruktorów 2023'
							/>
						</div> */}
            <style jsx>{`
						.why-powpow .why-content {
							margin-top: 0px;
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
						`}</style>
          </section>

          <section className="sits-accept">
            <h3>Uprawnienia szkoleniowe sits</h3>
            <div className="sits-img">
              <div className="patrs" style={{ width: "100%" }}>
                <div className="patr-box">
                  <p>sezon 21/22</p>
                  <img
                    src="/img/patronat1-2.webp"
                    onClick={() => handleImageClick2("/img/patronat1.webp")}
                    alt="certyfikat potwierdzający uprawnienia do nadawania stopniów sits przez szkółkę na sezon 21/22"
                  />
                </div>
                <div className="patr-box">
                  <p>sezon 22/23</p>
                  <img
                    src="/img/patronat2-1.webp"
                    onClick={() => handleImageClick2("/img/patronat2.webp")}
                    alt="certyfikat potwierdzający uprawnienia do nadawania stopniów sits przez szkółkę na sezon 22/23"
                  />
                </div>
              </div>
              <div
                className="patrs"
                style={{ width: "100%", marginTop: "40px" }}
              >
                <div className="patr-box">
                  <p>sezon 23/24</p>
                  <img
                    src="/img/2324.webp"
                    onClick={() => handleImageClick2("/img/2324.webp")}
                    alt="certyfikat potwierdzający uprawnienia do nadawania stopniów sits przez szkółkę na sezon 22/23"
                  />
                </div>
                <div className="patr-box">
                  <p>sezon 24/25</p>
                  <img
                    src="/img/licencja-m-2425.webp"
                    onClick={() =>
                      handleImageClick2("/img/licencja-m-2425.webp")
                    }
                    alt="certyfikat potwierdzający uprawnienia do nadawania stopniów sits przez szkółkę na sezon 22/23"
                  />
                </div>
              </div>

              <div
                className="patrs"
                style={{ width: "100%", marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <div className="patr-box">
                  <p>sezon 25/26</p>
                  <img
                    src="/img/licencja2526.webp"
                    onClick={() => handleImageClick2("/img/licencja2526.webp")}
                    alt="certyfikat potwierdzający uprawnienia do nadawania stopniów sits przez szkółkę na sezon 22/23"
                  />
                </div>
                <p style={{ maxWidth: "800px", marginTop: "10px", padding: "0 32px", fontSize: "17px" }} className="info2526">Informujemy, że szkoła POW POW RIDERS w sezonie 2025/2026, prowadzi Kursy Asystenta Instruktora SITS. Kursy realizowane są pod patronatem Instruktora Wykładowcy (IW), zgodnie z obowiązującymi przepisami i regulaminem.</p>
              </div>
            </div>
          </section>

          <section className="reviews" style={styleObject}>
            <div className="review-head">
              <h6 className="feel-head">
                Feeling naszych wspaniałych uczestniczek{" "}
                <span>opinie o pow pow riders</span>i uczestników szkoleń
                snowboardowych i treningów.
              </h6>
            </div>

            <div id="content">
              <div className="box-review-content">
                <div className="testimonial">
                  <blockquote style={bgcblockq}>
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

          {selectedImageIndex !== null && (
            <div className="modal5" onClick={handleCloseClick12}>
              <button className="close5" onClick={handleCloseClick12}>
                X
              </button>
              <button className="prev" onClick={handlePrevClick}>
                {"<"}
              </button>
              <img src={images[selectedImageIndex]} alt="powiększony obraz" />
              <button className="next" onClick={handleNextClick}>
                {">"}
              </button>
            </div>
          )}

          {selectedImage2 && (
            <div className="modal2" onClick={handleCloseClick2}>
              <button className="close2" onClick={handleCloseClick2}>
                X
              </button>
              <img src={selectedImage2} alt="powiększony obraz" />
            </div>
          )}
          {selectedImage3 && (
            <div className="modal3" onClick={handleCloseClick3}>
              <button className="close3" onClick={handleCloseClick3}>
                X
              </button>
              <img src={selectedImage3} alt="powiększony obraz" />
            </div>
          )}
          {selectedImage4 && (
            <div className="modal4" onClick={handleCloseClick4}>
              <button className="close4" onClick={handleCloseClick4}>
                X
              </button>
              <img src={selectedImage4} alt="powiększony obraz" />
            </div>
          )}
          {selectedImage && (
            <div className="modal" onClick={handleCloseClick}>
              <button className="close" onClick={handleCloseClick}>
                X
              </button>
              <img src={selectedImage} alt="powiększony obraz" />
            </div>
          )}
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
        </div>
      </div>
    </>
  );
};

export default IISits;
