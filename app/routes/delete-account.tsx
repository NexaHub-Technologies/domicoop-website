import type { Route } from "./+types/delete-account";
import { PageHeader } from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Delete Your Account — Dominion Co-operative" },
    {
      name: "description",
      content:
        "How to request deletion of your Dominion Co-operative account and personal data.",
    },
  ];
}

export default function DeleteAccount() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Delete Your Account">
        You can request deletion of your Dominion Co-operative account and
        personal data at any time.
      </PageHeader>

      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="space-y-10 leading-relaxed text-muted-foreground">
          <Clause title="How to request deletion">
            Send a deletion request from the email address linked to your
            account to{" "}
            <a
              href="mailto:domicorp14@gmail.com?subject=Account%20deletion%20request"
              className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
            >
              domicorp14@gmail.com
            </a>{" "}
            with the subject line &ldquo;Account deletion request&rdquo; and
            your member number. We&apos;ll verify your identity and confirm
            once your request has been actioned.
          </Clause>
          <Clause title="What gets deleted">
            We delete your profile information — name, email address, phone
            number, physical address, next-of-kin details, and device push
            notification token — along with your login credentials.
          </Clause>
          <Clause title="What we retain, and why">
            Records of contributions, loans, and dividends are retained even
            after account deletion, as Dominion Co-operative&apos;s bye-laws
            and applicable financial-record-keeping laws require the society
            to keep a permanent ledger of member transactions. This
            information is retained securely and is not used for any purpose
            other than meeting those obligations.
          </Clause>
          <Clause title="Timing">
            We process deletion requests within 30 days of verifying your
            identity.
          </Clause>
          <Clause title="Questions">
            Reach us at{" "}
            <a
              href="mailto:domicorp14@gmail.com"
              className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
            >
              domicorp14@gmail.com
            </a>{" "}
            if you have questions about this process. See also our{" "}
            <a
              href="/privacy"
              className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
            >
              Privacy Policy
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
