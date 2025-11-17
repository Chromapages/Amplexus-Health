import Image from "next/image";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import type { Clinician } from "@/types/clinician";

interface ClinicianGridProps {
  clinicians: Clinician[];
}

const ClinicianCard = ({ name, credentials, pronouns, specialties, photo, bioSnippet }: Clinician) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square relative bg-shell">
        {/* Placeholder for clinician photo */}
        <div className="w-full h-full flex items-center justify-center text-slate-400">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <Heading level={3} className="mb-1">
          {name}
        </Heading>
        <p className="text-sm text-slate-600 mb-1">
          {credentials}
          {pronouns && ` • ${pronouns}`}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {specialties.map((specialty) => (
            <span
              key={specialty}
              className="inline-block px-2 py-1 bg-teal/10 text-ink text-xs rounded"
            >
              {specialty}
            </span>
          ))}
        </div>
        <Text size="sm" className="text-slate-600">
          {bioSnippet}
        </Text>
      </div>
    </div>
  );
};

export const ClinicianGrid = ({ clinicians }: ClinicianGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clinicians.map((clinician) => (
        <ClinicianCard key={clinician.slug} {...clinician} />
      ))}
    </div>
  );
};
