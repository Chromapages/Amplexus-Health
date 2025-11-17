import { HeroSection } from "@/components/organisms/HeroSection";
import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { ServicesGrid } from "@/components/organisms/ServicesGrid";
import { Button } from "@/components/atoms/Button";

const services = [
  {
    title: "Individual Therapy",
    summary: "One-on-one sessions tailored to your unique needs, focusing on personal growth and healing.",
    tag: "Most Popular",
  },
  {
    title: "Couples & Family Therapy",
    summary: "Strengthen relationships through compassionate, evidence-based therapeutic approaches.",
  },
  {
    title: "Telehealth Sessions",
    summary: "Access quality care from anywhere with secure, convenient video sessions.",
    tag: "Available",
  },
  {
    title: "Group Classes",
    summary: "Connect with others through mindfulness, DBT skills, and wellness workshops.",
  },
  {
    title: "EMDR Therapy",
    summary: "Specialized trauma treatment using Eye Movement Desensitization and Reprocessing.",
  },
  {
    title: "Crisis Support Resources",
    summary: "Guidance and connections to immediate crisis resources when you need them most.",
  },
];

export const ServicesTemplate = () => {
  return (
    <>
      <HeroSection
        title="Compassionate Care, Tailored to You"
        subtitle="We offer a range of therapy services designed to support your mental health journey, from individual sessions to specialized trauma treatment."
        primaryCta={{
          label: "Request Appointment",
          href: "/contact",
        }}
      />

      <Section padding="lg">
        <Container>
          <Heading level={2} className="text-center mb-12">
            Our Services
          </Heading>
          <ServicesGrid services={services} />
        </Container>
      </Section>

      <Section background="shell" padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading level={2} className="mb-6">
              Our Approach
            </Heading>
            <div className="space-y-4 text-slate-600">
              <Text>
                At Amplexus Health, we believe in trauma-informed, client-centered care. Every person's
                journey is unique, and we tailor our approach to meet you where you are.
              </Text>
              <Text>
                Our clinicians are trained in evidence-based modalities including CBT, DBT, EMDR, and
                family systems therapy. We create a safe, non-judgmental space where healing can begin.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading level={2} className="mb-6">
              Insurance & Payment
            </Heading>
            <div className="space-y-4 text-slate-600">
              <Text>
                We accept most major insurance plans and can verify your coverage before your first appointment.
                For clients without insurance or preferring to pay out-of-pocket, we offer competitive rates
                and a sliding scale for those who need financial assistance.
              </Text>
              <Text>
                Please don't let cost be a barrier to getting the care you need. Contact us to discuss your options.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="shell" padding="lg">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heading level={2} className="mb-4">
              Ready to Get Started?
            </Heading>
            <Text className="mb-8 text-slate-600">
              Reaching out is the first step. We're here to help you find the right support.
            </Text>
            <Button href="/contact" size="lg">
              Request Your First Appointment
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
};
