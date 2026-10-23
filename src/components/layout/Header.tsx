"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = siteConfig.nav.primary.filter(
    (link) => link.label !== "Custom Orders" || siteConfig.customOrders.enabled,
  );
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  const socialLinks = [
    { label: "Instagram", href: siteConfig.urls.instagram },
    { label: "TikTok", href: siteConfig.urls.tiktok },
    { label: "Etsy", href: siteConfig.urls.etsy },
  ].filter((link) => link.href);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-cream/95 backdrop-blur transition-[height,border-color] duration-300 ${
          scrolled ? "h-16 border-b border-border" : "h-[84px] border-b border-transparent"
        }`}
      >
        <div className="mx-auto grid h-full max-w-[var(--container-max)] grid-cols-[1fr_auto_1fr] items-center px-6 sm:px-8 lg:px-12">
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[13px] font-medium uppercase tracking-[0.08em] text-brown transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-berry after:transition-all after:duration-300 hover:text-berry hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className="flex items-center gap-2 justify-self-center"
            aria-label={`${siteConfig.brand.name} — home`}
          >
            <Image
              src={siteConfig.brand.logo}
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <span className="whitespace-nowrap font-display text-lg tracking-tight text-brown sm:hidden">
              {siteConfig.brand.shortName}
            </span>
            <span className="hidden whitespace-nowrap font-display text-xl tracking-tight text-brown sm:inline md:text-2xl">
              {siteConfig.brand.name}
            </span>
          </Link>

          <div className="flex items-center justify-end gap-6">
            <nav aria-label="Secondary" className="hidden items-center gap-8 md:flex">
              {rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[13px] font-medium uppercase tracking-[0.08em] text-brown transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-berry after:transition-all after:duration-300 hover:text-berry hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {socialLinks.length > 0 && (
              <div className="hidden items-center gap-4 border-l border-border pl-6 lg:flex">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold uppercase tracking-[0.1em] text-rose transition-colors hover:text-berry"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center text-brown md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={navLinks}
        socialLinks={socialLinks}
      />
    </>
  );
}
