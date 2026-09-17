"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/work", label: "Work", icon: StackIcon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/contact", label: "Contact", icon: ContactIcon },
  { href: "#", label: "Theme", icon: SunIcon, isThemeToggle: true },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-bg-white border border-stroke-soft rounded-full px-5 py-3 shadow-[-4px_4px_50px_rgba(0,0,0,0.15)]">
        {navItems.map((item) => {
          const isActive = item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href) && item.href !== "#";
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className={`transition-opacity ${
                isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.707 2.293a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h4v-5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5h4a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9Z" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 2 10 6.5v7L12 22 2 15.5v-7L12 2Z" />
      <path d="M12 22v-6.5" />
      <path d="m22 8.5-10 7-10-7" />
      <path d="m2 15.5 10-7 10 7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
