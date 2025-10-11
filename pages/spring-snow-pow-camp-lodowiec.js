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

const Lodowiec = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [selectedImage4, setSelectedImage4] = useState(null);

  const handleLeftArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };
  const handleRightArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };
  const handleImageClick4 = (src) => {
    setSelectedImage4(src);
  };
  const handleCloseClick4 = () => {
    setSelectedImage4(null);
  };
  return (
    <>
      {/* <Popup /> */}
      <Head>
        <title>Pow Pow Riders | Lodowiec w listopadzie</title>
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
                LODOWIEC Z POW POW RIDERS
              </h1>
              <h2 style={{ textTransform: "uppercase", padding: "0px 32px" }}>KURS ZAMYKAJĄCY SEZON – SPRING SNOW POW CAMP</h2>
            </div>
            <div
              className="butt-welcome-txt"
              style={{ margin: "0 auto", maxWidth: "900px" }}
            >
              
            </div>
            
            <div className="become-instructor">
              <div className="programm-block">
                <div className="all-blocks">
                  <img
                    src="/img/snowoff.webp"
                    loading="eager"
                    alt="logo szkolenia spc"
                    sizes="100vw"
                    className="image-block"
                    style={{ width: "100%", height: "350" }}
                    width={0}
                    height={350}
                  />
                  <img
                    src="/img/snowoff.webp"
                    loading="eager"
                    alt="logo szkolenia spc"
                    sizes="100vw"
                    className="image-block-medium"
                    style={{ width: "100%", height: "440" }}
                    width={0}
                    height={440}
                  />
                  <img
                    src="/img/snowoff.webp"
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
                      src="/img/snowoff.webp"
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
                            <p>Buttering + Carving + Eurocarving</p>
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

                        <p><strong>Rodzaj szkolenia:</strong> Kurs kończący sezon snowboardowy – Lodowiec z Pow Pow Rides</p>
<br></br><p>W skrócie: buttering & carving  – kurs podsumowujący sezon – holistyczny progres – dwa poziomy zaawansowania – wiosenny snowboarding</p>
<br></br>  <p>5 DNI JAZDY NA LODOWCU – 5 DNIOWE SZKOLENIE  – MAKSIMUM WYKORZYSTANEGO CZASU  – NIESPODZIANKI SZKOLENIOWE SNOWBOARDOWE</p>
<br></br> <p>Rodzaj oferty: wyjazd 7 dniowy, kurs szkoleniowy 5–dniowy, zakwaterowanie
                        </p>
                        <br></br>
                        {/* <br></br> <p>- 2 dniowe szkolenie z techniki jazdy</p> 
 <p>- 2 dniowe szkolenie z freestyle – z butteringu  </p><br></br> */}
 {/* <br></br>   */}
<br></br>
                        <div className="images-resort" style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center"
                        }}>
                            <div
                              className="zoom-map"
                              onClick={() =>
                                handleImageClick4("/img/LODO.webp")
                              }
                            >
                              <img
                                src="/img/LODO.webp"
                                loading="eager"
                                alt="plan ośrodka smr w szczyrku"
                                style={{ width: "100%", height: "100%"  }}
                                className="maps-bsa"
                              />
                              <br></br>
                              <p>(powiększ +)</p>
                            </div>

                            <div className="link-to-resort">
                              <GiPlayButton />{" "}
                              <a
                                href="https://www.moelltaler-gletscher.at/"
                                target="blank"
                                style={{ color: "black" }}
                              >
                                Poznaj resort<br></br>Lodowiec Mölltaler
                              </a>
                            </div>
                          </div>

                      </>
                    )}

                    {sectionIndex === 2 && <></>}
                  </div>
                </div>
              </div>
            </div>

            <div className="why-butter">
              <h2 style={{ textTransform: "uppercase", color: "black" }}>
              PROGRAM
              </h2>
            </div>

            <section className="why-powpow what-on-buttering">
              <div className="why-content" style={{ padding: "10px"}}>
                <h2 className="why-head">
                buttering & carving 
                </h2>
                <p>Szkolenie składa się z dwóch osobnych kursów. Każda grupa, średniozaawansowana i zaawansowana będzie miała możliwość pracy z dwoma instruktorami.</p>
