import "./Layout.css";
import {
  Children,
  isValidElement,
  useLayoutEffect,
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

export default function Layout({ children }: { children: ReactNode }) {
  // Layout remounts with each page, so this starts every page at the top.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slots = Children.toArray(children).filter(isValidElement);
  const header = slots.find((s) => s.type === Header);
  const main = slots.find((s) => s.type === Main);

  return (
    <>
      <Navigation />
      <header id="center">{header}</header>
      <main className="mx-auto mb-24 h-full min-h-screen max-w-360 px-5">
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
