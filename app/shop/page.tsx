import { ShopTemplate } from "@/components/templates/ShopTemplate";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Self-Care Shop",
  description: "Thoughtfully curated self-care products including journals, apparel, and wellness tools to support your mental health journey.",
  path: "/shop",
});

export default function ShopPage() {
  return <ShopTemplate />;
}
