import { Link } from "react-router";
import type { Route } from "./+types/terms";
import { PageHeader } from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Service — DOMICOOP" },
    {
      name: "description",
      content:
        "The terms that govern your use of DOMICOOP, the mobile application for Dominion Co-operative.",
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
          <Clause title="Acceptance of Terms">
            By creating an account or using DOMICOOP, you agree to be bound by
            these Terms of Service and our{" "}
            <Link
              to="/privacy"
              className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            . If you do not agree, do not use the app.
          </Clause>

          <Clause title="Who We Are">
            DOMICOOP is a digital platform that supports the operations of
            Dominion Co-operative, a registered cooperative society. The app
            allows members to make contributions, apply for loans, receive
            dividends, and stay informed about cooperative activities.
          </Clause>

          <Clause title="Eligibility">
            <ul className="list-disc space-y-1 pl-6 mt-3">
              <li>You must be at least 18 years of age.</li>
              <li>You must be a registered member of Dominion Co-operative.</li>
              <li>
                Each person may hold only one membership account.
              </li>
            </ul>
          </Clause>

          <Clause title="Registration">
            <ul className="list-disc space-y-1 pl-6 mt-3">
              <li>
                You must provide accurate and complete information during
                registration.
              </li>
              <li>
                You are responsible for keeping your login credentials secure.
              </li>
              <li>
                You must notify us immediately if you suspect unauthorised access
                to your account.
              </li>
              <li>
                One membership, one account. Duplicate accounts will be merged or
                removed.
              </li>
            </ul>
          </Clause>

          <Clause title="Contributions and Payments">
            <ul className="list-disc space-y-1 pl-6 mt-3">
              <li>The minimum contribution is &#8358;5,000.</li>
              <li>
                A non-refundable registration fee of &#8358;20,000 applies to
                new members.
              </li>
              <li>
                A cooperative wrapper fee of &#8358;6,000 is payable at
                registration.
              </li>
              <li>
                An additional &#8358;1,000 social/end-of-year souvenir
                contribution is compulsory with each monthly subscription.
              </li>
              <li>
                Payments must be made through the app or approved channels. USSD
                and POS payments are not accepted.
              </li>
              <li>
                Third-party payments (payments made from another person&apos;s
                account) are not accepted. Your payment must carry the name used
                during registration.
              </li>
              <li>
                Payments above &#8358;50,000 will be posted to your deposit
                column.
              </li>
              <li>
                Random or irregular payment amounts (e.g., &#8358;12,000,
                &#8358;18,000, &#8358;22,000) are not accepted.
              </li>
              <li>
                A late payment fee of &#8358;500 applies to overdue
                contributions.
              </li>
            </ul>
          </Clause>

          <Clause title="Loans">
            <ul className="list-disc space-y-1 pl-6 mt-3">
              <li>
                Consistent payment for 6 months qualifies you for a loan of up
                to 3 times your contribution, at an interest rate of 10%,
                repayable within one year.
              </li>
              <li>
                A 1.5% processing fee applies to loan repayments.
              </li>
              <li>
                Loan eligibility requires sufficient contribution history and no
                existing active loan.
              </li>
              <li>
                If you guarantee a borrower and the borrower defaults, your
                funds and dividends may be held or deducted until the debt is
                settled.
              </li>
              <li>
                You may guarantee one person if you have an active loan, or two
                persons if you do not.
              </li>
              <li>
                Your guarantor must be a member of the cooperative.
              </li>
            </ul>
          </Clause>

          <Clause title="Dividends">
            <ul className="list-disc space-y-1 pl-6 mt-3">
              <li>
                Dividends are calculated and distributed at the end of each
                year.
              </li>
              <li>
                If you have an outstanding loan guarantee that is in default,
                your dividend may be placed on hold and drawn upon by the
                cooperative.
              </li>
            </ul>
          </Clause>

          <Clause title="Membership Obligations">
            <ul className="list-disc space-y-1 pl-6 mt-3">
              <li>
                You must pay your dues for at least 3 consecutive months to
                maintain active membership.
              </li>
              <li>
                Failure to pay dues for 3 months may result in automatic
                withdrawal at year-end.
              </li>
              <li>
                If you wish to exit the cooperative, you must provide 6
                months&apos; notice in writing.
              </li>
              <li>
                If you wish to increase your contribution, you must inform the
                cooperative in writing through the chairperson.
              </li>
            </ul>
          </Clause>

          <Clause title="Prohibited Conduct">
            <p className="mt-3">You agree not to:</p>
            <ul className="list-disc space-y-1 pl-6 mt-3">
              <li>Use the app for any unlawful purpose.</li>
              <li>Provide false or misleading information.</li>
              <li>Attempt to access other members&apos; accounts.</li>
              <li>Interfere with the operation of the app.</li>
              <li>Use the app to harass, abuse, or harm others.</li>
            </ul>
          </Clause>

          <Clause title="Account Deletion">
            You may request account deletion from the app settings. When you
            delete your account:
            <ul className="list-disc space-y-1 pl-6 mt-3">
              <li>
                A request is sent to the server to remove your personal data.
              </li>
              <li>
                Your authentication tokens and local cached data are cleared.
              </li>
              <li>
                Some records may be retained where the cooperative&apos;s
                bye-laws or applicable law requires it.
              </li>
            </ul>
          </Clause>

          <Clause title="Data and Privacy">
            We collect and process your personal data as described in our{" "}
            <Link
              to="/privacy"
              className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            . By using the app, you consent to such processing.
          </Clause>

          <Clause title="Limitation of Liability">
            DOMICOOP is provided &quot;as is&quot; without warranties of any
            kind. To the fullest extent permitted by law, Dominion Co-operative
            and its service providers shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use
            of the app.
          </Clause>

          <Clause title="Changes to These Terms">
            We may update these Terms from time to time. Material changes will
            be communicated through the app or by email. Continued use of the
            app after changes take effect constitutes acceptance of the updated
            Terms.
          </Clause>

          <Clause title="Governing Law">
            These Terms are governed by the laws of the Federal Republic of
            Nigeria.
          </Clause>

          <Clause title="Contact">
            Questions about these Terms? Reach us at{" "}
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
