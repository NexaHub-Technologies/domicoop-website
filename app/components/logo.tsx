import { Link } from "react-router";
import { cn } from "./ui";

const LOGO_SRC = "/light-logo.png";

/**
 * The DOMICOOP logo wordmark: the brand emblem paired with the name
 * ("DOMICOOP" / "Dominion Co-operative").
 *
 * - Links to home by default; pass `to={null}` for a non-linked mark.
 * - Use `onDark` on the navy brand surfaces so the text stays legible.
 * - Pass `showText={false}` to render the emblem on its own.
 * - Size the emblem with `markClassName` (defaults to `h-9 w-9`); `className`
 *   styles the outer lockup.
 */
export function Logo({
  className,
  markClassName,
  onDark = false,
  showText = true,
  to = "/",
}: {
  className?: string;
  markClassName?: string;
  onDark?: boolean;
  showText?: boolean;
  to?: string | null;
}) {
  const content = (
    <>
      <img
        src={LOGO_SRC}
        alt={showText ? "" : "DOMICOOP — Dominion Co-operative"}
        aria-hidden={showText || undefined}
        width={1024}
        height={1024}
        decoding="async"
        className={cn("block shrink-0 object-contain", markClassName || "h-9 w-9")}
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-lg font-medium tracking-tight",
              onDark ? "text-white" : "text-foreground",
            )}
          >
            DOMICOOP
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.18em]",
              onDark ? "text-white/50" : "text-muted-foreground",
            )}
          >
            Dominion Co-operative
          </span>
        </span>
      )}
    </>
  );

  const layout = "inline-flex items-center gap-2.5";

  if (to === null) {
    return <span className={cn(layout, className)}>{content}</span>;
  }

  return (
    <Link
      to={to}
      aria-label="DOMICOOP home"
      className={cn("group", layout, className)}
    >
      {content}
    </Link>
  );
}
