import type { Colourway } from "@/lib/products";

const bg: Record<Colourway, string> = {
  oat: "bg-oat",
  mist: "bg-mist",
  olive: "bg-olive",
};

// 暂无商品图时，用配色色块占位
export function ProductVisual({ colour, className = "" }: { colour: Colourway; className?: string }) {
  return <div className={`${bg[colour]} aspect-square rounded-2xl ${className}`} />;
}

export function Dot({ colour }: { colour: Colourway }) {
  return <span className={`${bg[colour]} inline-block size-4 rounded-full ring-1 ring-ink/10`} />;
}
