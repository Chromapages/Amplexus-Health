import { HeroSection } from "@/components/organisms/HeroSection";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ClinicianGrid } from "@/components/organisms/ClinicianGrid";
import { clinicians } from "@/config/clinicians.config";

export const TeamTemplate = () => {
  return (
    <>
      <HeroSection
        title="Meet Our Team"
        subtitle="Our diverse, experienced clinicians are here to provide compassionate, trauma-informed care."
      />

      <Section padding="lg">
        <Container>
          <Heading level={2} className="text-center mb-12">
            Our Clinicians
          </Heading>
          <ClinicianGrid clinicians={clinicians} />
        </Container>
      </Section>

      <Section background="shell" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level={2} className="mb-6">
              Our Commitment to You
            </Heading>
            <Text className="text-slate-600">
              Every member of our team is committed to creating a safe, affirming, and supportive
              therapeutic relationship. We value diversity, practice cultural humility, and believe
              that healing happens in connection.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
};
