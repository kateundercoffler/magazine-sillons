import titreMagazine from "./assets/titre_magazine.png";
import "./App.css";
import Navigation from "./Navigation";
import Articles from "./Articles";
import EnteteNumero from "./EnteteNumero";
import Footer from "./Footer";
import Entrevue from "./Entrevue";

function App() {
  return (
    <>
      <header id="center">
        <h1 className="font-sans text-lg font-light uppercase mt-14">
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
          <img src="/src/assets/images/image-hero_2880.jpg" alt="placeholder" />
        </div>
      </header>
      <main className="mx-auto mb-24 max-w-360 px-5">
        <EnteteNumero />
        <section id="articles">
          <Articles />
        </section>
        <Entrevue />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
