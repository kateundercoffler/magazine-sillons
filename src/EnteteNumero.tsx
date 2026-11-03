type Props = {};

export default function EnteteNumero({}: Props) {
  return (
    <div className="flex justify-between lg:text-xl sm:text-md uppercase font-light tracking-widest text-primary border-b-2 border-b-gray-500 pb-5 mb-10 mt-24">
      <span>Dans ce numéro</span>
      <span>
        <a className="hover:font-medium hover:text-linksActive" href="#">
          Tous nos numéros
        </a>
      </span>
    </div>
  );
}
