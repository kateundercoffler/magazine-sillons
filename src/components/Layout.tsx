import "./Layout.css";
import {
  Children,
  isValidElement,
  useLayoutEffect,
  type ReactElement,
  type ReactNode,
} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTop";

// The slots only mark which content belongs where; Layout picks them out below.
function Header({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
function Main({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
// Matched by name, not function identity: a hot reload creates new functions,
// so pages still holding the old ones would otherwise render empty.
Header.slot = "header";
Main.slot = "main";

function findSlot(slots: ReactElement[], name: string) {
  return slots.find((s) => (s.type as { slot?: string }).slot === name);
}

export default function Layout({ children }: { children: ReactNode }) {
  // Layout remounts with each page, so this starts every page at the top.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slots = Children.toArray(children).filter(isValidElement);
  const header = findSlot(slots, "header");
  const main = findSlot(slots, "main");

  return (
    <>
      <Navigation />
      <header id="center">{header}</header>
      <main className="mx-auto mb-24 h-full min-h-dvh max-w-360 px-5">
        {main}
      </main>
      <ScrollToTopButton />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

Layout.Header = Header;
Layout.Main = Main;
