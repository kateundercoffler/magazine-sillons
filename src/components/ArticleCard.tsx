import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = { cardData: CardData };

/**
 * CardData type represents the data structure for an article card.
 * @param title - The title of the article.
 * @param description - A brief description of the article.
 * @param href - Optional internal route the card links to (placeholder "#" when omitted).
 * @param image - An object containing the URL and alt text for the article's image.
 */
export type CardData = {
  title: string;
  description: string;
  href?: string;
  image: { url: string; alt: string };
};

function CardLink({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  return href ? (
    <Link className={className} to={href}>
      {children}
    </Link>
  ) : (
    <a className={className} href="#">
      {children}
    </a>
  );
}

export default function ArticleCard({ cardData }: Props) {
  return (
    <div className="flex flex-col justify-center items-center max-w-83.5">
      <figure>
        <CardLink href={cardData.href}>
          <img
            className="hover:shadow-xl transition-all duration-300 hover:scale-103"
            src={cardData.image.url}
            alt={cardData.image.alt}
            width={334}
            height={400}
            loading="lazy"
          />
        </CardLink>
      </figure>
      <div className="card-body place-self-start">
        <CardLink className="hover:text-linksActive" href={cardData.href}>
          <h2 className="card-title pt-5 font-normal tracking-widest text-lg">
            {cardData.title}
          </h2>
          <p className="font-light pt-3 text-lg">{cardData.description}</p>
        </CardLink>
      </div>
    </div>
  );
}
