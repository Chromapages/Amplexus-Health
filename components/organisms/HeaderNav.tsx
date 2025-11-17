"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Button } from "@/components/atoms/Button";
import { NavLinkGroup } from "@/components/molecules/NavLinkGroup";
import { navConfig } from "@/config/nav.config";

export const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-teal focus:rounded">
            <div className="text-2xl font-serif font-bold text-ink">
              Amplexus Health
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavLinkGroup links={navConfig.primary} className="flex-row" />
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Start Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink hover:text-teal focus:outline-none focus:ring-2 focus:ring-teal focus:rounded"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-4 border-t border-slate-200 mt-2 pt-4"
          >
            <NavLinkGroup links={navConfig.primary} className="flex-col space-y-1" />
            <div className="mt-4">
              <Button href="/contact" className="w-full">
                Start Now
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
