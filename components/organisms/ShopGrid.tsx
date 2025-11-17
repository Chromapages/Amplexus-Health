"use client";

import { useState } from "react";
import Link from "next/link";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Tag } from "@/components/atoms/Tag";
import type { AmplexusProduct, ProductCategory } from "@/types/product";
import { track } from "@/lib/analytics";

interface ShopGridProps {
  products: AmplexusProduct[];
}

const ProductTile = ({ handle, title, price, category, summary, imageUrl, tags }: AmplexusProduct) => {
  const handleClick = () => {
    track("product_tile_click", {
      product_handle: handle,
      product_title: title,
      category,
    });
  };

  return (
    <Link
      href={`/shop/${handle}`}
      onClick={handleClick}
      className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
    >
      <div className="aspect-square relative bg-shell">
        {/* Placeholder for product image */}
        <div className="w-full h-full flex items-center justify-center text-slate-400">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        {tags && tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {tags.map((tag) => (
              <Tag key={tag} variant="accent">
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <Heading level={3} className="text-lg mb-2 group-hover:text-teal transition-colors">
          {title}
        </Heading>
        <Text size="sm" className="text-slate-600 mb-3 line-clamp-2">
          {summary}
        </Text>
        <p className="text-xl font-semibold text-ink">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export const ShopGrid = ({ products }: ShopGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");

  const categories: Array<{ value: ProductCategory | "all"; label: string }> = [
    { value: "all", label: "All Products" },
    { value: "apparel", label: "Apparel" },
    { value: "journals-planners", label: "Journals & Planners" },
    { value: "self-care-boxes", label: "Self-Care Boxes" },
    { value: "mugs-drinkware", label: "Mugs & Drinkware" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (category: ProductCategory | "all") => {
    setSelectedCategory(category);
    track("shop_filter_change", { category });
  };

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 ${
                selectedCategory === cat.value
                  ? "bg-ink text-white"
                  : "bg-white border border-slate-300 text-slate-700 hover:border-teal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductTile key={product.handle} {...product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <Text className="text-slate-600">No products found in this category.</Text>
        </div>
      )}
    </div>
  );
};
