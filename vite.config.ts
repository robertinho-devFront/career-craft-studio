import { defineConfig, loadEnv } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// Ce site est déployé à la racine d'un domaine GitHub Pages (repo
// "<pseudo>.github.io" ou domaine personnalisé) -> pas besoin de "base" ici.
// Si un jour le site est servi depuis un sous-dossier, il faudra définir
// `base` ici ET `basepath` dans src/router.tsx avec la même valeur.

export default defineConfig(async ({ command, mode }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
      // Redirige l'entrée serveur de TanStack Start vers src/server.ts (notre wrapper SSR).
      server: { entry: "server" },
    }),
    viteReact(),
  ];

  // Nitro ne construit un serveur/prérendu que pour "vite build" (pas "vite dev").
  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    // Preset Nitro dédié à GitHub Pages : prérend tout le site en HTML/CSS/JS
    // statique (crawl des liens internes), génère .nojekyll. Aucun serveur
    // Node nécessaire pour héberger le résultat.
    plugins.push(nitro({ preset: "github-pages" }));
  }

  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadEnv(mode, process.cwd(), "VITE_"))) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  return {
    define: envDefine,
    css: { transformer: "lightningcss" as const },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-dom/client", "react/jsx-runtime", "react/jsx-dev-runtime"],
      ignoreOutdatedRequests: true,
    },
    server: { host: "::" as const, port: 8080 },
    plugins,
  };
});
