import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = { title: "Shop all" };

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-serif text-4xl">Shop all</h1>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  );
}
