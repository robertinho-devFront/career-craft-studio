import { Link } from "@tanstack/react-router";
import { Menu, X, FileText } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Templates", href: "/#templates" },
  { label: "Coaching", href: "/#coaching" },
  { label: "Témoignages", href: "/#temoignages" },
  { label: "Blog", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Navigation principale">
        <Link to="/" className="flex items-center gap-2 font-display text-base font-semibold">
          <span className="flex size-8 items-center justify-center rounded-lg bg-navy text-navy-foreground">
            <FileText className="size-4" aria-hidden="true" />
          </span>
          CV<span className="-ml-2 text-primary">Signature</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="/#contact" className="text-sm font-medium text-foreground hover:text-primary">
            Contact
          </a>
          <a
            href="/#rendez-vous"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Réserver un appel
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-border p-2 lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {[...links, { label: "Contact", href: "/#contact" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-4">
              <a
                href="/#rendez-vous"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Réserver un appel
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
