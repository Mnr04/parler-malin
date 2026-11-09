---
title: "À propos"
description: "Qui suis-je, pourquoi ce site et charte de transparence de Parler Malin."
date: 2026-07-07
---

<div class="about-page">
  <nav class="breadcrumb" aria-label="Fil d'Ariane">
    <a href="/">Accueil</a>
    <span class="sep">/</span>
    <span class="current">À propos</span>
  </nav>

  <header class="about-hero">
    <h1 class="page-title">À propos</h1>
    <p class="hero-intro">Des tests réels et sans détour pour apprendre à parler anglais avec les outils d'aujourd'hui.</p>
  </header>

  <section class="content-block bio-card">
    <div class="bio-avatar">J</div>
    <div class="bio-text">
      <h2>Qui suis-je ?</h2>
      <p>Je m'appelle Jérémy. Je ne suis ni prof d'anglais, ni chercheur en IA. Je suis simplement un utilisateur qui teste les nouveaux outils pour voir ce qui aide à améliorer son anglais.</p>
    </div>
  </section>

  <section class="content-block">
    <h2>Pourquoi ce site ?</h2>
    <p>Entre les promesses magiques et les applications gadgets, il est difficile de savoir ce qui fonctionne vraiment.</p>
    <p>Mon but avec <strong>Parler Malin</strong> est simple : faire le tri. Je teste des prompts, des outils vocaux et des méthodes d'entraînement pour garder uniquement ce qui fait avancer.</p>
  </section>

  <section class="content-block">
    <h2>Transparence</h2>
    <div class="transparency-grid">
      <div class="transparency-item">
        <h3>Avis directs</h3>
        <p>Si un outil est mal fichu, trop cher ou survendu, je le dis. Aucun contenu n'est sponsorisé pour dire du bien d'une application.</p>
      </div>
      <div class="transparency-item">
        <h3>Financement</h3>
        <p>Certains liens sont des liens affiliés. Si tu t'abonnes à un outil via ces liens, je touche une commission sans que cela ne te coûte un centime de plus. C'est ce qui finance mes tests et permet au site de rester 100 % gratuit.</p>
      </div>
    </div>
  </section>

  <section class="content-block contact-card">
    <div class="contact-inner">
      <h2>Contact</h2>
      <p>Une question sur un outil ou une idée de test ? Tu peux m'écrire directement :</p>
      <a href="mailto:contact@parlermalin.fr" class="contact-email">
        <span class="mail-icon">✉</span>
        contact@parlermalin.fr
      </a>
    </div>
  </section>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "name": "À propos de Parler Malin",
      "url": "https://parlermalin.fr/a-propos/",
      "description": "Qui suis-je, pourquoi ce site et charte de transparence de Parler Malin.",
      "inLanguage": "fr-FR",
      "mainEntity": {
        "@type": "Person",
        "name": "Jérémy",
        "email": "contact@parlermalin.fr",
        "url": "https://parlermalin.fr/a-propos/"
      }
    }
  ]
}
</script>

<style>
  .about-page {
    max-width: 680px;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #1e293b;
    line-height: 1.65;
  }

  /* Fil d'Ariane */
  .breadcrumb {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.8rem;
    color: #94a3b8;
    margin-bottom: 2rem;
  }
  .breadcrumb a {
    color: #64748b;
    text-decoration: none;
    transition: color 0.15s ease;
  }
  .breadcrumb a:hover {
    color: #1a56db;
  }
  .breadcrumb .sep {
    margin: 0 0.4rem;
    color: #cbd5e1;
  }
  .breadcrumb .current {
    color: #0f172a;
    font-weight: 500;
  }

  /* Header */
  .about-hero {
    margin-bottom: 2.75rem;
    padding-bottom: 1.75rem;
    border-bottom: 1px solid #f1f5f9;
  }
  .page-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0f172a;
    margin: 0 0 0.5rem 0;
    line-height: 1.2;
  }
  .hero-intro {
    font-size: 1.08rem;
    color: #64748b;
    margin: 0;
  }

  /* Blocs génériques */
  .content-block {
    margin-bottom: 2.75rem;
  }
  .content-block h2 {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.015em;
    color: #0f172a;
    margin: 0 0 0.85rem 0;
  }
  .content-block p {
    font-size: 0.98rem;
    color: #334155;
    margin: 0 0 1rem 0;
  }
  .content-block p:last-child {
    margin-bottom: 0;
  }

  /* Bio card */
  .bio-card {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.35rem;
  }
  .bio-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #0f172a;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .bio-text h2 {
    margin-top: 0.15rem;
  }

  /* Grille Transparence */
  .transparency-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }
  .transparency-item {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 1.2rem;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.03);
  }
  .transparency-item h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.45rem 0;
  }
  .transparency-item p {
    font-size: 0.88rem;
    color: #475569;
    line-height: 1.55;
    margin: 0;
  }

  /* Contact card */
  .contact-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.4rem;
  }
  .contact-email {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.92rem;
    font-weight: 600;
    color: #0f172a;
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    padding: 0.45rem 0.85rem;
    border-radius: 8px;
    text-decoration: none;
    margin-top: 0.75rem;
    transition: all 0.15s ease;
  }
  .contact-email:hover {
    background: #e2e8f0;
    color: #1a56db;
    border-color: #94a3b8;
  }
  .mail-icon {
    font-size: 0.95rem;
  }

  /* Mobile */
  @media (max-width: 600px) {
    .transparency-grid {
      grid-template-columns: 1fr;
    }
    .bio-card {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
</style>