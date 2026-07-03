import { Form, useNavigation } from "react-router";
import type { Route } from "./+types/contact";
import { CheckIcon, MailIcon } from "../components/icons";
import { Eyebrow, PageHeader, Section, cn } from "../components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact — Dominion Co-operative" },
    {
      name: "description",
      content:
        "Become a member of Dominion Co-operative or ask a question. Send a note and a real person will get back to you.",
    },
  ];
}

/**
 * The form submits as a POST so member details never land in the URL.
 * Wire an email provider (Resend, Postmark, SES…) where indicated below.
 */
export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please tell us your name.";
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    errors.email = "Please enter a valid email address.";
  if (message.length < 10)
    errors.message = "A sentence or two about how we can help you.";

  if (Object.keys(errors).length > 0) {
    return { ok: false as const, errors };
  }

  // TODO: send `{ name, email, phone, message }` via your email provider.
  return { ok: true as const };
}

export default function Contact({ actionData }: Route.ComponentProps) {
  const nav = useNavigation();
  const submitting = nav.state === "submitting";
  const errors = actionData && !actionData.ok ? actionData.errors : undefined;

  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to us.">
        Ready to become a member, or just have a question? Send a note and a
        real person will get back to you.
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2f6be0]/10 text-[#2f6be0]">
              <MailIcon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl font-medium tracking-tight">
              Become a member
            </h2>
            <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
              Tell us a little about yourself and how you&apos;d like to save.
              We&apos;ll walk you through joining Dominion Co-operative and
              getting your member number.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Prefer email?{" "}
              <a
                href="mailto:hello@domicoop.app"
                className="font-semibold text-[#2f6be0] underline-offset-4 hover:underline"
              >
                hello@domicoop.app
              </a>
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
            {actionData?.ok ? (
              <div className="flex flex-col items-start gap-4 py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2f6be0]/10 text-[#2f6be0]">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  Thank you — your note is on its way.
                </h3>
                <p className="max-w-md leading-relaxed text-muted-foreground">
                  We&apos;ll be in touch at the email you gave us. In the
                  meantime, feel free to explore what the four pillars can do.
                </p>
              </div>
            ) : (
              <Form method="post" className="space-y-5" noValidate>
                <Field
                  label="Your name"
                  name="name"
                  error={errors?.name}
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  error={errors?.email}
                  autoComplete="email"
                />
                <Field
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={cn(
                      "mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm transition-colors placeholder:text-muted-foreground",
                      errors?.message ? "border-destructive" : "border-border",
                    )}
                    placeholder="Tell us how we can help…"
                  />
                  {errors?.message && (
                    <p className="mt-1.5 text-sm text-destructive">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#2f6be0] to-[#003d9a] px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-cta)] transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}
                </button>
              </Form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={cn(
          "mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm transition-colors placeholder:text-muted-foreground",
          error ? "border-destructive" : "border-border",
        )}
      />
      {error && <p className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}
