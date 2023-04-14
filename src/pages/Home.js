import { Link } from "react-router-dom";
import Mail from "../components/Mail";

// Import images
import css from "../img/logos/CSS3.png";
import express from "../img/logos/express.png";
import Logo from "../img/G.png";
import git from "../img/logos/git.png";
import html from "../img/logos/HTML5.png";

import javascript from "../img/logos/javascript.png";

import marvel from "../img/marvel.png";
import mongodb from "../img/logos/mongodb.png";
import nodejs from "../img/logos/nodejs.png";
import reseau from "../img/reseau.jpg";
import react from "../img/logos/React.png";

import vinted from "../img/vinted.png";

import dossierCV from "../img/dossierCV.png";
const Home = () => {
  return (
    <main className="container">
      <section>
        <div className="bg-img-one">
          <div className="all-name">
            <img className="logoCD" src={Logo} alt="" />
            <div className="my-name">
              <h1>Cindy DEWISME </h1>
              <h2>Développeuse Web & Mobile Full Stack</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="btn-cv"></div>
      <div className="fix-scroll-img">
        <div className="scroll-img"></div>
      </div>
      <section className="all-section">
        <div className="left-section">
          <h2 className="title">Qui suis-je ?</h2>
          <p className="article">
            Après dix années passées en laboratoire, je troque mes éprouvettes
            et mes pipettes pour les langages de programmation. Les réactifs
            chimiques pour créer des solutions étonnantes, n'ayant plus de
            secret pour moi. Les langages de programmation et les outils de
            développement seront mes nouveaux réactifs, et les sites web et les
            applications seront mes nouvelles solutions.
          </p>
        </div>
      </section>
      <section className="competences">
        <div className="title-competences">
          <h3 className="surtitle">en savoir plus</h3>
          <h2 className="title">Sur mon savoir-faire !</h2>
        </div>

        <div className="all-logos">
          <div className="logos-competences">
            <img src={react} alt="Picto react" />
            <p>React</p>
          </div>
          <div className="logos-competences">
            <img src={javascript} alt="Picto Javascript" />
            <p>JavaScript</p>
          </div>
          <div className="logos-competences">
            <img src={html} alt="Picto html" />
            <p>HTML5</p>
          </div>
          <div className="logos-competences">
            <img src={css} alt="Picto css" />
            <p>CSS3</p>
          </div>
          <div className="logos-competences">
            <img src={nodejs} alt="Picto nodejs" />
            <p>Node.js</p>
          </div>

          <div className="logos-competences">
            <img src={express} alt="Picto express" />
            <p>Express</p>
          </div>
          <div className="logos-competences">
            <img src={mongodb} alt="Picto mongodb" />
            <p>MongoDB</p>
          </div>
          <div className="logos-competences">
            <img src={git} alt="Picto git" />
            <p>git</p>
          </div>
        </div>
      </section>
      <div className="scroll-img02"></div>
      <section className="all-section-projects">
        <div className="left-section">
          <h3 className="surtitle">Les réalisations</h3>
          <h2 className="title">De mes projets</h2>
        </div>
        <div className="all-projects">
          <Link
            target="_blank"
            to={"https://monumental-faloodeh-574f41.netlify.app/"}
          >
            <div className="project">
              <img src={marvel} alt="Site Marvel" />
            </div>
          </Link>
          <Link target="_blank" to={"https://vinted-api"}>
            <div className="project">
              <img src={vinted} alt="Site Vinted" />
            </div>
          </Link>
        </div>
      </section>
      <section className="all-section">
        <div className="left-section-cv">
          <h3 className="surtitle">Ma motivation</h3>
          <h2 className="title">Mon CV</h2>
          <Link
            target="_blank"
            to={
              "https://drive.google.com/file/d/1aAxmHgsYlR6CO4QgbVNT3U60i-mOVSd2/view?usp=sharing"
            }
          >
            <img className="cv" src={dossierCV} alt="cv" />
          </Link>
        </div>
      </section>
      <section className="all-section">
        <div className="left-section-contact">
          <h3 className="surtitle">Contactez-moi</h3>
          <h2 className="title">Une question ?</h2>
          <div className="my-mail">
            <Mail />
          </div>
        </div>

        <div className="right-section-contact">
          <img className="visuel-contact" src={reseau} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
