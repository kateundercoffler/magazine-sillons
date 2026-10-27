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
    <div className="flex flex-col justify-center items-center max-w-83.5">
      <figure>
        <img
          src={cardData.image.url}
          alt={cardData.image.alt}
          width={334}
          height={400}
        />
      </figure>
      <div className="card-body place-self-start">
        <h2 className="card-title pt-5 font-normal tracking-widest text-lg">
          {cardData.title}
        </h2>
        <p className="font-light pt-3 text-lg">{cardData.description}</p>
      </div>
    </div>
  );
}
