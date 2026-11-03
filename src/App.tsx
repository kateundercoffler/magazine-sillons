import titreMagazine from "./assets/titre_magazine.png";
import { motion } from "framer-motion";
import "./App.css";
import Navigation from "./Navigation";
import Articles from "./Articles";
import EnteteNumero from "./EnteteNumero";
import Footer from "./Footer";
import Entrevue from "./Entrevue";
import ScrollToTopButton from "./ScrollToTop";
import { Link } from "react-router-dom";
// import Dossier from "./Dossier";

function App() {
  return (
    <>
      <header id="center">
        <h1 className="font-sans lg:text-lg sm:text-md font-light uppercase mt-14">
          Magazine
        </h1>
        <div className="titreMagazine">
          <img
            src={titreMagazine}
            className="base"
            width="643"
            height="250"
            alt="titre du magazine Sillons"
          />
        </div>
        <Navigation />
        <div>
          <img
            className="sm:object-fill"
            src="/src/assets/images/image-hero_2880.jpg"
            alt="placeholder"
          />
          <div className="grid grid-cols-1 lg:top-10/12 right-0 md:top-9/12 sm:top-6/12 absolute text-white pr-10 gap-2">
            <div className="font-serif text-3xl">Lenteur sans filtre</div>
            <div className="font-sans font-light text-base">
              La magie de vivre lentement sans influence
              <div>
                <ul>
                  <li className="list-none pt-5 hover:font-medium hover:underline underline-offset-4 transition-all duration-300">
                    <Link to="/dossier">Lire notre dossier spécial</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto mb-24 max-w-360 px-5">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <EnteteNumero />
          <section id="articles">
            <Articles />
          </section>
        </motion.div>
        <Entrevue />
        <div className="flex justify-center items-center mt-20">
          <img
            src="/src/assets/images/illustration.png"
            alt=""
            width={500}
            height={300}
          />
        </div>
        <ScrollToTopButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
