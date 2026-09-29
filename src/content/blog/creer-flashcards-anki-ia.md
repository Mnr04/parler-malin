---
title: "Créer flashcards Anki IA : Prompts et Méthodologie (2026)"
description: "Méthode pas à pas pour générer et importer tes flashcards Anki avec ChatGPT en 5 minutes. Zéro bug d'accent, zéro décalage de colonne."
pubDate: 2026-09-17
updatedDate: 2026-09-29
author: "Jérémy de Parler Malin"
categories: 
  - "apprendre-langlais"
heroImage: "/uploads/2026/09/creer-flashcards-anki-ia-scaled.avif"
heroImageAlt: "Créer des flashcards Anki avec l'intelligence artificielle et ChatGPT"
---

<!-- Fil d'Ariane SEO -->
<nav class="breadcrumb" aria-label="Fil d'Ariane">
  <a href="/">Accueil</a>
  <span class="sep">/</span>
  <a href="/blog/">Blog</a>
  <span class="sep">/</span>
  <span class="current">Flashcards Anki IA</span>
</nav>

<h1 class="page-title">Créer flashcards Anki IA : Prompts et Méthodologie (2026)</h1>

<!-- Méta-barre E-E-A-T avec date de fraîcheur -->
<div class="article-meta-bar">
  <span>Par <a href="/a-propos/"><strong>Jérémy de Parler Malin</strong></a></span>
  <span class="dot">•</span>
  <span>Mis à jour le <time datetime="2026-09-29">29 septembre 2026</time></span>
  <span class="dot">•</span>
  <span>5 min de lecture</span>
  <span class="dot">•</span>
</div>

<div class="transparency-banner">
<span class="transparency-icon">🛡️</span>
<p><strong>Transparence :</strong> Tests indépendants financés par des liens affiliés, sans aucun surcoût pour toi.<a href="/a-propos/">En savoir plus</a>.</p>
</div>

<!-- Bloc En Bref + Accès direct -->
<div class="geo-box">
  <div class="geo-header">
    <span class="geo-tag">EN BREF</span>
  </div>
  <ul class="geo-list">
    <li><strong>Le piège :</strong> la création manuelle carte par carte décourage la majorité des apprenants après quelques jours.</li>
    <li><strong>La solution IA :</strong> contraindre ChatGPT à formater directement le HTML et les tabulations dans un bloc de code brut.</li>
    <li><strong>Le réglage clé :</strong> un séparateur tabulation et un encodage strict en <strong>UTF-8</strong> pour éviter tout décalage et bugs d'accents.</li>
  </ul>
  <div class="geo-cta-wrap">
    <a href="#prompt-anki" class="btn-atf-action">Aller directement au prompt ↓</a>
  </div>
</div>

<!-- Encart lien méthode -->
<div class="tip-box">
  <strong>💡 Étape 03 de la méthode globale :</strong> Ce tutoriel couvre la manipulation technique. Pour choisir les bons mots et réviser en contexte, lis le guide complet : <a href="/apprendre-vocabulaire-anglais-chatgpt/">Comment apprendre le vocabulaire anglais avec ChatGPT &rarr;</a>
</div>

<!-- Sommaire interactif -->
<details class="toc-card" open>
  <summary class="toc-title">
    <span>Sommaire du guide</span>
    <span class="toc-toggle-icon">▾</span>
  </summary>
  <ol class="toc-list">
    <li><a href="#prompt-anki">Le prompt ChatGPT optimisé pour l'export Anki</a></li>
    <li><a href="#export-anki">Exporter et enregistrer le fichier en UTF-8</a></li>
    <li><a href="#import-anki">Importer dans Anki sans décalage de colonnes</a></li>
    <li><a href="#alternative-srs">L'alternative clé en main sans configuration manuelle</a></li>
    <li><a href="#guide-complet">Aller plus loin : Les autres étapes de la méthode</a></li>
    <li><a href="#faq">Foire aux questions (FAQ)</a></li>
  </ol>
</details>

---

<h2 id="prompt-anki">1. Le prompt ChatGPT optimisé pour l'export Anki</h2>

