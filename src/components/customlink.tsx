import type { AnchorHTMLAttributes } from "react";

import { Link, useLocation } from "react-router-dom";

type CustomLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};
export default function CustomLink({
  href,
  children,
  className = "",
  target,
  rel,
  ...props
}: CustomLinkProps) {
  const { pathname } = useLocation();
  const classes = `group relative inline-block font-medium ${className || "text-violet-700 dark:text-violet-400"}`;
  const content = (
    <>
      {children}
      <span
        aria-hidden="true"
        className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-violet-600 transition-all ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </>
  );
  const linkProps = {
    ...props,
    className: classes,
    target,
    rel: rel ?? (target === "_blank" ? "noopener noreferrer" : undefined),
  };

  return href.startsWith("/") && target !== "_blank" ? (
    <Link
      {...linkProps}
      aria-current={pathname === href ? "page" : undefined}
      to={href}
    >
      {content}
    </Link>
  ) : (
    <a {...linkProps} href={href}>
      {content}
    </a>
  );
}
