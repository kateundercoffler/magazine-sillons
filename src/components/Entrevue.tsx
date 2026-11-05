import { motion } from "framer-motion";
import thumbnailEntrevue from "../assets/images/thumbnail-entrevue_1344.jpg";

type Props = {};

function Entrevue({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-44 grid grid-cols-1 gap-5 md:grid-cols-2 justify-center justify-items-center items-center"
    >
      <img
        src={thumbnailEntrevue}
        loading="lazy"
        width={672}
        height={522}
        alt="femme avec cheveux brun en pyjamas"
      />
      <div className="flex flex-col gap-5">
        <a href="">
          <div className="lg:text-4xl text-xl font-serif hover:text-linksActive">
            Trouver sa routine matinale
          </div>
        </a>
        <div className="lg:text-lg text-base tracking-widest font-light font-sans">
          Comment Zoë Elizabeth a trouvé une nouvelle façon de vivre lentement
          ses matins
        </div>
      </div>
    </motion.div>
  );
}

export default Entrevue;
