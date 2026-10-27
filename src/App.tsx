import titreMagazine from "./assets/titre_magazine.png";
import "./App.css";
import Navigation from "./Navigation";
import Articles from "./Articles";
import EnteteNumero from "./EnteteNumero";

function App() {
  return (
    <>
      <header id="center">
        <div className="titreMagazine">
          <img
            src={titreMagazine}
            className="base"
            width="170"
            height="179"
            alt="titre du magazine Sillons"
          />
        </div>
        <Navigation />
        <div>
          <h1>Hello</h1>
          <img src="/src/assets/images/image-hero_2880.jpg" alt="placeholder" />
        </div>
      </header>
      <main className="mx-auto max-w-360 px-5">
        <EnteteNumero />
        <section id="articles">
          <Articles />
        </section>
      </main>
    </>
  );
}

export default App;
