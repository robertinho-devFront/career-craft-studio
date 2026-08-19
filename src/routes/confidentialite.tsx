import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

const title = "Politique de confidentialité | CV Signature";
const description =
  "Traitement des données personnelles, finalités, durée de conservation et droits RGPD des utilisateurs de CV Signature.";

export const Route = createFileRoute("/confidentialite")({
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
    <LegalPage title="Politique de confidentialité">
      <h2>Données collectées</h2>
      <p>
        Formulaire de contact : nom, prénom, email, téléphone, type de prestation, date et heure
        souhaitées, message. Newsletter : prénom et email, avec double opt-in.
      </p>
      <h2>Finalités</h2>
      <p>
        Répondre aux demandes, planifier des rendez-vous, exécuter les prestations commandées et
        envoyer la newsletter carrière si vous y avez consenti.
      </p>
      <h2>Conservation</h2>
      <p>
        Prospects : 3 ans après le dernier contact. Clients : durée légale de conservation
        comptable. Newsletter : jusqu'à désinscription.
      </p>
      <h2>Vos droits</h2>
      <p>
        Accès, rectification, effacement, portabilité et opposition. Écrivez à
        rdasilva75@gmail.com ; une réponse vous est adressée sous 30 jours.
      </p>
      <h2>Cookies</h2>
      <p>
        Des cookies de mesure d'audience peuvent être déposés uniquement après votre consentement.
      </p>
    </LegalPage>
  ),
});
