"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { NavLink } from "@/data/siteConfig";
import { BerryMark } from "@/components/ui/BerryMark";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  socialLinks: { label: string; href: string }[];
};

export function MobileMenu({ open, onClose, navLinks, socialLinks }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-brown/30 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-cream px-6 pt-6 pb-8 shadow-[0_0_40px_rgba(53,42,41,0.15)] md:hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BerryMark className="h-5 w-5 text-pink" />
                <span className="font-display text-lg text-brown">Menu</span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center text-brown"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <nav aria-label="Primary" className="mt-10 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="border-b border-border py-4 font-display text-2xl text-brown"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {socialLinks.length > 0 && (
              <div className="mt-auto flex flex-col gap-4 pt-10">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-rose"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
