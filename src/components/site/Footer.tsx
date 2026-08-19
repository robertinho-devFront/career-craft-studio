import { Link } from "@tanstack/react-router";
import { Mail, Phone, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold">CV Signature</p>
          <p className="mt-3 max-w-sm text-sm text-navy-foreground/70">
            Création, optimisation et refonte de CV. Templates PPTX &amp; PSD, coaching candidature
            et optimisation ATS.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm text-navy-foreground/70">
            <a href="mailto:rdasilva75@gmail.com" className="flex items-center gap-2 hover:text-navy-foreground">
              <Mail className="size-4" aria-hidden="true" /> rdasilva75@gmail.com
            </a>
            <a href="tel:+33610218662" className="flex items-center gap-2 hover:text-navy-foreground">
              <Phone className="size-4" aria-hidden="true" /> 06 10 21 86 62
            </a>
            <a href="https://www.linkedin.com" className="flex items-center gap-2 hover:text-navy-foreground">
              <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Prestations</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            <li><a href="/#services" className="hover:text-navy-foreground">Audit CV</a></li>
            <li><a href="/#services" className="hover:text-navy-foreground">Refonte CV</a></li>
            <li><a href="/#coaching" className="hover:text-navy-foreground">Coaching CV</a></li>
            <li><a href="/#templates" className="hover:text-navy-foreground">Templates PPTX &amp; PSD</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Informations</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            <li><Link to="/mentions-legales" className="hover:text-navy-foreground">Mentions légales</Link></li>
            <li><Link to="/confidentialite" className="hover:text-navy-foreground">Politique de confidentialité</Link></li>
            <li><Link to="/cgv" className="hover:text-navy-foreground">CGV</Link></li>
            <li><a href="/#faq" className="hover:text-navy-foreground">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-page py-5 text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} CV Signature. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
