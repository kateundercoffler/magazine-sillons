import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import titreMagazine from "../assets/titre_magazine.png";

export default function Dossier() {
  return (
    <Layout>
      <Layout.Header>
        <Link to="/" className="self-start pl-8 pt-8">
          <img
            src={titreMagazine}
            width="300"
            alt="titre du magazine Sillons, retour à l'accueil"
          />
        </Link>
        <h1 className="font-serif text-3xl">Lenteur sans filtre</h1>
      </Layout.Header>
      <Layout.Main>{null}</Layout.Main>
    </Layout>
  );
}
