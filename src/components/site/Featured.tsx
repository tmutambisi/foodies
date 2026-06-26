import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { MENU } from "@/lib/menu";
import { ArrowUpRight, Sparkles } from "lucide-react";

const featured = [
  { ...MENU[0], tag: "Signature", note: "Two flame-grilled patties, melted cheddar." },
  { ...MENU[3], tag: "Loaded", note: "Cheese sauce. Bacon. Sour cream." },
  { ...MENU[6], tag: "Crunch", note: "Buttermilk fried, garlic aioli." },
];

export function Featured() {
  const { add } = useCart();
  return (
    <section className="relative bg-brand-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow">
              <Sparkles className="size-3.5" /> Hot Right Now
            </p>
            <h2 className="text-display text-5xl md:text-7xl">
              BURGERS THAT<br /><span className="text-brand-yellow">HIT DIFFERENT.</span>
            </h2>
          </div>
          <a href="#menu" className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-brand-yellow hover:underline">
            See full menu <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((f, i) => (
            <article
              key={f.id}
              className={`group relative overflow-hidden rounded-3xl bg-white text-brand-black shadow-card transition-transform duration-300 hover:-translate-y-2 ${
                i === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={f.image} alt={f.name} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                  {f.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-display text-3xl leading-tight">{f.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.note}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-display text-3xl">${f.price.toFixed(2)}</span>
                  <Button
                    onClick={() => add(f)}
                    className="rounded-full bg-brand-black text-white hover:bg-brand-orange"
                  >
                    Add to bag
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
