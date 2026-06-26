import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: "Burgers" | "Fries" | "Wraps" | "Shakes" | "Sweets";
  image: string;
  description: string;
  spice?: 0 | 1 | 2 | 3;
  badge?: string;
};

export type CartLine = { item: MenuItem; qty: number };

type CartCtx = {
  lines: CartLine[];
  open: boolean;
  setOpen: (o: boolean) => void;
  add: (item: MenuItem, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartCtx>(() => {
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const subtotal = lines.reduce((s, l) => s + l.qty * l.item.price, 0);
    return {
      lines,
      open,
      setOpen,
      count,
      subtotal,
      add: (item, qty = 1) => {
        setLines((prev) => {
          const found = prev.find((l) => l.item.id === item.id);
          if (found) return prev.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + qty } : l));
          return [...prev, { item, qty }];
        });
        setOpen(true);
      },
      remove: (id) => setLines((prev) => prev.filter((l) => l.item.id !== id)),
      setQty: (id, qty) =>
        setLines((prev) =>
          qty <= 0 ? prev.filter((l) => l.item.id !== id) : prev.map((l) => (l.item.id === id ? { ...l, qty } : l)),
        ),
      clear: () => setLines([]),
    };
  }, [lines, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used inside CartProvider");
  return v;
}

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
