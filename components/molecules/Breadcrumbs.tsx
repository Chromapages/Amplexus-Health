import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLast && item.href ? (
                <>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-teal transition-colors"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-2 text-slate-400" aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span className="text-ink font-medium" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
