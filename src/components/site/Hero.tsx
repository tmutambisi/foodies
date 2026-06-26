import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { MENU } from "@/lib/menu";
import { ArrowRight, Clock, Flame, Zap } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import friesImg from "@/assets/fries.jpg";
import shakeImg from "@/assets/shake.jpg";

const tickerWords = [
  "FOODIES",
  "FRESHLY GRILLED",
  "DELIVERED HOT",
  "HANDCRAFTED",
  "HARARE'S HEAT",
  "ORDER NOW",
];

export function Hero() {
  const { add, setOpen } = useCart();
  const headliner = MENU[0];

  return (
    <section id="top" className="relative overflow-hidden bg-white pt-24 md:pt-28">
      {/* Diagonal yellow slab */}
      <div
        aria-hidden
        className="absolute -right-20 top-0 h-[120%] w-[70%] bg-brand-yellow"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
      />
      {/* Floating ingredients */}
      <img
        aria-hidden
        src={friesImg}
        alt=""
        className="pointer-events-none absolute -left-10 top-32 hidden size-40 rotate-[-12deg] animate-float rounded-full object-cover opacity-90 shadow-pop md:block"
      />
      <img
        aria-hidden
        src={shakeImg}
        alt=""
        className="pointer-events-none absolute bottom-10 right-6 hidden size-36 rotate-[10deg] animate-float rounded-full object-cover opacity-90 shadow-pop lg:block"
        style={{ animationDelay: "1.2s" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:grid-cols-2 md:gap-6 md:px-8 md:pb-24">
        <div className="relative z-10">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-black px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow">
            <Flame className="size-3.5 text-brand-orange" />
            Harare · Graniteside
          </span>
          <h1 className="text-display text-[22vw] leading-[0.85] sm:text-[16vw] md:text-[10rem] lg:text-[12rem]">
            FOODIES<span className="text-brand-orange">.</span>
          </h1>
          <p className="mt-6 max-w-md text-base font-medium italic text-brand-black/80 md:text-lg">
            "You can't control everything that happens to you… but you can choose to do something with what you're given."
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => {
                add(headliner);
                setOpen(true);
              }}
              className="group h-14 rounded-full bg-brand-orange px-7 text-base font-bold text-white shadow-pop hover:bg-brand-black"
            >
              ORDER NOW
              <ArrowRight className="ml-1 size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <a
              href="#menu"
              className="inline-flex h-14 items-center gap-2 rounded-full border-2 border-brand-black px-7 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-brand-black hover:text-white"
            >
              View Menu
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-sm">
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase text-brand-black/60"><Clock className="size-3.5" /> Avg prep</dt>
              <dd className="text-display text-3xl">12<span className="text-brand-orange">m</span></dd>
            </div>
            <div>
              <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase text-brand-black/60"><Zap className="size-3.5" /> Delivery</dt>
              <dd className="text-display text-3xl">25<span className="text-brand-orange">m</span></dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase text-brand-black/60">Rated</dt>
              <dd className="text-display text-3xl">4.9<span className="text-brand-orange">★</span></dd>
            </div>
          </dl>
        </div>

        {/* Hero burger */}
        <div className="relative z-0 mx-auto aspect-square w-full max-w-[560px]">
          <div className="absolute inset-6 animate-spin-slow rounded-full border-2 border-dashed border-brand-black/30" />
          <div className="absolute inset-0 grid place-items-center">
            <img
              src={heroBurger}
              alt="Double Stack signature burger"
              width={1280}
              height={1280}
              fetchPriority="high"
              className="size-[88%] rounded-full object-cover shadow-pop animate-float"
            />
          </div>
          <span className="absolute right-2 top-2 rotate-12 rounded-2xl bg-brand-black px-4 py-2 text-display text-xl text-brand-yellow shadow-pop">
            NEW DROP
          </span>
          <span className="absolute bottom-2 left-2 -rotate-6 rounded-2xl bg-brand-orange px-4 py-2 text-display text-xl text-white shadow-pop">
            FRESH · FAST
          </span>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-y-4 border-brand-black bg-brand-yellow py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...tickerWords, ...tickerWords, ...tickerWords].map((w, i) => (
            <span key={i} className="text-display text-3xl">
              {w} <span className="text-brand-orange">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