<p>Pour qu'Anki absorbe ta liste sans corrompre les colonnes, les données doivent être séparées par des <strong>tabulations</strong> et non par des virgules (les phrases d'exemples contenant des virgules, cela créerait des colonnes fantômes involontaires).</p>

<p>Ce prompt intègre directement les balises légères <code>&lt;b&gt;</code> et <code>&lt;br&gt;</code> pour que le mot ressorte en gras et que la phrase d'exemple se place automatiquement sur la ligne du dessous.</p>

<div class="prompt-container">
  <div class="prompt-bar">
    <span class="prompt-title">PROMPT — GÉNÉRATEUR ANKI SANS FRICTION</span>
    <button class="btn-copy" onclick="copyPrompt('prompt-anki-code', this)">Copier le prompt</button>
  </div>
  <pre id="prompt-anki-code"><code class="prompt-code">Agis comme un professeur d'anglais expérimenté. Génère 15 paires de vocabulaire pour Anki.

Thème : [INSÉRER TON THÈME ICI — ex: réunions professionnelles, voyage à l'aéroport, phrasal verbs]

Format OBLIGATOIRE pour chaque ligne :
&lt;b&gt;Mot anglais&lt;/b&gt;&lt;br&gt;Phrase d'exemple courte en contexte	&lt;b&gt;Traduction française du mot&lt;/b&gt;&lt;br&gt;Traduction française de la phrase

Contraintes STRICTES de formatage :
1. Une seule paire par ligne.
2. Sépare la partie anglaise et la partie française par le vrai caractère tabulation (touche Tab / \t).
3. N'écris JAMAIS le texte "[TAB]", "TAB", ni aucun crochet dans ta réponse. Insère uniquement l'espace de tabulation.
4. Utilise la balise HTML &lt;b&gt; pour le terme clé et &lt;br&gt; pour renvoyer la phrase d'exemple à la ligne.
5. N'utilise aucun tableau Markdown, aucune barre "|", aucun tiret décoratif.
6. Aucun texte d'introduction ni de conclusion : sors UNIQUEMENT le résultat dans un bloc de code brut.</code></pre>
</div>

<div class="warning-callout">
  <strong>⚠️ Règle de secours :</strong> Si ChatGPT génère un tableau visuel avec des barres verticales, réponds-lui simplement : <em>« Supprime le tableau Markdown, donne-moi uniquement le texte brut avec séparateur tabulation dans un bloc de code. »</em>
</div>

---

<h2 id="export-anki">2. Exporter et enregistrer le fichier en UTF-8</h2>

<p>Ne fais pas de sélection manuelle à la souris sur l'écran pour éviter d'écraser les tabulations invisibles.</p>

<ol class="steps-flow">
  <li>Clique sur l'icône <strong>« Copier le code »</strong> en haut à droite du bloc généré par ChatGPT.</li>
  <li>Ouvre un éditeur de texte basique : <strong>Bloc-notes</strong> (Windows) ou <strong>TextEdit</strong> (sur Mac, veille à être en mode <em>Texte brut</em> via le raccourci <code>Cmd + Maj + T</code> ou <code>Format > Convertir au format Texte</code>).</li>
  <li>Colle le contenu dans le fichier vierge.</li>
  <li>Va dans <strong>Fichier > Enregistrer sous…</strong> et choisis un nom explicite (ex. <code>vocabulaire-anglais.txt</code>).</li>
</ol>

<div class="action-callout">
  <strong>🛑 Point de blocage critique (Encodage UTF-8) :</strong><br>
  Dans la fenêtre d'enregistrement, vérifie impérativement le menu déroulant <strong>« Encodage »</strong> (Plain Text Encoding). Sélectionne <strong>Unicode (UTF-8)</strong>. Si tu laisses l'encodage par défaut de Windows (ANSI), tous les accents français (<code>é</code>, <code>è</code>, <code>à</code>, <code>ç</code>) deviendront illisibles une fois importés dans Anki.
</div>

<figure class="article-figure">
  <img src="/uploads/2026/09/sauvegarde-fichier-texte-utf8-anki.avif" alt="Fenêtre d'enregistrement du fichier texte avec sélection de l'encodage UTF-8 sur Mac" loading="lazy" width="600" height="540">
  <figcaption>Sélectionne impérativement l'encodage Unicode (UTF-8) avant d'enregistrer <em>(capture réalisée sous macOS — manipulation équivalente sur le Bloc-notes Windows)</em>.</figcaption>
</figure>

---

<h2 id="import-anki">3. Importer dans Anki sans décalage de colonnes</h2>

<p>Si ce n'est pas encore fait, commence par <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener noreferrer">télécharger gratuitement Anki sur le site officiel</a> (disponible sur Windows, Mac et Linux). L'importation prend ensuite moins d'une minute :</p>

<ol class="steps-flow">
  <li>Lance <strong>Anki</strong> sur ton ordinateur.</li>
  <li>Sélectionne le paquet de destination et clique sur <strong>Fichier > Importer</strong>.</li>
  <li>Sélectionne ton fichier <code>.txt</code>.</li>
  <li><strong>Vérifie le séparateur :</strong> Anki doit afficher <em>Séparateur de champ : Tabulation</em>.</li>
  <li><strong>Active le rendu visuel :</strong> veille à cocher ou activer l'interrupteur <strong>« Tolérer du HTML dans les champs »</strong> pour que le gras et les sauts de ligne soient pris en compte.</li>
  <li><strong>Vérifie l'assignation des colonnes :</strong> la colonne 1 alimente le champ <strong>Recto</strong> et la colonne 2 le champ <strong>Verso</strong>.</li>
  <li>Clique sur <strong>Importer</strong>.</li>
</ol>

<figure class="article-figure">
  <img src="/uploads/2026/09/importer-fichier-tabulation-anki.avif" alt="Fenêtre d'importation Anki avec séparateur tabulation et option HTML cochée sur Mac" loading="lazy" width="600" height="610">
  <figcaption>Vérifie que la séparation en 2 colonnes est nette et que l'option HTML est activée <em>(interface Anki macOS)</em>.</figcaption>
</figure>

<p>Quand tu lances ta session de révision, ta carte est parfaitement calibrée : le terme clé se détache en gras, la phrase de contexte se lit dessous sans forcer, et la traduction exacte apparaît au dos après avoir cliqué sur <em>Afficher la réponse</em> :</p>

<figure class="article-figure">
  <img src="/uploads/2026/09/rendu-carte-flashcard-anki-ia.avif" alt="Rendu final d'une carte flashcard Anki avec mot en gras et phrase d'exemple sur Mac" loading="lazy" width="600" height="660">
  <figcaption>Rendu final obtenu : une mise en page aérée et prête pour la répétition espacée <em>(interface Anki macOS)</em>.</figcaption>
</figure>

---

<h2 id="alternative-srs">4. L'alternative clé en main sans configuration manuelle</h2>

<p>Le système de répétition espacée d'Anki est irréprochable, mais sa gestion manuelle de fichiers texte et son interface austère créent une friction dont beaucoup d'apprenants se lassent vite.</p>

<div class="tool-callout-card">
  <div class="tool-callout-content">
    <div class="tool-tag-row">
      <span class="tool-pill">ALTERNATIVE RECOMMANDÉE</span>
      <span class="tool-feature">Zéro configuration technique</span>
    </div>
    <h4>MosaLingua : Le SRS sans manipulation de fichiers</h4>
    <p>Si manipuler des exports, régler l'UTF-8 et paramétrer des colonnes te fait perdre du temps, MosaLingua applique le même algorithme de mémorisation avec des milliers de cartes audio intégrées, prêtes sur smartphone et ordinateur.</p>
  </div>
  <div class="tool-callout-action">
    <a href="https://parlermalin.fr/mosalingua" target="_blank" rel="sponsored noopener noreferrer" class="btn-tool-cta">
      <span>Tester MosaLingua gratuitement</span>
      <span class="btn-arrow">&rarr;</span>
    </a>
    <span class="tool-reassurance">Essai libre sans engagement</span>
  </div>
</div>

---

<h2 id="guide-complet">5. Aller plus loin : Les autres étapes de la méthode</h2>

<p>Créer des cartes n'est qu'un rouage de ton apprentissage. Retrouve les autres piliers de la méthode Parler Malin :</p>

<div class="roadmap-grid">
  <a href="/test-niveau-anglais-chatgpt/" class="roadmap-item">
    <span class="roadmap-step">ÉTAPE 01</span>
    <h4>Évaluer son niveau</h4>
    <p>Détecter ses lacunes réelles avec l'IA.</p>
  </a>
  <a href="/routine-anglais-chatgpt/" class="roadmap-item">
    <span class="roadmap-step">ÉTAPE 02</span>
    <h4>Construire sa routine</h4>
    <p>Tenir 15 minutes par jour.</p>
  </a>
  <a href="/apprendre-vocabulaire-anglais-chatgpt/" class="roadmap-item">
    <span class="roadmap-step">ÉTAPE 03</span>
    <h4>Vocabulaire & Grammaire</h4>
    <p>Mémoriser en contexte réel.</p>
  </a>
  <a href="/ia-prononciation-anglais/" class="roadmap-item">
    <span class="roadmap-step">ÉTAPE 04</span>
    <h4>Prononciation</h4>
    <p>Travailler sa mémoire vocale.</p>
  </a>
  <a href="/reussir-conversation-en-anglais-avec-ia/" class="roadmap-item">
    <span class="roadmap-step">ÉTAPE 05</span>
    <h4>Conversation</h4>
    <p>Échanger sans peur du blanc.</p>
  </a>
  <a href="/pratiquer-anglais-natifs/" class="roadmap-item">
    <span class="roadmap-step">ÉTAPE 06</span>
    <h4>Crash-test natifs</h4>
    <p>Valider ses automatismes.</p>
  </a>
  <a href="/comment-ne-pas-perdre-son-anglais-habitudes/" class="roadmap-item">
    <span class="roadmap-step">ÉTAPE 07</span>
    <h4>Consolidation</h4>
    <p>Conserver ses acquis sans effort.</p>
  </a>
</div>

---

<h2 id="faq">6. Foire aux questions (FAQ)</h2>

<details class="faq-card">
  <summary class="faq-title">Comment importer une liste de vocabulaire dans Anki avec l'IA ?</summary>
  <div class="faq-body">
    <p>Demande à ChatGPT d'extraire tes mots avec un séparateur tabulation à l'intérieur d'un bloc de code. Colle le résultat dans un fichier texte enregistré au format <strong>UTF-8</strong>, puis ouvre Anki et fais <strong>Fichier > Importer</strong> en assignant la colonne 1 au Recto et la colonne 2 au Verso.</p>
  </div>
</details>

<details class="faq-card">
  <summary class="faq-title">Pourquoi mes accents s'affichent-ils mal sur mes cartes Anki ?</summary>
  <div class="faq-body">
    <p>Ce problème vient du format ANSI utilisé par défaut par Windows. Ouvre ton fichier dans le Bloc-notes, clique sur <em>Enregistrer sous</em> et sélectionne obligatoirement <strong>UTF-8</strong> dans le menu déroulant en bas.</p>
  </div>
</details>

<details class="faq-card">
  <summary class="faq-title">Quel est le meilleur séparateur pour un deck Anki ?</summary>
  <div class="faq-body">
    <p>La <strong>tabulation</strong>. Contrairement à la virgule ou au point-virgule (format CSV standard), la tabulation n'apparaît quasiment jamais au milieu d'une phrase d'exemple en anglais ou en français, ce qui prévient tout éclatement de colonne.</p>
  </div>
</details>

<details class="faq-card">
  <summary class="faq-title">Anki est-il totalement gratuit ?</summary>
  <div class="faq-body">
    <p>Oui sur Windows, Mac, Linux, le Web (AnkiWeb) et Android (AnkiDroid). Tu peux le télécharger directement sur <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener noreferrer">le site officiel apps.ankiweb.net</a>. Seule l'application iOS (iPhone/iPad) est payante afin de financer le développement continu de ce projet open source.</p>
  </div>
</details>

<div class="disclaimer-callout">
  <span class="disclaimer-badge">Règle d'or de mémorisation</span>
  <p>Accumuler des cartes sans les prononcer ne développe pas tes réflexes à l'oral. Lis systématiquement chaque carte à voix haute lors de tes révisions pour engager ta mémoire motrice.</p>
</div>

<!-- Rebond vers le pilier de la méthode -->
<div class="next-step-card">
  <span class="next-label">RETOUR AU GUIDE MÉTHODE</span>
  <h3>Apprendre le vocabulaire et la grammaire avec ChatGPT</h3>
  <p>Retrouve tous les prompts pour pratiquer en contexte et lancer des sessions de révision interactive avec l'IA.</p>
  <a href="/apprendre-vocabulaire-anglais-chatgpt/" class="btn-next">Lire le guide complet de l'Étape 03 &rarr;</a>
</div>

<!-- Toast dynamique -->
<div id="copy-toast" class="copy-toast" aria-live="polite">Prompt copié dans le presse-papier !</div>

<script is:inline>
function copyPrompt(id, btn) {
  const codeBlock = document.getElementById(id);
  if (!codeBlock) return;
  const text = codeBlock.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.innerText;
    btn.innerText = "Copié !";
    btn.classList.add("copied");

    const toast = document.getElementById("copy-toast");
    if (toast) {
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    }

    setTimeout(() => {
      btn.innerText = originalText;
      btn.classList.remove("copied");
    }, 2000);
  }).catch(err => {
    console.error("Erreur de copie :", err);
  });
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Créer flashcards Anki IA : Prompts et Méthodologie (2026)",
      "description": "Méthode pas à pas pour générer et importer tes flashcards Anki avec ChatGPT en 5 minutes. Zéro bug d'accent, zéro décalage de colonne.",
      "author": {
        "@type": "Person",
        "name": "Jérémy de Parler Malin",
        "url": "https://parlermalin.fr/a-propos/"
      },
      "datePublished": "2026-09-17",
      "dateModified": "2026-09-29",
      "image": "https://parlermalin.fr/uploads/2026/09/creer-flashcards-anki-ia-scaled.avif",
      "inLanguage": "fr-FR",
      "mainEntityOfPage": "https://parlermalin.fr/creer-flashcards-anki-ia/"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment importer une liste de vocabulaire dans Anki avec l'IA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Demande à ChatGPT d'extraire tes mots avec un séparateur tabulation à l'intérieur d'un bloc de code. Colle le résultat dans un fichier texte enregistré au format UTF-8, puis ouvre Anki et fais Fichier > Importer en assignant la colonne 1 au Recto et la colonne 2 au Verso."
          }
        },
        {
          "@type": "Question",
          "name": "Pourquoi mes accents s'affichent-ils mal sur mes cartes Anki ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ce problème vient du format ANSI utilisé par défaut par Windows. Ouvre ton fichier dans le Bloc-notes, clique sur Enregistrer sous et sélectionne obligatoirement UTF-8 dans le menu déroulant en bas."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le meilleur séparateur pour un deck Anki ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La tabulation. Contrairement à la virgule ou au point-virgule (format CSV standard), la tabulation n'apparaît quasiment jamais au milieu d'une phrase d'exemple en anglais ou en français, ce qui prévient tout éclatement de colonne."
          }
        },
        {
          "@type": "Question",
          "name": "Anki est-il totalement gratuit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui sur Windows, Mac, Linux, le Web (AnkiWeb) et Android (AnkiDroid). Tu peux le télécharger directement sur le site officiel apps.ankiweb.net. Seule l'application iOS (iPhone/iPad) est payante afin de financer le développement continu de ce projet open source."
          }
        }
      ]
    }
  ]
}
</script>

