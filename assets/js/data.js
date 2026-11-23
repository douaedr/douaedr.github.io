/* ======================================================================
   TOUT LE CONTENU DU PORTFOLIO EST ICI.
   Chaque texte existe en français (fr) et en anglais (en).
   Pour ajouter un projet, un stage, une photo ou une attestation :
   copie un bloc existant, modifie-le, enregistre, puis git push.
   ====================================================================== */

window.PORTFOLIO = {

  /* ---------- Profil ---------- */
  profile: {
    name: 'Douae Derouich',
    email: 'douaederouich01@gmail.com',
    linkedin: 'https://www.linkedin.com/in/douae-derouich/',
    github: 'https://github.com/douaedr',
    site: 'https://douaedr.github.io/',
    photo: 'assets/img/profile.jpg',
    location: { fr: 'Oujda, Maroc', en: 'Oujda, Morocco' },
    mobility: { fr: 'Maroc · France · Belgique · Luxembourg', en: 'Morocco · France · Belgium · Luxembourg' },
  },

  /* ---------- CV à télécharger ----------
     Dépose les PDF dans assets/cv/ puis indique leur chemin ici.
     Laisse null tant qu'il n'y a pas de fichier : le bouton n'apparaît pas. */
  cv: {
    fr: 'assets/cv/CV_Douae_Derouich_FR.pdf',
    en: 'assets/cv/CV_Douae_Derouich_EN.pdf',
  },

  /* ---------- Compétences ---------- */
  skills: [
    { icon: 'brain', title: { fr: 'IA & data', en: 'AI & data' },
      items: ['Python', 'Machine learning', 'scikit-learn', 'pandas', 'OCR (PaddleOCR, RapidOCR)', 'LayoutLMv3', 'NLP', 'RAG', 'Ollama / Mistral'] },
    { icon: 'server', title: { fr: 'Backend', en: 'Backend' },
      items: ['FastAPI', 'Java / Spring Boot', 'Spring Security', 'JWT', 'Microservices', 'RabbitMQ', 'REST · Swagger'] },
    { icon: 'layout', title: { fr: 'Frontend', en: 'Frontend' },
      items: ['React', 'TypeScript', 'Vite', 'JavaScript', 'Angular'] },
    { icon: 'database', title: { fr: 'Bases de données', en: 'Databases' },
      items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL'] },
    { icon: 'box', title: { fr: 'DevOps & outils', en: 'DevOps & tools' },
      items: ['Docker · Compose', 'Nginx', 'Git · GitHub', 'Jenkins', 'n8n', 'pytest'] },
    { icon: 'flask', title: { fr: 'Laboratoire & conception', en: 'Lab & design' },
      items: ['Analyses biologiques', 'Biochimie', 'UML', 'Merise', 'LaTeX'] },
  ],

  /* ---------- Projets ----------
     cats : 'ai' | 'data' | 'fullstack' | 'se' (pilotent les filtres)
     team : true si projet d'équipe
     shots : captures (la première sert de couverture, sauf si cover: false)
     details : fiche détaillée (null = pas de bouton « Voir les détails ») */
  projects: [
    {
      id: 'dekra-centre-manager',
      title: 'DEKRA Centre Manager',
      code: 'OCR · prévision · anomalies',
      cats: ['ai', 'data', 'fullstack'],
      team: false,
      context: { fr: 'Stage · DEKRA Automotive Maroc · sept. – oct. 2026', en: 'Internship · DEKRA Automotive Maroc · Sep – Oct 2026' },
      short: {
        fr: "Application web qui digitalise les missions quotidiennes d'un chef de centre de contrôle technique, avec un module d'IA qui fonctionne hors ligne.",
        en: 'Web application that digitalises the daily work of a vehicle inspection centre manager, with an AI module that runs offline.',
      },
      tech: ['Python', 'FastAPI', 'SQLModel', 'scikit-learn', 'RapidOCR', 'React 19', 'JWT', 'pytest'],
      repo: 'https://github.com/douaedr/dekra-centre-manager',
      demo: null,
      youtube: null,
      shots: [
        { src: 'assets/img/projects/dekra-centre-manager/01-dashboard.webp', cap: { fr: 'Tableau de bord du chef de centre', en: 'Centre manager dashboard' } },
        { src: 'assets/img/projects/dekra-centre-manager/02-ia.webp', cap: { fr: "Prévision d'affluence et contrôleurs recommandés", en: 'Traffic forecast and recommended inspectors' } },
        { src: 'assets/img/projects/dekra-centre-manager/03-ia_ocr.webp', cap: { fr: 'OCR de la carte grise', en: 'Registration card OCR' } },
        { src: 'assets/img/projects/dekra-centre-manager/04-ia_anomalies.webp', cap: { fr: "Détection d'anomalies", en: 'Anomaly detection' } },
        { src: 'assets/img/projects/dekra-centre-manager/05-ia_chat.webp', cap: { fr: 'Assistant (RAG)', en: 'Assistant (RAG)' } },
        { src: 'assets/img/projects/dekra-centre-manager/06-new_controle.webp', cap: { fr: "Saisie d'un contrôle", en: 'New inspection' } },
        { src: 'assets/img/projects/dekra-centre-manager/07-planning.webp', cap: { fr: 'Planning généré à partir de la prévision', en: 'Schedule generated from the forecast' } },
        { src: 'assets/img/projects/dekra-centre-manager/08-rendez-vous.webp', cap: { fr: 'Rendez-vous', en: 'Appointments' } },
        { src: 'assets/img/projects/dekra-centre-manager/09-equipements.webp', cap: { fr: 'Équipements et étalonnages', en: 'Equipment and calibration' } },
        { src: 'assets/img/projects/dekra-centre-manager/10-conformite.webp', cap: { fr: 'Conformité et audits', en: 'Compliance and audits' } },
      ],
      details: {
        fr: {
          overview: "Une application web pour le chef d'un centre de contrôle technique : tableau de bord, rendez-vous, contrôles, personnel et planning, équipements, stocks, caisse, audits de conformité et rapport mensuel, avec quatre rôles (chef de centre, secrétaire, contrôleur, siège).",
          problem: "Le chef de centre suit chaque jour de nombreuses tâches (rendez-vous, contrôles, équipe, étalonnage des équipements, stocks, caisse) dans des outils séparés : papier, Excel, messages. Le suivi prend du temps et les alertes arrivent tard.",
          objectives: ["Réunir les missions quotidiennes du centre dans une seule application", 'Lire automatiquement la carte grise', "Prévoir l'affluence pour dimensionner le planning", 'Signaler les situations anormales', 'Produire le rapport mensuel pour le siège en un clic'],
          solution: "Un backend FastAPI (JWT, 4 rôles, règles métier : tarif calculé, PV déduit du stock, statut d'équipement mis à jour) et un frontend React. Le module d'IA tourne entièrement hors ligne : OCR de la carte grise (RapidOCR), prévision d'affluence par Gradient Boosting, détection d'anomalies par Isolation Forest et z-score robuste, et un assistant qui cherche dans la FAQ et les procédures.",
          architecture: 'FastAPI + SQLModel (SQLite) · React 19 / Vite / Recharts · IA : RapidOCR (ONNX), scikit-learn, pandas · rapports PDF (ReportLab) et Excel (openpyxl) · scripts PowerShell d’installation.',
          contribution: "Projet individuel : analyse du métier, conception (UML, règles de gestion), développement du backend, du frontend et du module d'IA, tests et documentation.",
          results: ["Sur 12 mois de données simulées, la prévision réduit l'erreur d'environ 16 % par rapport à une méthode naïve", 'Toutes les anomalies injectées pour la démo sont détectées', '33 tests automatisés (pytest)', 'Données simulées uniquement : les chiffres restent à confirmer sur des données réelles'],
        },
        en: {
          overview: 'A web application for the manager of a vehicle inspection centre: dashboard, appointments, inspections, staff and scheduling, equipment, stock, cash desk, compliance audits and a monthly report, with four roles (centre manager, front desk, inspector, head office).',
          problem: 'The centre manager follows many daily tasks (appointments, inspections, team, equipment calibration, stock, cash) across separate tools: paper, Excel, messages. Monitoring takes time and alerts come late.',
          objectives: ['Bring the daily tasks of the centre into one application', 'Read the vehicle registration card automatically', 'Forecast traffic to size the schedule', 'Flag unusual situations', 'Produce the monthly head-office report in one click'],
          solution: 'A FastAPI backend (JWT, 4 roles, business rules: computed price, report form taken from stock, equipment status updated) and a React frontend. The AI module runs fully offline: registration card OCR (RapidOCR), traffic forecasting with Gradient Boosting, anomaly detection with Isolation Forest and a robust z-score, and an assistant that searches the FAQ and procedures.',
          architecture: 'FastAPI + SQLModel (SQLite) · React 19 / Vite / Recharts · AI: RapidOCR (ONNX), scikit-learn, pandas · PDF (ReportLab) and Excel (openpyxl) reports · PowerShell setup scripts.',
          contribution: 'Individual project: business analysis, design (UML, business rules), backend, frontend and AI module development, tests and documentation.',
          results: ['On 12 months of simulated data, the forecast reduces the error by about 16% compared with a naive baseline', 'All anomalies injected for the demo are detected', '33 automated tests (pytest)', 'Simulated data only: the figures still need to be confirmed on real data'],
        },
      },
    },
    {
      id: 'mindcare-ai',
      title: 'MindCare AI',
      code: 'sécurité → RAG → LLM',
      cats: ['ai', 'data'],
      team: true,
      context: { fr: 'Hackathon Nexus HealthTech · 20 – 21 nov. 2026', en: 'Nexus HealthTech Hackathon · 20 – 21 Nov 2026' },
      short: {
        fr: "Prototype d'assistant de psychoéducation en français : règles de sécurité d'abord, réponses sourcées par RAG et LLM local contrôlé par le code.",
        en: 'French-language psychoeducation assistant prototype: safety rules first, sourced answers with RAG and a local LLM checked by code.',
      },
      tech: ['Python', 'FastAPI', 'sentence-transformers', 'scikit-learn', 'FAISS', 'Ollama', 'SQLAlchemy', 'pytest'],
      repo: 'https://github.com/meryemammari23/mindcare-ai',
      demo: null,
      youtube: null,
      shots: [
        { src: 'assets/img/projects/mindcare-ai/01-accueil.webp', cap: { fr: 'Accueil', en: 'Home page' } },
        { src: 'assets/img/projects/mindcare-ai/02-respiration.webp', cap: { fr: 'Exercice de respiration guidée', en: 'Guided breathing exercise' } },
        { src: 'assets/img/projects/mindcare-ai/03-ressources.webp', cap: { fr: 'Ressources et numéros vérifiés', en: 'Resources and verified help numbers' } },
        { src: 'assets/img/projects/mindcare-ai/04-structures.webp', cap: { fr: 'Urgences et structures par pays', en: 'Emergency services and structures by country' } },
      ],
      details: {
        fr: {
          overview: "Un assistant de psychoéducation en français réalisé en 2 jours pour le hackathon Nexus HealthTech (thème IA & santé). Principe : le LLM formule, le code contrôle, les sources justifient. C'est un prototype, ni un dispositif médical ni un outil de diagnostic.",
          problem: "Un assistant conversationnel sur la santé mentale ne doit jamais improviser face à une urgence ni donner une information non sourcée.",
          objectives: ["Détecter les situations urgentes avant toute étape d'IA", 'Répondre uniquement avec des sources citées et sous licence', 'Garder les conversations anonymes et confidentielles par défaut'],
          solution: "Un Safety Gate déterministe analyse chaque message en premier et renvoie des numéros d'aide vérifiés (France, Maroc) en cas d'urgence. Viennent ensuite la détection du thème et du niveau de soutien, une estimation de l'émotion (embeddings MiniLM + régression logistique), un RAG sur 166 passages de l'OMS et du NHS, et un reflet empathique formulé par un LLM local et validé par le code.",
          architecture: 'Backend FastAPI · Safety Gate à base de règles · recherche FAISS + BM25 · Ollama (LLM local) · historique chiffré uniquement avec consentement · espaces patient, professionnel et administration · tests automatisés (unitaires, sécurité, intégration, bout en bout).',
          contribution: "Cheffe de l'équipe DSM : 3 personnes, deux élèves ingénieures en génie informatique option IA (EHEI Oujda) et un étudiant en médecine (FMP Oujda).",
          results: ["Prototype présenté lors du pitch de l'équipe", 'Attestation de participation délivrée par le CIRMSS'],
        },
        en: {
          overview: 'A French-language psychoeducation assistant built in 2 days for the Nexus HealthTech Hackathon (AI & Health track). Principle: the LLM phrases, the code controls, the sources justify. It is a prototype, not a medical device and not a diagnostic tool.',
          problem: 'A conversational assistant on mental health must never improvise in an emergency or give unsourced information.',
          objectives: ['Detect urgent situations before any AI step', 'Answer only with cited, licensed sources', 'Keep conversations anonymous and private by default'],
          solution: 'A deterministic Safety Gate analyses every message first and returns verified help numbers (France, Morocco) in urgent cases. Then theme and support-level detection, an emotion estimate (MiniLM embeddings + logistic regression), a RAG over 166 WHO and NHS passages, and an empathic reflection from a local LLM that the code validates.',
          architecture: 'FastAPI backend · rule-based Safety Gate · FAISS + BM25 retrieval · Ollama (local LLM) · encrypted history only with consent · patient, professional and admin spaces · automated tests (unit, safety, integration, end-to-end).',
          contribution: 'Team leader of the DSM team: 3 people, two computer engineering students in the AI track (EHEI Oujda) and one medical student (FMP Oujda).',
          results: ['Prototype presented during the team pitch', 'Certificate of participation issued by CIRMSS'],
        },
      },
    },
    {
      id: 'medextract',
      title: 'MedExtract AI',
      code: 'scan → OCR → données',
      cats: ['ai', 'data', 'fullstack'],
      team: true,
      context: { fr: 'Stage · Estatmar · févr. – août 2026', en: 'Internship · Estatmar · Feb – Aug 2026' },
      short: {
        fr: 'Plateforme qui transforme des bilans sanguins scannés en données structurées, avec un assistant qui aide à les lire, sans jamais poser de diagnostic.',
        en: 'Platform that turns scanned blood test reports into structured data, with an assistant that helps read them, without ever giving a diagnosis.',
      },
      tech: ['FastAPI', 'PaddleOCR', 'LayoutLMv3', 'Ollama + Mistral', 'PostgreSQL', 'React 18 / TS', 'Docker', 'Nginx'],
      repo: 'https://github.com/douaedr/medextract-ia-chatbot',
      demo: null,
      youtube: null,
      shots: [
        { src: 'assets/img/projects/medextract/01-analyses-evolution.webp', cap: { fr: "Analyses : évolution d'une valeur (créatinine) et normes", en: 'Test results: trend of a value (creatinine) with its range' } },
        { src: 'assets/img/projects/medextract/02-document-traite.webp', cap: { fr: 'Bilan importé et traité par le pipeline (statut AI_DONE)', en: 'Uploaded report processed by the pipeline (AI_DONE status)' } },
        { src: 'assets/img/projects/medextract/03-export-excel.webp', cap: { fr: 'Export Excel des analyses avec statut NORMAL / HIGH / LOW', en: 'Excel export of the results with NORMAL / HIGH / LOW status' } },
        { src: 'assets/img/projects/medextract/04-documents.webp', cap: { fr: 'Dépôt de documents (PDF, JPG, PNG)', en: 'Document upload (PDF, JPG, PNG)' } },
        { src: 'assets/img/projects/medextract/05-connexion.webp', cap: { fr: 'Connexion', en: 'Sign-in page' } },
        { src: 'assets/img/projects/medextract/06-inscription.webp', cap: { fr: 'Création de compte patient', en: 'Patient sign-up' } },
      ],
      details: {
        fr: {
          overview: "Plateforme web d'extraction de données de bilans sanguins : OCR du document, extraction des analyses, comparaison aux normes, assistant RAG local et export Excel. Outil d'aide à la lecture et à la saisie, pas un système de diagnostic médical.",
          problem: 'Les résultats de laboratoire arrivent souvent en PDF ou en scan. Les ressaisir à la main prend du temps et provoque des erreurs, et les patients ont du mal à les lire.',
          objectives: ['Extraire automatiquement analyses, valeurs, unités et normes', 'Signaler chaque valeur NORMAL / HIGH / LOW', 'Répondre aux questions sans diagnostic ni traitement', 'Garder les données de santé en local'],
          solution: "1) OCR du bilan (PaddleOCR) ; 2) extraction par règles (regex) et par LayoutLMv3 fine-tuné sur texte + mise en page ; 3) comparaison de chaque valeur à ses normes ; 4) assistant RAG avec Mistral via Ollama, en local ; 5) export Excel et historique par utilisateur. Garde-fous : refus des questions de diagnostic, aucune dose ni traitement, avertissement médical à chaque réponse.",
          architecture: 'React 18 / TypeScript · FastAPI (6 microservices) · PostgreSQL · PaddleOCR · LayoutLMv3 · Ollama + Mistral · Docker Compose + Nginx · JWT.',
          contribution: "J'ai conçu l'ensemble de la plateforme, puis réparti les modules entre les membres de l'équipe (4 personnes). Le dépôt GitHub regroupe le projet complet.",
          results: ['Exemple : glycémie 1,15 g/L pour une norme de 0,70 – 1,10 → signalée HIGH', 'Toutes les données restent en local : aucune API externe', 'Objectif visé pour LayoutLMv3 : F1 ≥ 0,75'],
        },
        en: {
          overview: 'Web platform that extracts data from blood test reports: document OCR, test extraction, comparison with reference ranges, local RAG assistant and Excel export. A reading and data-entry aid, not a medical diagnosis system.',
          problem: 'Lab results often arrive as PDFs or scans. Typing them in by hand takes time and causes errors, and patients find them hard to read.',
          objectives: ['Extract tests, values, units and reference ranges automatically', 'Flag each value as NORMAL / HIGH / LOW', 'Answer questions without diagnosis or treatment', 'Keep health data local'],
          solution: '1) OCR of the report (PaddleOCR); 2) extraction with rules (regex) and LayoutLMv3 fine-tuned on text + layout; 3) comparison of each value with its range; 4) RAG assistant with Mistral via Ollama, running locally; 5) Excel export and per-user history. Guardrails: diagnosis questions are declined, no doses or treatments, a medical disclaimer on every answer.',
          architecture: 'React 18 / TypeScript · FastAPI (6 microservices) · PostgreSQL · PaddleOCR · LayoutLMv3 · Ollama + Mistral · Docker Compose + Nginx · JWT.',
          contribution: 'I designed the whole platform, then split the modules between the team members (4 people). The GitHub repository contains the complete project.',
          results: ['Example: glucose 1.15 g/L with a 0.70 – 1.10 range → flagged HIGH', 'All data stays local: no external API', 'Target for LayoutLMv3: F1 ≥ 0.75'],
        },
      },
    },
    {
      id: 'medsys',
      title: 'MedSys',
      code: 'auth · patient · RDV',
      cats: ['se', 'fullstack'],
      team: true,
      context: { fr: "Projet de fin d'année · EHEIM · oct. 2025 – mai 2026", en: 'End-of-year project · EHEIM · Oct 2025 – May 2026' },
      short: {
        fr: 'Système de gestion hospitalière en microservices : comptes et rôles, dossiers patients, documents, rendez-vous et notifications.',
        en: 'Hospital management system built with microservices: accounts and roles, patient records, documents, appointments and notifications.',
      },
      tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'RabbitMQ', 'React / Vite', 'UML · Merise'],
      repo: 'https://github.com/douaedr/medsys-fixed',
      cover: false, // les diagrammes UML restent dans la fiche détaillée
      demo: null,
      youtube: null,
      shots: [
        { src: 'assets/img/projects/medsys/01-cas-utilisation-auth.svg', cap: { fr: "Cas d'utilisation du service ms-auth", en: 'ms-auth use case diagram' } },
        { src: 'assets/img/projects/medsys/02-composants-patient.svg', cap: { fr: 'Architecture en couches du service Patient', en: 'Layered architecture of the Patient service' } },
        { src: 'assets/img/projects/medsys/03-sequence-connexion.svg', cap: { fr: 'Séquence de connexion', en: 'Login sequence diagram' } },
      ],
      details: {
        fr: {
          overview: 'Système de gestion hospitalière en microservices, réalisé à 4 et encadré par M. Soufiane Dahmani.',
          problem: "Un hôpital gère des comptes aux rôles très différents, des dossiers patients, des documents et des rendez-vous : il faut un système sûr où chacun n'accède qu'à ce qui le concerne.",
          objectives: ['Authentification et contrôle d’accès par rôles', 'Dossier patient, documents et messagerie', 'Communication fiable entre services'],
          solution: "Service d'authentification (ms-auth) : inscription, connexion JWT, réinitialisation du mot de passe, rôles patient / médecin et personnel / directeur / administrateur, administration des comptes ; à l'inscription, le patient est créé dans le service Patient par appel REST. Service Patient : portail, dossier médical, analyses, messagerie, dépôt de documents, PDF (OpenPDF) et QR codes (ZXing).",
          architecture: 'Java / Spring Boot · Spring Security + JWT · MySQL · RabbitMQ · React / Vite · modélisation UML et Merise · rapport en LaTeX.',
          contribution: "Responsable du service d'authentification (ms-auth) et du service Patient (ms-patient-personnel).",
          results: ['Diagrammes générés à partir des fichiers PlantUML du dépôt, rétro-conçus depuis le code Spring Boot'],
        },
        en: {
          overview: 'Hospital management system built with microservices by a team of 4, supervised by Mr. Soufiane Dahmani.',
          problem: 'A hospital manages accounts with very different roles, patient records, documents and appointments: it needs a secure system where everyone only accesses what concerns them.',
          objectives: ['Authentication and role-based access control', 'Patient record, documents and messaging', 'Reliable communication between services'],
          solution: 'Authentication service (ms-auth): sign-up, JWT login, password reset, patient / doctor and staff / director / administrator roles, account administration; on sign-up, the patient is created in the Patient service through a REST call. Patient service: portal, medical record, test results, messaging, document upload, PDFs (OpenPDF) and QR codes (ZXing).',
          architecture: 'Java / Spring Boot · Spring Security + JWT · MySQL · RabbitMQ · React / Vite · UML and Merise modelling · LaTeX report.',
          contribution: 'In charge of the authentication service (ms-auth) and the Patient service (ms-patient-personnel).',
          results: ['Diagrams generated from the PlantUML files in the repository, reverse-engineered from the Spring Boot code'],
        },
      },
    },
    {
      id: 'quoteflow',
      title: 'QuoteFlow',
      code: 'client → devis → PDF',
      cats: ['fullstack', 'se'],
      team: true,
      context: { fr: 'Stage · Estatmar · 2026', en: 'Internship · Estatmar · 2026' },
      short: {
        fr: "Plateforme de gestion de devis : le client fait sa demande, un employé produit un devis chiffré en PDF, un administrateur supervise l'activité.",
        en: 'Quote management platform: the client sends a request, an employee produces a priced PDF quote, an administrator oversees the activity.',
      },
      tech: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'iText 7', 'WebSocket', 'n8n', 'React / Vite'],
      repo: 'https://github.com/douaedr/QuoteFlow',
      demo: null,
      youtube: null,
      shots: [
        { src: 'assets/img/projects/quoteflow/01-dashboard-admin.webp', cap: { fr: "Tableau de bord de l'administrateur", en: 'Administrator dashboard' } },
        { src: 'assets/img/projects/quoteflow/02-connexion.webp', cap: { fr: 'Connexion', en: 'Sign-in page' } },
        { src: 'assets/img/projects/quoteflow/03-devis-pdf.webp', cap: { fr: 'Devis PDF généré', en: 'Generated PDF quote' } },
      ],
      details: {
        fr: {
          overview: 'Plateforme web multi-rôles (CLIENT / EMPLOYÉ / ADMIN) de gestion de devis, réalisée à 4.',
          problem: 'Les demandes de devis passent par e-mail et des fichiers épars : difficile de suivre qui traite quoi et de produire des devis homogènes.',
          objectives: ['Centraliser les demandes et les échanges', 'Générer des devis PDF propres', 'Sécuriser chaque requête par rôle', 'Automatiser les notifications'],
          solution: "Authentification JWT sans état, mots de passe hachés (BCrypt), accès par rôles avec @PreAuthorize, secret JWT lu depuis une variable d'environnement. Devis PDF avec iText 7, messagerie en temps réel (WebSocket / STOMP), e-mails automatisés par 4 workflows n8n, API documentée avec Swagger.",
          architecture: 'Java 17 / Spring Boot 3 · Spring Security + JWT · MySQL (H2 en démo) · iText 7 · WebSocket / STOMP · n8n (outil d’automatisation) · React / Vite · Swagger.',
          contribution: 'Authentification et sécurité (Spring Security + JWT), génération et mise en page des devis PDF.',
          results: ['Aucun secret dans le dépôt', 'Parcours complet : demande → devis chiffré → PDF → notification'],
        },
        en: {
          overview: 'Multi-role (CLIENT / EMPLOYEE / ADMIN) quote management web platform, built by a team of 4.',
          problem: 'Quote requests go through e-mail and scattered files: it is hard to track who handles what and to produce consistent quotes.',
          objectives: ['Centralise requests and conversations', 'Generate clean PDF quotes', 'Secure every request by role', 'Automate notifications'],
          solution: 'Stateless JWT authentication, hashed passwords (BCrypt), role-based access with @PreAuthorize, JWT secret read from an environment variable. PDF quotes with iText 7, real-time messaging (WebSocket / STOMP), automated e-mails through 4 n8n workflows, API documented with Swagger.',
          architecture: 'Java 17 / Spring Boot 3 · Spring Security + JWT · MySQL (H2 for the demo) · iText 7 · WebSocket / STOMP · n8n (workflow automation) · React / Vite · Swagger.',
          contribution: 'Authentication and security (Spring Security + JWT), PDF quote generation and layout.',
          results: ['No secrets in the repository', 'Complete flow: request → priced quote → PDF → notification'],
        },
      },
    },
    {
      id: 'recrutement',
      title: { fr: 'Plateforme de recrutement', en: 'Recruitment platform' },
      code: 'candidats · e-mails',
      cats: ['se'],
      team: true,
      context: { fr: 'Projet de synthèse · oct. 2024 – mai 2025', en: 'Synthesis project · Oct 2024 – May 2025' },
      short: {
        fr: "Plateforme de recrutement : j'ai réalisé le module desktop en Java Swing et contribué aux services Candidate et Email de l'architecture microservices.",
        en: 'Recruitment platform: I built the Java Swing desktop module and contributed to the Candidate and Email services of the microservices architecture.',
      },
      tech: ['Java', 'Java Swing', 'POO', 'Microservices'],
      repo: null, demo: null, youtube: null, shots: [], details: null,
    },
  ],

  /* ---------- Projets en cours ---------- */
  inProgress: [
    {
      title: { fr: 'Analyse de sentiments de tweets en arabe et en darija', en: 'Sentiment analysis of Arabic and Darija tweets' },
      since: { fr: 'Projet NLP · novembre 2026', en: 'NLP project · November 2026' },
      text: {
        fr: "Classification d'environ 18 000 tweets (corpus MAC, arabe standard et darija) en positif, neutre ou négatif. Normalisation et nettoyage de l'arabe, puis comparaison de six approches : TF-IDF avec Naive Bayes, régression logistique et SVM linéaire, embeddings FastText, un BiLSTM et DarijaBERT fine-tuné.",
        en: 'Classification of about 18,000 tweets (MAC corpus, standard Arabic and Darija) as positive, neutral or negative. Arabic normalisation and cleaning, then a comparison of six approaches: TF-IDF with Naive Bayes, logistic regression and linear SVM, FastText embeddings, a BiLSTM and a fine-tuned DarijaBERT.',
      },
      tags: ['Python', 'scikit-learn', 'TensorFlow / Keras', 'Hugging Face Transformers', 'DarijaBERT', 'FastText', 'Google Colab'],
      url: null,
    },
    {
      title: { fr: 'Surveillance IoT de frigos de laboratoire', en: 'IoT monitoring of laboratory fridges' },
      since: { fr: 'Cours · 2026', en: 'Coursework · 2026' },
      text: {
        fr: "Application de suivi de la température et de l'humidité des frigos de laboratoires d'analyses, avec carte Arduino et capteurs.",
        en: 'Application that monitors the temperature and humidity of lab fridges, with an Arduino board and sensors.',
      },
      tags: ['Arduino', { fr: 'Capteurs', en: 'Sensors' }, 'IoT'],
      url: null,
    },
  ],

  /* ---------- Stages et expériences ---------- */
  internships: [
    {
      when: { fr: 'Sept. – oct. 2026', en: 'Sep – Oct 2026' },
      role: { fr: 'Stagiaire développeuse full stack & IA', en: 'Full Stack & AI Developer Intern' },
      org: { fr: 'DEKRA Automotive Maroc · Oujda', en: 'DEKRA Automotive Maroc · Oujda' },
      points: {
        fr: ["DEKRA Centre Manager : application web qui digitalise les missions du chef de centre de contrôle technique", "Module d'IA hors ligne : OCR de la carte grise, prévision d'affluence, détection d'anomalies, assistant RAG"],
        en: ['DEKRA Centre Manager: web application that digitalises the daily work of an inspection centre manager', 'Offline AI module: registration card OCR, traffic forecasting, anomaly detection, RAG assistant'],
      },
    },
    {
      when: { fr: 'Févr. – août 2026', en: 'Feb – Aug 2026' },
      role: { fr: 'Stagiaire en développement logiciel / IA', en: 'Software Development / AI Intern' },
      org: { fr: 'Estatmar · Oujda', en: 'Estatmar · Oujda' },
      points: {
        fr: ['MedExtract AI : extraction de bilans sanguins (OCR, LayoutLMv3) et assistant RAG local', 'QuoteFlow : gestion de devis en Spring Boot, devis PDF et workflows n8n', 'Projets en équipe de 4'],
        en: ['MedExtract AI: blood test extraction (OCR, LayoutLMv3) and local RAG assistant', 'QuoteFlow: quote management with Spring Boot, PDF quotes and n8n workflows', 'Team of 4'],
      },
    },
    {
      when: { fr: 'Juil. – août 2025', en: 'Jul – Aug 2025' },
      role: { fr: 'Stagiaire en développement logiciel', en: 'Software Development Intern' },
      org: { fr: 'CALL · Oujda', en: 'CALL · Oujda' },
      points: {
        fr: ['Logiciel desktop de facturation (WebDev 27) : clients, produits, factures, calcul de la TVA, base de données, pièces jointes'],
        en: ['Desktop invoicing software (WebDev 27): clients, products, invoices, VAT, database, attachments'],
      },
    },
    {
      when: { fr: '2022 · France', en: '2022 · France' },
      role: { fr: 'Stagiaire technicienne de laboratoire', en: 'Laboratory Technician Intern' },
      org: { fr: 'XenTech · France', en: 'XenTech · France' },
      points: { fr: [], en: [] },
    },
    {
      when: { fr: '2021 – 2022 · France', en: '2021 – 2022 · France' },
      role: { fr: 'Aide de laboratoire', en: 'Laboratory Assistant' },
      org: { fr: 'Cerballiance Paris Sud · Orly', en: 'Cerballiance Paris Sud · Orly' },
      points: {
        fr: ["Aide de laboratoire dans un laboratoire d'analyses médicales"],
        en: ['Laboratory assistant in a medical testing laboratory'],
      },
    },
  ],

  /* ---------- Vie étudiante, événements, engagements ---------- */
  activities: [
    {
      id: 'hackathon',
      tag: 'Hackathon',
      when: { fr: '20 – 21 nov. 2026', en: '20 – 21 Nov 2026' },
      title: { fr: 'Hackathon Nexus HealthTech (1re édition)', en: 'Nexus HealthTech Hackathon (1st edition)' },
      text: {
        fr: "Cheffe de l'équipe DSM : projet MindCare AI, thème Intelligence artificielle & santé.",
        en: 'Team leader of the DSM team: MindCare AI project, Artificial Intelligence & Health track.',
      },
      points: {
        fr: ['Hackathon organisé par le CIRMSS à Oujda', 'Équipe de 3 : génie informatique (IA) et médecine', 'Attestation de participation'],
        en: ['Hackathon organised by CIRMSS in Oujda', 'Team of 3: computer engineering (AI) and medicine', 'Certificate of participation'],
      },
      project: 'mindcare-ai',
    },
  ],

  /* ---------- Galerie photos ----------
     Dépose les photos dans assets/img/gallery/ puis ajoute une ligne ici.
     La section n'apparaît que s'il y a au moins une photo. Exemple :
     { src: 'assets/img/gallery/01-hackathon-nexus.webp', tag: 'Hackathon',
       cap: { fr: 'Équipe DSM au hackathon Nexus HealthTech', en: 'DSM team at the Nexus HealthTech Hackathon' } }, */
  gallery: [
    { src: 'assets/img/gallery/01-hackathon-nexus-healthtech.webp', tag: 'Hackathon',
      cap: { fr: "Hackathon Nexus HealthTech · cheffe de l'équipe DSM", en: 'Nexus HealthTech Hackathon · DSM team leader' } },
    { src: 'assets/img/gallery/03-hackathon-equipe.webp', tag: 'Hackathon',
      cap: { fr: "L'équipe DSM : « Le code et le soin, ensemble »", en: 'The DSM team: “Code and care, together”' } },
    { src: 'assets/img/gallery/04-hackathon-pitch.webp', tag: 'Hackathon',
      cap: { fr: "Pitch de l'équipe DSM (MindCare AI)", en: 'DSM team pitch (MindCare AI)' } },
    { src: 'assets/img/gallery/05-forum-ingenieur-2025.webp', tag: 'Forum',
      cap: { fr: "Forum professionnel de l'ingénieur, EHEI Oujda · édition 2025", en: "Engineers' Professional Forum, EHEI Oujda · 2025 edition" } },
    { src: 'assets/img/gallery/06-forum-ingenieur-equipe.webp', tag: 'Forum',
      cap: { fr: "Forum professionnel de l'ingénieur 2025, avec mes camarades", en: "Engineers' Professional Forum 2025, with classmates" } },
    { src: 'assets/img/gallery/07-medays.webp', tag: 'MEDays',
      cap: { fr: 'MEDays, The Southern Forum', en: 'MEDays, The Southern Forum' } },
    { src: 'assets/img/gallery/08-medays-conference.webp', tag: 'MEDays',
      cap: { fr: 'Conférence aux MEDays (photo : Institut Amadeus)', en: 'Conference at MEDays (photo: Institut Amadeus)' } },
    { src: 'assets/img/gallery/09-medays-interview.webp', tag: 'MEDays',
      cap: { fr: 'Interview radio aux MEDays', en: 'Radio interview at MEDays' } },
    { src: 'assets/img/gallery/10-medays-delegation.webp', tag: 'MEDays',
      cap: { fr: 'Rencontre officielle lors des MEDays', en: 'Official meeting during MEDays' } },
    { src: 'assets/img/gallery/11-congres-logistique-cil25.webp', tag: 'Congrès',
      cap: { fr: 'Congrès international de logistique CIL-25', en: 'CIL-25 International Logistics Congress' } },
  ],


  /* ---------- Formation ---------- */
  education: [
    { main: true, when: '2022 – 2027',
      title: { fr: "Cycle ingénieur · Génie informatique, option IA", en: 'Engineering degree · Computer Engineering, AI track' },
      text: { fr: 'EHEIM (ex-EHEI), Oujda · diplôme prévu en juillet 2027', en: 'EHEIM (formerly EHEI), Oujda · graduation expected July 2027' } },
    { when: '2023 – 2026',
      title: { fr: 'Licence en études anglaises, filière littérature', en: "Bachelor's degree in English Studies, literature" },
      text: { fr: 'Faculté des Lettres et des Sciences Humaines, Oujda · mention Assez bien · suivie en parallèle du cycle ingénieur', en: 'Faculty of Letters and Human Sciences, Oujda · with honours (Assez bien) · completed alongside the engineering degree' } },
    { when: '2019 – 2022',
      title: { fr: 'DUT Génie biologique, option Analyses biologiques et biochimiques', en: 'DUT (two-year degree) in Biological Engineering, biological and biochemical analysis' },
      text: { fr: 'IUT de Créteil-Vitry, Université Paris-Est Créteil, France', en: 'IUT de Créteil-Vitry, Université Paris-Est Créteil, France' } },
    { when: '2019',
      title: { fr: 'Baccalauréat · mention Bien', en: 'Baccalaureate · with honours (Bien)' },
      text: { fr: 'Lycée Essalam, Oujda', en: 'Lycée Essalam, Oujda' } },
  ],

  /* ---------- Certifications et attestations ----------
     image : fichier dans assets/img/certificates/ (ou null) ; url : lien de vérification (ou null) */
  certifications: [
    { name: { fr: 'Hackathon Nexus HealthTech · attestation de participation', en: 'Nexus HealthTech Hackathon · certificate of participation' }, issuer: 'CIRMSS · Oujda', date: { fr: 'nov. 2026', en: 'Nov 2026' }, image: 'assets/img/certificates/01-hackathon-nexus-healthtech.webp', url: null },
    { name: { fr: 'DELF B2 (français)', en: 'DELF B2 (French)' }, issuer: 'France Éducation international', date: null, image: null, url: null },
    { name: { fr: 'Data Analytics with AI', en: 'Data Analytics with AI' }, issuer: 'SoloLearn', date: { fr: 'sept. 2026', en: 'Sep 2026' }, image: 'assets/img/certificates/02-sololearn-data-analytics-ai.webp', url: null },
    { name: { fr: 'Java (intermédiaire)', en: 'Java Intermediate' }, issuer: 'SoloLearn', date: { fr: 'juin 2025', en: 'Jun 2025' }, image: 'assets/img/certificates/03-sololearn-java-intermediate.webp', url: null },
    { name: { fr: 'SQL (intermédiaire)', en: 'SQL Intermediate' }, issuer: 'SoloLearn', date: { fr: 'avr. 2025', en: 'Apr 2025' }, image: 'assets/img/certificates/04-sololearn-sql-intermediate.webp', url: null },
    { name: { fr: 'Angular', en: 'Angular' }, issuer: 'SoloLearn', date: { fr: 'juil. 2025', en: 'Jul 2025' }, image: 'assets/img/certificates/07-sololearn-angular.webp', url: null },
    { name: { fr: 'Développement web', en: 'Web Development' }, issuer: 'SoloLearn', date: { fr: 'juin 2025', en: 'Jun 2025' }, image: 'assets/img/certificates/06-sololearn-web-development.webp', url: null },
    { name: { fr: 'Introduction à C++', en: 'Introduction to C++' }, issuer: 'SoloLearn', date: { fr: 'juin 2025', en: 'Jun 2025' }, image: 'assets/img/certificates/05-sololearn-intro-cpp.webp', url: null },
    { name: { fr: 'Rédaction assistée par IA (Write with AI)', en: 'Write with AI' }, issuer: 'SoloLearn', date: { fr: 'juin 2025', en: 'Jun 2025' }, image: 'assets/img/certificates/08-sololearn-write-with-ai.webp', url: null },
    { name: { fr: 'Introduction à Java', en: 'Introduction to Java' }, issuer: 'SoloLearn', date: { fr: 'mai 2025', en: 'May 2025' }, image: 'assets/img/certificates/09-sololearn-intro-java.webp', url: null },
    { name: { fr: 'Introduction à SQL', en: 'Introduction to SQL' }, issuer: 'SoloLearn', date: { fr: 'avr. 2025', en: 'Apr 2025' }, image: 'assets/img/certificates/10-sololearn-intro-sql.webp', url: null },
    { name: { fr: "Certificat d'expérimentation animale", en: 'Animal experimentation certificate' }, issuer: 'IUT de Créteil-Vitry', date: '2021', image: null, url: null },
  ],

};
