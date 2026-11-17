export const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/services", label: "Services", icon: "services" },
  { href: "/portfolio", label: "Our Work", icon: "work" },
  { href: "/industries", label: "Industries", icon: "industries" },
  { href: "/#approach", label: "Process", icon: "process" },
  { href: "/contact", label: "Contact", icon: "contact" },
] as const;

export type NavIconName = (typeof navLinks)[number]["icon"];

export function isActivePath(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
