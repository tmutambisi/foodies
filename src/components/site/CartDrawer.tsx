import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart, formatPrice } from "@/lib/cart";
import { useState } from "react";

const DELIVERY = 2.0;
const TAX_RATE = 0.05;

export function CartDrawer() {
  const { lines, open, setOpen, setQty, remove, subtotal, clear } = useCart();
  const [promo, setPromo] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const discount = promo.trim().toUpperCase() === "VIBES10" ? subtotal * 0.1 : 0;
  const taxable = Math.max(0, subtotal - discount);
  const tax = taxable * TAX_RATE;
  const total = lines.length ? taxable + tax + DELIVERY : 0;

  const whatsappOrder = () => {
    const order = lines
      .map((l, i) => `${i + 1}. ${l.item.name} x${l.qty} — ${formatPrice(l.qty * l.item.price)}`)
      .join("%0A");
    const msg =
      `*VIBES %26 BITES — NEW ORDER*%0A%0A` +
      `*Name:* ${encodeURIComponent(name || "—")}%0A` +
      `*Phone:* ${encodeURIComponent(phone || "—")}%0A` +
      `*Address:* ${encodeURIComponent(address || "—")}%0A%0A` +
      `*Items:*%0A${order}%0A%0A` +
      `*Subtotal:* ${formatPrice(subtotal)}%0A` +
      (discount ? `*Discount:* -${formatPrice(discount)}%0A` : "") +
      `*Delivery:* ${formatPrice(DELIVERY)}%0A` +
      `*Tax:* ${formatPrice(tax)}%0A` +
      `*TOTAL:* ${formatPrice(total)}%0A%0A` +
      `Order # VB-${Date.now().toString().slice(-6)}`;
    window.open(`https://wa.me/263770000000?text=${msg}`, "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border bg-brand-yellow px-6 py-5">
          <SheetTitle className="text-display text-3xl">YOUR ORDER</SheetTitle>
          <p className="text-sm text-brand-black/70">{lines.length} item{lines.length !== 1 ? "s" : ""} in the bag</p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 py-20 text-center">
              <div className="text-6xl">🍔</div>
              <p className="text-display text-2xl">YOUR BAG IS EMPTY</p>
              <p className="text-sm text-muted-foreground">Add something delicious to get started.</p>
              <Button onClick={() => setOpen(false)} className="mt-2 rounded-full bg-brand-black text-white hover:bg-brand-orange">
                Browse menu
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((l) => (
                <li key={l.item.id} className="flex gap-3 rounded-2xl border border-border p-3">
                  <img src={l.item.image} alt={l.item.name} className="size-20 shrink-0 rounded-xl object-cover" />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="truncate font-semibold">{l.item.name}</p>
                      <button onClick={() => remove(l.item.id)} className="text-muted-foreground hover:text-destructive" aria-label="Remove">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">{formatPrice(l.item.price)} each</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full bg-brand-gray p-1">
                        <button onClick={() => setQty(l.item.id, l.qty - 1)} className="grid size-7 place-items-center rounded-full bg-white" aria-label="Decrease">
                          <Minus className="size-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{l.qty}</span>
                        <button onClick={() => setQty(l.item.id, l.qty + 1)} className="grid size-7 place-items-center rounded-full bg-brand-black text-white" aria-label="Increase">
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <p className="font-display text-xl">{formatPrice(l.qty * l.item.price)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="space-y-4 border-t border-border bg-brand-gray px-6 py-4">
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <Input placeholder="Delivery address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <Input placeholder="Promo code (try VIBES10)" value={promo} onChange={(e) => setPromo(e.target.value)} />

            <dl className="space-y-1 text-sm">
              <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
              {discount > 0 && (
                <div className="flex justify-between text-brand-green"><dt>Discount</dt><dd>-{formatPrice(discount)}</dd></div>
              )}
              <div className="flex justify-between"><dt>Delivery</dt><dd>{formatPrice(DELIVERY)}</dd></div>
              <div className="flex justify-between"><dt>Tax</dt><dd>{formatPrice(tax)}</dd></div>
              <div className="mt-2 flex justify-between border-t border-border pt-2 text-base font-bold"><dt>Total</dt><dd className="font-display text-2xl">{formatPrice(total)}</dd></div>
            </dl>

            <div className="grid gap-2">
              <Button onClick={whatsappOrder} className="h-12 rounded-full bg-brand-green text-base font-bold text-white hover:brightness-110">
                <MessageCircle className="mr-1 size-5" />
                Order via WhatsApp
              </Button>
              <button onClick={clear} className="text-xs text-muted-foreground underline-offset-2 hover:underline">
                Clear cart
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
