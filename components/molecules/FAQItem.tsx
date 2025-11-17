"use client";

import { useState } from "react";
import { Text } from "@/components/atoms/Text";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const FAQItem = ({ question, answer, defaultOpen = false }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = question.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        className="w-full flex justify-between items-center py-4 text-left hover:text-teal transition-colors focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 rounded"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <span className="text-2xl flex-shrink-0" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <Text className="text-slate-600">{answer}</Text>
      </div>
    </div>
  );
};
