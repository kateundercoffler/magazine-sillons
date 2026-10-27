import React from "react";

type Props = {};

export default function EnteteNumero({}: Props) {
  return (
    <div className="flex justify-between text-xl uppercase font-light tracking-widest text-primary border-b-2 border-b-gray-500 pb-5 my-10">
      <span>Dans ce numéro</span>
      <span>
        <a href="#">Tous nos numéros</a>
      </span>
    </div>
  );
}
