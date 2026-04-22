const footerLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Contact", href: "#cta" },
];

export default function Footer() {
  return (
    <footer
      className="py-12"
      style={{ backgroundColor: "var(--color-surface-dim)" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="max-w-xs">
            <p
              className="text-xl font-bold tracking-tight mb-2"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              Sere Innovations
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Helping farmers hatch their own future
            </p>
          </div>

          {/* Quick links */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-200"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider using tonal shift */}
        <div
          className="h-px mb-6"
          style={{
            backgroundColor: "var(--color-outline-variant)",
            opacity: 0.2,
          }}
        />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            Contact us: 📞 +91 XXXXX XXXXX
          </p>
          <p
            className="text-xs"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
              opacity: 0.6,
            }}
          >
            © {new Date().getFullYear()} Sere Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
