import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("lead-magnet-seen")) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem("lead-magnet-seen", "1");
      }
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-magnet-title"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-7 shadow-elevated">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fermer"
          className="absolute right-3 top-3 rounded-lg p-2 text-muted-foreground hover:bg-secondary"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Guide gratuit
        </span>
        <h2 id="lead-magnet-title" className="mt-4 text-xl font-semibold">
          10 erreurs qui empêchent votre CV d'obtenir un entretien
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Recevez le PDF immédiatement par email et corrigez votre CV dès aujourd'hui.
        </p>
        <form
          className="mt-5 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
        >
          <label htmlFor="lead-email" className="sr-only">
            Email
          </label>
          <input
            id="lead-email"
            type="email"
            required
            maxLength={255}
            placeholder="votre@email.com"
            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            <Download className="size-4" aria-hidden="true" /> Recevoir le PDF
          </button>
          <p className="text-xs text-muted-foreground" role="status">
            {done ? "C'est envoyé ! Vérifiez votre boîte de réception." : "Sans spam. Désinscription en un clic."}
          </p>
        </form>
      </div>
    </div>
  );
}
