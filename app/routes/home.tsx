import type { Route } from "./+types/home";
import { DownloadBand, JoinCta } from "../components/bands";
import { FAQS, PILLARS, STEPS } from "../components/content";
import { Faq } from "../components/faq";
import { CheckIcon, ShieldIcon } from "../components/icons";
import {
  Button,
  Eyebrow,
  LedgerLine,
  Reveal,
  Section,
  StoreBadges,
  cn,
} from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DOMICOOP — Born to Dominate" },
    {
      name: "description",
      content:
        "Dominion Co-operative is a thrift & credit society — members, contributions, loans and dividends, kept in balance and on the record.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Pillars />
      <Security />
      <Membership />
      <SocialProof />
      <FaqSection />
      <DownloadBand />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071431] text-white">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-[#2f6be0]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#e6a93b]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="mb-6 block h-px w-14 bg-[#e6a93b]" />
          <Eyebrow className="text-[#e6a93b]">
            DOMICOOP · Dominion Co-operative
          </Eyebrow>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Born to Dominate.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Dominion Co-operative is a thrift &amp; credit society — members,
            contributions, loans and dividends, kept in balance and on the
            record.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/#download" withArrow>
              Get the app
            </Button>
            <Button to="/join" variant="ghost-dark">
              Become a member
            </Button>
          </div>
          <StoreBadges className="mt-6" />
        </div>

        {/* Right: the four pillars as dotted-leader ledger lines */}
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl backdrop-blur-sm sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm italic text-white/70">
                Passbook
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white/60">
                DOMICOOP-0001
              </span>
            </div>
            <span className="mt-4 mb-5 block h-px w-full bg-white/10" />
            <ul className="space-y-4">
              {PILLARS.map((p) => (
                <LedgerLine
                  key={p.key}
                  label={p.title}
                  value={p.tagline}
                  onDark
                />
              ))}
            </ul>
            <span className="mt-6 mb-4 block h-px w-full bg-white/10" />
            <p className="text-xs leading-relaxed text-white/45">
              Communal saving with a paper trail — every contribution, loan and
              dividend, posted and kept.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */
function HowItWorks() {
  return (
    <Section>
      <Eyebrow>How it works</Eyebrow>
      <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
        Join, contribute, grow — in that order.
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 80}>
            <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <span className="font-display text-4xl font-medium text-[#2f6be0]/25 tabular">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Four pillars (alternating)                                          */
/* ------------------------------------------------------------------ */
function Pillars() {
  return (
    <div className="border-y border-border bg-muted/30">
      <Section>
        <Eyebrow>The four pillars</Eyebrow>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
          The product&apos;s spine — kept in balance.
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Everything a thrift &amp; credit society does runs through four
          ledgers. Dominion Co-operative keeps each one honest and legible.
        </p>

        <div className="mt-16 space-y-16">
          {PILLARS.map((p, i) => (
            <Reveal key={p.key}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                {/* text */}
                <div className={cn(i % 2 === 1 && "lg:order-2")}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2f6be0]/10 text-[#2f6be0]">
                    {p.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tagline}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-sm">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6be0]" />
                        <span className="text-foreground/80">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* visual: ledger card */}
                <div className={cn(i % 2 === 1 && "lg:order-1")}>
                  <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm italic text-muted-foreground">
                        {p.title} ledger
                      </span>
                      <span className="h-2 w-2 rounded-full bg-[#e6a93b]" />
                    </div>
                    <span className="mt-4 mb-4 block h-px w-full bg-border" />
                    <ul className="space-y-3.5">
                      {p.points.map((pt, j) => (
                        <LedgerLine
                          key={j}
                          label={pt.split(" ").slice(0, 2).join(" ")}
                          value={pt.split(" ").slice(2).join(" ") || "posted"}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Button to="/features" variant="secondary" withArrow>
            Explore the features
          </Button>
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Security & trust                                                    */
/* ------------------------------------------------------------------ */
const SAFEGUARDS = [
  {
    title: "Encrypted in transit",
    body: "Every request travels over TLS. Your data moves between your phone and the ledger sealed.",
  },
  {
    title: "Hashed passwords",
    body: "We never store your password in the clear — only a salted hash you alone can unlock.",
  },
  {
    title: "Role-based admin access",
    body: "Treasurers and administrators see only what their role permits. No shared master logins.",
  },
  {
    title: "We don't sell your data",
    body: "Your membership and financial records are yours. We don't sell them — read exactly what we keep.",
  },
];

function Security() {
  return (
    <Section id="security">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2f6be0]/10 text-[#2f6be0]">
            <ShieldIcon className="h-6 w-6" />
          </div>
          <Eyebrow>Security &amp; trust</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Built to be trusted with the ledger.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            A cooperative runs on trust. We treat your records — and your
            members&apos; — with the safeguards that trust deserves.
          </p>
          <Button to="/security" variant="secondary" className="mt-6" withArrow>
            How we keep it safe
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {SAFEGUARDS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-display text-lg font-medium tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Membership                                                          */
/* ------------------------------------------------------------------ */
const MEMBER_BENEFITS = [
  "Your own member number and passbook",
  "Monthly savings, receipted and posted",
  "Loans against your standing when you need them",
  "A share in the society's annual dividend",
];

function Membership() {
  return (
    <div className="border-y border-border bg-muted/30">
      <Section id="membership">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Membership</Eyebrow>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              A seat at a society that saves together.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Dominion Co-operative is open to members who are ready to save
              steadily and share in the discipline of a common purse. Here is
              what your membership holds.
            </p>
            <ul className="mt-6 space-y-3">
              {MEMBER_BENEFITS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6be0]" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <JoinCta />
        </div>
      </Section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Social proof                                                        */
/* ------------------------------------------------------------------ */
function SocialProof() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <figure className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
          <span className="font-display text-5xl leading-none text-[#e6a93b]">
            &ldquo;
          </span>
          <blockquote className="mt-2 font-display text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
            For years our contributions lived in a paper book. Now every member
            can see their standing, and the ledger balances itself. It changed
            how the society trusts its treasurer.
          </blockquote>
          <figcaption className="mt-6 text-sm">
            <span className="font-semibold">A society treasurer</span>
            <span className="text-muted-foreground">
              {" "}
              · thrift &amp; credit co-op
            </span>
          </figcaption>
        </figure>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          <Stat
            value="DOMICOOP-0001"
            label="Every member, numbered from day one"
          />
          <Stat
            value="₦, to the kobo"
            label="Contributions receipted and posted"
          />
          <Stat
            value="4 ledgers"
            label="Members · Contributions · Loans · Dividends"
            className="col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </Section>
  );
}

function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <p className="font-display text-2xl font-medium tracking-tight tabular">
        {value}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
function FaqSection() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Questions, answered plainly.
          </h2>
        </div>
        <div className="mt-12">
          <Faq items={FAQS} />
        </div>
      </div>
    </Section>
  );
}
