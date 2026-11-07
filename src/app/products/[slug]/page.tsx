import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { colourwayLabel, getProduct, products } from "@/lib/products";
import { formatPrice } from "@/lib/money";
import { Dot, ProductVisual } from "@/components/Swatch";

// 构建时预渲染所有商品页：速度快，对 SEO 友好
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  return product ? { title: product.name, description: product.short } : {};
}

export default async function ProductPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-12 md:grid-cols-2">
      <ProductVisual colour={product.colourways[0]} />
      <div>
        <h1 className="font-serif text-4xl">{product.name}</h1>
        <p className="mt-3 text-2xl">{formatPrice(product.price)}</p>
        <p className="mt-1 text-sm text-ink/60">Price includes VAT</p>

        <div className="mt-8">
          <p className="text-sm font-medium">Colour</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {product.colourways.map((c) => (
              <span key={c} className="flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm">
                <Dot colour={c} /> {colourwayLabel[c]}
              </span>
            ))}
          </div>
        </div>

        {/* 第 2 步：这里会换成「加入购物车」客户端组件 */}
        <button disabled className="mt-8 w-full rounded-full bg-ink py-4 text-cream opacity-60">
          Add to basket (coming in step 2)
        </button>

        <p className="mt-8 leading-relaxed text-ink/80">{product.description}</p>
        <ul className="mt-6 list-disc space-y-1 pl-5 text-sm text-ink/70">
          {product.details.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </div>
    </section>
  );
}
