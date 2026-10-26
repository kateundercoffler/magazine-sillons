type Props = { cardData: CardData };

/**
 * CardData type represents the data structure for an article card.
 * @param title - The title of the article.
 * @param description - A brief description of the article.
 * @param image - An object containing the URL and alt text for the article's image.
 */
export type CardData = {
  title: string;
  description: string;
  image: { url: string; alt: string };
};

export default function ArticleCard({ cardData }: Props) {
  return (
    <div>
      <figure>
        <img src={cardData.image.url} alt={cardData.image.alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardData.title}</h2>
        <p>{cardData.description}</p>
      </div>
    </div>
  );
}
