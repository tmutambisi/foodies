import { ShoppingBag, Flame, Bike, PartyPopper, MapPin, Phone, Clock, Mail, Instagram, Facebook, Star } from "lucide-react";
import hero from "@/assets/hero-burger.jpg";
import fries from "@/assets/fries.jpg";
import wrap from "@/assets/wrap.jpg";
import shake from "@/assets/shake.jpg";
import dessert from "@/assets/dessert.jpg";

export function HowItWorks() {
  const steps = [
    { i: ShoppingBag, t: "Choose Food", d: "Browse the menu, build your order." },
    { i: Flame, t: "We Cook Fresh", d: "Flame-grilled the second you order." },
    { i: Bike, t: "Delivered Hot", d: "Brought straight to your door." },
    { i: PartyPopper, t: "Eat Happy", d: "Hot bites. Big vibes. Repeat." },
  ];
  return (
    <section id="how" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 inline-block rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider">How it works</p>
          <h2 className="text-display text-5xl md:text-6xl">FROM TAP TO TASTE<br /><span className="text-brand-orange">IN UNDER 30.</span></h2>
        </div>
        <ol className="grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="relative rounded-3xl bg-brand-gray p-6 transition-transform hover:-translate-y-1">
              <span className="text-display text-6xl leading-none text-brand-orange/30">0{i + 1}</span>
              <span className="absolute right-5 top-5 grid size-12 place-items-center rounded-2xl bg-brand-black text-brand-yellow">
                <s.i className="size-6" />
              </span>
              <h3 className="mt-3 text-display text-2xl">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="location" className="bg-brand-gray py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div>
          <p className="mb-2 inline-block rounded-full bg-brand-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Find us</p>
          <h2 className="text-display text-5xl md:text-6xl">COME GET IT<br />FRESH OFF THE GRILL.</h2>
          <ul className="mt-8 space-y-5 text-base">
            <li className="flex items-start gap-3"><MapPin className="mt-1 size-5 text-brand-orange" /><div><p className="font-bold">Foodies HQ</p><p className="text-muted-foreground">41 Kelvin North Rd, Graniteside, Harare, Zimbabwe</p></div></li>
            <li className="flex items-start gap-3"><Clock className="mt-1 size-5 text-brand-orange" /><div><p className="font-bold">Open Daily</p><p className="text-muted-foreground">10:00 — 22:00 · Friday & Saturday until 23:00</p></div></li>
            <li className="flex items-start gap-3"><Phone className="mt-1 size-5 text-brand-orange" /><div><p className="font-bold">Call to order</p><p className="text-muted-foreground">+263 77 375 0709</p></div></li>
            <li className="flex items-start gap-3"><Mail className="mt-1 size-5 text-brand-orange" /><div><p className="font-bold">Catering & events</p><p className="text-muted-foreground">hello@foodies.co.zw</p></div></li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-card">
          <iframe
            title="Foodies location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=31.050%2C-17.850%2C31.070%2C-17.835&layer=mapnik&marker=-17.8425%2C31.0600"
            className="h-full min-h-[360px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  const items = [
    { n: "Tendai M.", t: "Hands down the best burger I've had in Harare. The Fire Burger is unreal." },
    { n: "Rumbi K.", t: "Strawberry shake is dangerously addictive. Coming back tomorrow." },
    { n: "Kuda S.", t: "Order arrived in 22 minutes, still piping hot. Service is on point." },
    { n: "Anesu D.", t: "Loaded fries are a vibe. The peri-peri seasoning slaps." },
  ];
  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12">
          <p className="mb-2 inline-block rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider">★★★★★ 4.9 / 5</p>
          <h2 className="text-display text-5xl md:text-7xl">HARARE SAID<br /><span className="text-brand-orange">SAY LESS.</span></h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((r) => (
            <figure key={r.n} className="flex h-full flex-col rounded-3xl border border-border bg-brand-gray p-6 transition-transform hover:-translate-y-1">
              <div className="mb-3 flex gap-0.5 text-brand-orange">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <blockquote className="flex-1 text-base font-medium">"{r.t}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-brand-black text-sm font-bold text-brand-yellow">
                  {r.n.split(" ").map((p) => p[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-bold">{r.n}</p>
                  <p className="text-xs text-muted-foreground">Verified order</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Social() {
  const imgs = [hero, fries, wrap, shake, dessert, hero];
  return (
    <section className="bg-brand-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-display text-5xl md:text-7xl">FOLLOW THE<br /><span className="text-brand-yellow">FLAVOR.</span></h2>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold uppercase text-brand-black hover:bg-brand-orange hover:text-white">
            <Instagram className="size-4" /> @vibesandbites
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {imgs.map((src, i) => (
            <a key={i} href="#" className={`group relative aspect-square overflow-hidden rounded-2xl ${i === 0 ? "lg:col-span-2 lg:row-span-2 lg:aspect-square" : ""}`}>
              <img src={src} alt="" className="size-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 grid place-items-center bg-brand-black/0 opacity-0 transition-all group-hover:bg-brand-black/40 group-hover:opacity-100">
                <Instagram className="size-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-black pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="text-display text-4xl">FOODIES<span className="text-brand-orange">.</span></span>
            <p className="mt-3 max-w-sm text-sm italic text-white/70">"You can't control everything that happens to you… but you can choose to do something with what you're given."</p>
            <p className="mt-3 text-sm text-white/60">41 Kelvin North Rd, Graniteside, Harare · +263 77 375 0709</p>
            <div className="mt-5 flex gap-2">
              <a href="#" aria-label="Instagram" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-brand-orange"><Instagram className="size-4" /></a>
              <a href="#" aria-label="Facebook" className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-brand-orange"><Facebook className="size-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-yellow">Explore</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#menu" className="hover:text-brand-orange">Menu</a></li>
              <li><a href="#how" className="hover:text-brand-orange">Delivery</a></li>
              <li><a href="#location" className="hover:text-brand-orange">Location</a></li>
              <li><a href="#reviews" className="hover:text-brand-orange">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-yellow">Get updates</h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="Email address" className="flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm outline-none placeholder:text-white/50 focus:bg-white/20" />
              <button className="rounded-full bg-brand-yellow px-4 py-2.5 text-sm font-bold text-brand-black hover:bg-brand-orange hover:text-white">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Foodies · Harare, Zimbabwe</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/263773750709"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-30 grid size-14 place-items-center rounded-full bg-brand-green text-white shadow-pop transition-transform hover:scale-110 lg:bottom-28"
    >
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87a11.8 11.8 0 0 0 1.58 5.94L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.87a11.78 11.78 0 0 0-3.4-8.44ZM12.05 21.3a9.43 9.43 0 0 1-4.81-1.32l-.34-.2-3.76.98 1-3.67-.22-.37a9.42 9.42 0 0 1-1.45-5.03c0-5.21 4.24-9.46 9.45-9.46a9.4 9.4 0 0 1 6.69 2.77 9.4 9.4 0 0 1 2.77 6.7c0 5.21-4.24 9.45-9.45 9.45Zm5.45-7.08c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5a9.06 9.06 0 0 1-1.67-2.08c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.54.72.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
      </svg>
    </a>
  );
}
