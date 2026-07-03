import { Link } from "react-router";
import type { Route } from "./+types/security";
import { DownloadBand } from "../components/bands";
import { KeyIcon, LockIcon, ShieldIcon } from "../components/icons";
import { Eyebrow, PageHeader, Reveal, Section } from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Security & Trust — DOMICOOP" },
    {
      name: "description",
      content:
        "How Dominion Co-operative protects your ledger: encryption in transit, hashed passwords, role-based admin access, and a promise never to sell your data.",
    },
  ];
}

const SAFEGUARDS = [
  {
    icon: <LockIcon className="h-6 w-6" />,
    title: "Encrypted in transit",
    body: "Every request between the app and the ledger travels over TLS. Contributions, balances and personal details are never sent in the clear.",
  },
  {
    icon: <KeyIcon className="h-6 w-6" />,
    title: "Hashed passwords",
    body: "We store a salted hash of your password, never the password itself. Even we cannot read it — only you can unlock your account.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Role-based admin access",
    body: "Administrators and treasurers see only what their role permits. There are no shared master logins, and sensitive actions are scoped and logged.",
  },
];

export default function Security() {
  return (
    <>
      <PageHeader eyebrow="Security & trust" title="Trusted with the ledger.">
        A cooperative runs on trust. We treat your records — and your
        members&apos; — with the safeguards that trust deserves.
      </PageHeader>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {SAFEGUARDS.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2f6be0]/10 text-[#2f6be0]">
                  {s.icon}
                </div>
                <h2 className="font-display text-xl font-medium tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="border-y border-border bg-muted/30">
        <Section>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Payments</Eyebrow>
              <h2 className="mt-2 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                Money handled by Paystack.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Contributions and loan disbursements run through Paystack, a
                PCI-DSS compliant payments processor. DOMICOOP never sees or
                stores your card details — we only record that a payment was
                made, and post it to your passbook.
              </p>
            </div>
            <div>
              <Eyebrow>Your data</Eyebrow>
              <h2 className="mt-2 font-display text-2xl font-medium tracking-tight sm:text-3xl">
                We don&apos;t sell your data.
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Your membership and financial records belong to you and your
                society. We do not sell them, and we collect only what running
                the ledger requires. The full detail lives in our{" "}
                <Link
                  to="/privacy"
                  className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
                >
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </Section>
      </div>

      <DownloadBand />
    </>
  );
}
