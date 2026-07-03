import { Button, Eyebrow, StoreBadges } from "./ui";

/** Navy download band used at the foot of most pages. */
export function DownloadBand() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl bg-[#071431] px-6 py-16 text-white sm:px-14 sm:py-20">
        {/* ambient glows */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#2f6be0]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-[#e6a93b]/15 blur-3xl" />
        <div className="relative max-w-2xl">
          <span className="mb-5 block h-px w-12 bg-[#e6a93b]" />
          <Eyebrow className="text-[#e6a93b]">
            Get started
          </Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Carry your passbook in your pocket.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-white/70">
            Get the DOMICOOP app to track your contributions, apply for a loan
            and watch your dividend grow — your standing in Dominion
            Co-operative, always on hand.
          </p>
          <StoreBadges className="mt-8" />
        </div>
      </div>
    </section>
  );
}

/** Compact CTA band inviting prospective members to join the society. */
export function JoinCta() {
  return (
    <div className="rounded-2xl border border-border bg-gradient-to-br from-[#eef4ff] to-transparent p-8 sm:p-10">
      <h3 className="font-display text-2xl font-medium tracking-tight">
        Become a member of Dominion Co-operative
      </h3>
      <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
        Join a society that keeps an honest ledger — start contributing, build
        your standing, and share in the annual dividend.
      </p>
      <Button to="/contact" className="mt-6" withArrow>
        Become a member
      </Button>
    </div>
  );
}
