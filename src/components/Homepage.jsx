import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <section className="container--lg hero">
        <div className="content">
          <h1 className="title font-bold">
            På Utkikk? <br />
            Møt muligheter!
          </h1>
          <p className="text">Vi har flere tusen annonser!</p>

          <div className="mt-3">
            <Link
              className="button button__larger button__strong"
              to={"/jobposts"}
            >
              Se annonser
            </Link>
          </div>
        </div>
        <div className="img-container">
          <img
            src="images/young-woman-looking-at-phone-smiling.png"
            alt="En glad dame"
          />
        </div>
      </section>

      <section className="m-section">
        <div class="centered-div">
          <h2>Hvordan fungerer dette?</h2>
          <p>
            Hver dag samler vi inn stillinger fra ulike nettsider ved hjelp
            av&nbsp;
            <Link
              to={"https://github.com/JonathanD01/job-scraper"}
              target="_blank"
            >
              "job scraper"
            </Link>
            . All dataen blir sendt til vår&nbsp;
            <Link
              to={"https://github.com/JonathanD01/job-post-backend"}
              target="_blank"
            >
              "backend"
            </Link>{" "}
            og til slutt vist på nettsiden. Dette gjør det enklere for folk,
            inkludert meg, som letter etter en jobb ettersom{" "}
            <span style={{ color: "red" }}>*</span>flere stillingene er
            tilgjengelige her.
            <p>
              <small>
                <span style={{ color: "red" }}>*</span>Finn ut hvor vi henter
                stillingene fra{" "}
                <Link
                  to={"https://github.com/JonathanD01/job-scraper"}
                  target="_blank"
                >
                  her
                </Link>
                .
              </small>
            </p>
          </p>
        </div>
      </section>

      <div class="container--lg grid-section-layout-3 m-section">
        <section class="grid-section-3-card">
          <img src="/images/man-thinking-options-2.jpg" />
          <h2 class="title">Tusener av stillinger!</h2>
          <p class="text">
            Let gjennom tusener av stillinger som er tilgjengelige på vår
            plattform - plettfritt!
          </p>
          <a class="link" href="/jobposts">
            <span class="naked-url">Se stillinger</span>
          </a>
        </section>
        <section class="grid-section-3-card">
          <img src="/images/woman-using-computer-system-2.jpg" />
          <h2 class="title">Brukervennlig system</h2>
          <p class="text">
            Systemet vårt er brukervennlig slik at du kan enkelt og greit lete
            etter en jobb som passer for deg!
          </p>
          <a class="link" href="/jobposts">
            <span class="naked-url">Utforsk systemet</span>
          </a>
        </section>
        <section class="grid-section-3-card">
          <img src="/images/group-programming-2.jpg" />
          <h2 class="title">Åpen kildekode</h2>
          <p class="text">
            Lyst til å vite mer om vår kildekode? Da er du i trygge hender.
          </p>
          <a
            class="link"
            href="https://github.com/JonathanD01/job-post-frontend"
            target="_blank"
          >
            <span class="naked-url">Les mer om kildekoden</span>
          </a>
        </section>
      </div>
    </>
  );
};

export default Homepage;
