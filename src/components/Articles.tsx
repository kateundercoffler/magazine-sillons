import type { CardData } from "./ArticleCard";
import ArticleCard from "./ArticleCard";

type Props = {};

const articles: CardData[] = [
  {
    title: "Avant l'éveil du monde",
    description: "L'heure avant que le monde se reveille, il existe la magie",
    image: {
      url: "/src/assets/images/thumbnail-eveil_668.jpg",
      alt: "Placeholder image for Article 1",
    },
  },
  {
    title: "Dix minutes à soi",
    description: "Nos astuces pour prolonger votre temps à matin",
    image: {
      url: "/src/assets/images/thumbnail-dix-min_668.jpg",
      alt: "Placeholder image for Article 2",
    },
  },
  {
    title: "Lenteur sans filtre",
    href: "/dossier",
    description:
      "Si la lenteur matinale n'avait rien à voir avec l'esthétique des réseaux?",
    image: {
      url: "/src/assets/images/thumbnail-lenteur_668.jpg",
      alt: "Placeholder image for Article 3",
    },
  },
  {
    title: "Apprivoiser le matin",
    description: "Reprendre le matin, ça vaut la peine",
    image: {
      url: "/src/assets/images/thumbnail-apprivoiser_668.jpg",
      alt: "Placeholder image for Article 4",
    },
  },
];

export default function Articles({}: Props) {
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 justify-center justify-items-center">
      {articles.map((article, index) => (
        <ArticleCard key={index} cardData={article} />
      ))}
    </ul>
  );
}
