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

export default () => (
  <nav className="right-0 top-0 absolute p-5">
    <Menu.Root direction="bottom" anchor="end">
      <Menu.Container
        buttonSize={40}
        menuWidth={400}
        menuRadius={12}
        buttonRadius={0}
        className="bg-white shadow-lg ring-1 ring-black/5"
      >
        <Menu.Trigger className="rounded-none">
          <div className="flex h-10 w-10 items-center justify-center">Menu</div>
        </Menu.Trigger>
        <Menu.Content className="p-2">
          {navLinks.map((link, index) => (
            <Menu.Item
              key={index}
              className="font-light uppercase transition-all text-primary  hover:text-primary hover:font-bold"
              onSelect={() => {}}
            >
              {link.titre}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Container>
    </Menu.Root>
  </nav>
);
