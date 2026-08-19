# Commandes à exécuter dans ton terminal

## 1) Si ce n'est pas déjà fait, clone le repo
git clone https://github.com/robertinho-devFront/career-craft-studio.git
cd career-craft-studio

## 2) Supprime les fichiers qui n'existent plus dans la nouvelle version
rm -f AGENTS.md bun.lock
rm -f src/lib/lovable-error-reporting.ts

## 3) Dézippe le contenu mis à jour PAR-DESSUS ton dossier
#    (télécharge career-craft-studio-updated.zip, décompresse-le, puis :)
#    copie tout son contenu dans le dossier career-craft-studio en écrasant les fichiers existants

## 4) Réinstalle les dépendances (régénère bun.lock proprement, sans Lovable)
bun install

## 5) Vérifie que ça build toujours correctement en local
bun run build
#    -> normal que ça affiche une erreur à la toute fin (bug Nitro documenté dans le README),
#       vérifie juste que le dossier .output/public/index.html existe bien après :
ls .output/public/index.html

## 6) Commit et push
git add -A
git status   # relis la liste, vérifie que rien d'inattendu n'est modifié
git commit -m "Nettoyage Lovable, nouveau logo, coordonnées, roadmap, config déploiement"
git push origin main
