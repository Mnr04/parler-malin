---
title: "Créer flashcards Anki IA : Prompts et Méthodologie (2026)"
description: "Besoin d'optimiser ta mémorisation ? Découvre la méthode pour créer des flashcards Anki avec l'IA en 5 minutes. Importe tes decks sans bug d'accent !"
pubDate: 2026-09-17
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

<!-- Méta-barre E-E-A-T -->
<div class="article-meta-bar">
<span>Par <a href="/a-propos/"><strong>Jérémy de Parler Malin</strong></a></span>
<span class="dot">•</span>
<span><time datetime="2026-09-17">17 septembre 2026</time></span>
<span class="dot">•</span>
<span>Temps de lecture : 5 min</span>
<span class="dot">•</span>
</div>

<!-- 1. Bandeau Transparence concis -->
<div class="transparency-banner">
<span class="transparency-icon">🛡️</span>
<p><strong>Transparence :</strong> Tests indépendants financés par des liens affiliés, sans aucun surcoût pour toi. <a href="/a-propos/">En savoir plus</a>.</p>
</div>

<!-- 2. Bloc En Bref GEO -->
<div class="geo-box">
<div class="geo-header">
<span class="geo-tag">EN BREF</span>
</div>
<ul class="geo-list">
<li><strong>La friction :</strong> Créer des flashcards à la main mot après mot est chronophage et constitue la cause n°1 d'abandon du système SRS.</li>
<li><strong>La solution IA :</strong> Forcer ChatGPT à générer des données tabulaires brutes sans mise en forme parasite, prêtes à l'import immédiat.</li>
<li><strong>Le format clé :</strong> Un fichier texte brut avec séparateur tabulation et encodage UTF-8 obligatoire pour éviter tout décalage de colonne et bugs d'accents.</li>
</ul>
<div class="geo-cta-wrap">
<a href="#prompt-anki" class="btn-atf-action">Copier le prompt d'export Anki ↓</a>
</div>
</div>

<!-- Encart rattachement à la méthode globale -->
<div class="tip-box">
<strong>💡 Au sein de la méthode :</strong> Ce tutoriel détaille la mise en pratique technique de l'Étape 03. Pour comprendre comment choisir les mots essentiels et mémoriser en contexte, consulte le guide complet : <a href="/apprendre-vocabulaire-anglais-chatgpt/">Comment apprendre le vocabulaire anglais avec ChatGPT &rarr;</a>
</div>

<!-- 3. Sommaire interactif rabattable -->
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

Pour qu'Anki puisse ingérer une liste de cartes sans erreur, les données doivent être séparées par des **tabulations** et non par des virgules (les phrases d'exemples contenant souvent des virgules, cela créerait des colonnes fantômes involontaires).

De plus, il faut interdire formellement à ChatGPT de générer un tableau Markdown avec des barres verticales (`|`), sous peine de corrompre l'importation.

<div class="prompt-container">
<div class="prompt-bar">
<span class="prompt-title">PROMPT — GÉNÉRATEUR DE CARTES ANKI BRUTES</span>
<button class="btn-copy" onclick="copyPrompt('prompt-anki-code', this)">Copier le prompt</button>
</div>
<pre id="prompt-anki-code"><code class="prompt-code">Agis comme un professeur d'anglais expérimenté. Génère 15 paires de vocabulaire séparées STRICTEMENT par des tabulations sur le modèle suivant :
Mot anglais + phrase d'exemple courte en contexte [TAB] Traduction française naturelle du mot et de la phrase

