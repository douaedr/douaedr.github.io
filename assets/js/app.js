/* Portfolio · Douae Derouich — rendu de la page (pas besoin de modifier ce fichier pour changer le contenu : voir data.js) */
(function () {
  'use strict';
  var D = window.PORTFOLIO;

  /* ------------------------------------------------------------------ */
  /* Textes de l'interface                                               */
  /* ------------------------------------------------------------------ */
  var T = {
    fr: {
      skip: 'Aller au contenu', menu: 'Menu',
      nav: { about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Expérience', education: 'Formation', certifications: 'Certifications', contact: 'Contact' },
      hero: {
        badge: 'Je recherche un stage PFE de 4 à 6 mois à partir de février 2027 · IA / data, backend ou full stack',
        role: 'Ingénieure IA & logiciel', sub: 'EHEIM Oujda · promotion 2027',
        lede: "Élève ingénieure en 5e année de génie informatique, option intelligence artificielle. Formée d'abord en biologie en France puis diplômée en littérature anglaise, je conçois des plateformes web complètes et des briques d'IA appliquée : extraction de documents, assistants RAG avec garde-fous, prévision et détection d'anomalies.",
        path: ['Biologie', 'Lettres', 'Informatique'],
        projects: 'Voir mes projets', contact: 'Me contacter', cv: 'CV',
        cardTitle: 'bilan_sanguin.pdf → données', cardCap: 'MedExtract AI · exemple tiré de la documentation du projet',
        cols: ['Analyse', 'Valeur', 'Normes', 'Statut'], test: 'Glycémie',
      },
      about: {
        num: '01', eyebrow: 'À propos', title: 'Biologie, lettres, informatique : un profil qui relie les mondes',
        p: [
          "Je suis en cinquième et dernière année du cycle ingénieur en génie informatique à l'EHEIM Oujda, option intelligence artificielle. Mes stages m'ont fait travailler sur l'extraction de documents médicaux, une plateforme de devis, puis une application de pilotage avec un module d'IA pour un centre de contrôle technique DEKRA.",
          "Avant l'informatique, j'ai passé trois ans en France entre études de génie biologique et laboratoires d'analyses (Cerballiance, XenTech). C'est ce qui m'oriente vers l'IA appliquée à la santé, avec une règle simple : un outil d'aide, jamais un diagnostic.",
          "Ma licence en littérature anglaise m'a appris à écrire, à argumenter et à rendre un sujet clair. Je m'en sers pour documenter mes projets, présenter à des publics non techniques et faire le lien entre équipes.",
        ],
        facts: [
          { icon: 'cap', t: 'EHEIM Oujda', d: 'Génie informatique · option IA · diplôme en juillet 2027' },
          { icon: 'target', t: 'Stage PFE', d: '4 à 6 mois · à partir de février 2027' },
          { icon: 'globe', t: 'Langues', d: 'Français (DELF B2) · anglais courant · arabe' },
        ],
      },
      skills: { num: '02', eyebrow: 'Compétences', title: 'Boîte à outils', sub: 'Technologies utilisées en stage, en projet et en cours.' },
      projects: {
        num: '03', eyebrow: 'Projets', title: 'Ce que j’ai construit',
        sub: "Pour chaque projet d'équipe, ma contribution est indiquée séparément de celle de l'équipe.",
        filters: { all: 'Tous', ai: 'IA & ML', data: 'Data', fullstack: 'Full stack', se: 'Génie logiciel' },
        team: "Projet d'équipe", solo: 'Projet individuel', details: 'Voir les détails', github: 'GitHub', demo: 'Démo', shots: 'captures',
        empty: 'Aucun projet dans cette catégorie pour le moment.',
        nowEyebrow: 'En cours', nowTitle: 'Ce sur quoi je travaille en ce moment', nowBadge: 'En cours', open: 'Ouvrir',
      },
      modal: { overview: 'Présentation', problem: 'Problématique', objectives: 'Objectifs', solution: 'Solution', architecture: 'Architecture technique', tech: 'Technologies', contribution: 'Ma contribution', results: 'Résultats', shots: "Captures d'écran", video: 'Vidéo de démo', repo: 'Voir le code sur GitHub', close: 'Fermer' },
      experience: { num: '04', eyebrow: 'Expérience', title: 'Stages et laboratoires', life: 'Événements et engagements', seeProject: 'Voir le projet', gallery: 'Galerie', prev: 'Photos précédentes', next: 'Photos suivantes' },
      education: { num: '05', eyebrow: 'Formation', title: 'Parcours académique' },
      certs: { num: '06', eyebrow: 'Certifications', title: 'Certifications et attestations', verify: 'Vérifier', view: 'Agrandir' },
      contact: {
        num: '07', eyebrow: 'Contact', title: 'Parlons de votre stage PFE',
        sub: "IA / data, backend ou full stack : au Maroc, en France, en Belgique ou au Luxembourg. Un échange, un conseil ou une mise en relation m'aideraient beaucoup.",
        email: 'Écrire un e-mail', copy: "Copier l'adresse", copied: 'Adresse copiée', location: 'Localisation', mobility: 'Mobilité',
        cv: 'Télécharger mon CV', cvLang: { fr: 'Français', en: 'Anglais' }, qr: 'Scannez pour ouvrir ce portfolio',
      },
      footer: { line: 'Élève ingénieure en génie informatique, option IA', top: 'Retour en haut' },
      lb: { prev: 'Image précédente', next: 'Image suivante', close: 'Fermer' },
    },
    en: {
      skip: 'Skip to content', menu: 'Menu',
      nav: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', education: 'Education', certifications: 'Certificates', contact: 'Contact' },
      hero: {
        badge: 'Looking for a 4–6 month PFE internship from February 2027 · AI / Data, Backend or Full Stack',
        role: 'AI & Software Engineer', sub: 'EHEIM Oujda · class of 2027',
        lede: 'Final-year computer engineering student specialising in artificial intelligence. First trained in biology in France, then graduated in English literature, I build complete web platforms and applied AI components: document extraction, RAG assistants with guardrails, forecasting and anomaly detection.',
        path: ['Biology', 'Literature', 'Computer science'],
        projects: 'View my projects', contact: 'Contact me', cv: 'CV',
        cardTitle: 'blood_test.pdf → data', cardCap: 'MedExtract AI · example from the project documentation',
        cols: ['Test', 'Value', 'Range', 'Status'], test: 'Glucose',
      },
      about: {
        num: '01', eyebrow: 'About', title: 'Biology, literature, computer science: a profile that connects worlds',
        p: [
          'I am in the fifth and final year of the Computer Engineering programme at EHEIM Oujda, AI track. My internships took me from medical document extraction to a quote management platform, then to a management application with an AI module for a DEKRA vehicle inspection centre.',
          'Before computer science, I spent three years in France studying biological engineering and working in medical laboratories (Cerballiance, XenTech). This is what draws me to AI for health, with one simple rule: a support tool, never a diagnosis.',
          'My degree in English literature taught me to write, argue and make a topic clear. I use it to document my projects, present to non-technical audiences and connect teams.',
        ],
        facts: [
          { icon: 'cap', t: 'EHEIM Oujda', d: 'Computer Engineering · AI track · graduating July 2027' },
          { icon: 'target', t: 'PFE internship', d: '4 to 6 months · from February 2027' },
          { icon: 'globe', t: 'Languages', d: 'French (DELF B2) · fluent English · Arabic' },
        ],
      },
      skills: { num: '02', eyebrow: 'Skills', title: 'Toolbox', sub: 'Technologies I have used in internships, projects and coursework.' },
      projects: {
        num: '03', eyebrow: 'Projects', title: 'What I have built',
        sub: 'For each team project, my contribution is shown separately from the team’s.',
        filters: { all: 'All', ai: 'AI & ML', data: 'Data', fullstack: 'Full stack', se: 'Software engineering' },
        team: 'Team project', solo: 'Individual project', details: 'View details', github: 'GitHub', demo: 'Live demo', shots: 'screenshots',
        empty: 'No project in this category yet.',
        nowEyebrow: 'In progress', nowTitle: 'What I am working on now', nowBadge: 'In progress', open: 'Open',
      },
      modal: { overview: 'Overview', problem: 'Problem', objectives: 'Objectives', solution: 'Solution', architecture: 'Technical architecture', tech: 'Technologies', contribution: 'My contribution', results: 'Results', shots: 'Screenshots', video: 'Demo video', repo: 'View the code on GitHub', close: 'Close' },
      experience: { num: '04', eyebrow: 'Experience', title: 'Internships and laboratories', life: 'Events and involvement', seeProject: 'View the project', gallery: 'Gallery', prev: 'Previous photos', next: 'Next photos' },
      education: { num: '05', eyebrow: 'Education', title: 'Academic background' },
      certs: { num: '06', eyebrow: 'Certificates', title: 'Certifications and certificates', verify: 'Verify', view: 'Enlarge' },
      contact: {
        num: '07', eyebrow: 'Contact', title: "Let's talk about your PFE internship",
        sub: 'AI / Data, Backend or Full Stack: in Morocco, France, Belgium or Luxembourg. A conversation, advice or an introduction would help me a lot.',
        email: 'Send an e-mail', copy: 'Copy address', copied: 'Address copied', location: 'Location', mobility: 'Mobility',
        cv: 'Download my CV', cvLang: { fr: 'French', en: 'English' }, qr: 'Scan to open this portfolio',
      },
      footer: { line: 'Computer engineering student, AI track', top: 'Back to top' },
      lb: { prev: 'Previous image', next: 'Next image', close: 'Close' },
    },
  };

  /* ------------------------------------------------------------------ */
  /* Icônes (SVG, style trait)                                          */
  /* ------------------------------------------------------------------ */
  var P = {
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    images: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>',
    brain: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/>',
    server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
    flask: '<path d="M9 3h6M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9.5V3"/><path d="M7 15h10"/>',
    cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    up: '<path d="m18 15-6-6-6 6"/>',
  };
  function ic(name, size) {
    var s = size || 18;
    return '<svg class="ic" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || '') + '</svg>';
  }

  /* ------------------------------------------------------------------ */
  /* Langue                                                             */
  /* ------------------------------------------------------------------ */
  var lang = 'fr';
  try {
    var saved = localStorage.getItem('dd-lang');
    if (saved === 'fr' || saved === 'en') lang = saved;
    else if ((navigator.language || '').toLowerCase().indexOf('en') === 0) lang = 'en';
  } catch (e) { /* stockage indisponible : on garde le français */ }

  function t() { return T[lang]; }
  function pick(v) { if (v == null) return ''; return typeof v === 'object' && !Array.isArray(v) ? (v[lang] != null ? v[lang] : v.fr) : v; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function ext(url) { return ' href="' + esc(url) + '" target="_blank" rel="noopener"'; }

  function head(o) {
    return '<div class="sec-head reveal"><div><p class="eyebrow"><span>' + o.num + '</span> · ' + esc(o.eyebrow) + '</p><h2>' + esc(o.title) + '</h2></div>' + (o.sub ? '<p class="muted sec-sub">' + esc(o.sub) + '</p>' : '') + '</div>';
  }

  /* ------------------------------------------------------------------ */
  /* Sections                                                           */
  /* ------------------------------------------------------------------ */
  var NAV = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];

  function renderNav() {
    $('#nav-links').innerHTML = NAV.map(function (id) { return '<a href="#' + id + '" data-sec="' + id + '">' + esc(t().nav[id]) + '</a>'; }).join('');
    $$('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    $$('[data-i18n]').forEach(function (el) { el.textContent = t()[el.dataset.i18n]; });
  }

  function cvButtons(cls) {
    var langs = [lang, lang === 'fr' ? 'en' : 'fr'].filter(function (l) { return D.cv && D.cv[l]; });
    if (!langs.length) return '';
    return '<div class="cv-group ' + (cls || '') + '" role="group" aria-label="' + esc(t().contact.cv) + '"><span>' + ic('download', 17) + esc(t().hero.cv) + '</span>' +
      langs.map(function (l) { return '<a href="' + esc(D.cv[l]) + '" download>' + l.toUpperCase() + '</a>'; }).join('') + '</div>';
  }

  function renderHero() {
    var h = t().hero, pr = D.profile;
    $('#home').innerHTML =
      '<div class="wrap hero-grid">' +
        '<div class="hero-text hero-in">' +
          '<span class="badge"><span class="dot"></span>' + esc(h.badge) + '</span>' +
          '<h1>' + esc(pr.name) + '</h1>' +
          '<p class="role">' + esc(h.role) + '</p>' +
          '<p class="sub mono">' + esc(h.sub) + '</p>' +
          '<p class="lede">' + esc(h.lede) + '</p>' +
          '<ul class="path">' + h.path.map(function (p, i) { return '<li class="p' + i + '">' + esc(p) + '</li>'; }).join('') + '</ul>' +
          '<div class="actions no-print">' +
            '<a class="btn" href="#projects">' + esc(h.projects) + ic('arrow', 17) + '</a>' +
            cvButtons() +
            '<a class="btn btn-ghost" href="#contact">' + esc(h.contact) + '</a>' +
          '</div>' +
          '<div class="socials no-print">' +
            '<a class="icon-btn"' + ext(pr.github) + ' aria-label="GitHub">' + ic('github', 19) + '</a>' +
            '<a class="icon-btn"' + ext(pr.linkedin) + ' aria-label="LinkedIn">' + ic('linkedin', 19) + '</a>' +
            '<a class="icon-btn" href="mailto:' + esc(pr.email) + '" aria-label="E-mail">' + ic('mail', 19) + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-card hero-in">' +
          '<div class="photo"><img src="' + esc(pr.photo) + '" alt="' + esc(pr.name) + '" width="640" height="800"><span class="loc">' + ic('pin', 14) + esc(pick(pr.location)) + '</span></div>' +
        '</div>' +
      '</div>';
  }

  function renderAbout() {
    var a = t().about;
    $('#about').innerHTML = '<div class="wrap">' + head(a) +
      '<div class="about-grid">' +
        '<div class="about-text reveal">' + a.p.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>' +
        '<div class="facts">' + a.facts.map(function (f) { return '<div class="fact reveal"><span class="fact-ic">' + ic(f.icon, 20) + '</span><div><h3>' + esc(f.t) + '</h3><p>' + esc(f.d) + '</p></div></div>'; }).join('') + '</div>' +
      '</div></div>';
  }

  function renderSkills() {
    var s = t().skills;
    $('#skills').innerHTML = '<div class="wrap">' + head(s) + '<div class="skills-grid">' +
      D.skills.map(function (g) {
        return '<article class="skill card reveal"><div class="skill-head"><span class="fact-ic">' + ic(g.icon, 20) + '</span><h3>' + esc(pick(g.title)) + '</h3></div>' +
          '<ul class="chips">' + g.items.map(function (x) { return '<li class="chip">' + esc(x) + '</li>'; }).join('') + '</ul></article>';
      }).join('') + '</div></div>';
  }

  var filter = 'all';
  function cover(p) {
    var cat = esc(t().projects.filters[p.cats[0]]);
    if (p.shots && p.shots.length && p.cover !== false) {
      return '<div class="cover"><img src="' + esc(p.shots[0].src) + '" alt="' + esc(pick(p.title)) + '"><span class="cover-tag mono">' + cat + '</span></div>';
    }
    return '<div class="cover cover-plain"><span class="cover-tag mono">' + cat + '</span><div class="cover-title">' + esc(pick(p.title)) + '<small class="mono">' + esc(p.code || '') + '</small></div></div>';
  }
  function projectCard(p) {
    var pt = t().projects;
    var n = (p.shots || []).length;
    return '<article class="project card reveal in">' + cover(p) +
      '<div class="project-body">' +
        '<p class="ctx mono">' + esc(pick(p.context)) + ' · ' + ic(p.team ? 'users' : 'user', 13) + ' ' + esc(p.team ? pt.team : pt.solo) + '</p>' +
        '<h3>' + esc(pick(p.title)) + '</h3>' +
        '<p class="muted">' + esc(pick(p.short)) + '</p>' +
        '<ul class="chips small">' + p.tech.map(function (x) { return '<li class="chip">' + esc(x) + '</li>'; }).join('') + '</ul>' +
        (n > 1 ? '<p class="count mono">' + ic('images', 14) + n + ' ' + esc(pt.shots) + '</p>' : '') +
        '<div class="project-actions no-print">' +
          (p.details ? '<button type="button" class="btn btn-sm" data-open="' + esc(p.id) + '">' + esc(pt.details) + '</button>' : '') +
          (p.repo ? '<a class="btn btn-sm btn-ghost"' + ext(p.repo) + '>' + ic('github', 16) + esc(pt.github) + '</a>' : '') +
          (p.demo ? '<a class="btn btn-sm btn-ghost"' + ext(p.demo) + '>' + ic('external', 16) + esc(pt.demo) + '</a>' : '') +
        '</div>' +
      '</div></article>';
  }
  function renderProjectGrid() {
    var list = D.projects.filter(function (p) { return filter === 'all' || p.cats.indexOf(filter) !== -1; });
    $('#project-grid').innerHTML = list.length ? list.map(projectCard).join('') : '<p class="muted">' + esc(t().projects.empty) + '</p>';
    $$('.filters button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.f === filter)); });
  }
  function renderProjects() {
    var pt = t().projects;
    var filters = ['all', 'ai', 'data', 'fullstack', 'se'];
    var now = (D.inProgress || []).length ? '<div class="now reveal"><p class="eyebrow">' + esc(pt.nowEyebrow) + '</p><h3 class="now-title">' + esc(pt.nowTitle) + '</h3><div class="now-grid">' +
      D.inProgress.map(function (p) {
        return '<article class="card now-card"><div class="now-top"><span class="live">' + esc(pt.nowBadge) + '</span><span class="mono muted small">' + esc(pick(p.since)) + '</span></div>' +
          '<h4>' + esc(pick(p.title)) + '</h4><p class="muted">' + esc(pick(p.text)) + '</p><ul class="chips small">' + p.tags.map(function (x) { return '<li class="chip">' + esc(pick(x)) + '</li>'; }).join('') + '</ul>' +
          (p.url ? '<a class="link"' + ext(p.url) + '>' + esc(pt.open) + ic('arrow', 15) + '</a>' : '') + '</article>';
      }).join('') + '</div></div>' : '';
    $('#projects').innerHTML = '<div class="wrap">' + head(pt) +
      '<div class="filters no-print" role="group" aria-label="Filtre">' + filters.map(function (f) { return '<button type="button" data-f="' + f + '">' + esc(pt.filters[f]) + '</button>'; }).join('') + '</div>' +
      '<div class="project-grid" id="project-grid" aria-live="polite"></div>' + now + '</div>';
    renderProjectGrid();
  }

  var galleryTag = 'all';
  function renderExperience() {
    var e = t().experience;
    var tl = '<ol class="timeline">' + D.internships.map(function (x, i) {
      return '<li class="tl reveal' + (i === 0 ? ' is-latest' : '') + '"><span class="tl-when mono">' + esc(pick(x.when)) + '</span><div class="tl-body card"><h3>' + esc(pick(x.role)) + '</h3><p class="tl-org">' + esc(pick(x.org)) + '</p>' +
        '<ul class="ticks">' + pick(x.points).map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div></li>';
    }).join('') + '</ol>';
    var acts = '<h3 class="sub-title reveal">' + esc(e.life) + '</h3><div class="acts">' + D.activities.map(function (a) {
      var pts = a.points ? pick(a.points) : null;
      return '<article class="card act reveal"><div class="act-top"><span class="tag">' + esc(pick(a.tag)) + '</span><span class="mono muted small">' + esc(pick(a.when)) + '</span></div><h4>' + esc(pick(a.title)) + '</h4><p class="muted">' + esc(pick(a.text)) + '</p>' +
        (pts ? '<ul class="ticks small">' + pts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') + (a.project ? '<button type="button" class="link act-link no-print" data-open="' + esc(a.project) + '">' + esc(e.seeProject) + ic('arrow', 15) + '</button>' : '') + '</article>';
    }).join('') + '</div>';
    var gal = '';
    if ((D.gallery || []).length) {
      var tags = ['all'].concat(D.gallery.map(function (g) { return g.tag; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
      gal = '<div class="gallery reveal"><div class="gallery-head"><h3 class="sub-title">' + esc(e.gallery) + '</h3><div class="filters small no-print">' +
        tags.map(function (tg) { return '<button type="button" data-g="' + esc(tg) + '" aria-pressed="' + (tg === galleryTag) + '">' + esc(tg === 'all' ? t().projects.filters.all : tg) + '</button>'; }).join('') +
        '</div><div class="g-nav no-print"><button type="button" class="icon-btn" data-gnav="-1" aria-label="' + esc(e.prev) + '">' + ic('left') + '</button><button type="button" class="icon-btn" data-gnav="1" aria-label="' + esc(e.next) + '">' + ic('right') + '</button></div></div>' +
        '<div class="carousel" id="carousel">' + D.gallery.map(function (g, i) {
          if (galleryTag !== 'all' && g.tag !== galleryTag) return '';
          return '<figure class="g-item"><button type="button" data-lb="gallery" data-i="' + i + '"><img src="' + esc(g.src) + '" alt="' + esc(pick(g.cap)) + '" loading="lazy"></button><figcaption><span class="tag">' + esc(g.tag) + '</span>' + esc(pick(g.cap)) + '</figcaption></figure>';
        }).join('') + '</div></div>';
    }
    $('#experience').innerHTML = '<div class="wrap">' + head(e) + tl + acts + gal + '</div>';
  }

  function renderEducation() {
    var e = t().education;
    $('#education').innerHTML = '<div class="wrap">' + head(e) + '<div class="edu">' + D.education.map(function (x) {
      return '<article class="card edu-item reveal' + (x.main ? ' main' : '') + '"><span class="mono when">' + esc(x.when) + '</span><h3>' + esc(pick(x.title)) + '</h3><p class="muted">' + esc(pick(x.text)) + '</p></article>';
    }).join('') + '</div></div>';
  }

  function renderCerts() {
    var c = t().certs;
    $('#certifications').innerHTML = '<div class="wrap">' + head(c) + '<div class="certs">' + D.certifications.map(function (x, i) {
      return '<article class="card cert reveal">' +
        (x.image ? '<button type="button" class="cert-img" data-lb="certs" data-i="' + i + '" aria-label="' + esc(c.view) + '"><img src="' + esc(x.image) + '" alt="' + esc(pick(x.name)) + '" loading="lazy"></button>' : '<span class="fact-ic">' + ic('award', 20) + '</span>') +
        '<div><h3>' + esc(pick(x.name)) + '</h3><p class="mono muted small">' + esc(x.issuer) + (x.date ? ' · ' + esc(pick(x.date)) : '') + '</p>' +
        (x.url ? '<a class="link small"' + ext(x.url) + '>' + esc(c.verify) + ic('external', 13) + '</a>' : '') + '</div></article>';
    }).join('') + '</div></div>';
  }

  function renderContact() {
    var c = t().contact, pr = D.profile;
    var cv = (D.cv && (D.cv.fr || D.cv.en)) ? '<div class="contact-cv"><p class="mono small">' + esc(c.cv) + '</p><div class="cv-links">' +
      ['fr', 'en'].filter(function (l) { return D.cv[l]; }).map(function (l) { return '<a class="btn btn-light btn-sm" href="' + esc(D.cv[l]) + '" download>' + ic('download', 15) + esc(c.cvLang[l]) + '</a>'; }).join('') + '</div></div>' : '';
    $('#contact').innerHTML = '<div class="wrap"><div class="contact-card reveal">' +
      '<div class="contact-main"><p class="eyebrow"><span>' + c.num + '</span> · ' + esc(c.eyebrow) + '</p><h2>' + esc(c.title) + '</h2><p class="contact-sub">' + esc(c.sub) + '</p>' +
        '<div class="actions no-print"><a class="btn btn-sand" href="mailto:' + esc(pr.email) + '?subject=' + encodeURIComponent(lang === 'fr' ? 'Contact depuis votre portfolio' : 'Contact from your portfolio') + '">' + ic('mail', 17) + esc(c.email) + '</a>' +
        '<a class="btn btn-light"' + ext(pr.linkedin) + '>' + ic('linkedin', 17) + 'LinkedIn</a><a class="btn btn-light"' + ext(pr.github) + '>' + ic('github', 17) + 'GitHub</a></div>' +
        '<div class="mail-line"><span class="mono">' + esc(pr.email) + '</span><button type="button" class="copy no-print" id="copy-mail">' + ic('copy', 15) + '<span>' + esc(c.copy) + '</span></button></div>' +
      '</div>' +
      '<div class="contact-side">' +
        '<ul class="contact-facts"><li>' + ic('pin', 17) + '<div><span class="mono small">' + esc(c.location) + '</span>' + esc(pick(pr.location)) + '</div></li>' +
        '<li>' + ic('plane', 17) + '<div><span class="mono small">' + esc(c.mobility) + '</span>' + esc(pick(pr.mobility)) + '</div></li></ul>' +
        cv +
        '<figure class="qr"><img src="assets/img/qr-portfolio.png" alt="QR code douaedr.github.io" width="132" height="132"><figcaption class="small">' + esc(c.qr) + '</figcaption></figure>' +
      '</div></div></div>';
  }

  function renderFooter() {
    var f = t().footer;
    $('#footer').innerHTML = '<div class="wrap foot-in"><p>© ' + new Date().getFullYear() + ' ' + esc(D.profile.name) + ' · ' + esc(f.line) + ' · ' + esc(D.profile.email) + '</p><a class="link no-print" href="#home">' + esc(f.top) + ic('up', 15) + '</a></div>';
  }

  /* ------------------------------------------------------------------ */
  /* Fiche projet (modale)                                              */
  /* ------------------------------------------------------------------ */
  var modal = $('#modal');
  function openModal(id) {
    var p = D.projects.filter(function (x) { return x.id === id; })[0];
    if (!p || !p.details) return;
    var m = t().modal, d = pick(p.details), pt = t().projects;
    function block(title, body) { return body ? '<section class="m-block"><h3>' + esc(title) + '</h3>' + body + '</section>' : ''; }
    function list(arr) { return arr && arr.length ? '<ul class="ticks">' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : ''; }
    var shots = (p.shots || []).length ? block(m.shots, '<div class="m-shots">' + p.shots.map(function (s, i) {
      return '<button type="button" data-lb="project:' + esc(p.id) + '" data-i="' + i + '"><img src="' + esc(s.src) + '" alt="' + esc(pick(s.cap)) + '" loading="lazy"><span class="small">' + esc(pick(s.cap)) + '</span></button>';
    }).join('') + '</div>') : '';
    var video = p.youtube ? block(m.video, '<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(p.youtube) + '" title="' + esc(pick(p.title)) + '" allowfullscreen loading="lazy"></iframe></div>') : '';
    modal.innerHTML = '<div class="m-inner"><header class="m-head"><div><p class="ctx mono">' + esc(pick(p.context)) + ' · ' + esc(p.team ? pt.team : pt.solo) + '</p><h2 id="modal-title">' + esc(pick(p.title)) + '</h2></div>' +
      '<button type="button" class="icon-btn" data-close aria-label="' + esc(m.close) + '">' + ic('close') + '</button></header><div class="m-body">' +
      block(m.overview, '<p>' + esc(d.overview) + '</p>') +
      '<div class="m-two">' + block(m.problem, '<p>' + esc(d.problem) + '</p>') + block(m.objectives, list(d.objectives)) + '</div>' +
      block(m.solution, '<p>' + esc(d.solution) + '</p>') +
      block(m.architecture, '<p class="mono arch">' + esc(d.architecture) + '</p>') +
      block(m.tech, '<ul class="chips">' + p.tech.map(function (x) { return '<li class="chip">' + esc(x) + '</li>'; }).join('') + '</ul>') +
      '<div class="m-two">' + block(m.contribution, '<p>' + esc(d.contribution) + '</p>') + block(m.results, list(d.results)) + '</div>' +
      shots + video +
      (p.repo ? '<a class="btn"' + ext(p.repo) + '>' + ic('github', 17) + esc(m.repo) + '</a>' : '') +
      '</div></div>';
    if (typeof modal.showModal === 'function') modal.showModal(); else modal.setAttribute('open', '');
    document.body.classList.add('locked');
  }
  function closeDialog(dlg) { if (dlg.open) { if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open'); } }
  modal.addEventListener('close', function () { if (!lb.open) document.body.classList.remove('locked'); });
  modal.addEventListener('click', function (ev) { if (ev.target === modal || ev.target.closest('[data-close]')) closeDialog(modal); });

  /* ------------------------------------------------------------------ */
  /* Visionneuse d'images                                               */
  /* ------------------------------------------------------------------ */
  var lb = $('#lightbox'), lbItems = [], lbIdx = 0;
  function lbSource(key) {
    if (key === 'gallery') return D.gallery.map(function (g) { return { src: g.src, cap: pick(g.cap) }; });
    if (key === 'certs') return D.certifications.map(function (c) { return { src: c.image, cap: pick(c.name) }; });
    var id = key.split(':')[1];
    var p = D.projects.filter(function (x) { return x.id === id; })[0];
    return p ? p.shots.map(function (s) { return { src: s.src, cap: pick(s.cap) }; }) : [];
  }
  function drawLb() {
    var it = lbItems[lbIdx], l = t().lb, multi = lbItems.length > 1;
    lb.innerHTML = '<button type="button" class="icon-btn lb-close" data-lbclose aria-label="' + esc(l.close) + '">' + ic('close') + '</button>' +
      (multi ? '<button type="button" class="icon-btn lb-prev" data-lbstep="-1" aria-label="' + esc(l.prev) + '">' + ic('left') + '</button><button type="button" class="icon-btn lb-next" data-lbstep="1" aria-label="' + esc(l.next) + '">' + ic('right') + '</button>' : '') +
      '<figure><img src="' + esc(it.src) + '" alt="' + esc(it.cap) + '"><figcaption>' + esc(it.cap) + (multi ? ' <span class="mono">' + (lbIdx + 1) + ' / ' + lbItems.length + '</span>' : '') + '</figcaption></figure>';
  }
  function openLb(key, i) {
    lbItems = lbSource(key).filter(function (x) { return x.src; }); if (!lbItems.length) return;
    lbIdx = Math.max(0, Math.min(i, lbItems.length - 1)); drawLb();
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
    document.body.classList.add('locked');
  }
  function stepLb(n) { lbIdx = (lbIdx + n + lbItems.length) % lbItems.length; drawLb(); }
  lb.addEventListener('close', function () { if (!modal.open) document.body.classList.remove('locked'); });
  lb.addEventListener('click', function (ev) {
    var s = ev.target.closest('[data-lbstep]');
    if (s) return stepLb(parseInt(s.dataset.lbstep, 10));
    if (ev.target === lb || ev.target.closest('[data-lbclose]') || ev.target.tagName === 'FIGURE') closeDialog(lb);
  });
  document.addEventListener('keydown', function (ev) {
    if (!lb.open || lbItems.length < 2) return;
    if (ev.key === 'ArrowRight') stepLb(1);
    if (ev.key === 'ArrowLeft') stepLb(-1);
  });

  /* ------------------------------------------------------------------ */
  /* Interactions globales                                              */
  /* ------------------------------------------------------------------ */
  document.addEventListener('click', function (ev) {
    var el;
    if ((el = ev.target.closest('.lang button'))) { setLang(el.dataset.lang); return; }
    if ((el = ev.target.closest('.filters button[data-f]'))) { filter = el.dataset.f; renderProjectGrid(); return; }
    if ((el = ev.target.closest('.filters button[data-g]'))) { galleryTag = el.dataset.g; renderExperience(); observe(); return; }
    if ((el = ev.target.closest('[data-gnav]'))) { var c = $('#carousel'); if (c) c.scrollBy({ left: parseInt(el.dataset.gnav, 10) * c.clientWidth * 0.8, behavior: 'smooth' }); return; }
    if ((el = ev.target.closest('[data-open]'))) { openModal(el.dataset.open); return; }
    if ((el = ev.target.closest('[data-lb]'))) { openLb(el.dataset.lb, parseInt(el.dataset.i, 10)); return; }
    if ((el = ev.target.closest('#copy-mail'))) { copyMail(el); return; }
    if ((el = ev.target.closest('#nav-links a'))) { toggleMenu(false); }
  });

  function copyMail(btn) {
    var done = function () { btn.querySelector('span').textContent = t().contact.copied; setTimeout(function () { var s = btn.querySelector('span'); if (s) s.textContent = t().contact.copy; }, 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(D.profile.email).then(done, function () {});
  }

  var burger = $('#burger');
  function toggleMenu(open) {
    var o = typeof open === 'boolean' ? open : burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', String(o)); $('#nav').classList.toggle('open', o);
  }
  burger.addEventListener('click', function () { toggleMenu(); });

  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
  function observe() { $$('.reveal:not(.in)').forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); }); }

  var spy = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) $$('#nav-links a').forEach(function (a) { a.classList.toggle('active', a.dataset.sec === en.target.id); });
    });
  }, { rootMargin: '-45% 0px -50% 0px' }) : null;

  window.addEventListener('scroll', function () { $('#nav').classList.toggle('scrolled', window.scrollY > 8); }, { passive: true });

  function renderAll() {
    document.documentElement.lang = lang;
    renderNav(); renderHero(); renderAbout(); renderSkills(); renderProjects(); renderExperience(); renderEducation(); renderCerts(); renderContact(); renderFooter();
    observe();
    if (spy) NAV.forEach(function (id) { spy.observe(document.getElementById(id)); });
  }
  function setLang(l) {
    if (l === lang) return;
    lang = l; try { localStorage.setItem('dd-lang', l); } catch (e) { /* ignore */ }
    if (modal.open) closeDialog(modal);
    renderAll();
    $$('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  renderAll();
})();
