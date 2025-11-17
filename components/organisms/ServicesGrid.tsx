import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";

interface Service {
  title: string;
  summary: string;
  icon?: string;
  tag?: string;
}

interface ServicesGridProps {
  services: Service[];
}

const ServiceCard = ({ title, summary, tag }: Service) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      {tag && (
        <span className="inline-block px-3 py-1 bg-teal/20 text-ink text-sm font-medium rounded-full mb-4">
          {tag}
        </span>
      )}
      <Heading level={3} className="mb-3">
        {title}
      </Heading>
      <Text className="text-slate-600 mb-4">{summary}</Text>
    </div>
  );
};

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
};
