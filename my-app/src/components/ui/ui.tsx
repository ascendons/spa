import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useMagnetic } from "../../lib/motion";

export const Arrow = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden="true"
  >
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    aria-hidden="true"
  >
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

type ButtonProps = {
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
  icon?: "arrow" | "external" | "none";
} & ({ to: string; href?: never } | { href: string; to?: never });

/** CTA with a magnetic pull. Renders a router Link or an external anchor. */
export function Button({
  children,
  variant = "solid",
  className = "",
  onClick,
  icon = "none",
  ...rest
}: ButtonProps) {
  const wrap = useRef<HTMLSpanElement>(null);
  useMagnetic(wrap);
  const cls = `x-btn ${variant === "ghost" ? "x-btn--ghost" : ""} ${className}`;
  const glyph =
    icon === "arrow" ? (
      <Arrow />
    ) : icon === "external" ? (
      <ArrowUpRight />
    ) : null;

  const inner =
    "to" in rest && rest.to !== undefined ? (
      <Link to={rest.to} className={cls} onClick={onClick}>
        {children}
        {glyph}
      </Link>
    ) : (
      <a
        href={rest.href}
        className={cls}
        onClick={onClick}
        {...(rest.href?.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {glyph}
      </a>
    );

  return (
    <span ref={wrap} className="x-magnetic">
      {inner}
    </span>
  );
}
