import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/lib/cart";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QuickOrderBar } from "@/components/site/QuickOrderBar";
import { Featured } from "@/components/site/Featured";
import { MenuSection } from "@/components/site/MenuSection";
import { HowItWorks, Location, Reviews, Social, Footer, FloatingWhatsapp } from "@/components/site/Sections";
import { CartDrawer } from "@/components/site/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foodies — Harare's Hottest Fast Food" },
      { name: "description", content: "Foodies — freshly grilled burgers, loaded fries, wraps, shakes & sweet treats. 41 Kelvin North Rd, Graniteside, Harare." },
      { property: "og:title", content: "Foodies — Harare's Hottest Fast Food" },
      { property: "og:description", content: "Order burgers, wraps, fries & shakes online. Made fresh, delivered fast across Harare." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <Featured />
        <MenuSection />
        <HowItWorks />
        <Location />
        <Reviews />
        <Social />
      </main>
      <Footer />
      <QuickOrderBar />
      <FloatingWhatsapp />
      <CartDrawer />
    </CartProvider>
  );
}
