import { useState } from "react";
import { Menu } from "bloom-menu";
import { motion } from "framer-motion";

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
          menuRadius={4}
          buttonRadius={0}
          className="shadow-none!"
          style={{
            pointerEvents: open ? "auto" : "none",
            marginTop: open ? -67.5 : 0,
            overflow: "visible",
          }}
        >
          <Menu.Trigger
            className="rounded-none"
            style={{ left: "auto", width: 90, pointerEvents: "auto" }}
          >
            <img
              src="/menu-closed.svg"
              alt=""
              className={`transition-opacity duration-100 ${open ? "opacity-0" : "opacity-100"}`}
            />
          </Menu.Trigger>
          <Menu.Content className="pb-2 pl-2 pr-8.25 pt-21">
            {navLinks.map((link, index) => (
              <Menu.Item
                key={index}
                className="whitespace-nowrap py-0.5 text-right font-light uppercase transition-all text-primary  hover:text-primary hover:font-bold"
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
          className="absolute right-5 top-5 z-60 flex h-22.5 w-22.5 cursor-pointer items-center justify-center"
        >
          <motion.img
            src="/menu-Xmark.svg"
            alt=""
            className="h-6 w-auto"
            initial={{ rotateX: 90, opacity: 0, transformPerspective: 400 }}
            animate={{
              rotateX: [90, -20, 10, -5, 0],
              opacity: [0, 0.67, 1, 1, 1],
              transformPerspective: 400,
            }}
            transition={{
              duration: 0.75,
              ease: "easeIn",
              times: [0, 0.4, 0.6, 0.8, 1],
            }}
          />
        </button>
      )}
    </nav>
  );
}
