type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="flex flex-col justify-center items-center text-lg text-black font-light tracking-widest pt-5 border-t-2 border-t-gray-500 mt-32">
      <div className="flex flex-col justify-center items-center gap-5 w-full">
        <p className="text-4xl font-serif">Abonnez-vous au magazine</p>
        <span className="flex justify-center items-center font-serif text-4xl">
          Sillons
        </span>
        <img
          src="/src/assets/images/couverture.png"
          alt="fleurs mauves dans un champs"
          width={300}
        ></img>
        <button className="border-2 rounded-md border-black p-1.5 hover:bg-black hover:transition hover:delay-200 hover:text-white">
          Apprendre plus
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 font-sans text-sm pt-5 mt-20 gap-5 w-full px-5 pb-16">
          <div className="max-w-md flex flex-col gap-1">
            <div className="mb-5 flex flex-col gap-3.5">
              <div>
                Dans le cadre du cours d'Atelier design d'édition, Sillons est
                un magazine fait par Kate Undercoffler
              </div>
              <div>L'article Lenteur sans filtre a été rédigé par l'IA.</div>
            </div>
            <div>
              <div>Cours d'Atelier de design d'édition</div>
              <div>Université Laval</div>
            </div>
            <div className="text-xs mt-10 flex flex-col gap-5.5">
              <div>
                Sa position est claire: Kate ne soutient pas l'utilisation de
                l'IA pour créer de l'art ni de la littérature. Pourtant, elle
                était obligée de l'utiliser.
              </div>
              <div>© 2026 Kate Undercoffler | Tous droits réservés.</div>
            </div>
          </div>
          <div className="md:justify-self-end max-w-sm flex flex-col gap-1">
            <div>Tous nos numéros</div>
            <div>Magasiner</div>
            <div>À propos de nous</div>
            <div>Nous joindre</div>
            <div>Politiques et confidentialité</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 w-full pt-5 pb-5">
        <span>Instagram</span>
        <span>Facebook</span>
        <span>Threads</span>
      </div>
    </div>
  );
}
