import type { NavConfig } from "@/types/nav";

export const navConfig: NavConfig = {
  primary: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Our Team" },
    { href: "/shop", label: "Shop" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
  footer: [
    {
      title: "Practice",
      links: [
        { href: "/services", label: "Services" },
        { href: "/team", label: "Our Team" },
        { href: "/contact", label: "Contact" },
        { href: "/resources", label: "Resources" },
      ],
    },
    {
      title: "Shop",
      links: [
        { href: "/shop", label: "All Products" },
        { href: "/shop?category=apparel", label: "Apparel" },
        { href: "/shop?category=journals-planners", label: "Journals & Planners" },
        { href: "/shop?category=self-care-boxes", label: "Self-Care Boxes" },
      ],
    },
    {
      title: "Policies",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Use" },
        { href: "/policies/shipping-and-returns", label: "Shipping & Returns" },
        { href: "/policies/refunds", label: "Refund Policy" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/crisis-resources", label: "Crisis Resources" },
        { href: "/contact", label: "Get in Touch" },
      ],
    },
  ],
};
