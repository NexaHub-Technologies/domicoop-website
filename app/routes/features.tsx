import type { Route } from "./+types/features";
import { DownloadBand } from "../components/bands";
import { PILLARS } from "../components/content";
import { CheckIcon } from "../components/icons";
import {
  LedgerLine,
  PageHeader,
  Reveal,
  Section,
  cn,
} from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Features — DOMICOOP" },
    {
      name: "description",
      content:
        "A deep dive into the four pillars — Members, Contributions, Loans and Dividends — the ledgers a thrift & credit society runs on.",
    },
  ];
}

export default function Features() {
  return (
    <>
      <PageHeader eyebrow="Features" title="Four ledgers, kept in balance.">
        Members, contributions, loans and dividends — every one of them posted,
        legible and reconciled. Here is what each pillar does.
      </PageHeader>

      <Section>
        <div className="space-y-20">
          {PILLARS.map((p, i) => (
            <Reveal key={p.key}>
              <div
                id={p.key}
                className="grid items-center gap-8 scroll-mt-24 lg:grid-cols-2 lg:gap-14"
              >
                <div className={cn(i % 2 === 1 && "lg:order-2")}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2f6be0]/10 text-[#2f6be0]">
                    {p.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tagline}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                    {p.title}
                  </h2>
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
      </Section>

      <DownloadBand />
    </>
  );
}
