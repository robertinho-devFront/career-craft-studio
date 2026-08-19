# CV Signature

Site vitrine professionnel pour la vente de services de création, d'optimisation et de refonte de CV : audit CV, refonte, coaching candidature, templates PPTX/PSD.

## Stack technique

- [TanStack Start](https://tanstack.com/start) (React 19, SSR/SSG) + [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (composants dans `src/components/ui`)
- [Nitro](https://nitro.build) pour le build/déploiement (preset `github-pages` : génère un site 100 % statique)

## Développement local

Prérequis : [Bun](https://bun.sh) (ou Node.js 20+ avec npm).

```sh
bun install
bun run dev
```

Le site est servi sur `http://localhost:8080`.

## Build

```sh
bun run build
```

Génère le site statique dans `.output/public/`.

> **Note** : la version bêta de Nitro utilisée par ce projet écrit correctement tous les
> fichiers statiques dans `.output/public/` mais termine ensuite le process avec un code de
> sortie non nul (bug connu, sans impact sur le contenu généré — voir le workflow GitHub
> Actions dans `.github/workflows/deploy.yml`, qui vérifie la présence de `index.html`
> plutôt que le code de sortie). À surveiller lors des futures mises à jour de `nitro`.

## Déploiement (GitHub Pages)

Le déploiement est automatisé via GitHub Actions (`.github/workflows/deploy.yml`) : chaque push sur `main` build le site et le publie sur GitHub Pages.

Pour que les chemins fonctionnent correctement, ce site doit être servi à la **racine** d'un domaine :
- soit via un repo `<votre-pseudo>.github.io` (site GitHub Pages "utilisateur"),
- soit via un nom de domaine personnalisé configuré dans les paramètres Pages du repo.

## Structure du projet

```
src/
  components/
    site/        → composants spécifiques au site (Header, Footer, sections de la page d'accueil...)
    ui/           → composants shadcn/ui génériques
  routes/         → pages (file-based routing TanStack Router)
  lib/            → utilitaires
public/           → fichiers statiques (favicon, robots.txt...)
```
