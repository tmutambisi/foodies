import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart, formatPrice, type MenuItem } from "@/lib/cart";
import { MENU, CATEGORIES } from "@/lib/menu";
import { Plus, Search, Flame, Star } from "lucide-react";

function SpiceMeter({ level = 0 }: { level?: number }) {
  if (!level) return null;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Spice level ${level} of 3`}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Flame key={i} className={`size-3.5 ${i < level ? "fill-brand-orange text-brand-orange" : "text-muted-foreground/30"}`} />
      ))}
    </span>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  const { add } = useCart();
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-pop">
      <div className="relative aspect-square overflow-hidden bg-brand-gray">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-black px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-yellow">
            {item.badge}
          </span>
        )}
        <button
          onClick={() => add(item)}
          aria-label={`Add ${item.name}`}
          className="absolute bottom-3 right-3 grid size-11 place-items-center rounded-full bg-brand-orange text-white shadow-pop transition-transform hover:scale-110 hover:rotate-90"
        >
          <Plus className="size-5" />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-display text-xl leading-tight">{item.name}</h3>
          <SpiceMeter level={item.spice} />
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-2xl">{formatPrice(item.price)}</span>
          <Button
            size="sm"
            onClick={() => add(item)}
            className="rounded-full bg-brand-black text-white hover:bg-brand-orange"
          >
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc">("popular");

  const filtered = useMemo(() => {
    let list = MENU;
    if (cat !== "All") list = list.filter((i) => i.category === cat);
    if (q.trim()) {
      const t = q.toLowerCase();
      list = list.filter((i) => i.name.toLowerCase().includes(t) || i.description.toLowerCase().includes(t));
    }
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, q, sort]);

  return (
    <section id="menu" className="relative bg-brand-gray py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider">
              <Star className="size-3.5 fill-brand-black" /> The Menu
            </p>
            <h2 className="text-display text-5xl md:text-7xl">
              CRAVINGS<br />START HERE.
            </h2>
          </div>
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search the menu…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="h-11 rounded-full bg-white pl-9 md:w-72"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="h-11 rounded-full border border-border bg-white px-4 text-sm font-medium"
              aria-label="Sort menu"
            >
              <option value="popular">Most popular</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const active = cat === c;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                  active
                    ? "bg-brand-black text-white shadow-pop"
                    : "bg-white text-brand-black hover:bg-brand-yellow"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">No items match your search.</p>
        )}
      </div>
    </section>
  );
}