<br>
</br>
<div style={{ textAlign: "left" }} className="snowon-p">
<p style={{ textAlign: "left" }}>Dla każdej grupy przygotowaliśmy 5 dni szkolenia oraz 5 dni wspólnej jazdy</p>
<br></br>
<p>dzień 1: przywitanie z lodowcem, ze śniegiem, pierwszy dzień szkolenia, buttering / carving w zależności od grupy
</p><br></br>
<p>dzień 2: drugi dzień szkolenia buttering / carving w zależności od grupy</p><br></br>
<p>dzień 3: trzeci dzień szkolenia buttering / carving w zależności od grupy</p><br></br>
<p>dzień 4: czwarty dzień szkolenia buttering / carving w zależności od grupy</p><br></br>
<p>dzień 5: piąty dzień szkolenia switch day – snowpark day (zgodnie z dostępnością snowparku)</p>

{/* Mini Gallery */}
<div className="mini-gallery" style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "15px",
  marginTop: "30px",
  marginBottom: "30px",
  maxWidth: "100%"
}}>
  {[1, 2, 3, 4, 5, 6].map((num) => (
    <div
      key={num}
      className="gallery-item"
      onClick={() => handleImageClick4(`/img/LODO${num}.jpg`)}
      style={{
        cursor: "pointer",
        overflow: "hidden",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        aspectRatio: "1/1"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={`/img/LODO${num}.jpg`}
        alt={`Zdjęcie z lodowca ${num}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </div>
  ))}
</div>

<p>źródło zdjęć: bing image search</p>

</div>
               
              

              <h2 className="why-head"> Dwa poziomy zaawansowania </h2>
               <p><strong>MORE PRO</strong> – zaawansowana – na szkoleniu technicznym będzie trenować jazdę na krawędzi na switch oraz na swoją nogę, zaawansowane techniki jazdy na zaawansowanych nachyleniach lodowca oraz będzie się uczyć euro carvingu.
               </p>

               <p>Z drugim instruktorem, wsiąknie w pełni w buttering. Combosy butteringowe oraz wykorzystanie ich w naturalnym środowisku lodowca.  </p>
                

                <p><strong>LESS PRO</strong> – średniozaawansowana – na szkoleniu technicznym będzie trenować jazdę na krawędzi oraz jazdę ślizgową switch. To czas na ciekawe i złożone ćwiczenia techniki jazdy, w których można doszlifować niektóre elementy pod czujnym okiem instruktora oraz rozjeździć ślizg i krawędź na cały sezon. 
                </p>

                <p>Z drugim instruktorem, riders wejdą w świat butteringu. Jeśli podstawy tj dobre czucie deski na ślizgu jest Ci znane, czas nauczyć się i wytrenować nowe bardziej zaawansowane sztuczki butteringowe.</p>
                
                <Link href="/kurs-butteringowy-snowboard.html" className="snowon-p" style={{ paddingLeft: "7px", fontSize: "19px", marginTop: "20px", marginBottom: "20px", color: "black", textDecoration: "underline" }}>Dowiedz się więcej o butteringu</Link>
                <h2 className="why-head">kurs zamykający sezon </h2>
               <p>Gletscher Lines z POW POW RIDERS. Marzenie każdego snowboardzisty, aby w sezonie pojechać na lodowiec! Mölltaler jest niedaleko Polski, idealny na podsumowanie sezonu. Wysokość tras nawet powyżej 3 tys. m.n.p.m. Idealny pod kątem ilości tras oraz snowparku. 
               </p>

               <h2 className="why-head">winter base</h2>
               <p>Każda deska, każdy rider potrzebuje “poczuć” się na śniegu i porządnie pojeździć. Kurs, łączący w sobie buttering i carving oraz czas na jazdę własną to szkolenie skomponowane idealnie pod lodowiec. 
               </p>

               <p>Z pierwszym instruktorem, riders wejdą w świat carvingu. Jeśli dopiero zaczynasz jazdę na krawędzi, lodowiec oraz trening z Pow Pow znacznie podniosą Twoje możliwości. Jeśli już jeździsz na krawędzi, nauczysz się zaawansowanej kontroli w krótkich i długich skrętach oraz poznasz eurocarving.</p>

                <p>Z drugim instruktorem, riders wejdą w świat butteringu. Jeśli podstawy tj dobre czucie deski na ślizgu jest Ci znane, czas nauczyć się i wytrenować nowe bardziej zaawansowane sztuczki butteringowe.</p>
                
                <p style={{ width: "100%" }}>Dodatkowo szykujemy coś EXTRA - <strong> INSTRUKTOR GOODIES</strong>
                </p>

                <p>Na wyjeździe przygotowaliśmy praktyczny blok szkoleniowy dla Asystentów i Instruktorów oparty o trening mentalny w sporcie. Chcemy, aby każdy z Was uczył – przekazywał zajawkę, z dziką pewnością siebie i jakością.</p>
                </div>
            </section>

            <div className="why-butter" style={{ marginTop: "60px" }}>
              
              <div
                className="write-me-to-butter"
                style={{
                  justifyContent: "center",
                  width: "auto",
                  paddingTop: "20px",
                }}
              >
                <Link
                  href="/pow-store/produkt/spring-camp-lodowiec/"
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

            <section className="why-powpow what-on-buttering snow-on-section">
              <div className="why-content" style={{ padding: "10px"}}>
                <h2 className="why-head">
                FAQ 
                </h2>

<p className="snowon-p"><strong>NOCLEG</strong></p>
<p>Dla naszych uczestników mamy zarezerwowany nocleg w miejscowości Flattach nieopodal Lodowca w pensjonacie Landhaus Bürse. Dojazd na stok to jedyne 13 min. </p>
                

                <p className="snowon-p"><strong>DOJAZD</strong></p>
                <p>Z Krakowa – mini BUS + osobowe – szybciej na miejscu, mobilność, wygodniej w trasie, wyjazd w godzinach porannych o godz. 9.
                W przypadku zmian cen paliwa możliwa niższa bądź wyższa kwota.</p>
                <p className="snowon-p" style={{ fontWeight: "bold" }}>Jak zorganizować dojazd? Czy Camp jest dla mnie, jesli nie mam jak samodzielnie dotrzeć na miejsce? </p>
                <p>Zdecydowanie jest dla Ciebie, jeśli tylko tak czujesz. Dojazdy na wszystkie nasze kursy zawsze koordynujemy od storny organizacyjnej, pomagając naszym kursantom znaleźć dojazd z innym uczestnikiem, często z tego samego miasta. Tutaj ważne jest również to, by jeśli masz prawo jazdy oraz opcję zorganizowania samochodu, zgłosił to do organizatora. Przy długich trasach dodatkowy kierowca to ważna wiadomość. </p>
                <p className="snowon-p" style={{ fontWeight: "bold" }}>Czy będzie transport zorganizowany?</p>
                <p style={{ width: "100%" }}>Tak, dojazd zorganizowany z Krakowa przez Katowice.</p>
                
                <p className="snowon-p" style={{ fontWeight: "bold" }}>Jakie dodatkowe opłaty powinnam/powinienem uwzględnić?</p>
                <p>– dojazd – przewidujemy kwotę 350-380 zł w obie strony, kwota te uwzględnia wszytskie opłaty, w tym ceny autostrad oraz paliwo. 
Wyjazd z Krakowa przez Katowice</p>
<p style={{ width: "100%" }}>– karnet – przeczytaj więcej poniżej</p>

<p>Nie uwzględniliśmy również sprzętu oraz wyżywienia. Obie rzeczy sugerujemy zabrać ze sobą z Polski. Choć na miejscu jest również oczywiście dostępny sklep spożywczy oraz wypożyczalnia.</p>

<p className="snowon-p"><strong>KARNET</strong></p>
<p className="snowon-p" style={{ fontWeight: "bold" }}>Czy na karnet obowiązują zniżki? </p>
<p>Tak. Jeśli uczysz się, pracujesz jako nauczyciel lub trener, instruktor snowboardu, tzn. masz aktualną legitymację lub licencję, obowiązuje Cię zniżka w systemie gopass. Po więcej informacji napisz do nas, pomożemy!
</p>

<p className="snowon-p" style={{ fontWeight: "bold" }}>Jaki karnet należy kupić?</p>
<p className="snowon-p">płatny osobno we własnym zakresie, cena z października 2025

  <br></br>
– ze zniżką 165 eur (ok 700 zł) – przeczytaj o zniżce poniżej
<br></br>
– 222 eur (ok. 900 zł)

</p>
                </div>
                </section>

                <div className="why-butter" style={{ marginTop: "60px" }}>
              <h2 style={{ textTransform: "uppercase" }}>
              RAMOWY PLAN KURSU
              </h2>
              <p style={{ textAlign: "left" }}>
              5 DNI JAZDY NA LODOWCU – 5 DNIOWE SZKOLENIE – MAKSIMUM WYKORZYSTANEGO CZASU  – NIESPODZIANKI SZKOLENIOWE SNOWBOARDOWE
              </p>

              <div className="list" style={{ display: "flex", alignItems: "center"}}>
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                      width={50}
                    />
                    <p>1 - podróż z Polski, przyjazd, zakwaterowanie, wspólny czas
                    </p>
                  </div>

                  <div className="list" style={{ display: "flex", alignItems: "start"}}>
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                      width={50}
                    />
                    <p>
                    2 - pierwszy dzień kursu butteringowego/carvingowego, zależnie od grupy oraz przywitanie lodowca – niespodzianki jak jazda „za linią” instruktora, która daje ogromny progres – szybciej podejmiesz decyzje, zbierasz skupienie i odwagę na przejazdy off piste czy side hity.<br></br>
Każdy przejazd jest bezpieczny – zawsze możesz ominąć element.<br></br>
Chodzi o zajawę i rozwój oraz odrobinę adrenaliny.

                      </p>
                    
                  </div>
             
            

            <div className="list" style={{ display: "flex", alignItems: "start"}}>
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                      width={50}
                    />
                    <p> 3 – 5
Kolejne dni szkolenia buttering / carving<br></br>

<br></br>
W butteringu:<br></br>
grupa less pro – slides, spins, little jumps, roles i wiele innych<br></br>
grupa more pro – buttering combos, sidehits i wiele innych
<br></br><br></br>
W carvingu:<br></br>
grupa less pro – wprowadzenie prędkości i pozycji, cięty, ćwiczenia w ciętym i wiele innych<br></br>
grupa more pro – śmig cięty, euro carving, cięty switch i wiele innych
</p>
                  </div>
            

           

                  <div className="list" style={{ display: "flex", alignItems: "start"}}>
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                      width={50}
                    />
                    <p>
                    6 – 
piąty dzień szkolenia switch day – snowpark day (zgodnie z dostępnością snowparku)

</p>
                  </div>

                  <div className="list" style={{ display: "flex", alignItems: "start"}}>
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                      width={50}
                    />
                    <p>
                    7 - wyspani, spakowani wykwaterowujemy się ruszamy w podróż powrotną. 


</p>
                  </div>

                  <br></br>

                  <div className="list" style={{ display: "flex", alignItems: "start"}}>
                    <img
                      src="/img/snow-pow-camp/snowboard-green.webp"
                      className="icon-about-camp"
                      alt="ikonka snowboardera"
                      width={50}
                    />
                    <p>
                    Program wieczorny.<br></br>
W programie również wspólne wieczorne regeneracje i masa zajawy, jak zawsze w domowej przyjacielskiej atmosferze.



</p>
                  </div>
            </div>

            <div className="why-butter" style={{ marginTop: "60px" }}>
              
              <div
                className="write-me-to-butter"
                style={{
                  justifyContent: "center",
                  width: "auto",
                  paddingTop: "20px",
                }}
              >
                <Link
                  href="/pow-store/produkt/spring-camp-lodowiec/"
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

            {/* <section className="why-powpow what-on-buttering snow-on">
              <div className="why-content">
                <h2 className="why-head"> Dwa poziomy zaawansowania </h2>
               <p>MORE PRO – zaawansowana – na szkoleniu technicznym będzie trenować jazdę na krawędzi na switch oraz na swoją nogę, zaawansowane techniki jazdy na zaawansowanych nachyleniach lodowca oraz będzie się uczyć euro carvingu.
               </p>

               <p>W drugim bloku szkoleniowym, kolejnych dwóch dniach z drugim instruktorem, wsiąknie w pełni w buttering. Combosy butteringowe oraz wykorzystanie ich w naturalnym środowisku lodowca.  </p>
                <Link href="">Dowiedz się więcej o butteringu</Link>

                <p>LESS PRO – średniozaawansowana – na szkoleniu technicznym będzie trenować jazdę na krawędzi oraz jazdę ślizgową switch. To czas na ciekawe i złożone ćwiczenia techniki jazdy, w których można doszlifować niektóre elementy pod czujnym okiem instruktora oraz rozjeździć ślizg i krawędź na cały sezon. 
                </p>

                <p>W dwóch kolejnych dniach szkolenia, z drugim instruktorem, riders wejdą w świat butteringu. Jeśli podstawy tj dobre czucie deski na ślizgu jest Ci znane, czas nauczyć się i wytrenować nowe bardziej zaawansowane sztuczki butteringowe.</p>
                
                <Link href="">Dowiedz się więcej o butteringu</Link>
                </div>
              
            </section>

            <section className="why-powpow what-on-buttering snow-on">
              <div className="why-content">
                <h2 className="why-head">kurs zamykający sezon </h2>
               <p>Fresh First Lines z POW POW RIDERS. Marzenie każdego snowboardzisty, aby sezon zacząć najwcześniej jak to możliwe, a jest to możliwe z Pow Pow Riders 7–13.11.25. Lodowiec niedaleko Polski, idealny na start sezonu. Wysokość nawet powyżej 3 tys. m.n.p.m. Idealna wielkość i ilość tras, aby rozjeździć się porządnie, ale jednocześnie sprostać długości tras na samym początku sezonu. 
               </p>

               <h2 className="why-head">winter base</h2>
               <p>A każda deska potrzebuje “poczuć” się na śniegu. Każdy riders potrzebuje porządnie się rozjeździć. Kurs otwierający, łączący w sobie czas na jazdę własną ze szkoleniem skomponowanym idealnie pod otwarcie sezonu, to świetna ku temu okazja. 
               </p>

                <p>LESS PRO – średniozaawansowana – na szkoleniu technicznym będzie trenować jazdę na krawędzi oraz jazdę ślizgową switch. To czas na ciekawe i złożone ćwiczenia techniki jazdy, w których można doszlifować niektóre elementy pod czujnym okiem instruktora oraz rozjeździć ślizg i krawędź na cały sezon. 
                </p>

                <p>W dwóch kolejnych dniach szkolenia, z drugim instruktorem, riders wejdą w świat butteringu. Jeśli podstawy tj dobre czucie deski na ślizgu jest Ci znane, czas nauczyć się i wytrenować nowe bardziej zaawansowane sztuczki butteringowe.</p>
                
                <Link href="">Dowiedz się więcej o butteringu</Link>
                </div>
              
            </section> */}

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

          {selectedImage4 && (
            <div className="modal4" onClick={handleCloseClick4}>
              <button className="close4" onClick={handleCloseClick4}>
                X
              </button>
              <img src={selectedImage4} alt="powiększony obraz" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};


export default Lodowiec;