<style>
  /* Fil d'Ariane & Titre */
  .breadcrumb {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.78rem;
    color: #64748b;
    margin-bottom: 0.85rem;
  }
  .breadcrumb a {
    color: #475569;
    text-decoration: none;
  }
  .breadcrumb a:hover {
    color: #1a56db;
  }
  .breadcrumb .sep {
    margin: 0 0.35rem;
    color: #cbd5e1;
  }
  .breadcrumb .current {
    color: #0f172a;
    font-weight: 600;
  }
  .page-title {
    font-size: clamp(1.85rem, 3.5vw, 2.35rem);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.03em;
    color: #0f172a;
    margin: 0.5rem 0 0.85rem 0;
  }
  .article-meta-bar {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.82rem;
    color: #64748b;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
  }
  .article-meta-bar a {
    color: #0f172a;
    text-decoration: none;
  }
  .article-meta-bar .dot {
    color: #cbd5e1;
  }
  .meta-transparency {
    font-size: 0.78rem;
    color: #475569;
  }
  .meta-transparency a {
    text-decoration: underline;
  }

  /* Bloc GEO En Bref */
  .geo-box {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.25rem 1.4rem;
    margin-bottom: 1.25rem;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);
  }
  .geo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.85rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f1f5f9;
    font-family: ui-monospace, monospace;
    font-size: 0.74rem;
  }
  .geo-tag {
    font-weight: 700;
    color: #1a56db;
    letter-spacing: 0.04em;
  }
  .geo-meta {
    color: #64748b;
    font-weight: 500;
  }
  .geo-list {
    margin: 0 0 1rem 0;
    padding-left: 1.2rem;
    color: #334155;
    font-size: 0.92rem;
    line-height: 1.6;
  }
  .geo-list li {
    margin-bottom: 0.45rem;
  }
  .geo-list li:last-child {
    margin-bottom: 0;
  }
  .geo-cta-wrap {
    padding-top: 0.75rem;
    border-top: 1px solid #f1f5f9;
  }
  .btn-atf-action {
    display: inline-flex;
    align-items: center;
    background: #1a56db !important;
    color: #ffffff !important;
    font-weight: 600;
    font-size: 0.84rem;
    padding: 0.55rem 1rem;
    border-radius: 6px;
    text-decoration: none !important;
    transition: background-color 0.15s ease;
  }
  .btn-atf-action:hover {
    background: #1e429f !important;
  }

  /* Sommaire */
  .toc-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 2rem;
    overflow: hidden;
  }
  .toc-title {
    padding: 0.75rem 1rem;
    font-family: ui-monospace, SFMono-Regular, monospace;
    font-size: 0.78rem;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: 0.04em;
    cursor: pointer;
    user-select: none;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toc-title::-webkit-details-marker {
    display: none;
  }
  .toc-toggle-icon {
    font-size: 0.9rem;
    color: #64748b;
    transition: transform 0.2s ease;
  }
  .toc-card[open] .toc-toggle-icon {
    transform: rotate(180deg);
    color: #1a56db;
  }
  .toc-list {
    margin: 0;
    padding: 0.6rem 1rem 0.9rem 2.2rem;
    border-top: 1px solid #e2e8f0;
    font-size: 0.88rem;
    color: #475569;
    line-height: 1.6;
  }
  .toc-list li {
    margin-bottom: 0.35rem;
  }
  .toc-list a {
    color: #1e293b;
    text-decoration: none;
  }
  .toc-list a:hover {
    color: #1a56db;
    text-decoration: underline;
  }

  /* Listes étapes */
  .steps-flow {
    padding-left: 1.3rem;
    color: #334155;
    line-height: 1.65;
    font-size: 0.95rem;
  }
  .steps-flow li {
    margin-bottom: 0.5rem;
  }

  /* Boîte de Prompt */
  .prompt-container {
    background: #0d1117 !important;
    border: 1px solid #30363d !important;
    border-radius: 8px;
    margin: 1.25rem 0 1.5rem;
    overflow: hidden;
  }
  .prompt-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #161b22;
    padding: 0.6rem 0.95rem;
    border-bottom: 1px solid #30363d;
  }
  .prompt-title {
    font-family: ui-monospace, monospace;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #8b949e;
  }
  .btn-copy {
    background: #21262d;
    border: 1px solid #363b42;
    border-radius: 6px;
    padding: 0.35rem 0.75rem;
    font-size: 0.74rem;
    font-weight: 600;
    color: #e6edf3;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .btn-copy:hover {
    background: #30363d;
    border-color: #8b949e;
  }
  .btn-copy.copied {
    background: #238636;
    border-color: #2ea043;
    color: #ffffff;
  }
  .prompt-container pre {
    margin: 0 !important;
    padding: 1.15rem !important;
    background: transparent !important;
  }
 .prompt-container pre,
  .prompt-container pre *,
  .prompt-container code,
  .prompt-container code *,
  .prompt-container .prompt-code,
  .prompt-container .prompt-code * {
    color: #f0f6fc !important;
    opacity: 1 !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace !important;
    font-size: 0.88rem !important;
    line-height: 1.6 !important;
    white-space: pre-wrap !important;
    word-break: break-word !important;
  }

  /* Alertes et encarts */
  .tip-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 3px solid #1a56db;
    border-radius: 6px;
    padding: 0.85rem 1.15rem;
    font-size: 0.88rem;
    color: #475569;
    margin: 1.25rem 0;
  }
  .tip-box a {
    color: #1a56db;
    text-decoration: underline;
    font-weight: 600;
  }
  .warning-callout {
    background: #fffbeb;
    border: 1px solid #fef3c7;
    border-left: 3px solid #f59e0b;
    border-radius: 6px;
    padding: 0.85rem 1.15rem;
    font-size: 0.88rem;
    color: #92400e;
    margin: 1.25rem 0;
  }
  .action-callout {
    background: #fef2f2;
    border: 1px solid #fee2e2;
    border-left: 3px solid #ef4444;
    border-radius: 6px;
    padding: 0.85rem 1.15rem;
    font-size: 0.88rem;
    color: #991b1b;
    margin: 1.25rem 0;
    line-height: 1.5;
  }

  /* Captures d'écran */
  .article-figure {
    margin: 1.6rem 0;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(15, 23, 42, 0.04);
  }
  .article-figure img {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: block;
    height: auto;
  }
  .article-figure figcaption {
    padding: 0.65rem 1rem;
    font-size: 0.8rem;
    color: #64748b;
    background: #f8fafc;
    border-top: 1px solid #f1f5f9;
    text-align: center;
    line-height: 1.4;
  }

  /* Encart Outil CRO */
  .tool-callout-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.35rem 1.4rem;
    margin: 1.5rem 0;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.03);
  }
  .tool-tag-row {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 0.4rem;
    flex-wrap: wrap;
  }
  .tool-pill {
    font-family: ui-monospace, monospace;
    font-size: 0.68rem;
    font-weight: 700;
    color: #1a56db;
    background: #ebf5ff;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    letter-spacing: 0.04em;
  }
  .tool-feature {
    font-family: ui-monospace, monospace;
    font-size: 0.72rem;
    color: #64748b;
  }
  .tool-callout-content h4 {
    margin: 0 0 0.35rem 0;
    font-size: 1rem;
    font-weight: 700;
    color: #0f172a;
  }
  .tool-callout-content p {
    margin: 0;
    font-size: 0.88rem;
    color: #475569;
    line-height: 1.5;
  }
  .tool-callout-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    flex-shrink: 0;
  }
  /* 1. Bandeau Transparence concis */
    .transparency-banner {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-left: 3px solid #3b82f6;
        border-radius: 6px;
        padding: 0.6rem 0.95rem;
        margin-bottom: 1.5rem;
        font-size: 0.82rem;
        color: #475569;
    }
    .transparency-banner p {
        margin: 0;
        line-height: 1.45;
    }
    .transparency-icon {
        font-size: 1rem;
        line-height: 1;
        flex-shrink: 0;
    }
    .transparency-banner a {
        color: #1a56db;
        text-decoration: underline;
        text-underline-offset: 2px;
    }

  .btn-tool-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    white-space: nowrap;
    background: #1a56db !important;
    color: #ffffff !important;
    font-weight: 600;
    font-size: 0.84rem;
    padding: 0.65rem 1.15rem;
    border-radius: 7px;
    text-decoration: none !important;
    transition: background-color 0.15s ease;
  }
  .btn-tool-cta:hover {
    background: #1e429f !important;
  }
  .tool-reassurance {
    font-size: 0.72rem;
    color: #64748b;
  }

  /* Grille Roadmap */
  .roadmap-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 0.75rem;
    margin: 1.5rem 0;
  }
  .roadmap-item {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 0.85rem 1rem;
    text-decoration: none;
    color: inherit;
    transition: all 0.15s ease;
  }
  .roadmap-item:hover {
    border-color: #94a3b8;
    transform: translateY(-1px);
  }

  .roadmap-step {
    display: block;
    font-family: ui-monospace, monospace;
    font-size: 0.65rem;
    font-weight: 700;
    color: #1a56db;
    margin-bottom: 0.2rem;
  }
  .roadmap-item h4 {
    margin: 0 0 0.2rem 0;
    font-size: 0.88rem;
    font-weight: 700;
    color: #0f172a;
  }
  .roadmap-item p {
    margin: 0;
    font-size: 0.78rem;
    color: #64748b;
    line-height: 1.35;
  }

  /* FAQ Accordéons */
  .faq-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }
  .faq-card[open] {
    border-color: #cbd5e1;
  }
  .faq-title {
    padding: 0.85rem 1.1rem;
    font-weight: 700;
    font-size: 0.92rem;
    color: #0f172a;
    cursor: pointer;
    user-select: none;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .faq-title::-webkit-details-marker {
    display: none;
  }
  .faq-title::after {
    content: "+";
    font-size: 1.15rem;
    color: #64748b;
  }
  .faq-card[open] .faq-title::after {
    content: "−";
    color: #1a56db;
  }
  .faq-body {
    padding: 0 1.1rem 1rem;
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.55;
  }
  .faq-body p {
    margin: 0;
  }

  /* Note finale */
  .disclaimer-callout {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 3px solid #64748b;
    border-radius: 6px;
    padding: 0.85rem 1.1rem;
    margin: 2rem 0 1.5rem 0;
  }
  .disclaimer-badge {
    font-family: ui-monospace, SFMono-Regular, monospace;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #475569;
    letter-spacing: 0.04em;
    display: block;
    margin-bottom: 0.2rem;
  }
  .disclaimer-callout p {
    margin: 0;
    font-size: 0.86rem;
    color: #64748b;
    line-height: 1.5;
  }

  /* Toast de copie */
  .copy-toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: #0f172a;
    color: #ffffff;
    border: 1px solid #334155;
    padding: 0.65rem 1.1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
    z-index: 9999;
  }
  .copy-toast.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  /* Carte Rebond */
  .next-step-card {
    background: #ffffff;
    border: 1px solid #e2e4e9;
    border-radius: 10px;
    padding: 1.35rem;
    margin-top: 2rem;
  }
  .next-label {
    font-family: ui-monospace, monospace;
    font-size: 0.7rem;
    font-weight: 700;
    color: #1a56db;
    letter-spacing: 0.05em;
  }
  .next-step-card h3 {
    margin: 0.35rem 0;
    font-size: 1.15rem;
    color: #0f172a;
  }
  .next-step-card p {
    color: #475569;
    font-size: 0.9rem;
    margin: 0 0 1rem;
  }
  .btn-next {
    display: inline-block;
    background: #1a56db !important;
    color: #ffffff !important;
    font-weight: 600;
    font-size: 0.86rem;
    padding: 0.55rem 1rem;
    border-radius: 6px;
    text-decoration: none !important;
    transition: background-color 0.15s ease;
  }
  .btn-next:hover {
    background: #1e429f !important;
  }

  /* Responsive mobile */
  @media (max-width: 640px) {
    .tool-callout-card {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .tool-callout-action,
    .btn-tool-cta,
    .btn-atf-action {
      width: 100%;
      justify-content: center;
    }
    .roadmap-grid {
      grid-template-columns: 1fr;
    }
    .copy-toast {
      left: 1rem;
      right: 1rem;
      bottom: 1rem;
      text-align: center;
    }
  }
</style>