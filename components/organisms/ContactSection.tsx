import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { AppointmentForm } from "./AppointmentForm";

export const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div>
        <Heading level={2} className="mb-4">
          Get in Touch
        </Heading>
        <Text className="text-slate-600 mb-6">
          We're here to support you. Fill out the form and we'll reach out to schedule your first appointment.
          We typically respond within 1-2 business days.
        </Text>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <a href="mailto:hello@amplexushealth.com" className="text-teal hover:underline">
              hello@amplexushealth.com
            </a>
          </div>
          
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <a href="tel:+15555551234" className="text-teal hover:underline">
              (555) 555-1234
            </a>
          </div>
        </div>

        {/* Crisis Disclaimer */}
        <div className="mt-8 p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <Text size="sm">
            <strong className="text-warning">Not for emergencies:</strong> If you are experiencing a mental health crisis,
            please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
          </Text>
        </div>
      </div>

      {/* Form */}
      <div>
        <AppointmentForm />
      </div>
    </div>
  );
};
