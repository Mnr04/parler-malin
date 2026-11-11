---
title: "Tutoriel : Créer des flashcards Anki avec l'IA (Novembre 2026)"
description: "Méthode pas à pas pour générer et importer tes flashcards Anki avec ChatGPT en 5 minutes (novembre 2026). Zéro bug d'accent, zéro décalage de colonne."
pubDate: 2026-09-17
updatedDate: 2026-11-11
author: "Jérémy"
categories:
  - "apprendre-langlais"
heroImage: "/uploads/2026/09/creer-flashcards-anki-ia-768x429.avif"
heroImageAlt: "Créer des flashcards Anki avec l'intelligence artificielle et ChatGPT"
---

<nav class="breadcrumb" aria-label="Fil d'Ariane">
  <a href="/">Accueil</a><span class="sep">/</span><a href="/blog/">Blog</a><span class="sep">/</span><span class="current">Flashcards Anki IA</span>
</nav>

<h1 class="page-title">Créer des flashcards Anki avec l'IA : Prompts et Méthode (2026)</h1>

<div class="article-meta-bar">
  <span>Par <a href="/a-propos/"><strong>Jérémy</strong></a></span>
  <span class="dot" aria-hidden="true">•</span>
  <span>Mis à jour le <time datetime="2026-11-11">11 nov. 2026</time></span>
  <span class="dot" aria-hidden="true">•</span>
  <span>⏱️ 5 min</span>
</div>

<p class="transparency-inline">
  🛡️ Cet article contient des liens affiliés (<a href="/a-propos/">en savoir plus</a>).
</p>

<div class="geo-box">
  <div class="geo-header">
    <span class="geo-tag">⚡ EN BREF</span>
  </div>
  <ul class="geo-list">
    <li><strong>Le constat :</strong> la création manuelle carte par carte prend du temps et freine souvent la régularité après quelques jours.</li>
    <li><strong>La solution IA :</strong> demander à ChatGPT de formater directement le HTML et les tabulations dans un bloc de code brut.</li>
    <li><strong>Le réglage clé :</strong> utiliser un séparateur tabulation et un encodage <strong>UTF-8</strong> pour éviter tout décalage et bug d'accents.</li>
  </ul>
  <div class="geo-cta-wrap">
    <a href="#prompt-anki" class="btn-atf-action">
      <span>Aller directement au prompt</span>
      <span aria-hidden="true">&darr;</span>
    </a>
  </div>
</div>

<div class="tip-box">
  <strong>💡 Du vocabulaire à la pratique orale :</strong> Mémoriser des cartes sur Anki est pertinent pour enrichir son lexique, mais cela ne suffit pas pour développer sa fluidité à l'oral. Pour t'entraîner à parler en conditions réelles sans avoir à paramétrer des prompts à chaque session, consulte mon <a href="/meilleures-ia-anglais/">comparatif des tuteurs vocaux IA &rarr;</a>
</div>

<details class="toc-card">
  <summary class="toc-title">
    <span>📋 Sommaire du tutoriel</span>
    <span class="toc-toggle-icon">▾</span>
  </summary>
  <ol class="toc-list">
    <li><a href="#prompt-anki">Le prompt ChatGPT optimisé pour l'export Anki</a></li>
    <li><a href="#export-anki">Exporter et enregistrer le fichier en UTF-8</a></li>
    <li><a href="#import-anki">Importer dans Anki sans décalage de colonnes</a></li>
    <li><a href="#pratique-orale">Passer de la mémorisation à la pratique orale avec les tuteurs IA</a></li>
    <li><a href="#faq">Foire aux questions (FAQ)</a></li>
  </ol>
</details>

<h2 id="prompt-anki">1. Le prompt ChatGPT optimisé pour l'export Anki</h2>

<p>Pour qu'Anki absorbe ta liste sans corrompre les colonnes, les données doivent être séparées par des <strong>tabulations</strong> et non par des virgules (les phrases d'exemples contenant des virgules, cela créerait des colonnes supplémentaires involontaires).</p>

<p>Ce prompt intègre directement les balises <code>&lt;b&gt;</code> et <code>&lt;br&gt;</code> pour que le mot ressorte en gras et que la phrase d'exemple se place automatiquement sur la ligne du dessous.</p>

