import React from "react";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <nav className="navigation">
      <ul>
        <li>Nos numéros</li>
        <li>Abonnement</li>
        <li>À propos</li>
        <li>Nous joindre</li>
      </ul>
    </nav>
  );
}
