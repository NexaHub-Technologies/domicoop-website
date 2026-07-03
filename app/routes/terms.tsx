import { Link } from "react-router";
import type { Route } from "./+types/terms";
import { PageHeader } from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Service — Dominion Co-operative" },
    {
      name: "description",
      content:
        "The terms that govern your use of DOMICOOP, the app of Dominion Co-operative — a thrift & credit society.",
    },
  ];
}

export default function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service">
        Last updated 3 July 2026. These terms govern your use of DOMICOOP.
      </PageHeader>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="space-y-10 leading-relaxed text-muted-foreground">
          <Clause title="Using DOMICOOP">
            DOMICOOP is the app of Dominion Co-operative, a thrift &amp; credit
            society. By becoming a member, you agree to use it in accordance
            with the society&apos;s bye-laws and these terms. You are
            responsible for keeping your account credentials secure.
          </Clause>
          <Clause title="Membership">
            Eligibility, contribution amounts, loan terms and dividend
            calculations are governed by Dominion Co-operative&apos;s bye-laws
            and the decisions of its members. The app records and reflects them;
            it does not replace them.
          </Clause>
          <Clause title="Payments">
            Contributions and disbursements are processed through Paystack.
            Payment obligations and schedules are determined by the
            society&apos;s bye-laws. DOMICOOP records and posts payments but is
            not a party to them.
          </Clause>
          <Clause title="Availability">
            We work to keep DOMICOOP available and accurate, but the service is
            provided as-is. We are not liable for losses arising from
            disruptions outside our reasonable control.
          </Clause>
          <Clause title="Changes">
            We may update these terms as the service evolves. We&apos;ll post
            the revised date above; continued use means you accept the updated
            terms.
          </Clause>
          <Clause title="Privacy">
            Your data is handled as described in our{" "}
            <Link
              to="/privacy"
              className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
            >
              privacy policy
            </Link>
            .
          </Clause>
          <Clause title="Contact">
            Questions about these terms? Reach us at{" "}
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
