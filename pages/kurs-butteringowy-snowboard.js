import React, { useState, useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineRight, AiOutlineLeft, AiFillCaretDown } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GiPlayButton } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import Popup from "@/components/Popup";

const Butter = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(undefined);

  const handleLeftArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };
  const handleRightArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  return (
    <>
      {/* <Popup /> */}
      <Head>
        <title>Pow Pow Riders | Kurs butteringowy snowboard</title>
        <meta
          name="description"
          content="Dołącz do naszej społeczności snowboardowej! Skontaktuj się z Pow Pow Riders i dowiedz się, jak możesz stać się częścią naszego świata."
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
          <section className="buttering">
            <div className="boot-camp-welcome">
              <h1
                style={{
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  color: "#0097d0",
                }}
              >
                FREESTYLE NA STOKU Z POW POW RIDERS
              </h1>
              <h2 style={{ textTransform: "uppercase" }}>kurs butteringowy</h2>
            </div>
            <div
              className="butt-welcome-txt"
              style={{ margin: "0 auto", maxWidth: "900px" }}
            >
              <p
                style={{
                  paddingRight: "35px",
                  paddingLeft: "25px",
                  textAlign: "left",
                  paddingBottom: "20px",
                }}
              >
                Przypomnij sobie ślizganie się w skarpetkach po podłodze, boso
                na mokrej trawie czy oblodzonym chodniku. Beztroskie uczucie - tak jak w butteringu.
              </p>
              <p
                style={{
                  paddingRight: "35px",
                  paddingLeft: "25px",
                  textAlign: "left",
                }}
                className="but-txt-wel-two"
              >
                Zabawa deską, niekończąca się liczba tricków i przyjemność z
                każdej nowej, opanowanej sztuczki. Gdy raz poczujesz to flow,
                już nigdy nie przestaniesz butterkować.
              </p>
            </div>

            <div className="boot-camp-welcome" style={{ paddingTop: "20px"}}>
            <h2 style={{ textTransform: "uppercase" }}>TRICK CAMP</h2>
              <h2
                style={{
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  color: "#0097d0",
                  fontSize: "22px",
                  fontWeight: "100",
                  fontFamily: "Wix Madefor Display, sans-serif",
                }}
                className="trick-camp-header"
              >
                FREESTYLE NA SNOWPARKU Z POW POW RIDERS
              </h2>
              
            </div>

            <div
              className="butt-welcome-txt"
              style={{ margin: "0 auto", maxWidth: "900px" }}
            >
              <p
                style={{
                  paddingRight: "35px",
                  paddingLeft: "25px",
                  textAlign: "left",
                }}
                className="but-txt-wel-two"
              >
                A co gdyby… przenieść skille buttering do snowparku? Twoje ciało pamięta każdy ruch, a głowa łapie focus i timing. Ten właściwy moment, w którym odrywasz deskę, rotujesz, kontrujesz, presujesz, lądujesz i odjeżdżasz. Jeśli był_ś już na naszym kursie butteringu albo czujesz deskę na tyle dobrze, że chcesz iść krok dalej, to Trick Camp z Pow Pow jest dla Ciebie. <br></br><br></br>Wyobraź sobie trzy dni pełnego skupienia na trikach, progres w małej grupie i luz w bezpiecznej atmosferze. Pamiętasz to uczucie niedosytu, kiedy dopiero co wkręcił_ś się we freestyle a kurs się już kończył lub gdy solo wyskoczył_ś na jeden dzień do parku i już trzeba było wracać? Na Trick Camp przed nami dwa dni treningu w lokalnym snowparku BK, a na koniec, trzeciego dnia lapujemy linie na snowparku Czarnym Groniu.


              </p>
            </div>

            
            <div className="become-instructor">
              <div className="programm-block">
                <div className="all-blocks">
                  <img
                    src="/img/freekursy.webp"
                    loading="eager"
                    alt="logo szkolenia spc"
                    sizes="100vw"
                    className="image-block"
                    style={{ width: "100%", height: "350" }}
                    width={0}
                    height={350}
                  />
                  <img
                    src="/img/freekursy.webp"
                    loading="eager"
                    alt="logo szkolenia spc"
                    sizes="100vw"
                    className="image-block-medium"
                    style={{ width: "100%", height: "440" }}
                    width={0}
                    height={440}
                  />
                  <img
                    src="/img/freekursy.webp"
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
                      src="/img/freekursy.webp"
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

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>Buttering 2 dni (jako część szkolenia)</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">18-24.04.2026</p>
                            <p className="wit-place">
                              <MdPlace /> Lodowiec Mölltaler
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <Link href="/pow-store/produkt/spring-camp-lodowiec/">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </Link>
                          </div>
                        </div>

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>Buttering 4 dni</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">15–18.12.25</p>
                            <p className="wit-place">
                              <MdPlace /> Szczyrk
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <Link href="/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </Link>
                          </div>
                        </div>

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>Trick Camp 3 dni</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">19–21.12.25</p>
                            <p className="wit-place">
                              <MdPlace /> Biały Krzyż Snowpark + Czarny Groń Snowpark
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <Link href="/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </Link>
                          </div>
                        </div>

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>Trick Camp 3 dni</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">05–07.01.26</p>
                            <p className="wit-place">
                              <MdPlace /> Biały Krzyż Snowpark + Czarny Groń Snowpark
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <Link href="/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </Link>
                          </div>
                        </div>

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>Buttering 4 dni</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">18–21.01.26</p>
                            <p className="wit-place">
                              <MdPlace /> Szczyrk
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <Link href="/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </Link>
                          </div>
                        </div>

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>Trick Camp 3 dni</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">22–24.01.26</p>
                            <p className="wit-place">
                              <MdPlace /> Biały Krzyż Snowpark + Czarny Groń Snowpark
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <Link href="/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </Link>
                          </div>
                        </div>

                        <div className="butter-kafel">
                          <div className="what-is-it">
                            <p>Buttering 4 dni</p>
                          </div>
                          <div className="where-is-it">
                            <p className="wit-date">2–5.02.26</p>
                            <p className="wit-place">
                              <MdPlace /> Biały Krzyż / Szczyrk
                            </p>
                          </div>
                          <div className="write-me-to-butter">
                            <Link href="/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/">
                              <GiPlayButton
                                className="checks"
                                style={{ marginRight: 5 }}
                              />
                              Zapisuję się
                            </Link>
                          </div>
                        </div>

                        <ul
                          style={{
                            fontSize: "18px",
                            padding: "5px 5px 5px 15px",
                          }}
                        >
                          <strong>TRICK CAMP INFORMACJE:</strong>
                          <li style={{ paddingTop: "15px" }}>
                            <strong>Zakwaterowanie:</strong> polecane miejsce to Biały Krzyż – bezpośrednio na miejscu bądź Szczyrk lub Wisła. Przez dwa dni trenujemy na Białym Krzyżu, w trzeci dzień po porannym wykwaterowaniu wyruszamy do Czarnego Gronia na trening. Zakończenie kursu odbywa się na Czarnym Groniu.
                          </li>
                          <li style={{ paddingTop: "15px" }}>
                            <strong>Program:</strong> jest ułożony tak, żebyś mógł/mogła w pełni skupić się na rozwoju freestylowym, bez presji, w tempie wzrostowym i jednocześnie nie spalić budżetu. Zamiast presji karnetu czy walki w tłoku oraz utraty skupienia w kolejkach do wyciągu – dwa pierwsze dni spędzamy w snowparku DIY na Białym Krzyżu. W luźnej, leśnej atmosferze prowadzimy trening na przeszkodach w dostosowanym tempie, budując pewność i płynność. Trzeciego dnia wjeżdżamy do snowparku na Czarnym Groniu. To moment, w którym bazując na skillach z poprzednich dni, łapiesz rytm snowparkowych linii.
                          </li>
                        </ul>
                      </>
                    )}

                    {sectionIndex === 2 && <></>}
                  </div>
                </div>
              </div>
            </div>

            <div className="why-butter">
              <h2 style={{ textTransform: "uppercase" }}>
                Dlaczego warto uczyć się butteringu?
              </h2>
              <p style={{ textAlign: "left" }}>
                Buttering to ekscytujący element jazdy na snowboardzie,
                wyróżniający się efektownością i unikalnym stylem. Podczas
                butteringu czujesz luz, naturalność i wszechstronność, co
                sprawia, że Twoja jazda na stoku staje się bardziej różnorodna.
              </p>
              <p style={{ textAlign: "left" }}>
                Buttering wpływa pozytywnie na jibbing, czyli jazdę po
                przeszkodach.
              </p>
              <p style={{ textAlign: "left" }}>
                Nauka butteringu rozwija ogólne umiejętności snowboardowe,
                poprawiając świadomość przestrzeni, propriocepcję, koordynację,
                balans i kontrolę nad deską. Te zdolności wpływają na Big Air,
                czyli umiejętność odnalezienia się w powietrzu. Skoki na skoczni
                staną się bardziej świadome i bezpieczne.
              </p>
            </div>

            <div className="why-butter">
              <h2 style={{ textTransform: "uppercase" }}>
              CZYM WYRÓŻNIA SIĘ TRICK CAMP Z POW POW?
              </h2>
              <p style={{ textAlign: "left" }}>
              Trick Camp skupia się na nauce nowych tricków i doskonaleniu tych, które już znasz, a jednocześnie stawia na rozwój freestylowy w snowparku w bezpiecznych, kontrolowanych warunkach. Podczas szkolenia stopniowo przyzwyczajamy Cię do klimatu parku i uczymy koncentracji na przeszkodach oraz trikach. Program podzielony jest między dwa snowparki: mały, lokalny snowpark bez wyciągu – Biały Krzyż – pierwszy i drugi dzień, oraz Czarny Groń, czyli duży snowpark w resorcie – dzień trzeci.
              </p>
              <p style={{ textAlign: "left" }}>
              Wprowadzenie jibbingowe w cozy warunkach Białego Krzyża przygotowuje do bardziej świadomej, płynnej i bezpiecznej jazdy w snowparku. Uczysz się pewnych najazdów i lądowań oraz budowania swojego stylu. Nie chodzi o to, żeby wpaść na duży park i pół dnia zastanawiać się nad najazdem na przeszkodę. Dzięki pracy nad timingiem, najazdem i balansem w kontrolowanych warunkach Twoje przejazdy i tricki w większym snowparku stają się dużo łatwiejsze do opanowania.
              </p>
            </div>

            <section className="why-powpow what-on-buttering">
              <div className="why-content">
                <h2 className="why-head">
                  Jakie umiejętności będą rozwijane na Kursie?
                </h2>
                {/* <p className="ben">
              Na kursie butteringowym będziemy pracować nad:
              </p> */}
                <ul>
                  Na kursie butteringowym będziemy pracować nad:
                  <li>
                  Treningiem rotacji i kontrrotacji oraz pressowania na płaskim terenie i podczas jazdy
                  </li>
                  <li>
                  Treningiem prostych i złożonych ruchów (butteringowe combo) oraz budowaniem pewności siebie podczas ich wykonywania
                  </li>
                  <li>Lepszym czuciem snowboardu i pracy z ciężarem ciała</li>
                  <li>Poprawą techniki podstaw butteringowych</li>
                  <li>Zwiększeniem płynności i stylu w butteringu</li>
                  <li>Doskonaleniem umiejętności balansowania, koordynacji i propriocepcji</li>
                </ul>

                <ul className="full-width-ul">
                Na Trick Campie będziemy pracować nad:
                  <li>
                  Opanowaniem nowych tricków
                  </li>
                  <li>
                  Doskonaleniem znanych tricków
                  </li>
                  <li>Płynnością na przeszkodach – pewnymi najazdami, wykonami oraz lądowaniami</li>
                  <li>Budowaniem stylu i pewności siebie przy nowych trickach</li>
                  <li>Jazdą w line po snowparku</li>
                  <li>Kontrolą nad deską i ciałem podczas tricków</li>
                  <li>Timingiem, balansem i świadomością ruchu</li>
                  <li>Psychomotoryką – współpracą umysłu i ciała</li>
                </ul>

                <ul className="full-width-ul">
                OCZEKIWANE EFEKTY PO UKOŃCZENIU KURSÓW:
                  <li>
                  Wzrost cech mentalnych – większa pewność siebie podczas jazdy freestylowej na stoku i w snowparku
                  </li>
                  <li>
                  Lepsze zarządzanie sobą w przestrzeni podczas jazdy na snowboardzie
                  </li>
                  <li>Nadanie kierunku rozwoju i płynności w jeździe freestylowej</li>
                  <li>Płynniejsze i bezpieczniejsze przejazdy oraz tricki</li>
                  <li>Rozwój stylu i opanowanie nowych tricków oraz combosów</li>
                </ul>


                <h2 className="why-head">
                  Oczekiwane efekty po ukończeniu kursu
                </h2>
                <ul className="full-width-ul">
                  <li>
                    Wzrost cech mentalnych – większa pewność siebie podczas
                    jazdy freestylowej na stoku i na snowparku
                  </li>
                  <li>
                    Lepsze zarządzanie sobą w przestrzeni w ruchu na
                    snowboardzie
                  </li>
                  <li>
                    Nadanie kierunku rozwoju, płynności w jeździe butteringowej
                  </li>
                </ul>

                <div
                  className="write-me-to-butter endalign"
                  style={{ justifyContent: "center", width: "auto" }}
                >
                  <Link href="/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/">
                    <GiPlayButton
                      className="checks"
                      style={{ marginRight: 5 }}
                    />
                    Zapisuję się
                  </Link>
                </div>
              </div>
            </section>

            <div className="why-butter" style={{ marginTop: "60px" }}>
              <h2 style={{ textTransform: "uppercase" }}>
              DLA KOGO DEDYKOWANE SĄ KURSY FREESTYLOWE?
              </h2>
              <p style={{ textAlign: "left" }}>
              Kursy przeznaczony są dla snowboardzistów, którzy
                potrafią jeździć ślizgowo, płynnie zmieniać krawędź frontside i
                backside oraz jeździć na switchu bez upadków. Według systematyki
                SITS jest to poziom 2. Jeśli posiadasz wyższe umiejętności na
                poziomie 3, świetnie jeździsz na krawędzi i masz za sobą
                pierwsze skoki, będziesz miał/a większą świadomość ciała w ruchu
                i nauczysz się bardziej złożonych butterów/tricków w snowparku.
              </p>
              <p style={{ textAlign: "left" }}>
              Dla tych, którzy potrzebują jeszcze więcej praktyki, polecamy 6-dniowe szkolenie – kurs doszkalający z jazdy ślizgowej, poziom 2 SITS.

              </p>
            </div>

            <div className="why-butter" style={{ marginTop: "60px" }}>
              <h2 style={{ textTransform: "uppercase" }}>
                Unikalne aspekty kursu
              </h2>
              <p style={{ textAlign: "left" }}>
              Kursy prowadzone są przez Powder Power Riders - szkołę
                snowboardową, która stawia na holistyczny rozwój snowboardzisty.
                Duży nacisk kładziemy na psychomotorykę, trening przygotowujący
                do sportów zimowych pod kątem motoryki ridera oraz treningi
                mentalne, budujące odporność psychiczną, przygotowujące do pracy
                jako instruktor, wnoszące jakość jazdy na wyższy poziom,
                ułatwiające rozwój i zwiększające świadomość ciała w sporcie.
              </p>
            </div>

            <section className="why-powpow what-on-buttering">
              <div className="why-content">
                <h2 className="why-head">
                  Dobrany sprzęt, wygodny outfit i <br></br> przygotowanie formy
                  mentalno-sportowej
                </h2>
                {/* <p className="ben">
              Na kursie butteringowym będziemy pracować nad:
              </p> */}
                <ul>
                  <p
                    style={{ textTransform: "uppercase", paddingBottom: "0px" }}
                  >
                    Dobrany sprzęt
                  </p>
                  <li>
                    <strong>Sprzęt:</strong> Deska, wiązania i buty powinny mieć
                    w miarę miękki flex, a deska być dobrze nasmarowana. Twarde
                    buty i sztywne wiązania (flex 10) będą utrudniać wykonywanie tricków, powodując je bardziej męczącymi.
                  </li>
                </ul>

                <ul>
                  <p
                    style={{ textTransform: "uppercase", paddingBottom: "0px" }}
                  >
                    Wygodny outfit
                  </p>
                  <li>
                    <strong>Ubrania:</strong> Wybierz luźne ubrania. Znajdziesz
                    je w second-handach lub aplikacjach z ciuchami z drugiej
                    ręki. Warto też skorzystać z międzysezonowych wyprzedaży,
                    aby zdobyć nowe ubrania w super cenach.
                  </li>
                </ul>

                <ul>
                  {/* <p style={{ textTransform: 'uppercase', paddingBottom: '0px' }}>
										Przygotowanie formy mentalno-sportowej
									</p> */}
                  <div className="write-me-to-butter">
                    <Link href="/pow-store/produkt/8-tygodniowy-pogram-treningowo-rozwojowy-sporty-zimowe/">
                      <GiPlayButton
                        className="checks"
                        style={{ marginRight: 5 }}
                      />
                      Przygotowanie formy mentalno-sportowej
                    </Link>
                  </div>
                  <li>
                    <strong>Przygotowanie fizyczne:</strong> Wykorzystaj czas
                    przed kursem na przygotowanie mięśni i stawów pod kątem
                    mobilności, siły i eksplozywności. Skorzystaj z programu
                    treningowego, np. Power Knees od Pow Pow lub innego
                    dowolnego programu treningowego.
                  </li>
                  <li>
                    <strong>Przygotowanie mentalne:</strong> Zadbaj o swoją
                    psychomotorykę. Trening mentalny i świadomość ciała są
                    kluczowe, aby efektywnie rozwijać umiejętności snowboardowe
                    i radzić sobie z wyzwaniami na stoku.
                  </li>
                </ul>
              </div>
            </section>

            <div className="why-butter" style={{ marginTop: "60px" }}>
              <p style={{ fontSize: "19px", textAlign: "left" }}>
              Dołącz do nas i odkrywaj freestylową stronę snowboardingu! 
              </p>
              <p style={{ fontSize: "19px", textAlign: "left" }}>
                Nie przegap tej okazji – Złap miejscówkę na Kursie, jeśli jeszcze jest.
              </p>
              <div
                className="write-me-to-butter"
                style={{
                  justifyContent: "center",
                  width: "auto",
                  paddingTop: "20px",
                }}
              >
                <Link
                  href="/pow-store/produkt/ii-sits-kurs-butteringowy-kurs-doszkalajacy-3-6-dni/"
                  style={{
                    width: "100%",
                    fontFamily: "Wix Madefor Display, sans-serif;",
                  }}
                >
                  <GiPlayButton className="checks" style={{ marginRight: 5 }} />
                  Zapisuję się
                </Link>
              </div>
            </div>
            <style jsx>{`
              @media (max-width: 1024px) {
                .become-instructor {
                  display: flex;
                  justify-content: center;
                }
                .become-instructor .programm-block .all-blocks .blocks-content {
                  padding: 25px;
                  padding-top: 15px;
                }
              }
              @media (min-width: 1124px) {
                .become-instructor .programm-block {
                  max-width: 1050px;
                  display: flex;
                  justify-content: center;
                  margin: 0 auto;
                }
              }
              media (min-width: 420px) and (max-width: 500px) {
                .become-instructor .programm-block {
        margin-left: 30px;
        margin-right: 30px;
                }
              @media (min-width: 1024px) {
                .blocks-content {
                  margin-top: 0px;
                }
              }
				
            `}</style>
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
        </div>
      </div>
    </>
  );
};

export default Butter;
