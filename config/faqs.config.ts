import type { FaqGroup } from "@/types/faq";

export const faqGroups: FaqGroup[] = [
  {
    category: "getting-started",
    title: "Getting Started",
    items: [
      {
        id: "how-to-start",
        question: "How do I get started with therapy?",
        answer: "Getting started is easy! Simply fill out our contact form or call us directly. We'll schedule a brief consultation to understand your needs and match you with the right clinician.",
        category: "getting-started",
      },
      {
        id: "first-session",
        question: "What should I expect in my first session?",
        answer: "Your first session is a chance to get to know your therapist and discuss your goals. We'll ask about your background, current challenges, and what you hope to achieve through therapy. There's no pressure – just honest conversation.",
        category: "getting-started",
      },
    ],
  },
  {
    category: "insurance",
    title: "Insurance & Payment",
    items: [
      {
        id: "insurance-accepted",
        question: "Do you accept insurance?",
        answer: "We accept most major insurance plans. Contact us with your insurance information and we'll verify your coverage before your first appointment.",
        category: "insurance",
      },
      {
        id: "out-of-pocket",
        question: "What are your rates for out-of-pocket clients?",
        answer: "Our standard session rate is [rate]. We also offer a sliding scale for clients who need financial assistance. Please don't hesitate to discuss payment options with us.",
        category: "insurance",
      },
    ],
  },
  {
    category: "telehealth",
    title: "Telehealth",
    items: [
      {
        id: "telehealth-available",
        question: "Do you offer telehealth sessions?",
        answer: "Yes! We offer secure video sessions for clients who prefer to meet virtually. Telehealth provides the same quality of care from the comfort of your home.",
        category: "telehealth",
      },
    ],
  },
];
