import type { Route } from "./+types/about";
import { DownloadBand } from "../components/bands";
import { LedgerLine, PageHeader, Reveal, Section } from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About — Dominion Co-operative" },
    {
      name: "description",
      content:
        "Dominion Co-operative is a thrift & credit society — communal saving with a paper trail, built on stewardship and an honest ledger.",
    },
  ];
}

const VALUES = [
  {
    label: "Stewardship",
    value: "we hold the ledger in trust",
  },
  {
    label: "Standing",
    value: "earned by steady saving",
  },
  {
    label: "Transparency",
    value: "every posting is visible",
  },
];

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="Communal saving, with a paper trail.">
        Dominion Co-operative is a thrift &amp; credit society, built to give its
        members the same clarity a good treasurer&apos;s passbook always
        promised — kept in balance, and on the record.
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A cooperative is people pooling what they can, so that any one of
              them can borrow, build and share in the surplus. It has always run
              on a simple instrument: the ledger. When the ledger is honest, the
              society is strong.
            </p>
            <p>
              For generations that ledger lived in a paper passbook — powerful,
              but fragile, and hard to share. Dominion Co-operative carries the
              same discipline into an app every member can hold: member numbers,
              monthly contributions in naira, loans, and annual dividends, each
              posted and kept.
            </p>
            <p>
              We are institutional but warm. We talk about stewardship,
              standing, and keeping an honest ledger — not revolutionary
              fintech. Every claim we make is one we can stand behind.
            </p>
          </div>

          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <span className="font-display text-sm italic text-muted-foreground">
                What we hold to
              </span>
              <span className="mt-4 mb-4 block h-px w-full bg-border" />
              <ul className="space-y-4">
                {VALUES.map((v) => (
                  <LedgerLine key={v.label} label={v.label} value={v.value} />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <DownloadBand />
    </>
  );
}
