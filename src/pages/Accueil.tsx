import titreMagazine from "../assets/titre_magazine.png";
import hero750 from "../assets/images/hero-750.jpg";
import hero1500 from "../assets/images/hero-1500.jpg";
import hero2880 from "../assets/images/image-hero_2880.jpg";
import illustration from "../assets/images/illustration-1000.png";
import { motion } from "framer-motion";
import Articles from "../components/Articles";
import EnteteNumero from "../components/EnteteNumero";
import Entrevue from "../components/Entrevue";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
//#

function Accueil() {
  return (
    <Layout>
      <Layout.Header>
        <h1 className="font-sans text-base lg:text-lg font-light uppercase mt-24 md:mt-14">
          Magazine
        </h1>
        <div className="titreMagazine">
          <Link to="/">
            <img
              src={titreMagazine}
              width="643"
              height="250"
              alt="titre du magazine Sillons, retour à l'accueil"
            />
          </Link>
        </div>
        <div className="relative">
          <img
            className="sm:object-fill"
            src={hero1500}
            srcSet={`${hero750} 750w, ${hero1500} 1500w, ${hero2880} 2880w`}
            sizes="100vw"
            alt="placeholder"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/10" />
          <div className="grid grid-cols-1 bottom-8 lg:bottom-[25%] right-1 absolute text-white pr-10 gap-2">
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
      </Layout.Header>
      <Layout.Main>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
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
            src={illustration}
            loading="lazy"
            alt=""
            width={500}
            height={300}
          />
        </div>
      </Layout.Main>
    </Layout>
  );
}

export default Accueil;
