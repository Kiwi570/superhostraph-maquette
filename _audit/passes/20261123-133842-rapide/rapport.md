# Rapport d’audit

Projet : `superhostraph-maquette` · 23/11/2026 14:44:30 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **13 échec(s)**
- Passe : `20261123-133842-rapide` · version ?v=2
- Échecs : **13**
- À regarder : **8**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (6), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en persiennes |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### texte coupé (3)

- **texte coupé** — `/` — footer#pied > p.pied-signature > span:nth-of-type(1) « Madame » — coupé par footer#pied > p.pied-signature « Madame & Monsieur » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/` — footer#pied > p.pied-signature > span:nth-of-type(2) « Monsieur » — coupé par footer#pied > p.pied-signature « Madame & Monsieur » _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/` — footer#pied > p.pied-signature > em « & » — coupé par footer#pied > p.pied-signature « Madame & Monsieur » _(390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/` — svg.macaron > g.macaron-tour > text > textpath — avec div.conteneur.confiance-grille:nth-of-type(1) > div.confiance-tete:nth-of-type(1) > svg.macaron > text.macaron-etoiles:nth-of-type(1) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — svg.macaron > g.macaron-tour > text > textpath — avec div.conteneur.confiance-grille:nth-of-type(1) > div.confiance-tete:nth-of-type(1) > svg.macaron > text.macaron-amp:nth-of-type(2) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.confiance-grille:nth-of-type(1) > div.confiance-tete:nth-of-type(1) > svg.macaron > text.macaron-etoiles:nth-of-type(1) — avec div.conteneur.confiance-grille:nth-of-type(1) > div.confiance-tete:nth-of-type(1) > svg.macaron > text.macaron-amp:nth-of-type(2) _(390×844 normal, 390×844 sansWebgl, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_

### lien mort (6)

- **lien mort** — `/` — /nos-villas?secteur=valescure#catalogue
- **lien mort** — `/` — /nos-villas?secteur=boulouris#catalogue
- **lien mort** — `/` — /nos-villas?secteur=santa-lucia#catalogue
- **lien mort** — `/` — /nos-villas?secteur=dramont#catalogue
- **lien mort** — `/` — /nos-villas?secteur=agay#catalogue
- **lien mort** — `/` — /nos-villas?secteur=antheor#catalogue

### lien profond (1)

- **lien profond** — `/ → /nos-villas#villa-dolce-vita` — section pas en haut de l'écran (1866 px) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `renseignements.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/site.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2766 ms depuis le premier octet
- Ouverture / (390×844) : 2799 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran / (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 0 images d’intro, 3 de voile et 22 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 389, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Vitesse / : 0.56 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
