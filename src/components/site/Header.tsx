import { useCart } from "@/lib/cart";
import { ShoppingBag, Menu as MenuIcon } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useEffect, useState } from "react";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#how", label: "Delivery" },
  { href: "#location", label: "Location" },
  { href: "#reviews", label: "Reviews" },
];

export function Header() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-xl shadow-card" : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Foodies" className="size-10 rounded-xl object-cover" />
          <span className="text-display text-2xl leading-none">
            FOODIES<span className="text-brand-orange">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-orange">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open cart"
            className="relative grid size-11 place-items-center rounded-full bg-brand-black text-white transition-transform hover:scale-105"
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-brand-orange text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid size-11 place-items-center rounded-full bg-brand-yellow md:hidden"
          >
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="border-t border-border bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setNavOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-brand-gray">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
