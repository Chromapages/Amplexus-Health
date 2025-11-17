"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/nav";
import { track } from "@/lib/analytics";

interface NavLinkGroupProps {
  links: NavItem[];
  className?: string;
}

export const NavLinkGroup = ({ links, className = "" }: NavLinkGroupProps) => {
  const pathname = usePathname();

  return (
    <nav className={className} aria-label="Main navigation">
      <ul className="flex flex-col md:flex-row gap-1 md:gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => track("nav_click_primary", { link_label: link.label, link_href: link.href })}
                className={`block px-3 py-2 text-base font-medium transition-colors hover:text-teal focus:outline-none focus:ring-2 focus:ring-teal focus:rounded ${
                  isActive ? "text-ink underline underline-offset-4" : "text-slate-600"
                }`}
                aria-current={isActive ? "page" : undefined}
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
