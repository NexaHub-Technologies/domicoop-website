import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRightIcon } from "./icons";

/* ------------------------------------------------------------------ */
/* Utility                                                             */
/* ------------------------------------------------------------------ */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ */
/* Buttons / links                                                     */
/* ------------------------------------------------------------------ */
type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost-dark";
  className?: string;
  withArrow?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-5 py-3 text-sm font-semibold transition-all active:scale-[0.99]";

const variants = {
  primary:
    "bg-gradient-to-br from-[#2f6be0] to-[#003d9a] text-white shadow-[var(--shadow-cta)] hover:brightness-110",
  secondary:
    "border border-border bg-background text-foreground hover:bg-muted",
  "ghost-dark":
    "border border-white/20 bg-white/5 text-white hover:bg-white/10",
} as const;

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className,
  withArrow = false,
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRightIcon className="h-4 w-4" />}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} to={to ?? "#"}>
      {inner}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow + Section shell                                             */
/* ------------------------------------------------------------------ */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-bold uppercase tracking-[0.2em] text-[#003d9a]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28", className)}
    >
      {children}
    </section>
  );
}

/** Navy hero band used at the top of secondary pages. */
export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#071431] text-white">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#2f6be0]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#e6a93b]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <span className="mb-5 block h-px w-12 bg-[#e6a93b]" />
        <Eyebrow className="text-[#e6a93b]">{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Ledger line (signature motif)                                       */
/* ------------------------------------------------------------------ */
export function LedgerLine({
  label,
  value,
  onDark = false,
}: {
  label: string;
  value: string;
  onDark?: boolean;
}) {
  return (
    <li className="flex items-baseline gap-3 text-sm">
      <span
        className={cn(
          "font-medium",
          onDark ? "text-white/90" : "text-foreground",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "mb-1 flex-1 border-b border-dotted",
          onDark ? "border-white/25" : "border-current/25",
        )}
        aria-hidden="true"
      />
      <span className={onDark ? "text-white/45" : "text-muted-foreground"}>
        {value}
      </span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Feature / pillar card                                               */
/* ------------------------------------------------------------------ */
export function PillarCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2f6be0]/10 text-[#2f6be0]">
        {icon}
      </div>
      <h3 className="font-display text-xl font-medium tracking-tight">
        {title}
      </h3>
      <p className="mt-2 leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* App-store badge row                                                 */
/* ------------------------------------------------------------------ */
export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <StoreBadge store="apple" />
      <StoreBadge store="google" />
    </div>
  );
}

function StoreBadge({ store }: { store: "apple" | "google" }) {
  const isApple = store === "apple";
  return (
    <a
      href="#"
      aria-label={
        isApple ? "Download on the App Store" : "Get it on Google Play"
      }
      className="inline-flex h-[52px] items-center gap-3 rounded-xl border border-white/20 bg-black/60 px-4 text-white transition-colors hover:bg-black/80"
    >
      {isApple ? (
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.5 3c.1 1-.3 2-.9 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7C14.6 3.6 15.6 3.1 16.5 3Zm3.2 15.3c-.5 1.2-.8 1.7-1.4 2.7-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9s-2.3.9-3.7.9c-1.6 0-2.8-1.6-3.7-2.9-2.5-3.7-2.8-8-1.2-10.3C4.4 8.3 6 7.4 7.5 7.4c1.5 0 2.5.9 3.7.9 1.2 0 1.9-.9 3.7-.9 1.3 0 2.7.7 3.7 2-3.2 1.8-2.7 6.4.1 8.9Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
          <path
            fill="#00d4ff"
            d="M3.6 2.3 13 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1Z"
          />
          <path fill="#00f076" d="m13 12-9.4 9.7 11.9-6.8L13 12Z" />
          <path
            fill="#ffbd00"
            d="m15.5 14.9 3.6-2.1c.8-.5.8-1.6 0-2l-3.6-2.1L13 12l2.5 2.9Z"
          />
          <path fill="#ff3a44" d="M3.6 2.3 13 12l2.5-3.3L3.6 2.3Z" />
        </svg>
      )}
      <span className="flex flex-col leading-tight">
        <span className="text-[9px] uppercase tracking-wide text-white/60">
          {isApple ? "Download on the" : "Get it on"}
        </span>
        <span className="text-sm font-semibold">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
