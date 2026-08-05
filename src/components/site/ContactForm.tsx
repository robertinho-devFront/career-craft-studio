import { useState } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";

const schema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis").max(60),
  nom: z.string().trim().min(1, "Nom requis").max(60),
  email: z.string().trim().email("Email invalide").max(255),
  telephone: z.string().trim().min(6, "Téléphone invalide").max(25),
  prestation: z.string().min(1, "Sélectionnez une prestation"),
  date: z.string().optional(),
  heure: z.string().optional(),
  message: z.string().trim().min(10, "Message trop court").max(1000),
});

const prestations = ["Audit CV", "Refonte CV", "Coaching CV", "Templates PPTX / PSD", "Autre demande"];

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        next[String(issue.path[0])] = issue.message;
      });
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  const field =
    "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <section id="contact" className="py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Parlons de votre projet</h2>
            <p className="mt-4 text-muted-foreground">
              Décrivez votre situation et vos objectifs. Vous recevez une réponse sous 24 h ouvrées,
              avec une proposition de créneau si vous en indiquez un.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8"
          >
            {[
              { id: "prenom", label: "Prénom", type: "text" },
              { id: "nom", label: "Nom", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "telephone", label: "Téléphone", type: "tel" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-sm font-medium">
                  {f.label}
                </label>
                <input id={f.id} name={f.id} type={f.type} className={field} />
                {errors[f.id] && <p className="mt-1 text-xs text-destructive">{errors[f.id]}</p>}
              </div>
            ))}

            <div className="sm:col-span-2">
              <label htmlFor="prestation" className="text-sm font-medium">
                Type de prestation
              </label>
              <select id="prestation" name="prestation" defaultValue="" className={field}>
                <option value="">Sélectionnez…</option>
                {prestations.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              {errors.prestation && <p className="mt-1 text-xs text-destructive">{errors.prestation}</p>}
            </div>

            <div>
              <label htmlFor="date" className="text-sm font-medium">
                Date souhaitée
              </label>
              <input id="date" name="date" type="date" className={field} />
            </div>
            <div>
              <label htmlFor="heure" className="text-sm font-medium">
                Heure souhaitée
              </label>
              <input id="heure" name="heure" type="time" className={field} />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea id="message" name="message" rows={5} maxLength={1000} className={field} />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:col-span-2"
            >
              Envoyer ma demande
            </button>
            <p className="text-xs text-muted-foreground sm:col-span-2" role="status">
              {sent
                ? "Merci pour votre demande ! Un email de confirmation vient de vous être envoyé."
                : "Vos informations sont utilisées uniquement pour traiter votre demande (RGPD)."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
