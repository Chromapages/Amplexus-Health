export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export type FaqCategory = "getting-started" | "insurance" | "telehealth" | "shop";

export interface FaqGroup {
  category: FaqCategory;
  title: string;
  items: FaqItem[];
}
