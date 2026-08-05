import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Conditions générales de vente | CV Signature";
const description =
  "CGV de CV Signature : prestations, tarifs, délais de livraison, droit de rétractation et paiements sécurisés.";

export const Route = createFileRoute("/cgv")({
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
    <LegalPage title="Conditions générales de vente">
      <h2>Prestations</h2>
      <p>
        Audit de CV, refonte complète, coaching candidature et vente de templates numériques aux
        formats PPTX et PSD.
      </p>
      <h2>Tarifs et paiement</h2>
      <p>
        Les prix sont indiqués en euros. Le paiement s'effectue en ligne via un prestataire certifié
        PCI-DSS ; aucune donnée bancaire n'est conservée par l'éditeur.
      </p>
      <h2>Livraison</h2>
      <p>
        Templates : téléchargement immédiat après paiement. Audit : sous 48 h ouvrées. Refonte : 3 à
        5 jours ouvrés, deux allers-retours de corrections inclus.
      </p>
      <h2>Droit de rétractation</h2>
      <p>
        Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne
        s'applique pas aux contenus numériques téléchargés immédiatement après acceptation expresse.
      </p>
      <h2>Litiges</h2>
      <p>
        Droit français applicable. En cas de litige, une solution amiable est recherchée avant toute
        action judiciaire.
      </p>
    </LegalPage>
  ),
});
