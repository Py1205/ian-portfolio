import { siteConfig, navLinks } from "@/lib/data";

export default function Sidebar({ activeHref }: { activeHref: string }) {
  return (
    <aside
      className="desktop-only fixed z-50"
      style={{ top: "var(--nav-top)", left: "var(--grid-margin)" }}
    >
      <a
        href="/"
        style={{ fontFamily: "var(--font-heading)", fontFeatureSettings: '"liga" 1, "ss02" 1, "ss03" 1, "ss04" 1, "ss06" 1', fontSize: "var(--font-size-name)", fontWeight: 600, color: "var(--color-text-strong)", textTransform: "uppercase" }}
      >
        {siteConfig.name}
      </a>
      <nav className="flex flex-col gap-1 text-base" style={{ paddingTop: "var(--nav-links-top)" }}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`w-fit ${link.href === activeHref ? "nav-link-active" : "nav-link"}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
