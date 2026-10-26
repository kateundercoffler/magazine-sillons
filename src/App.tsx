import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import titreMagazine from "./assets/titre_magazine.png";
import "./App.css";
import Navigation from "./Navigation";
import Articles from "./Articles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
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
          <img src="https://placehold.co/1440x648" alt="placeholder" />
        </div>
      </section>

      <section id="articles">
        <Articles />
      </section>
    </>
  );
}

export default App;
