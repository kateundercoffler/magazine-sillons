import { useState } from "react";
import { Menu } from "bloom-menu";

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

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
  <nav className="right-0 top-0 absolute p-5">
    <Menu.Root
      open={open}
      onOpenChange={setOpen}
      direction="bottom"
      anchor="end"
      visualDuration={0.0}
      bounce={0}
      animationConfig={{ triggerBlur: 0, contentBlur: 0, contentDelay: 0 }}
    >
      <Menu.Container
        buttonSize={{ width: 150, height: 90 }}
        menuWidth={150}
        menuRadius={12}
        buttonRadius={0}
        className="shadow-none!"
      >
        <Menu.Trigger
          className="rounded-none"
          style={{ justifyContent: "flex-end", paddingRight: 10 }}
        >
          <img src="/menu-closed.svg" alt="" />
        </Menu.Trigger>
        <Menu.Content className="p-2 pt-10">
          {navLinks.map((link, index) => (
            <Menu.Item
              key={index}
              className="whitespace-nowrap font-light uppercase transition-all text-primary  hover:text-primary hover:font-bold"
              onSelect={() => {}}
            >
              {link.titre}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Container>
    </Menu.Root>
    {open && (
      <button
        type="button"
        aria-label="Fermer le menu"
        onClick={() => setOpen(false)}
        className="absolute right-5 top-5 z-[60] flex h-[90px] w-[90px] cursor-pointer items-center justify-center"
      >
        <img src="/menu-Xmark.svg" alt="" className="h-8 w-auto" />
      </button>
    )}
  </nav>
  );
}