<div class="prompt-container">
  <div class="prompt-bar">
    <span class="prompt-title">PROMPT — GÉNÉRATEUR ANKI</span>
    <button type="button" class="btn-copy" onclick="copyPrompt('prompt-anki-code', this)">Copier le prompt 📋</button>
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

<h2 id="export-anki">2. Exporter et enregistrer le fichier en UTF-8</h2>

<p>Ne fais pas de sélection manuelle à la souris sur l'écran pour éviter d'écraser les tabulations invisibles.</p>

<ol class="steps-flow">
  <li>Clique sur l'icône <strong>« Copier le code »</strong> en haut à droite du bloc généré par ChatGPT.</li>
  <li>Ouvre un éditeur de texte basique : <strong>Bloc-notes</strong> (Windows) ou <strong>TextEdit</strong> (sur Mac, veille à être en mode <em>Texte brut</em> via le raccourci <code>Cmd + Maj + T</code> ou <code>Format > Convertir au format Texte</code>).</li>
  <li>Colle le contenu dans le fichier vierge.</li>
  <li>Va dans <strong>Fichier > Enregistrer sous…</strong> et choisis un nom explicite (ex. <code>vocabulaire-anglais.txt</code>).</li>
</ol>

<div class="action-callout">
  <strong>🛑 Point de vigilance (Encodage UTF-8) :</strong><br>
  Dans la fenêtre d'enregistrement, vérifie le menu déroulant <strong>« Encodage »</strong> (Plain Text Encoding). Sélectionne <strong>Unicode (UTF-8)</strong>. Si tu laisses l'encodage par défaut de Windows (ANSI), les accents français (<code>é</code>, <code>è</code>, <code>à</code>, <code>ç</code>) risquent de mal s'afficher une fois importés dans Anki.
</div>

<figure class="article-figure">
  <img src="/uploads/2026/09/sauvegarde-fichier-texte-utf8-anki.avif" alt="Fenêtre d'enregistrement du fichier texte avec sélection de l'encodage UTF-8 sur Mac" loading="lazy" width="600" height="540" decoding="async">
  <figcaption>Sélectionne l'encodage Unicode (UTF-8) avant d'enregistrer <em>(capture réalisée sous macOS — manipulation équivalente sur le Bloc-notes Windows)</em>.</figcaption>
</figure>

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
  <img src="/uploads/2026/09/importer-fichier-tabulation-anki.avif" alt="Fenêtre d'importation Anki avec séparateur tabulation et option HTML cochée sur Mac" loading="lazy" width="600" height="610" decoding="async">
  <figcaption>Vérifie que la séparation en 2 colonnes est nette et que l'option HTML est activée <em>(interface Anki macOS)</em>.</figcaption>
</figure>

<p>Quand tu lances ta session de révision, ta carte est prête : le terme clé se détache en gras, la phrase de contexte se lit dessous, et la traduction apparaît au dos après avoir cliqué sur <em>Afficher la réponse</em> :</p>

<figure class="article-figure">
  <img src="/uploads/2026/09/rendu-carte-flashcard-anki-ia.avif" alt="Rendu final d'une carte flashcard Anki avec mot en gras et phrase d'exemple sur Mac" loading="lazy" width="600" height="660" decoding="async">
  <figcaption>Rendu final obtenu : une mise en page lisible et prête pour la répétition espacée <em>(interface Anki macOS)</em>.</figcaption>
</figure>

<h2 id="pratique-orale">4. Passer de la mémorisation à la pratique orale avec les tuteurs IA</h2>

<p>Le couple Anki + ChatGPT est une méthode gratuite et pertinente pour mémoriser du vocabulaire. Toutefois, connaître une liste de mots ne suffit pas pour parler avec fluidité : encore faut-il les mobiliser à voix haute dans une vraie discussion.</p>

<p>Si tu utilises ChatGPT en mode vocal pour t'entraîner à l'oral, le principal bémol reste le temps consacré au paramétrage des prompts à chaque session pour obtenir un cadre et des corrections adaptés. Pour éviter cette friction technique, les <strong>applications de tuteurs vocaux IA</strong> offrent un environnement clé en main dédié à la conversation :</p>

