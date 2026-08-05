import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Mentions légales | CV Signature";
const description =
  "Mentions légales du site CV Signature : éditeur, hébergement, propriété intellectuelle et responsabilité.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        CV Signature — consultant indépendant en création et optimisation de CV. Email :
        contact@cvsignature.fr. Téléphone : +33 6 00 00 00 00. SIRET : 000 000 000 00000.
      </p>
      <h2>Hébergement</h2>
      <p>Le site est hébergé par un prestataire d'hébergement cloud au sein de l'Union européenne.</p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus (textes, visuels, modèles de CV) est protégé par le droit d'auteur.
        Toute reproduction ou revente sans autorisation est interdite.
      </p>
      <h2>Responsabilité</h2>
      <p>
        Les informations diffusées sont fournies à titre indicatif. L'éditeur ne saurait être tenu
        responsable des décisions prises sur la base de ces contenus.
      </p>
    </LegalPage>
  ),
});
