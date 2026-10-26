import type { CardData } from "./ArticleCard";
import ArticleCard from "./ArticleCard";

type Props = {};

const articles: CardData[] = [
  {
    title: "Avant l'éveil du monde",
    description: "This is the content of Article 1.",
    image: {
      url: "https://placehold.co/334x400",
      alt: "Placeholder image for Article 1",
    },
  },
  {
    title: "Dix minutes à soi",
    description: "This is the content of Article 2.",
    image: {
      url: "https://placehold.co/334x400",
      alt: "Placeholder image for Article 2",
    },
  },
  {
    title: "Lenteur sans filtre",
    description: "This is the content of Article 3.",
    image: {
      url: "https://placehold.co/334x400",
      alt: "Placeholder image for Article 3",
    },
  },
  {
    title: "Apprivoiser le matin",
    description: "This is the content of Article 4.",
    image: {
      url: "https://placehold.co/334x400",
      alt: "Placeholder image for Article 4",
    },
  },
];

export default function Articles({}: Props) {
  return (
    <ul>
      {articles.map((article, index) => (
        <ArticleCard key={index} cardData={article} />
      ))}
    </ul>
  );
}
