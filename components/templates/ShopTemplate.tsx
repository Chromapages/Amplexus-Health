"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { ShopGrid } from "@/components/organisms/ShopGrid";
import { products } from "@/config/products.config";
import { track } from "@/lib/analytics";

export const ShopTemplate = () => {
  useEffect(() => {
    track("shop_view");
  }, []);

  return (
    <>
      <HeroSection
        eyebrow="Self-Care Shop"
        title="Tools to Support Your Wellness Journey"
        subtitle="Thoughtfully curated products designed to complement your therapy and support daily self-care practices."
      />

      <Section padding="lg">
        <Container>
          <ShopGrid products={products} />
        </Container>
      </Section>

      <Section background="shell" padding="md">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-sm text-slate-600">
            <p>
              <strong>Note:</strong> All products are carefully selected to support mental wellness,
              but they are not a substitute for professional therapy or crisis services.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};
