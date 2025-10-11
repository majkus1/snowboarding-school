import { useEffect, useState } from "react";
import Link from "next/link";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showNewContent, setShowNewContent] = useState(false);

  useEffect(() => {
    const now = new Date();
    const testDate = new Date(2024, 10, 30, 15, 0, 0); // 30 listopada 2024, godzina 15:00
    setShowNewContent(now >= testDate);

    // Pokazuj popup na każdej podstronie
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={handleClose} style={{ overflow: "scroll" }}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-btn" onClick={handleClose}>
          X
        </button>

        {showNewContent ? (
          <>
            {/* <p style={{ fontSize: "18px" }}>
            Dziękujemy za Pow Pow B–day Week 🎂 oraz White Week 😊 
            </p>
            <p style={{ fontSize: "18px" }}>
            Do zobaczenia na śniegu i na insta, Riders: 
               <a
                href="https://www.instagram.com/powpow_riders/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textDecoration: "underline",
                }}
              >
                 @powpow_riders
              </a>
               !☃
            </p> */}
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
            ⛄ Dziękujemy za fantastyczne kursy snowboardowe w sezonie 24/25!
            </p>
            <p style={{ fontSize: "18px", paddingBottom: "7px" }}>Już za moment widzimy się na zakończeniu sezonu w Tatrach Wysokich – <span style={{ fontWeight: "bold" }}>Pow Pow Riders Family Meet w Tatrzańskiej Łomnicy</span>, już 6.04.25.</p>
            <p style={{ fontSize: "18px", paddingBottom: "7px" }}><span style={{ fontWeight: "bold" }}>Koniecznie daj znać, czy będziesz!</span></p>
            <p style={{ fontSize: "18px" }}><Link href='https://docs.google.com/forms/d/e/1FAIpQLSdPy16S0z2WHqWwgqszFLvbvJpGpivYxAinnHctr0LEHPx2Rw/viewform?usp=embed_facebook' target="_blank" style={{ textDecoration: "none", color: "black" }}>👉 Więcej informacji</Link></p>
          </>
        ) : (
          <>
            <p style={{ fontSize: "18px" }}>
              <strong>Więcej możliwości, mniej ograniczeń</strong> zimą na śniegu.
            </p>
            <p style={{ fontSize: "18px" }}>
              🤫 Ekskluzywna oferta Power Knees, tylko przez chwilę – z którą zaoszczędzisz 15%.
            </p>
            <p style={{ fontSize: "18px" }}>
              ⏳ Zobacz szczegóły:{" "}
              <a
                href="https://powpowriders.com/pow-store/produkt/8-tygodniowy-pogram-treningowo-rozwojowy-sporty-zimowe/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textDecoration: "underline",
                }}
              >
                Kliknij tutaj
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
