import { useCart, formatPrice } from "@/lib/cart";
import { MENU } from "@/lib/menu";
import { Plus, Flame } from "lucide-react";

export function QuickOrderBar() {
  const { add } = useCart();
  const picks = [MENU[0], MENU[6], MENU[8]];
  return (
    <aside
      aria-label="Best sellers quick order"
      className="fixed bottom-4 left-1/2 z-30 hidden w-[min(960px,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-brand-black/10 bg-white/95 px-4 py-3 shadow-pop backdrop-blur-xl lg:flex"
    >
      <div className="flex items-center gap-3 pr-4">
        <span className="grid size-10 place-items-center rounded-2xl bg-brand-orange text-white animate-pulse-ring">
          <Flame className="size-5" />
        </span>
        <div>
          <p className="text-display text-lg leading-none">TOP 3 TODAY</p>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground">Ready in ~12 min</p>
        </div>
      </div>
      <div className="flex flex-1 items-center gap-2 border-l border-border pl-4">
        {picks.map((p) => (
          <div key={p.id} className="flex flex-1 items-center gap-2.5 rounded-2xl bg-brand-gray p-2">
            <img src={p.image} alt={p.name} className="size-12 shrink-0 rounded-xl object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{p.name}</p>
              <p className="text-xs font-semibold text-brand-orange">{formatPrice(p.price)}</p>
            </div>
            <button
              onClick={() => add(p)}
              aria-label={`Add ${p.name}`}
              className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-black text-white transition-transform hover:scale-110 hover:bg-brand-orange"
            >
              <Plus className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}
