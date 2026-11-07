import Link from "next/link";
import { formatPrice } from "@/lib/money";
import type { Product } from "@/lib/products";
import { Dot, ProductVisual } from "./Swatch";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <ProductVisual colour={product.colourways[0]} className="transition group-hover:opacity-90" />
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-ink/60">{product.short}</p>
        </div>
        <p className="shrink-0 font-medium">{formatPrice(product.price)}</p>
      </div>
      <div className="mt-2 flex gap-1.5">
        {product.colourways.map((c) => <Dot key={c} colour={c} />)}
      </div>
    </Link>
  );
}
