import { Section } from "@/components/atoms/Section";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata = genMeta({
  title: "Crisis Resources",
  description: "Immediate mental health crisis support and resources. If you're in crisis, help is available 24/7.",
  path: "/crisis-resources",
});

export default function CrisisResourcesPage() {
  return (
    <>
      <Section background="shell" padding="md">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading level={1} className="mb-4">
              Crisis Resources
            </Heading>
            <Text className="text-slate-600">
              If you are experiencing a mental health crisis, immediate help is available.
            </Text>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Emergency Warning */}
            <div className="p-6 bg-error/10 border-2 border-error rounded-lg">
              <Heading level={2} className="text-error mb-3">
                If You Are in Immediate Danger
              </Heading>
              <Text className="text-error font-medium mb-4">
                Call 911 or go to your nearest emergency room immediately.
              </Text>
            </div>

            {/* 988 Lifeline */}
            <div className="p-6 bg-white border-2 border-warning rounded-lg">
              <Heading level={2} className="mb-3">
                988 Suicide & Crisis Lifeline
              </Heading>
              <Text className="mb-4">
                The 988 Lifeline provides 24/7, free and confidential support for people in distress,
                prevention and crisis resources, and best practices for professionals in the United States.
              </Text>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:988"
                  className="inline-flex items-center justify-center px-6 py-3 bg-warning text-white font-medium rounded-full hover:bg-warning/90 transition-colors"
                >
                  Call 988
                </a>
                <a
                  href="sms:988"
                  className="inline-flex items-center justify-center px-6 py-3 bg-warning text-white font-medium rounded-full hover:bg-warning/90 transition-colors"
                >
                  Text 988
                </a>
              </div>
            </div>

            {/* Crisis Text Line */}
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <Heading level={3} className="mb-3">
                Crisis Text Line
              </Heading>
              <Text className="mb-3">
                Free, 24/7 support via text message. Text with a trained crisis counselor.
              </Text>
              <p className="font-semibold text-ink">
                Text <span className="bg-teal/20 px-2 py-1 rounded">HOME</span> to{" "}
                <span className="bg-teal/20 px-2 py-1 rounded">741741</span>
              </p>
            </div>

            {/* NAMI */}
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <Heading level={3} className="mb-3">
                National Alliance on Mental Illness (NAMI) HelpLine
              </Heading>
              <Text className="mb-3">
                Information, resource referrals, and support. Available Monday-Friday, 10am-10pm ET.
              </Text>
              <div className="space-y-2">
                <p>
                  <strong>Call:</strong>{" "}
                  <a href="tel:1-800-950-6264" className="text-teal hover:underline">
                    1-800-950-NAMI (6264)
                  </a>
                </p>
                <p>
                  <strong>Text:</strong> Text "HelpLine" to <span className="font-mono">62640</span>
                </p>
              </div>
            </div>

            {/* Veterans Crisis Line */}
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <Heading level={3} className="mb-3">
                Veterans Crisis Line
              </Heading>
              <Text className="mb-3">
                Confidential support for veterans and their loved ones, 24/7.
              </Text>
              <div className="space-y-2">
                <p>
                  <strong>Call:</strong>{" "}
                  <a href="tel:988" className="text-teal hover:underline">
                    988, then press 1
                  </a>
                </p>
                <p>
                  <strong>Text:</strong> <span className="font-mono">838255</span>
                </p>
              </div>
            </div>

            {/* SAMHSA */}
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <Heading level={3} className="mb-3">
                SAMHSA National Helpline
              </Heading>
              <Text className="mb-3">
                Free, confidential, 24/7 information and treatment referral service for mental health
                and substance use disorders.
              </Text>
              <p>
                <strong>Call:</strong>{" "}
                <a href="tel:1-800-662-4357" className="text-teal hover:underline">
                  1-800-662-HELP (4357)
                </a>
              </p>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-shell border border-slate-200 rounded-lg">
              <Text size="sm" className="text-slate-600">
                <strong>Note:</strong> Amplexus Health is not an emergency service. The resources listed
                above provide immediate crisis support. For ongoing mental health care, please{" "}
                <a href="/contact" className="text-teal hover:underline">
                  contact us
                </a>{" "}
                to schedule an appointment.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