<ul class="steps-flow">
  <li><strong>Pratique immédiate sans configuration :</strong> tu lances l'application et tu échanges directement à l'oral avec un avatar interactif, sans avoir à rédiger de consignes.</li>
  <li><strong>Corrections en temps réel :</strong> l'IA analyse ta prononciation et ta grammaire au fil de la discussion pour t'aider à réutiliser ton vocabulaire naturellement.</li>
  <li><strong>Mises en situation :</strong> tu profites de jeux de rôle structurés (réunion professionnelle, voyage, quotidien) et d'un parcours adapté à ton niveau.</li>
</ul>

<div class="tool-callout-card">
  <div class="tool-callout-content">
    <div class="tool-tag-row">
      <span class="tool-pill">PRATIQUE ORALE CLÉ EN MAIN</span>
      <span class="tool-feature">Zéro paramétrage de prompts</span>
    </div>
    <p class="tool-callout-title">Quel tuteur vocal IA choisir pour pratiquer à l'oral ?</p>
    <p>Compare les applications dédiées à la conversation vocale pour passer de la révision sur cartes à la pratique orale quotidienne et fluide.</p>
  </div>
  <div class="tool-callout-action">
    <a href="/meilleures-ia-anglais/" class="btn-tool-cta">
      <span>Voir le comparatif des tuteurs IA</span>
      <span aria-hidden="true">&rarr;</span>
    </a>
  </div>
</div>

<h2 id="faq">5. Foire aux questions (FAQ)</h2>

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
    <p>La <strong>tabulation</strong>. Contrairement à la virgule ou au point-virgule (format CSV standard), la tabulation n'apparaît quasiment jamais au milieu d'une phrase d'exemple en anglais ou en français, ce qui prévient tout décalage de colonne.</p>
  </div>
</details>

<details class="faq-card">
  <summary class="faq-title">Anki est-il totalement gratuit ?</summary>
  <div class="faq-body">
    <p>Oui sur Windows, Mac, Linux, le Web (AnkiWeb) et Android (AnkiDroid). Tu peux le télécharger directement sur <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener noreferrer">le site officiel apps.ankiweb.net</a>. Seule l'application iOS (iPhone/iPad) est payante afin de financer le développement continu de ce projet open source.</p>
  </div>
</details>

<div class="disclaimer-callout">
  <span class="disclaimer-badge">Conseil pratique</span>
  <p>Réviser des cartes en silence aide à reconnaître les mots à l'écrit, mais ne suffit pas pour les utiliser spontanément. Prononce chaque carte à voix haute lors de tes révisions et complète ton entraînement par de la conversation orale régulière.</p>
</div>

<div class="next-step-card">
  <span class="next-label">COMPARATIF 2026</span>
  <h3>Prêt à utiliser ton vocabulaire dans de vraies conversations ?</h3>
  <p>Découvre notre analyse comparative des tuteurs vocaux IA pour pratiquer l'anglais à voix haute chaque jour, sans stress et sans configuration technique.</p>
  <a href="/meilleures-ia-anglais/" class="btn-next">Comparer les tuteurs vocaux IA &rarr;</a>
</div>

<div id="copy-toast" class="copy-toast" aria-live="polite">✓ Prompt copié dans le presse-papier !</div>

