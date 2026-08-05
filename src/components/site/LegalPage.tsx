import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-page max-w-3xl py-16">
        <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground">
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
