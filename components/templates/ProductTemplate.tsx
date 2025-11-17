"use client";

import { useEffect } from "react";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Breadcrumbs } from "@/components/molecules/Breadcrumbs";
import { ProductDetailModule } from "@/components/organisms/ProductDetailModule";
import { ShopifyBuyButton } from "@/components/shopify/ShopifyBuyButton";
import type { AmplexusProduct } from "@/types/product";
import { track } from "@/lib/analytics";

interface ProductTemplateProps {
  product: AmplexusProduct;
}

export const ProductTemplate = ({ product }: ProductTemplateProps) => {
  useEffect(() => {
    track("product_view", {
      product_handle: product.handle,
      product_title: product.title,
      category: product.category,
    });
  }, [product]);

  return (
    <>
      <Section padding="sm" background="shell">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: product.title },
            ]}
          />
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <ProductDetailModule product={product}>
            <ShopifyBuyButton
              productId={product.shopifyProductId}
              productTitle={product.title}
            />
          </ProductDetailModule>
        </Container>
      </Section>
    </>
  );
};
