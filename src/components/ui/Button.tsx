import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const base =
  "inline-flex items-center gap-1.5 text-[13px] font-medium tracking-wide transition-colors duration-300";

const variants = {
  primary:
    "bg-berry text-cream px-6 py-3.5 rounded-sm hover:bg-berry-deep",
  secondary:
    "text-berry border-b border-berry/35 pb-1 hover:border-berry",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal = /^https?:\/\//.test(href);

  const content = (
    <>
      <span>{children}</span>
      {isExternal && <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