Thème : [Insérer ton thème, ex: réunions professionnelles, verbes à particule, voyage à l'aéroport]

Contraintes STRICTES de formatage :
1. Une seule paire par ligne.
2. Utilise UNIQUEMENT le caractère tabulation comme délimiteur entre l'anglais et le français.
3. N'utilise AUCUN tableau Markdown, aucun caractère "|", aucun tiret de séparation décoratif.
4. N'ajoute aucun texte d'introduction, aucune conclusion, aucun commentaire.
5. Encapsule TOUT le résultat dans un seul bloc de code brut copiable en un clic.</code></pre>
</div>

<div class="warning-callout">
<strong>⚠️ Vérification visuelle :</strong> Après génération, si la réponse de ChatGPT contient des lignes avec des tirets `---` ou des barres verticales `|`, dis-lui simplement : <em>« Supprime le tableau Markdown, donne-moi uniquement du texte brut avec tabulations dans un bloc de code. »</em>
</div>

---

<h2 id="export-anki">2. Exporter et enregistrer le fichier en UTF-8</h2>

Une fois le résultat produit par ChatGPT, il ne faut surtout pas faire un simple copier-coller à la souris sur l'écran, ce qui écraserait les tabulations.

1. Clique sur le bouton **« Copier le code »** situé en haut à droite du bloc de code généré par ChatGPT.
2. Ouvre un éditeur de texte basique : **Bloc-notes** sur Windows, ou **TextEdit** sur Mac (en mode *Texte brut* : `Format > Convertir au format Texte`).
3. Colle le contenu dans la fenêtre vide.
4. Va dans **Fichier > Enregistrer sous...** et nomme ton fichier (ex: `vocabulaire-anglais.txt` ou `vocabulaire.csv`).
5. **Action indispensable :** dans le menu déroulant d'encodage en bas de la fenêtre d'enregistrement, sélectionne impérativement **UTF-8**. Si tu laisses l'encodage par défaut (ANSI), tous les accents français (`é`, `è`, `à`, `ç`) apparaîtront sous forme de symboles illisibles dans Anki.

---

<h2 id="import-anki">3. Importer dans Anki sans décalage de colonnes</h2>

C'est l'étape où se produit la majorité des blocages. Pour importer ton fichier proprement :

1. Ouvre le logiciel Anki sur ton ordinateur.
2. Sélectionne le deck (paquet) de destination, puis clique sur **Fichier > Importer**.
3. Sélectionne le fichier texte que tu viens d'enregistrer.
4. **Vérifie le séparateur :** Anki doit afficher *Séparateur : Tabulation*. Si ce n'est pas le cas, clique dessus et choisis Tabulation.
5. **Vérifie l'assignation des champs (Mapping) :**
   * Le **Champ 1** (Anglais + phrase) doit correspondre au champ **Recto** de ta carte.
   * Le **Champ 2** (Traduction française) doit correspondre au champ **Verso** de ta carte.
6. Clique sur **Importer** : tes 15 cartes sont immédiatement créées, prêtes pour tes révisions quotidiennes.

---

<h2 id="alternative-srs">4. L'alternative clé en main sans configuration manuelle</h2>

Le système de répétition espacée d'Anki est redoutable, mais son interface austère et ses manipulations de fichiers texte peuvent vite devenir rébarbatives au quotidien.

Si tu souhaites bénéficier de la puissance du SRS sans passer par des réglages techniques :

<!-- Carte Outil CRO MosaLingua -->
<div class="tool-callout-card">
<div class="tool-callout-content">
<div class="tool-tag-row">
<span class="tool-pill">ALTERNATIVE CLÉ EN MAIN</span>
<span class="tool-feature">Répétition espacée sans configuration</span>
</div>
<h4>MosaLingua : Le SRS sans manipulation de fichiers</h4>
<p>Si exporter des fichiers texte, gérer l'encodage UTF-8 et régler les colonnes sur Anki te semble fastidieux, MosaLingua applique le même algorithme scientifique avec des milliers de flashcards sonorisées prêtes à l'emploi sur ton smartphone.</p>
</div>
<div class="tool-callout-action">
<a href="https://parlermalin.fr/mosalingua" target="_blank" rel="sponsored noopener noreferrer" class="btn-tool-cta">
<span>Tester MosaLingua gratuitement</span>
<span class="btn-arrow">&rarr;</span>
</a>
</div>
</div>

---

<h2 id="guide-complet">5. Aller plus loin : Les autres étapes de la méthode</h2>

La création de flashcards n'est qu'un maillon de ton apprentissage. Pour progresser de façon globale et équilibrée, retrouve les autres étapes du guide :

<div class="roadmap-grid">
<a href="/test-niveau-anglais-chatgpt/" class="roadmap-item">
<span class="roadmap-step">ÉTAPE 01</span>
<h4>Évaluer son niveau initial</h4>
<p>Diagnostiquer ses lacunes réelles avec l'IA.</p>
</a>

<a href="/routine-anglais-chatgpt/" class="roadmap-item">
<span class="roadmap-step">ÉTAPE 02</span>
<h4>Construire sa routine</h4>
<p>Installer 15 minutes d'entraînement par jour.</p>
</a>

<a href="/apprendre-vocabulaire-anglais-chatgpt/" class="roadmap-item">
<span class="roadmap-step">ÉTAPE 03</span>
<h4>Vocabulaire & Grammaire</h4>
<p>Mémoriser en contexte sans par cœur abstrait.</p>
</a>

<a href="/ia-prononciation-anglais/" class="roadmap-item">
<span class="roadmap-step">ÉTAPE 04</span>
<h4>Prononciation & Accent</h4>
<p>Recalibrer sa mémoire musculaire vocale.</p>
</a>

<a href="/reussir-conversation-en-anglais-avec-ia/" class="roadmap-item">
<span class="roadmap-step">ÉTAPE 05</span>
<h4>Conversation & Roleplay</h4>
<p>Simuler des échanges oraux sans la peur du blanc.</p>
</a>

<a href="/pratiquer-anglais-natifs/" class="roadmap-item">
<span class="roadmap-step">ÉTAPE 06</span>
<h4>Le crash-test avec des natifs</h4>
<p>Valider ses automatismes en situation réelle.</p>
</a>

<a href="/comment-ne-pas-perdre-son-anglais-habitudes/" class="roadmap-item">
<span class="roadmap-step">ÉTAPE 07</span>
<h4>Maintenir ses acquis</h4>
<p>Conserver son anglais en pilote automatique.</p>
</a>
</div>

---

<h2 id="faq">Foire aux questions</h2>

<details class="faq-card">
<summary class="faq-title">Comment importer une liste de vocabulaire dans Anki avec l'IA ?</summary>
<div class="faq-body">
<p>Demande à ChatGPT de générer tes paires de mots séparées par une tabulation dans un bloc de code brut. Copie le bloc, colle-le dans un éditeur de texte enregistré au format .txt ou .csv avec l'encodage UTF-8. Ouvre Anki, clique sur Importer, sélectionne ton fichier et vérifie que la colonne 1 alimente le Recto et la colonne 2 le Verso.</p>
</div>
</details>

<details class="faq-card">
<summary class="faq-title">Pourquoi mes accents s'affichent-ils mal sur mes cartes Anki ?</summary>
<div class="faq-body">
<p>Ce problème survient quand le fichier a été enregistré avec l'encodage par défaut de Windows (ANSI). Pour le résoudre, ouvre ton fichier dans le Bloc-notes, fais « Enregistrer sous » et choisis impérativement l'encodage UTF-8 dans le menu déroulant en bas.</p>
</div>
</details>

<details class="faq-card">
<summary class="faq-title">Quel est le meilleur séparateur pour un deck Anki ?</summary>
<div class="faq-body">
<p>La tabulation est le séparateur le plus sûr, car elle n'apparaît quasiment jamais au milieu d'une phrase d'exemple. La virgule (format CSV standard) risque de couper tes phrases en morceaux si tes exemples contiennent déjà des virgules.</p>
</div>
</details>

<details class="faq-card">
<summary class="faq-title">Anki est-il totalement gratuit ?</summary>
<div class="faq-body">
<p>Oui sur ordinateur (Windows, Mac, Linux), sur le web (AnkiWeb) et sur Android (via l'application AnkiDroid). Seule la version iOS (iPhone et iPad) est payante pour financer le développement continu du projet open source.</p>
</div>
</details>

---

<!-- Disclaimer IA avant l'action suivante -->
<div class="disclaimer-callout">
<span class="disclaimer-badge">Avertissement de méthode</span>
<p>Créer des flashcards est un excellent levier pour réviser, mais accumuler des centaines de cartes sans les prononcer à voix haute limite tes réflexes. Pense à toujours lire tes cartes à voix haute pendant tes sessions pour activer la mémoire musculaire.</p>
</div>

<!-- Navigation CRO Rebond Guide -->
<div class="next-step-card">
<span class="next-label">RETOURNER À L'ÉTAPE 03</span>
<h3>Apprendre le vocabulaire et la grammaire avec ChatGPT</h3>
<p>Découvre les prompts pour apprendre des mots en contexte et lancer des quiz interactifs tour par tour avec l'IA.</p>
<a href="/apprendre-vocabulaire-anglais-chatgpt/" class="btn-next">Voir le guide du vocabulaire &rarr;</a>
</div>

<!-- Toast flottant -->
<div id="copy-toast" class="copy-toast" aria-live="polite">Prompt copié dans le presse-papier</div>

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
        console.error("Erreur lors de la copie : ", err);
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
      "description": "Besoin d'optimiser ta mémorisation ? Découvre la méthode pour créer des flashcards Anki avec l'IA en 5 minutes. Importe tes decks sans bug d'accent !",
      "author": {
        "@type": "Person",
        "name": "Jérémy de Parler Malin",
        "url": "https://parlermalin.fr/a-propos/"
      },
      "datePublished": "2026-09-17",
      "dateModified": "2026-09-17",
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
            "text": "Demande à ChatGPT de générer tes données séparées par une tabulation dans un bloc de code brut. Enregistre ce texte en UTF-8 dans un fichier .txt ou .csv, puis importe-le dans Anki en associant les colonnes au Recto et au Verso."
          }
        },
        {
          "@type": "Question",
          "name": "Pourquoi mes accents s'affichent-ils mal sur mes cartes Anki ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ce bug est lié à l'encodage par défaut (ANSI). Pour le corriger, ouvre ton fichier texte, choisis « Enregistrer sous » et force la sélection de l'encodage UTF-8."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le meilleur séparateur pour un deck Anki ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La tabulation est le séparateur le plus fiable, car elle n'apparaît presque jamais dans une phrase d'exemple, évitant ainsi de décaler les colonnes lors de l'import."
          }
        },
        {
          "@type": "Question",
          "name": "Anki est-il totalement gratuit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui sur Windows, Mac, Linux, AnkiWeb et Android. Seule la version iOS (iPhone/iPad) est payante pour financer le développement de la plateforme open source."
          }
        }
      ]
    }
  ]
}
</script>

