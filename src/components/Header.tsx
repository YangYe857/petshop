import Link from "next/link";
import { site } from "@/lib/site";
import { formatPrice } from "@/lib/money";

export function Header() {
  return (
    <header className="border-b border-ink/10">
      <p className="bg-ink py-2 text-center text-xs tracking-wide text-cream">
        Free UK delivery over {formatPrice(site.freeShippingThreshold)} · 14-day returns
      </p>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="font-serif text-2xl">{site.name}</Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Basket</Link>
        </nav>
      </div>
    </header>
  );
}
