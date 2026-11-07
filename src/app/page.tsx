import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm uppercase tracking-widest text-ink/60">The Oat Collection</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">
            Pet goods that belong in your home.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink/70">
            Walk sets, bowls and throws in calm, matching colourways, designed for UK homes and the pets who run them.
          </p>
          <Link href="/shop" className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-cream hover:bg-ink/90">
            Shop the collection
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-2xl bg-oat" />
          <div className="mt-12 aspect-[3/4] rounded-2xl bg-mist" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl">Bestsellers</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
}
