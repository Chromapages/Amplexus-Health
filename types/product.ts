export interface AmplexusProduct {
  handle: string;
  title: string;
  price: number;
  category: ProductCategory;
  shopifyProductId: string;
  summary: string;
  detail: string;
  imageUrl: string;
  benefits?: string[];
  care?: string;
  tags?: string[];
}

export type ProductCategory =
  | "apparel"
  | "journals-planners"
  | "self-care-boxes"
  | "mugs-drinkware"
  | "accessories";
