// Import images
import css from "../img/logos/CSS3.png";
import express from "../img/logos/express.png";
import git from "../img/logos/git.png";
import html from "../img/logos/HTML5.png";
import javascript from "../img/logos/javascript.png";
import mongodb from "../img/logos/mongodb.png";
import nodejs from "../img/logos/nodejs.png";
import react from "../img/logos/React.png";
import Footer from "../components/Footer";
const Presentation = () => {
  return (
    <div className="container">
      <section>
        <div className="bg-img-two">
          <div className="all-name">
            <div className="my-name">
              <h1>Le Reacteur</h1>
              <h2>Bootcamp - Développeur Web</h2>
            </div>
          </div>
        </div>

        <div className="section-presentation">
          <h3 className="surtitle">Technicienne de laboratoire </h3>
          <h2 className="title">10 ans au service de la qualité </h2>
          <p className="article">
            Après avoir travaillé pendant 10 ans dans l'industrie pharmaceutique
            et agroalimentaire pour des grands groupes tels que Arkema, Danone
            et Roquette, j'ai décidé de changer de carrière et de me lancer dans
            le domaine de la technologie. Cette décision a été motivée par un
            désir de développement personnel et une passion pour les défis
            technologiques.
            <br />
            Je suis consciente que le métier de développeur web full stack
            nécessite des compétences techniques diverses, mais j'ai décidé de
            relever ce défi avec enthousiasme. Je suis actuellement en train de
            me former sur les langages de programmation tels que HTML, CSS,
            JavaScript et PHP, ainsi que sur les outils de développement, les
            frameworks et les bibliothèques.
            <br />
            Cependant, j'aimerais souligner que mon expérience antérieure dans
            l'industrie pharmaceutique et agroalimentaire peut également
            m'apporter un avantage considérable dans ma nouvelle carrière de
            développeuse web full stack. Au cours de ces années, j'ai acquis des
            compétences clés en matière de travail d'équipe, de communication,
            de résolution de conflits et de négociation, qui seront très utiles
            dans mon nouveau rôle. <br />
            De plus, j'ai travaillé dans des secteurs hautement réglementés et
            exigeants en matière de qualité et de conformité. Ces compétences
            peuvent être appliquées dans le développement de logiciels pour
            garantir que les codes respectent les normes de qualité et de
            sécurité en vigueur.
            <br />
            En somme, je suis convaincue que mes compétences transférables, mes
            capacités d'apprentissage rapide et ma passion pour la technologie
            me permettront de réussir ma reconversion en tant que développeuse
            web full stack. Je suis motivée à l'idée de contribuer à des projets
            innovants et à collaborer avec une équipe de professionnels
            talentueux. Je suis impatiente de voir les opportunités
            passionnantes que cette nouvelle carrière me réserve. <br />
            Aujourd'hui, je me tourne vers un nouveau défi en entamant une
            reconversion professionnelle en tant que{" "}
            <strong>Développeur Web</strong> . Les compétences techniques et les
            valeurs fortes acquises au cours de ses années en tant que
            Techniciennes de laboratoire constitueront un atout précieux pour
            mon nouveau parcours.
          </p>
        </div>

        <div className="scroll-img03"></div>

        <div className="section-presentation">
          <h3 className="surtitle">Compétences</h3>
          <h2 className="title">A developper encore et toujours</h2>
          <ul className="liste-ul">
            <li className="disc">
              • JavaScript avec Node.js : Variables, conditions, boucles,
              fonctions et callback...
            </li>
            <li>• Front-end : HTML5, CSS3, React.js, React Native.</li>
            <li>• Back-end : Serveur Express, API, Base de Données MongoDB.</li>
          </ul>
        </div>

        <section className="presentation-competences">
          <div className="box-logos">
            <div className="presentation-all-logos">
              <div className="presentation-logos">
                <img src={react} alt="Picto react" />
                <a
                  href="https://fr.reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  React
                </a>
              </div>
              <div className="presentation-logos">
                <img src={javascript} alt="Picto Javascript" />
                <a
                  href="https://www.w3schools.com/js/default.asp"
                  target="_blank"
                  rel="noreferrer"
                >
                  JavaScript
                </a>
              </div>

              <div className="presentation-logos">
                <img src={nodejs} alt="Picto nodejs" />
                <a
                  href="https://nodejs.org/fr/docs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Node.js
                </a>
              </div>
              <div className="presentation-logos">
                <img src={html} alt="Picto html" />
                <a
                  href="https://developer.mozilla.org/fr/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noreferrer"
                >
                  HTML5
                </a>
              </div>
              <div className="presentation-logos">
                <img src={css} alt="Picto css" />
                <a
                  href="https://www.w3schools.com/cssref/index.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  CSS3
                </a>
              </div>
              <div className="presentation-logos">
                <img src={express} alt="Picto express" />
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Express
                </a>
              </div>
              <div className="presentation-logos">
                <img src={mongodb} alt="Picto mongodb" />
                <a
                  href="https://www.mongodb.com/docs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MongoDB
                </a>
              </div>
              <div className="presentation-logos">
                <img src={git} alt="Picto git" />
                <a
                  href="https://git-scm.com/doc"
                  target="_blank"
                  rel="noreferrer"
                >
                  git
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="section-presentation">
          <h3 className="surtitle">Formation</h3>
          <h2 className="title">Le Reacteur - Bootcamp</h2>
          <p className="article">
            J'ai récemment entrepris une nouvelle aventure professionnelle en
            suivant le Bootcamp de Le Reacteur à Paris. Cette formation de haut
            niveau m'a offert l'opportunité de me familiariser avec les
            différentes technologies et outils de codage, ainsi que de
            développer des bases solides en programmation. J'ai choisi cette
            reconversion professionnelle pour relever de nouveaux défis et
            travailler sur des projets plus stimulants. Depuis toujours, j'ai
            nourri une passion pour les nouvelles technologies et la
            programmation, et cette formation m'a permis de la concrétiser. A
            présent, je suis en quête d'un stage de 6 mois en tant que
            Développeur Web & Mobile, afin de mettre en pratique mes
            connaissances et développer mes compétences. Je suis persuadé que ce
            stage sera l'occasion pour moi de me perfectionner davantage, de
            découvrir de nouvelles méthodes de travail, et de contribuer de
            manière significative à l'entreprise qui m'accueillera.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Presentation;
