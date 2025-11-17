"use client";

import { useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { track } from "@/lib/analytics";

interface ShopifyBuyButtonProps {
  productId: string;
  productTitle: string;
}

export const ShopifyBuyButton = ({ productId, productTitle }: ShopifyBuyButtonProps) => {
  useEffect(() => {
    // Track that Buy Button rendered
    track("buy_button_render", {
      product_id: productId,
      product_title: productTitle,
    });
  }, [productId, productTitle]);

  const handleClick = () => {
    track("buy_button_click", {
      product_id: productId,
      product_title: productTitle,
      action: "placeholder_click",
    });
  };

  // Placeholder implementation until Shopify is configured
  return (
    <section
      aria-label={`Purchase options for ${productTitle}`}
      className="border border-slate-300 rounded-lg p-6 bg-white"
    >
      <div className="text-center space-y-4">
        <p className="text-slate-600">
          <strong>Shopify Integration Coming Soon</strong>
        </p>
        <p className="text-sm text-slate-500">
          Configure your Shopify store and add your Buy Button credentials to enable purchasing.
        </p>
        <Button onClick={handleClick} variant="secondary" disabled>
          Add to Cart (Demo)
        </Button>
      </div>
    </section>
  );
};
