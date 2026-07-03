import type { Route } from "./+types/join";
import { JoinCta } from "../components/bands";
import { CheckIcon } from "../components/icons";
import {
  Eyebrow,
  LedgerLine,
  PageHeader,
  Reveal,
  Section,
} from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Membership — Dominion Co-operative" },
    {
      name: "description",
      content:
        "Who can join Dominion Co-operative and how to become a member — a thrift & credit society built on steady saving and an honest ledger.",
    },
  ];
}

const ELIGIBILITY = [
  {
    label: "Of age",
    value: "18 years and above",
  },
  {
    label: "Committed",
    value: "ready to save monthly",
  },
  {
    label: "In good standing",
    value: "agrees to the bye-laws",
  },
];

const BENEFITS = [
  "A member number and a passbook of your own",
  "Steady monthly savings, receipted and posted",
  "Access to loans against your standing",
  "A share in the society's annual dividend",
];

const STEPS = [
  {
    n: "01",
    title: "Apply",
    body: "Send us a note through the membership form. Tell us a little about yourself and how you'd like to save.",
  },
  {
    n: "02",
    title: "Get approved",
    body: "The society reviews your application against the bye-laws and welcomes you as a member.",
  },
  {
    n: "03",
    title: "Start saving",
    body: "Receive your member number, download the app, and begin your monthly contributions on the ledger.",
  },
];

export default function Join() {
  return (
    <>
      <PageHeader eyebrow="Membership" title="Join Dominion Co-operative.">
        A thrift &amp; credit society built on steady saving and an honest
        ledger. Here is who can join, and how to become a member.
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Who can join</Eyebrow>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Membership is open to savers.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Dominion Co-operative welcomes members who are ready to save
              consistently and share in the discipline of a common purse. If
              that&apos;s you, you&apos;re eligible.
            </p>
          </div>
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <span className="font-display text-sm italic text-muted-foreground">
                Eligibility
              </span>
              <span className="mt-4 mb-4 block h-px w-full bg-border" />
              <ul className="space-y-4">
                {ELIGIBILITY.map((e) => (
                  <LedgerLine key={e.label} label={e.label} value={e.value} />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <div className="border-y border-border bg-muted/30">
        <Section>
          <Eyebrow>What membership gives you</Eyebrow>
          <h2 className="mt-2 max-w-2xl font-display text-2xl font-medium tracking-tight sm:text-3xl">
            More than a savings account.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {BENEFITS.map((b, i) => (
              <Reveal key={b} as="li" delay={(i % 2) * 70}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm shadow-[var(--shadow-card)]">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6be0]" />
                  <span className="text-foreground/80">{b}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>
      </div>

      <Section>
        <Eyebrow>How to become a member</Eyebrow>
        <h2 className="mt-2 max-w-2xl font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Three steps to your first contribution.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
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

        <div className="mt-14">
          <JoinCta />
        </div>
      </Section>
    </>
  );
}
