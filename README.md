# Portfolio · Douae Derouich

Portfolio bilingue (français / anglais) en HTML, CSS et JavaScript, sans outil de build.
En ligne : **https://douaedr.github.io/**

## Mettre à jour le contenu

Tout le contenu est dans **`assets/js/data.js`**. Il n'est pas nécessaire de toucher aux autres fichiers.

| Je veux… | Dans `data.js` |
|---|---|
| Changer l'e-mail, LinkedIn, GitHub, la ville | `profile` |
| Ajouter mes CV (boutons de téléchargement) | `cv` + fichiers dans `assets/cv/` |
| Ajouter / retirer une compétence | `skills` |
| Ajouter un projet | `projects` (copier un bloc existant) |
| Ajouter un projet en cours | `inProgress` |
| Ajouter un stage | `internships` |
| Ajouter un événement, un engagement | `activities` |
| Ajouter des photos | `gallery` + fichiers dans `assets/img/gallery/` |
| Ajouter une attestation en image | `certifications` (champ `image`) + fichier dans `assets/img/certificates/` |

Chaque texte s'écrit en deux langues : `{ fr: '…', en: '…' }`.

### Ajouter des captures à un projet

1. Dépose les images dans `assets/img/projects/<id-du-projet>/` (webp, png ou jpg, idéalement < 400 Ko, par exemple avec [squoosh.app](https://squoosh.app)).
2. Ajoute-les dans `shots` du projet. La première sert de couverture.

### Ajouter une vidéo de démo

Mets la vidéo sur YouTube en « Non répertoriée », puis indique son identifiant (la partie après `v=`) dans `youtube`.

## Publier

```powershell
git add .
git commit -m "Mise à jour du portfolio"
git push
```

GitHub Pages met le site à jour en une ou deux minutes.

## Tester sur son PC

Ouvre le dossier dans un terminal, puis :

```powershell
python -m http.server 8000
```

et va sur http://localhost:8000.

## Fonctionnalités

- Bouton FR / EN (le choix est mémorisé ; par défaut, langue du navigateur)
- Projets avec filtres, fiche détaillée, captures en plein écran et vidéo
- Frise des stages, événements, galerie photo, certifications
- Téléchargement du CV FR / EN, QR code vers le portfolio
- Version imprimable (Ctrl + P), aperçu LinkedIn / WhatsApp (Open Graph), accessibilité clavier
