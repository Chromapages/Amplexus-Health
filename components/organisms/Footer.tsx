import Link from "next/link";
import { Container } from "@/components/atoms/Container";
import { Text } from "@/components/atoms/Text";
import { navConfig } from "@/config/nav.config";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night text-white" aria-label="Footer">
      <Container>
        <div className="py-12 md:py-16">
          {/* Footer Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {navConfig.footer.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-teal transition-colors focus:outline-none focus:ring-2 focus:ring-teal focus:rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Crisis Disclaimer */}
          <div className="border-t border-slate-700 pt-8 mb-8">
            <div className="bg-night/50 border border-slate-700 rounded-lg p-4">
              <p className="text-sm text-slate-300">
                <strong className="text-warning">Not for emergencies:</strong> If you are experiencing a mental health crisis,
                please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. Amplexus Health
                is not an emergency service.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <Text size="sm" className="text-slate-400">
              © {currentYear} Amplexus Health. All rights reserved.
            </Text>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-teal transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-teal transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
