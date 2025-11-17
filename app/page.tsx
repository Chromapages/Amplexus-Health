import { HeroSection } from "@/components/organisms/HeroSection";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Home",
  description: "Compassionate mental health care and self-care resources to support your wellness journey.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="Mental Health & Self-Care"
        title="You deserve compassionate care and support"
        subtitle="Amplexus Health provides trauma-informed therapy and thoughtfully curated self-care products to help you thrive."
        primaryCta={{
          label: "Request Appointment",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Explore Self-Care",
          href: "/shop",
        }}
      />

      <Section padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading level={2} className="mb-6">
              Welcome to Amplexus Health
            </Heading>
            <Text size="lg" className="text-slate-600">
              We're building a space where mental wellness and self-care come together.
              Our platform combines professional therapy services with carefully selected
              products designed to support your journey.
            </Text>
          </div>
        </Container>
      </Section>

      <Section background="shell" padding="lg">
        <Container>
          <div className="text-center">
            <Heading level={2} className="mb-4">
              Coming Soon
            </Heading>
            <Text className="text-slate-600">
              We're currently building our services, team pages, and shop.
              Check back soon or request an appointment to get started.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
}
