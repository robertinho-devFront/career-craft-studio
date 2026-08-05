import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ExitIntentPopup } from "@/components/site/ExitIntentPopup";
import { ContactForm } from "@/components/site/ContactForm";
import {
  Hero,
  Problem,
  Services,
  Templates,
  WhyMe,
  Testimonials,
  Faq,
  Blog,
  Newsletter,
  Booking,
  faqItems,
} from "@/components/site/sections";

const title = "Création de CV Professionnel | Templates PPTX & PSD";
const description =
  "Refonte de CV, modèles professionnels PPTX et PSD, coaching personnalisé et optimisation ATS.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "CV Signature",
      description,
      email: "contact@cvsignature.fr",
      telephone: "+33600000000",
      priceRange: "€€",
      address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
    },
    {
      "@type": "Service",
      serviceType: "Création et optimisation de CV",
      provider: { "@type": "LocalBusiness", name: "CV Signature" },
      areaServed: "FR",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Templates />
        <WhyMe />
        <Testimonials />
        <Blog />
        <Faq />
        <Newsletter />
        <Booking />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </div>
  );
}