<style>
    /* Titre & Fil d'Ariane */
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
    .meta-badge {
        background: #f1f5f9;
        color: #475569;
        font-family: ui-monospace, monospace;
        font-size: 0.72rem;
        padding: 0.15rem 0.5rem;
        border-radius: 4px;
        font-weight: 600;
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

    /* 2. Bloc En Bref GEO */
    .geo-box {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.4rem 1.5rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
    }
    .geo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding-bottom: 0.6rem;
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
        font-weight: 600;
    }
    .geo-list {
        margin: 0 0 1.25rem 0;
        padding-left: 1.2rem;
        color: #334155;
        font-size: 0.94rem;
        line-height: 1.6;
    }
    .geo-list li {
        margin-bottom: 0.6rem;
    }
    .geo-list li:last-child {
        margin-bottom: 0;
    }
    .geo-cta-wrap {
        padding-top: 0.85rem;
        border-top: 1px solid #f1f5f9;
    }
    .btn-atf-action {
        display: inline-flex;
        align-items: center;
        background: #1a56db !important;
        color: #ffffff !important;
        font-weight: 600;
        font-size: 0.86rem;
        padding: 0.6rem 1.15rem;
        border-radius: 6px;
        text-decoration: none !important;
        transition: background-color 0.15s ease;
    }
    .btn-atf-action:hover {
        background: #1e429f !important;
    }

    /* 3. Sommaire interactif rabattable */
    .toc-card {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin-bottom: 2.25rem;
        overflow: hidden;
    }
    .toc-title {
        padding: 0.8rem 1.1rem;
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
        font-size: 0.95rem;
        color: #64748b;
        transition: transform 0.2s ease;
    }
    .toc-card[open] .toc-toggle-icon {
        transform: rotate(180deg);
        color: #1a56db;
    }
    .toc-list {
        margin: 0;
        padding: 0.6rem 1.1rem 1rem 2.2rem;
        border-top: 1px solid #e2e8f0;
        font-size: 0.88rem;
        color: #475569;
        line-height: 1.65;
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

    /* Boîtes de Prompts sombres */
    .prompt-container {
        background: #0d1117 !important;
        border: 1px solid #30363d !important;
        border-radius: 8px;
        margin: 1.5rem 0 2rem;
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
        padding: 0.3rem 0.75rem;
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
        overflow-x: auto;
    }
    .prompt-container pre,
    .prompt-container code,
    .prompt-container .prompt-code,
    .prompt-container pre *,
    .prompt-container code * {
        color: #f0f6fc !important;
        opacity: 1 !important;
        font-family: ui-monospace, SFMono-Regular, Menlo, monospace !important;
        font-size: 0.88rem !important;
        line-height: 1.65 !important;
        white-space: pre-wrap !important;
        word-break: break-word !important;
    }

    /* Encarts & Callouts */
    .tip-box {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-left: 3px solid #1a56db;
        border-radius: 8px;
        padding: 1rem 1.25rem;
        font-size: 0.9rem;
        color: #475569;
        margin: 1.5rem 0;
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
        border-radius: 8px;
        padding: 1rem 1.25rem;
        font-size: 0.9rem;
        color: #92400e;
        margin: 1.5rem 0;
    }

    /* Carte Outil CRO MosaLingua */
    .tool-callout-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.35rem 1.4rem;
        margin: 1.75rem 0 2rem 0;
        box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);
    }
    .tool-tag-row {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin-bottom: 0.5rem;
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
        font-size: 0.98rem;
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
        font-weight: 500;
    }

    /* Grille Roadmap */
    .roadmap-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1rem;
        margin: 1.75rem 0 2rem;
    }
    .roadmap-item {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 1.1rem;
        text-decoration: none;
        color: inherit;
        transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .roadmap-item:hover {
        transform: translateY(-2px);
        border-color: #cbd5e1;
        box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
    }
    .roadmap-step {
        display: block;
        font-family: ui-monospace, monospace;
        font-size: 0.68rem;
        font-weight: 700;
        color: #1a56db;
        margin-bottom: 0.35rem;
        letter-spacing: 0.05em;
    }
    .roadmap-item h4 {
        margin: 0 0 0.35rem 0;
        font-size: 0.92rem;
        font-weight: 700;
        color: #0f172a;
    }
    .roadmap-item p {
        margin: 0;
        font-size: 0.8rem;
        color: #64748b;
        line-height: 1.4;
    }

    /* FAQ */
    .faq-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        margin-bottom: 0.65rem;
        overflow: hidden;
        transition: border-color 0.15s ease;
    }
    .faq-card[open] {
        border-color: #cbd5e1;
    }
    .faq-title {
        padding: 0.9rem 1.15rem;
        font-weight: 700;
        font-size: 0.95rem;
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
        font-size: 1.2rem;
        font-weight: 400;
        color: #64748b;
    }
    .faq-card[open] .faq-title::after {
        content: "−";
        color: #1a56db;
    }
    .faq-body {
        padding: 0 1.15rem 1.15rem;
        color: #475569;
        font-size: 0.92rem;
        line-height: 1.6;
    }
    .faq-body p {
        margin: 0;
    }

    /* Disclaimer IA */
    .disclaimer-callout {
        background: #fafafc;
        border: 1px solid #e2e8f0;
        border-left: 3px solid #64748b;
        border-radius: 6px;
        padding: 0.85rem 1.1rem;
        margin: 2.5rem 0 1.5rem 0;
    }
    .disclaimer-badge {
        font-family: ui-monospace, SFMono-Regular, monospace;
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #475569;
        letter-spacing: 0.05em;
        display: block;
        margin-bottom: 0.25rem;
    }
    .disclaimer-callout p {
        margin: 0;
        font-size: 0.86rem;
        color: #64748b;
        line-height: 1.5;
    }

    /* Toast */
    .copy-toast {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: #0f172a;
        color: #ffffff;
        border: 1px solid #334155;
        padding: 0.75rem 1.2rem;
        border-radius: 8px;
        font-size: 0.88rem;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        opacity: 0;
        visibility: hidden;
        transform: translateY(12px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
        z-index: 9999;
    }
    .copy-toast.show {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    /* Rebond Guide */
    .next-step-card {
        background: #ffffff;
        border: 1px solid #e2e4e9;
        border-radius: 10px;
        padding: 1.5rem;
        margin-top: 2rem;
    }
    .next-label {
        font-family: ui-monospace, monospace;
        font-size: 0.72rem;
        font-weight: 700;
        color: #1a56db;
        letter-spacing: 0.05em;
    }
    .next-step-card h3 {
        margin: 0.4rem 0;
        font-size: 1.2rem;
        color: #0f172a;
    }
    .next-step-card p {
        color: #475569;
        font-size: 0.92rem;
        margin: 0 0 1.2rem;
    }
    .btn-next,
    .btn-next:visited {
        display: inline-block;
        background: #1a56db !important;
        color: #ffffff !important;
        font-weight: 600;
        font-size: 0.88rem;
        padding: 0.6rem 1.15rem;
        border-radius: 6px;
        text-decoration: none !important;
        transition: background-color 0.15s ease;
    }
    .btn-next:hover,
    .btn-next:focus {
        background: #1e429f !important;
        color: #ffffff !important;
        text-decoration: none !important;
    }

    @media (max-width: 640px) {
        .tool-callout-card {
            flex-direction: column;
            align-items: flex-start;
        }
        .tool-callout-action {
            width: 100%;
        }
        .btn-tool-cta {
            width: 100%;
            justify-content: center;
        }
        .btn-atf-action {
            width: 100%;
            justify-content: center;
        }
        .roadmap-grid {
            grid-template-columns: 1fr;
        }
    }
</style>