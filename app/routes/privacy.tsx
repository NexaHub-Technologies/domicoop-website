import type { Route } from "./+types/privacy";
import { PageHeader } from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy — Dominion Co-operative" },
    {
      name: "description",
      content:
        "How Dominion Co-operative collects, uses and protects your data. We collect only what running the ledger requires, and we never sell your data.",
    },
  ];
}

export default function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy">
        Last updated 3 July 2026. We collect only what running the ledger
        requires, and we never sell your data.
      </PageHeader>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="space-y-10 leading-relaxed text-muted-foreground">
          <Clause title="What we collect">
            To run the society&apos;s ledger we collect:
          </Clause>
          <ul className="list-disc space-y-1 pl-6 mt-3">
            <li>Your name, email address, phone number, and physical address</li>
            <li>Member number</li>
            <li>
              Bank account details (bank name, account number, and bank code)
            </li>
            <li>Next-of-kin information (name and phone number)</li>
            <li>Device push notification token (to send you alerts)</li>
            <li>Records of your contributions, loans, and dividends</li>
          </ul>
          <p className="mt-3">
            We collect only what the service needs — nothing more.
          </p>
          <Clause title="How we use it">
            Your information is used to operate your membership of Dominion
            Co-operative: posting contributions, processing loan applications
            and disbursements, calculating dividends, and keeping you and the
            society&apos;s administrators informed.
          </Clause>
          <Clause title="Payments">
            Payments are processed by Paystack, a PCI-DSS compliant provider. We
            do not store your card details. We record only that a payment was
            made so it can be posted to your passbook.
          </Clause>
          <Clause title="How we protect it">
            Data is encrypted in transit, passwords are stored only as salted
            hashes, and administrator access is role-based.
          </Clause>
          <Clause title="We don't sell your data">
            Your membership and financial records belong to you and to Dominion
            Co-operative. We do not sell them, and we share them only with the
            society&apos;s authorised administrators and the providers needed to
            run the service.
          </Clause>
          <Clause title="Your choices">
            You can request a copy of your data or ask that your account be
            closed. Some records may be retained where the society&apos;s
            bye-laws or the law requires it.
          </Clause>
          <Clause title="Contact">
            Questions about this policy? Reach us at{" "}
            <a
              href="mailto:domicorp14@gmail.com"
              className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
            >
              domicorp14@gmail.com
            </a>
            .
          </Clause>
        </div>
      </article>
    </>
  );
}

function Clause({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
