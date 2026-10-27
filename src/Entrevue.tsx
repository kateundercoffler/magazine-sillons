type Props = {};

function Entrevue({}: Props) {
  return (
    <div className="mt-44 grid grid-cols-1 gap-5 md:grid-cols-2 justify-center justify-items-center items-center">
      <img
        src="/src/assets/images/thumbnail-entrevue_1344.jpg"
        width={672}
        height={522}
        alt="femme avec cheveux brun en pyjamas"
      />
      <div className="flex flex-col gap-5">
        <div className="text-4xl font-serif">Trouver sa routine matinale</div>
        <div className="text-lg tracking-widest font-light font-sans">
          Comment Zoë Elizabeth a trouvé une nouvelle façon de vivre lentement
          ses matins
        </div>
      </div>
    </div>
  );
}

export default Entrevue;
