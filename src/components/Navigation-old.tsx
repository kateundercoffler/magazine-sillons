import { useState } from "react";

const navLinks = [
  {
    titre: "Accueil",
    href: "/",
  },
  {
    titre: "Nos numéros",
    href: "#Nos numéros",
  },
  // {
  //   titre: "About",
  //   href: "/about",
  // },
  {
    titre: "Abonnement",
    href: "#",
  },
  {
    titre: "À propos",
    href: "#",
    // Icon:
  },
];

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * handleOpenMenu handles opening the menu
   */
  function handleOpenMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="right-0 top-0 absolute p-5">
      <div className="flex flex-col justify-end items-end gap-5">
        <button
          aria-label="Open navigation menu"
          className={menuOpen ? "hidden" : ""}
          onClick={handleOpenMenu}
        >
          <img src="/menu-closed.svg" alt="" />
        </button>
        <div
          className={`rounded-md p-10 bg-neutral-100 flex gap-10 justify-end items-end mx-auto flex-col transform ${
            menuOpen ? "" : " invisible"
          }`}
        >
          <button
            aria-label="Close navigation menu"
            className={
              "animate-once animate-duration-1000 animate-ease-in-out" +
              (menuOpen ? " animate-spin" : "")
            }
            onClick={handleOpenMenu}
          >
            <img src="/menu-Xmark.svg" alt="" />
          </button>
          <ul className="flex flex-col w-xs gap-5 text-sm font-light lg:items-center">
            {navLinks.map((link, index) => {
              return (
                <li key={"navlink" + index}>
                  <a
                    href={link.href}
                    className="text-lg uppercase transition-all text-primary  hover:text-primary hover:font-bold"
                  >
                    {link.titre}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
