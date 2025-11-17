"use client";

import { useEffect } from "react";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { ContactSection } from "@/components/organisms/ContactSection";
import { track } from "@/lib/analytics";

export const ContactTemplate = () => {
  useEffect(() => {
    track("contact_view");
  }, []);

  return (
    <>
      <HeroSection
        title="We're Here to Help"
        subtitle="Reaching out is a sign of strength. Let's start your journey together."
        background="shell"
      />

      <Section padding="lg">
        <Container>
          <ContactSection />
        </Container>
      </Section>
    </>
  );
};
