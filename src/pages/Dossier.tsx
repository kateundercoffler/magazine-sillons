import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import titreMagazine from "../assets/titre_magazine.png";
import section01Small from "../assets/images/section01-750.jpg";
import section01Large from "../assets/images/section01-1500.jpg";
import section02Small from "../assets/images/section02-750.jpg";
import section02Large from "../assets/images/section02-1500.jpg";

export default function Dossier() {
  return (
    <Layout>
      <Layout.Header>
        <Link
          to="/"
          className="self-center pt-24 md:self-start md:pl-8 md:pt-8"
        >
          <img
            src={titreMagazine}
            width="300"
            alt="titre du magazine Sillons, retour à l'accueil"
          />
        </Link>
        <h1 className="font-serif text-3xl md:text-4xl pt-10 md:pt-16">
          Lenteur sans filtre
        </h1>
        <div className="font-serif font-light text-base md:text-lg px-6 pt-5 pb-12 md:pb-40 text-center max-w-2xl flex flex-col gap-6">
          <p>
            Sur les réseaux, le matin lent a une esthétique bien précise:
            lumière dorée, café versé en filet, carnet ouvert sur des draps de
            lin. En vrai, il ressemble plus souvent à une tasse qui refroidit
            sur le comptoir pendant qu'on cherche ses clés.
          </p>
          <p>Et c'est très bien comme ça.</p>
        </div>
      </Layout.Header>
      <Layout.Main>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-8 items-start text-left mx-auto max-w-md md:max-w-none">
          <img
            src={section01Large}
            srcSet={`${section01Small} 750w, ${section01Large} 1500w`}
            sizes="(min-width: 768px) 50vw, min(100vw, 448px)"
            loading="lazy"
            className="w-full md:col-span-6"
            alt=""
          />
          <div className="md:col-start-9 md:col-span-4">
            <h2 className="font-serif text-2xl">
              D'où vient cette envie de ralentir
            </h2>
            <div className="font-sans font-light lg:text-base pt-6 gap-5 flex flex-col">
              <p>
                L'envie de ralentir naît souvent d'une fatigue diffuse. Les
                journées s'enchaînent à un rythme que personne n'a vraiment
                choisi. Les notifications arrivent dès le réveil, les agendas se
                remplissent des semaines à l'avance, et le temps libre lui-même
                devient une case à optimiser.
              </p>
              <p>
                À un moment, quelque chose résiste. On a l'impression de passer
                à côté de sa propre vie, de la regarder défiler plutôt que de
                l'habiter. Ralentir devient alors moins une tendance qu'un
                besoin : celui de reprendre un peu de pouvoir sur ses heures.
              </p>
              <p>
                Cette envie s'est étendue à tout : voyage, mode, éducation des
                enfants. Le matin est devenu son terrain de prédilection. C'est
                le seul moment de la journée qui semble encore nous appartenir,
                avant que les courriels, le trafic et les obligations ne s'en
                emparent. Le problème, c'est que cette critique de la vitesse a
                fini par emprunter les codes de ce qu'elle dénonçait. Et c'est
                là que le filtre entre en scène.
              </p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-8 items-start text-left mx-auto max-w-md md:max-w-none mt-24 md:mt-40">
          <img
            src={section02Large}
            srcSet={`${section02Small} 750w, ${section02Large} 1500w`}
            sizes="(min-width: 768px) 33vw, min(100vw, 448px)"
            loading="lazy"
            className="w-full order-1 md:order-2 md:col-start-9 md:col-span-4"
            alt=""
          />
          <div className="order-2 md:order-1 md:col-start-1 md:col-span-4">
            <h2 className="font-serif text-2xl">Le matin qu'on nous vend</h2>
            <div className="font-sans font-light lg:text-base pt-6 gap-5 flex flex-col">
              <p>
                La lenteur est devenue un produit. On nous la présente en
                carrousels: réveil à 5 h, méditation, jus vert, écriture
                intuitive, étirements au soleil levant. Chaque étape a son
                accessoire, et chaque accessoire a son lien d'affiliation. Le
                paradoxe saute aux yeux. On voulait sortir de la performance, et
                on se retrouve à performer le calme. Il faut que la routine soit
                belle, complète, digne d'être photographiée. Sinon, on a
                l'impression de l'avoir ratée.
              </p>
              <p>
                Les algorithmes n'arrangent rien. Une image calme et soignée
                retient l'œil, alors on en voit de plus en plus. À force, on
                finit par croire que c'est ça, un bon matin. On compare alors
                notre cuisine en désordre à un décor mis en scène, éclairé et
                retouché, souvent par quelqu'un dont c'est le métier. La
                comparaison est perdue d'avance, et elle nous laisse avec un
                sentiment d'échec avant même d'avoir bu notre café
              </p>
              <p>
                Ce matin-là n'est pas lent. Il est chorégraphié. Et il demande
                souvent plus d'énergie, de temps et d'argent que le matin pressé
                qu'il prétend remplacer.
              </p>
            </div>
            <h2 className="font-serif text-2xl pt-24">La lenteur, pour vrai</h2>
            <div className="font-sans font-light lg:text-base pt-6 gap-5 flex flex-col max-h-56 overflow-hidden mask-[linear-gradient(to_bottom,black_20%,transparent)]">
              <p>
                La vraie lenteur est rarement spectaculaire. C'est boire son
                café assis plutôt que debout devant l'évier. C'est regarder par
                la fenêtre deux minutes avant d'ouvrir ses courriels. C'est ne
                rien faire de particulier, et le faire exprès.
              </p>
              <p>
                Elle est aussi imparfaite. Il y a des matins où l'enfant
                renverse le lait, où le chien veut sortir, où la neige est à
                pelleter avant 7h. La lenteur ne disparaît pas pour autant. Elle
                se loge dans les interstices: une respiration dans l'auto, une
                toune écoutée jusqu'au bout. La lenteur n'est pas non plus une
                question de durée. On peut se lever à 5h et courir toute la
                matinée d'une tâche à l'autre. On peut aussi n'avoir que vingt
                minutes et les vivre sans hâte.
              </p>
            </div>
            <div className="pt-8 flex flex-col items-start gap-4">
              <p className="font-serif italic text-lg">
                Oups, la suite est réservée à nos abonné·e·s.
                <br />
                La lenteur, ça se mérite.
              </p>
              <Link
                to="/"
                className="border border-current px-5 py-2 font-sans font-light text-sm uppercase tracking-widest transition-all duration-300 hover:bg-buttonHover hover:text-buttonTextHover hover:border-buttonHover"
              >
                S'abonner
              </Link>
            </div>
          </div>
        </section>
      </Layout.Main>
    </Layout>
  );
}
