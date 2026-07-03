import { Link } from "react-router";
import { Logo } from "./logo";
import { StoreBadges } from "./ui";

const COLUMNS: { heading: string; links: { label: string; to: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Security", to: "/security" },
      { label: "Membership", to: "/join" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/#faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#071431] text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo onDark />
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Born to Dominate. Dominion Co-operative keeps its members&apos;
              savings in balance and on the record.
            </p>
            <StoreBadges className="mt-6" />
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e6a93b]">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Dominion Co-operative Society. All rights reserved.</p>
          <p className="font-display italic text-white/60">
            Born to Dominate.
          </p>
        </div>
      </div>
    </footer>
  );
}
