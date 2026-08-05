import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Bot,
  CalendarClock,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  FileSearch,
  FileText,
  Gauge,
  Layers,
  PenLine,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Users,
  Video,
} from "lucide-react";
import { Reveal } from "./Reveal";
import heroMockup from "@/assets/cv-mockup.jpg";
import template1 from "@/assets/template-1.jpg";
import template2 from "@/assets/template-2.jpg";
import template3 from "@/assets/template-3.jpg";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-primary-foreground/70" : "text-primary"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${light ? "text-navy-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{subtitle}</p>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-gradient-hero">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            Optimisation ATS &amp; design premium
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            Obtenez un CV qui décroche plus d'entretiens
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Templates professionnels PPTX et PSD, optimisation de CV et accompagnement personnalisé.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#rendez-vous"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Réserver un appel <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#templates"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="size-4" aria-hidden="true" /> Télécharger un modèle
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              ["+850", "CV optimisés"],
              ["92 %", "Taux ATS moyen"],
              ["48 h", "Délai de livraison"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-2xl font-semibold">{k}</dt>
                <dd className="text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" aria-hidden="true" />
          <img
            src={heroMockup}
            alt="Trois modèles de CV professionnels modernes en perspective"
            width={1200}
            height={1008}
            className="relative rounded-2xl border border-border shadow-elevated"
          />
        </div>
      </div>
    </section>
  );
}

const problems = [
  {
    icon: Bot,
    title: "Filtré par les ATS",
    text: "75 % des CV sont écartés par les logiciels de recrutement avant même une lecture humaine : structure, mots-clés et format inadaptés.",
  },
  {
    icon: Clock,
    title: "6 secondes de lecture",
    text: "Un recruteur scanne un CV en quelques secondes. Sans hiérarchie visuelle claire, votre valeur passe inaperçue.",
  },
  {
    icon: AlertTriangle,
    title: "Erreurs fréquentes",
    text: "Missions listées sans résultats chiffrés, photo mal cadrée, mise en page surchargée, incohérences de dates.",
  },
  {
    icon: FileText,
    title: "Format non conforme",
    text: "Tableaux, colonnes exotiques, icônes non lisibles ou PDF images : autant de blocages à la lecture automatisée.",
  },
];

