import { site } from "./site";

// 金额一律用「最小货币单位」整数存储（便士），避免浮点误差
export function formatPrice(pence: number) {
  return new Intl.NumberFormat(site.locale, {
    style: "currency",
    currency: site.currency,
  }).format(pence / 100);
}
