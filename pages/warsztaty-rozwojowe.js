import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Popup from '@/components/Popup'

const Warroz = () => {
  return (
    <>
    {/* <Popup /> */}
      <Head>
        <title>Pow Pow Riders | Warsztaty rozwojowe</title>
        <meta name="description" content="" />
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
          <section className="warroz">
            <h2>Warsztaty rozwojowe</h2>
            <p className="warroz-txt-info">
              Aktualnie nie prowadzimy naboru na kolejną edycję.
              <br /> Jeśli jesteś zainteresowany warsztatami psychomotoryki bądź
              z treningu mentalnego w sporcie, napisz na{" "}
              <a href="mailto:powpow.riders@gmail.com">
                powpow.riders@gmail.com
              </a>
            </p>
            <div className="insta-feed" style={{ marginTop: '30px', width: '100%' }}>
              <div className="wrapper-insta" style={{ maxWidth: '900px' }}>
                <div className="insta-line">
                  <a
                    href="https://www.instagram.com/powpow_riders/"
                    target="_blank"
                  >
                    <img
                      src="/img/ig.webp"
                      alt="logo instagrama bez tła"
                      width="50"
                      height="50"
                    />{" "}
                    <p>@powpow_riders</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="warroz-video-ig">
              <Link
                href="https://www.instagram.com/reel/C53H-ZxIh9o/"
                className="wr-ig-two" target="_blank"
              >
                <img src="/img/i2.png" />
              </Link>
              <Link
                href="https://www.instagram.com/p/CcGVXERIVd7/?img_index=1"
                className="wr-ig-one" target="_blank"
              >
                <img src="/img/i1.png" />
              </Link>
              <Link
                href="https://www.instagram.com/reel/CzuBC_DoVJo/"
                className="wr-ig-three" target="_blank"
              >
                <img src="/img/i3.png" />
              </Link>
            </div>
            <style jsx>{`
            .insta-feed .wrapper-insta .insta-line {
                width: 100% !important;
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

export default Warroz;