export function Problem() {
  return (
    <section className="py-20" id="problematique">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Le constat"
            title="Pourquoi votre CV ne reçoit pas de réponse"
            subtitle="Le problème n'est presque jamais votre parcours, mais la façon dont il est présenté et lu."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: FileSearch,
    title: "Audit CV",
    price: "à partir de 49 €",
    features: ["Analyse complète", "Recommandations priorisées", "Rapport PDF détaillé"],
  },
  {
    icon: PenLine,
    title: "Refonte CV",
    price: "à partir de 149 €",
    features: ["Réécriture des contenus", "Mise en page premium", "Optimisation ATS"],
    highlight: true,
  },
  {
    icon: Video,
    title: "Coaching CV",
    price: "à partir de 89 € / h",
    features: ["Accompagnement individuel", "Visioconférence", "Conseils candidature"],
  },
  {
    icon: Layers,
    title: "Templates CV",
    price: "à partir de 19 €",
    features: ["Format PPTX", "Format PSD", "Téléchargement immédiat"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Services"
            title="Des prestations claires, livrables inclus"
            subtitle="Choisissez le niveau d'accompagnement adapté à votre situation et à votre échéance."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-6 shadow-soft ${
                  s.highlight ? "border-primary bg-card ring-1 ring-primary/20" : "border-border bg-card"
                }`}
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{s.price}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center justify-center rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Demander cette prestation
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const templates = [
  { img: template1, name: "Executive Navy", format: "PPTX + PSD", price: "29 €" },
  { img: template2, name: "Sidebar Pro", format: "PPTX", price: "19 €" },
  { img: template3, name: "Minimal ATS", format: "PSD", price: "24 €" },
];

export function Templates() {
  return (
    <section id="templates" className="py-20">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Templates"
            title="Modèles de CV prêts à l'emploi"
            subtitle="Fichiers modifiables PPTX et PSD, structure compatible ATS, téléchargement immédiat après paiement sécurisé."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={t.img}
                    alt={`Aperçu du modèle de CV ${t.name}`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-base font-semibold">{t.name}</h3>
                    <p className="text-xs text-muted-foreground">{t.format}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg font-semibold">{t.price}</p>
                    <a
                      href="#contact"
                      className="mt-1 inline-flex rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground"
                    >
                      Acheter
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Paiement sécurisé et téléchargement automatique après achat.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const reasons = [
  { icon: BadgeCheck, title: "Expérience professionnelle", text: "10 ans en RH et communication, tous secteurs confondus." },
  { icon: Users, title: "Expertise recrutement", text: "Le regard d'un recruteur sur chaque ligne de votre CV." },
  { icon: Timer, title: "Réactivité", text: "Première version livrée sous 48 h ouvrées." },
  { icon: Sparkles, title: "Accompagnement personnalisé", text: "Un échange en visio, deux allers-retours inclus." },
  { icon: Layers, title: "Design moderne", text: "Mise en page premium, sobre et parfaitement lisible." },
  { icon: Gauge, title: "Optimisation ATS", text: "Structure, mots-clés et format testés sur les principaux ATS." },
];

export function WhyMe() {
  return (
    <section id="coaching" className="bg-navy py-20 text-navy-foreground">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            light
            eyebrow="Pourquoi me choisir"
            title="Un accompagnement de recruteur, pas un simple graphisme"
            subtitle="Chaque CV est retravaillé sur le fond et la forme, avec la logique de sélection réelle des entreprises."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 60}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                <r.icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-navy-foreground/70">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Camille R.",
    role: "Chef de projet marketing",
    before: "2 réponses en 3 mois de candidatures",
    after: "6 entretiens en 4 semaines",
    text: "La refonte a totalement changé la lecture de mon parcours. Les résultats chiffrés mis en avant ont fait la différence.",
  },
  {
    name: "Yanis B.",
    role: "Développeur en reconversion",
    before: "CV illisible par les ATS",
    after: "Score ATS 94 % et 3 offres",
    text: "J'ai enfin compris pourquoi mes candidatures disparaissaient. Le format livré est simple à mettre à jour.",
  },
  {
    name: "Sarah M.",
    role: "Directrice financière",
    before: "CV de 4 pages non hiérarchisé",
    after: "1 page synthétique, poste décroché",
    text: "Un travail de synthèse remarquable et un accompagnement très réactif. Je recommande sans réserve.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index]!;

  return (
    <section id="temoignages" className="bg-secondary py-20">
      <div className="container-page">
        <Reveal>
          <SectionTitle eyebrow="Témoignages" title="Ils ont relancé leur recherche" />
        </Reveal>
        <Reveal>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-soft">
            <Quote className="size-7 text-primary" aria-hidden="true" />
            <div className="mt-4 flex gap-0.5" aria-label="Note de 5 étoiles sur 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-4 text-lg leading-relaxed">{t.text}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-secondary p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Avant</p>
                <p className="mt-1 text-sm">{t.before}</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Après</p>
                <p className="mt-1 text-sm">{t.after}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Témoignage précédent"
                  onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="rounded-lg border border-border p-2 transition-colors hover:bg-secondary"
                >
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Témoignage suivant"
                  onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                  className="rounded-lg border border-border p-2 transition-colors hover:bg-secondary"
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export const faqItems = [
  {
    q: "Combien de temps faut-il ?",
    a: "L'audit est livré sous 48 h ouvrées. Une refonte complète prend 3 à 5 jours ouvrés, incluant deux allers-retours de corrections.",
  },
  {
    q: "Quels formats sont livrés ?",
    a: "Vous recevez systématiquement un PDF optimisé pour les ATS et le fichier source modifiable (PPTX ou PSD selon le modèle choisi).",
  },
  {
    q: "Puis-je modifier mon CV ?",
    a: "Oui. Les fichiers sources sont entièrement modifiables et un guide d'utilisation vous explique comment les mettre à jour.",
  },
  {
    q: "Comment se déroule l'accompagnement ?",
    a: "Un premier appel de cadrage, un questionnaire de parcours, puis la production. Le suivi se fait par email et en visioconférence.",
  },
  {
    q: "Le paiement est-il sécurisé ?",
    a: "Oui, les paiements sont traités par un prestataire certifié PCI-DSS. Aucune donnée bancaire n'est stockée sur le site.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="container-page">
        <Reveal>
          <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card shadow-soft">
          {faqItems.map((item) => (
            <details key={item.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                {item.q}
                <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const posts = [
  { cat: "CV", title: "10 erreurs qui font rejeter votre CV par les ATS", time: "6 min" },
  { cat: "Recherche d'emploi", title: "Construire un plan de candidature efficace en 30 jours", time: "8 min" },
  { cat: "Entretien", title: "Préparer les 12 questions les plus posées en entretien", time: "7 min" },
  { cat: "LinkedIn", title: "Aligner son profil LinkedIn avec son CV", time: "5 min" },
  { cat: "Reconversion", title: "Valoriser des compétences transférables sans expérience", time: "9 min" },
];

export function Blog() {
  return (
    <section id="blog" className="bg-secondary py-20">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            eyebrow="Blog"
            title="Conseils carrière et recrutement"
            subtitle="Des guides pratiques pour votre CV, votre recherche d'emploi et vos entretiens."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {p.cat}
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug">{p.title}</h3>
                <p className="mt-auto pt-4 text-xs text-muted-foreground">Lecture {p.time}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section id="newsletter" className="py-20">
      <div className="container-page">
        <Reveal>
          <div className="rounded-3xl bg-gradient-navy p-8 text-navy-foreground sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold">Recevez nos conseils carrière</h2>
                <p className="mt-3 text-sm text-navy-foreground/70">
                  Un email par semaine : modèles, exemples de formulations et méthodes de candidature.
                  Double opt-in, désinscription en un clic.
                </p>
              </div>
              <form
                className="grid gap-3 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="nl-prenom" className="text-xs font-medium text-navy-foreground/70">
                    Prénom
                  </label>
                  <input
                    id="nl-prenom"
                    name="prenom"
                    required
                    maxLength={60}
                    className="mt-1 w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm placeholder:text-navy-foreground/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="Camille"
                  />
                </div>
                <div>
                  <label htmlFor="nl-email" className="text-xs font-medium text-navy-foreground/70">
                    Email
                  </label>
                  <input
                    id="nl-email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="mt-1 w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2.5 text-sm placeholder:text-navy-foreground/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="camille@email.com"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground sm:col-span-2"
                >
                  S'inscrire
                </button>
                <p className="text-xs text-navy-foreground/60 sm:col-span-2" role="status">
                  {sent
                    ? "Merci ! Confirmez votre inscription via l'email que vous venez de recevoir."
                    : "Vos données restent confidentielles (RGPD)."}
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section id="rendez-vous" className="bg-secondary py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Rendez-vous</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Réservez un appel découverte gratuit</h2>
            <p className="mt-4 text-muted-foreground">
              15 minutes pour analyser votre situation, votre objectif de poste et la prestation la plus
              adaptée. Confirmation automatique et invitation calendrier envoyées par email.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {["Réservation en ligne", "Confirmation automatique", "Emails de rappel", "Synchronisation calendrier"].map(
                (f) => (
                  <li key={f} className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-primary" aria-hidden="true" /> {f}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
            <CalendarClock className="mx-auto size-8 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold">Créneaux disponibles cette semaine</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Choisissez votre créneau directement dans l'agenda en ligne.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground"
            >
              Ouvrir l'agenda <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
