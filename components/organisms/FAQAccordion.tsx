import { Heading } from "@/components/atoms/Heading";
import { FAQItem } from "@/components/molecules/FAQItem";
import type { FaqGroup } from "@/types/faq";

interface FAQAccordionProps {
  groups: FaqGroup[];
}

export const FAQAccordion = ({ groups }: FAQAccordionProps) => {
  return (
    <div className="space-y-12">
      {groups.map((group) => (
        <div key={group.category}>
          <Heading level={3} className="mb-6">
            {group.title}
          </Heading>
          <div className="space-y-2">
            {group.items.map((item) => (
              <FAQItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
