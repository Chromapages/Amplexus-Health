import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

export default function NotFound() {
  return (
    <Section padding="lg">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl font-serif text-teal mb-4">404</div>
          <Heading level={1} className="mb-4">
            Page Not Found
          </Heading>
          <Text className="text-slate-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
            It may have been moved or doesn't exist.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">Go Home</Button>
            <Button href="/services" variant="secondary">
              View Services
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
