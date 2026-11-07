// 第 1 步先用静态数据；第 3 步会迁移到 Postgres 数据库
export type Colourway = "oat" | "mist" | "olive";

export type Product = {
  slug: string;
  name: string;
  category: "walk" | "dine" | "rest";
  price: number; // 便士，含 VAT
  colourways: Colourway[];
  short: string;
  description: string;
  details: string[];
};

export const colourwayLabel: Record<Colourway, string> = {
  oat: "Oat",
  mist: "Mist Blue",
  olive: "Olive",
};

export const products: Product[] = [
  {
    slug: "everyday-walk-set",
    name: "Everyday Walk Set",
    category: "walk",
    price: 5800,
    colourways: ["oat", "mist", "olive"],
    short: "Lead, collar and poo bag holder in one colourway.",
    description:
      "Our signature set: a soft-touch collar, 1.5m lead and matching poo bag holder, designed to look as good by the front door as they do on the walk.",
    details: [
      "Recycled polyester webbing with soft-touch coating",
      "Matte brass-tone hardware",
      "Lead length 150cm",
      "Machine washable at 30°C",
    ],
  },
  {
    slug: "engraved-id-tag",
    name: "Engraved ID Tag",
    category: "walk",
    price: 1800,
    colourways: ["oat", "mist", "olive"],
    short: "Personalised tag – UK law requires one in public.",
    description:
      "Under the Control of Dogs Order 1992, dogs in public must wear a tag with the owner's name and address. Ours is enamel-finished to match your walk set.",
    details: [
      "Enamel on stainless steel",
      "Up to 4 lines of engraving",
      "Diameter 30mm",
    ],
  },
  {
    slug: "raised-ceramic-bowl",
    name: "Raised Ceramic Bowl",
    category: "dine",
    price: 4200,
    colourways: ["oat", "mist", "olive"],
    short: "Stoneware bowl on a solid oak stand.",
    description:
      "A raised bowl that's kinder on necks and easier on the eye. Glazed stoneware sits in a solid oak stand that suits any kitchen.",
    details: [
      "Food-safe glazed stoneware, lead and cadmium tested",
      "FSC-certified oak stand",
      "Bowl capacity 750ml",
      "Bowl is dishwasher safe",
    ],
  },
  {
    slug: "boucle-blanket",
    name: "Bouclé Throw Blanket",
    category: "rest",
    price: 3500,
    colourways: ["oat", "olive"],
    short: "A sofa-worthy throw for pets (and people).",
    description:
      "Soft bouclé on one side, smooth on the other. Protects the sofa without looking like it's protecting the sofa.",
    details: ["100 × 80cm", "Machine washable at 30°C", "Hair-release weave"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
