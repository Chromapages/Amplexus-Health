export interface NavItem {
  href: string;
  label: string;
  ariaLabel?: string;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface NavConfig {
  primary: NavItem[];
  footer: FooterColumn[];
}