<script is:inline>
function copyPrompt(id, btn) {
  var codeBlock = document.getElementById(id);
  if (!codeBlock) return;
  var text = codeBlock.innerText;
  var triggerSuccess = function () {
    var originalText = btn.innerText;
    btn.innerText = "✓ Copié !";
    btn.classList.add("copied");

    var toast = document.getElementById("copy-toast");
    if (toast) {
      toast.classList.add("show");
      setTimeout(function () {
        toast.classList.remove("show");
      }, 2500);
    }

    setTimeout(function () {
      btn.innerText = originalText;
      btn.classList.remove("copied");
    }, 2000);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(triggerSuccess).catch(function () {});
  } else {
    var r = document.createRange();
    r.selectNodeContents(codeBlock);
    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(r);
    try { document.execCommand("copy"); triggerSuccess(); } catch (e) {}
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://parlermalin.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://parlermalin.fr/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Flashcards Anki IA", "item": "https://parlermalin.fr/creer-flashcards-anki-ia/" }
      ]
    },
    {
      "@type": "Article",
      "headline": "Tutoriel : Créer des flashcards Anki avec l'IA (Novembre 2026)",
      "description": "Méthode pas à pas pour générer et importer tes flashcards Anki avec ChatGPT en 5 minutes (novembre 2026). Zéro bug d'accent, zéro décalage de colonne.",
      "author": {
        "@type": "Person",
        "name": "Jérémy",
        "url": "https://parlermalin.fr/a-propos/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Parler Malin",
        "logo": {
          "@type": "ImageObject",
          "url": "https://parlermalin.fr/logo.png"
        }
      },
      "datePublished": "2026-09-17",
      "dateModified": "2026-11-11",
      "image": "https://parlermalin.fr/uploads/2026/09/creer-flashcards-anki-ia-768x429.avif",
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
            "text": "La tabulation. Contrairement à la virgule ou au point-virgule (format CSV standard), la tabulation n'apparaît quasiment jamais au milieu d'une phrase d'exemple en anglais ou en français, ce qui prévient tout décalage de colonne."
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
.breadcrumb{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.76rem;color:#64748b;margin-bottom:.5rem}
.breadcrumb a{color:#475569;text-decoration:none}.breadcrumb a:hover{color:#1a56db}
.breadcrumb .sep{margin:0 .35rem;color:#cbd5e1}.breadcrumb .current{color:#0f172a;font-weight:600}

.page-title{font-size:clamp(1.65rem,4vw,2.35rem);font-weight:800;line-height:1.18;letter-spacing:-.03em;color:#0f172a;margin:.25rem 0 .6rem}

.article-meta-bar{display:flex;align-items:center;gap:.45rem;font-size:.78rem;color:#64748b;margin-bottom:.45rem;flex-wrap:wrap}
.article-meta-bar a{color:#0f172a;text-decoration:none}.article-meta-bar .dot{color:#cbd5e1}

.transparency-inline{font-size:.74rem;color:#64748b;margin:0 0 1.15rem;line-height:1.4}
.transparency-inline a{color:#1a56db;text-decoration:underline;text-underline-offset:2px}

.geo-box{background:#fff;border:1.5px solid #93c5fd;border-radius:16px;padding:1.35rem;margin-bottom:1.35rem;box-shadow:0 10px 25px -5px rgba(26,86,219,.07)}
.geo-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:.85rem;padding-bottom:.65rem;border-bottom:1px solid #f1f5f9;font-family:ui-monospace,monospace;font-size:.74rem}
.geo-tag{font-weight:800;color:#1a56db;letter-spacing:.04em;background:#eff6ff;padding:.2rem .55rem;border-radius:6px}
.geo-rating-pill{font-weight:700;color:#0f172a;background:#f1f5f9;padding:.2rem .55rem;border-radius:6px;font-size:.73rem}
.geo-list{margin:0 0 1.1rem;padding-left:1.2rem;color:#334155;font-size:.9rem;line-height:1.6}
.geo-list li{margin-bottom:.45rem}
.geo-list li:last-child{margin-bottom:0}
.geo-cta-wrap{display:flex;flex-direction:column}

.btn-atf-action,.btn-tool-cta{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;background:linear-gradient(135deg,#2563eb 0%,#1a56db 100%)!important;color:#fff!important;font-weight:700;border-radius:10px;text-decoration:none!important;box-shadow:0 4px 14px rgba(26,86,219,.28);transition:transform .15s ease,box-shadow .15s ease;box-sizing:border-box}
.btn-atf-action{font-size:.94rem;padding:.85rem 1.25rem;width:100%}
.btn-tool-cta{font-size:.9rem;padding:.8rem 1.3rem;white-space:nowrap}
.btn-atf-action:hover,.btn-tool-cta:hover{background:linear-gradient(135deg,#1d4ed8 0%,#1e429f 100%)!important;transform:translateY(-1px);box-shadow:0 6px 20px rgba(26,86,219,.35)}

.toc-card{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:1.75rem;overflow:hidden}
.toc-title{padding:.9rem 1.1rem;font-family:ui-monospace,SFMono-Regular,monospace;font-size:.8rem;font-weight:700;color:#0f172a;letter-spacing:.02em;cursor:pointer;user-select:none;list-style:none;display:flex;justify-content:space-between;align-items:center}
.toc-title::-webkit-details-marker{display:none}
.toc-toggle-icon{font-size:.95rem;color:#64748b;transition:transform .2s ease}
.toc-card[open] .toc-toggle-icon{transform:rotate(180deg);color:#1a56db}
.toc-list{margin:0;padding:.6rem 1.1rem 1rem 2.2rem;border-top:1px solid #e2e8f0;font-size:.88rem;color:#475569;line-height:1.7}
.toc-list li{margin-bottom:.35rem}
.toc-list a{color:#1e293b;text-decoration:none;font-weight:500}.toc-list a:hover{color:#1a56db;text-decoration:underline}

.steps-flow{padding-left:1.3rem;color:#334155;line-height:1.65;font-size:.95rem}
.steps-flow li{margin-bottom:.5rem}

.prompt-container{background:#0d1117!important;border:1px solid #30363d!important;border-radius:10px;margin:1.25rem 0 1.5rem;overflow:hidden;box-shadow:0 4px 12px rgba(15,23,42,.08)}
.prompt-bar{display:flex;justify-content:space-between;align-items:center;background:#161b22;padding:.65rem 1rem;border-bottom:1px solid #30363d;gap:.5rem;flex-wrap:wrap}
.prompt-title{font-family:ui-monospace,monospace;font-size:.73rem;font-weight:700;letter-spacing:.04em;color:#8b949e}
.btn-copy{background:#21262d;border:1px solid #363b42;border-radius:6px;padding:.4rem .8rem;font-size:.75rem;font-weight:700;color:#e6edf3;cursor:pointer;transition:all .15s ease}
.btn-copy:hover{background:#30363d;border-color:#8b949e}
.btn-copy.copied{background:#059669!important;border-color:#059669!important;color:#fff!important}
.prompt-container pre{margin:0!important;padding:1.15rem!important;background:transparent!important}
.prompt-container pre,.prompt-container pre *,.prompt-container code,.prompt-container code *,.prompt-container .prompt-code,.prompt-container .prompt-code *{color:#f0f6fc!important;opacity:1!important;font-family:ui-monospace,SFMono-Regular,Menlo,monospace!important;font-size:.86rem!important;line-height:1.6!important;white-space:pre-wrap!important;word-break:break-word!important}

.tip-box{background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #1a56db;border-radius:8px;padding:.95rem 1.15rem;font-size:.88rem;color:#475569;margin:1.25rem 0;line-height:1.55}
.tip-box strong{color:#0f172a}
.tip-box a{color:#1a56db;text-decoration:underline;font-weight:600}
.warning-callout{background:#fffbeb;border:1px solid #fef3c7;border-left:3px solid #f59e0b;border-radius:8px;padding:.95rem 1.15rem;font-size:.88rem;color:#92400e;margin:1.25rem 0;line-height:1.55}
.action-callout{background:#fef2f2;border:1px solid #fee2e2;border-left:3px solid #ef4444;border-radius:8px;padding:.95rem 1.15rem;font-size:.88rem;color:#991b1b;margin:1.25rem 0;line-height:1.55}

.article-figure{margin:1.6rem auto;background:#fff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(15,23,42,.06);max-width:100%;box-sizing:border-box}
.article-figure img{width:100%!important;max-width:600px!important;margin:0 auto;display:block;height:auto!important;box-sizing:border-box}
.article-figure figcaption{padding:.65rem 1rem;font-size:.78rem;color:#64748b;background:#f8fafc;border-top:1px solid #f1f5f9;text-align:center;line-height:1.4}

.tool-callout-card{display:flex;align-items:center;justify-content:space-between;gap:1.25rem;background:linear-gradient(to right,#ffffff,#eff6ff);border:1.5px solid #93c5fd;border-radius:14px;padding:1.35rem;margin:1.75rem 0 2rem;box-shadow:0 4px 15px rgba(26,86,219,.06)}
.tool-tag-row{display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;flex-wrap:wrap}
.tool-pill{font-family:ui-monospace,monospace;font-size:.68rem;font-weight:800;color:#1a56db;background:#dbeafe;padding:.2rem .5rem;border-radius:4px;letter-spacing:.04em}
.tool-feature{font-family:ui-monospace,monospace;font-size:.72rem;color:#475569;font-weight:600}
.tool-callout-title{margin:0 0 .35rem;font-size:1.05rem;font-weight:800;color:#0f172a}
.tool-callout-content p{margin:0;font-size:.88rem;color:#475569;line-height:1.5}
.tool-callout-action{display:flex;flex-direction:column;align-items:center;gap:.4rem;flex-shrink:0}

.faq-card{background:#fff;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:.6rem;overflow:hidden}
.faq-card[open]{border-color:#cbd5e1}
.faq-title{padding:.9rem 1.1rem;font-weight:700;font-size:.92rem;color:#0f172a;cursor:pointer;user-select:none;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:.5rem}
.faq-title::-webkit-details-marker{display:none}
.faq-title::after{content:"+";font-size:1.2rem;font-weight:400;color:#64748b;flex-shrink:0}
.faq-card[open] .faq-title::after{content:"−";color:#1a56db}
.faq-body{padding:0 1.1rem 1rem;color:#475569;font-size:.9rem;line-height:1.55}.faq-body p{margin:0}

.disclaimer-callout{background:#fafafc;border:1px solid #e2e8f0;border-left:3px solid #64748b;border-radius:6px;padding:.85rem 1.1rem;margin:2.5rem 0 1.5rem}
.disclaimer-badge{font-family:ui-monospace,SFMono-Regular,monospace;font-size:.68rem;font-weight:700;text-transform:uppercase;color:#475569;letter-spacing:.05em;display:block;margin-bottom:.25rem}
.disclaimer-callout p{margin:0;font-size:.84rem;color:#64748b;line-height:1.5}

.next-step-card{background:#fff;border:1px solid #e2e4e9;border-radius:12px;padding:1.4rem;margin:2rem 0 1rem;text-align:center;box-shadow:0 10px 25px rgba(0,0,0,.03)}
.next-label{font-family:ui-monospace,monospace;font-size:.72rem;font-weight:700;color:#1a56db;letter-spacing:.05em;display:block;margin-bottom:.35rem}
.next-step-card h3{margin:0 0 .55rem;font-size:1.2rem;color:#0f172a}
.next-step-card p{color:#475569;font-size:.9rem;margin:0 auto 1.15rem;max-width:500px;line-height:1.5}
.btn-next,.btn-next:visited{display:inline-flex;align-items:center;justify-content:center;background:#0f172a!important;color:#fff!important;font-weight:600;font-size:.9rem;padding:.75rem 1.35rem;border-radius:8px;text-decoration:none!important;transition:background-color .15s ease;box-sizing:border-box}
.btn-next:hover,.btn-next:focus{background:#1e293b!important;color:#fff!important}

.copy-toast{position:fixed;bottom:2rem;left:50%;transform:translate(-50%,12px);background:#0f172a;color:#fff;border:1px solid #334155;padding:.65rem 1.2rem;border-radius:99px;font-size:.84rem;font-weight:600;box-shadow:0 10px 25px rgba(0,0,0,.25);opacity:0;visibility:hidden;transition:opacity .2s ease,transform .2s ease,visibility .2s;z-index:10000;white-space:nowrap}
.copy-toast.show{opacity:1;visibility:visible;transform:translate(-50%,0)}

@media (max-width:768px){
  .breadcrumb{font-size:.7rem;margin-bottom:.35rem}
  .page-title{font-size:1.5rem;line-height:1.2;margin:.15rem 0 .5rem}
  .article-meta-bar{font-size:.73rem;gap:.35rem;margin-bottom:.35rem}
  .transparency-inline{font-size:.71rem;margin-bottom:1rem}
  .geo-box{padding:1.1rem;margin-bottom:1.15rem;border-radius:14px}
  .geo-header{margin-bottom:.65rem;padding-bottom:.5rem}
  .geo-list{font-size:.86rem;margin-bottom:.9rem}
  .btn-atf-action{font-size:.92rem;padding:.8rem 1rem;min-height:48px}
  .tool-callout-card{flex-direction:column;align-items:stretch;padding:1.1rem;gap:.9rem}
  .tool-callout-action,.btn-tool-cta,.btn-next{width:100%;min-height:48px;justify-content:center}
}
</style>