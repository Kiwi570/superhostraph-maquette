# Rapport d’audit

Projet : `superhostraph-maquette` · 20/11/2026 23:38:24 · 16 min · 6 page(s) · audit standard

## Résumé

- Statut : **11 échec(s)**
- Passe : `20261120-222209-standard` · version ?v=1
- Échecs : **11**
- À regarder : **16**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (8), films de transition (8), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (4), parcours du projet (1), tient dans l’écran (5), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (4), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-220016-rapide-cible | rapide | /,/nos-villas,/chez-vous,/chez-nous,/renseignements | toutes | 44 | 39 | 1 | échecs |
| **20261120-222209-standard** (celle-ci) | standard | toutes | toutes | 11 | 16 | 1 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/` — div.rangee:nth-of-type(2) > ul.rangee-piste > li.rangee-carte:nth-of-type(4) > p « Les villas Belle Époque » — coupé par section#lieux > div.rangee:nth-of-type(2) « L’Île d’Or Les criques Le port Les villas Belle Ép » _(768×1024 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### textes qui se chevauchent (5)

- **textes qui se chevauchent** — `/` — section#debut > div.ouv-texte.conteneur > p.surtitre.ouv-anim:nth-of-type(1) « CONCIERGERIE PRIVÉE · SAINT-RAPHAËL » — avec div.ouv-texte.conteneur > h1.ouv-titre > span.ligne:nth-of-type(1) > span.ligne-in « L’excellence » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/chez-nous` — section#debut > div.ouv-texte.conteneur > p.surtitre.ouv-anim:nth-of-type(1) « SAINT-RAPHAËL » — avec div.ouv-texte.conteneur > h1.ouv-titre > span.ligne:nth-of-type(1) > span.ligne-in « Chez nous… » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/chez-vous` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.surtitre.ouv-anim:nth-of-type(1) « LES SERVICES » — avec div.ouv-scindee-texte:nth-of-type(1) > h1.ouv-titre.ouv-titre--sombre > span.ligne:nth-of-type(1) > span.ligne-in « Chez vous… » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/renseignements` — div.conteneur.demande-grille:nth-of-type(2) > form.formulaire.etapes > ol.etapes-fil > li:nth-of-type(2) « LES VOYAGEURS » — avec div.conteneur.demande-grille:nth-of-type(2) > form.formulaire.etapes > ol.etapes-fil > li:nth-of-type(3) « VOS COORDONNÉES » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/renseignements` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.surtitre.ouv-anim:nth-of-type(1) « RENSEIGNEMENTS » — avec div.ouv-scindee-texte:nth-of-type(1) > h1.ouv-titre.ouv-titre--sombre > span.ligne:nth-of-type(1) > span.ligne-in « Parlons de » _(1920×1080 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.ouv-info.ouv-info--sombre:nth-of-type(4) « 19 VILLAS · DE 4 À 12 VOYAGEURS · DE VALESCURE À A » _(844×390 normal)_

### ne tient pas dans l’écran (3)

- **ne tient pas dans l’écran** — `/chez-nous` — section#esterel > div > p.esterel-mots:nth-of-type(1) « L’Estérel plonge dans la mer » — coupé en bas de 4 px (à 4 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_
- **ne tient pas dans l’écran** — `/chez-nous` — section#esterel > div > p.esterel-mots:nth-of-type(1) « L’Estérel plonge dans la mer » — coupé en bas de 4 px (à 50 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_
- **ne tient pas dans l’écran** — `/chez-nous` — section#esterel > div > p.esterel-mots:nth-of-type(1) « L’Estérel plonge dans la mer » — coupé en bas de 4 px (à 96 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `renseignements.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

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

### texte de contenu sous 13 px (ordinateur) (2)

- **texte de contenu sous 13 px (ordinateur)** — `/` — a.villa-lien > div.villa-image:nth-of-type(1) > span.villa-badges > span.badge « Meublé de tourisme ★★★★★ » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/nos-villas` — article.villa-carte > div.villa-image:nth-of-type(1) > span.villa-badges > span.badge « Meublé de tourisme ★★★★★ » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### section sans visuel (6)

- **section sans visuel** — `/chez-nous` — section#station « Une station balnéaire au charme méditerranéen, ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/chez-nous` — section#activites « Ce que l’on fait ici La mer Sports nautiques, plon » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/chez-nous` — section#partenaires « Nos partenaires Les adresses et les professionnels » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/chez-vous` — section#temps « Votre séjour, en quatre temps Avant Courses faites » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/chez-vous` — section#inclus « Dans nos villas, d’office Linge de maison et servi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/renseignements` — section#demande « Votre demande Trois étapes : la villa et les dates » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 320×568 sansJs)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/nos-villas` — à 67 ms (différence 55 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/` — div.rangee — rangee : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(390×844 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 42 min de travail pour 75 min de budget, 4 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 7 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /chez-vous, /nos-villas, /renseignements.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2701 ms depuis le premier octet
- film de l'ouverture / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /chez-vous (1366×768) : 2661 ms depuis le premier octet
- Ouverture /nos-villas (1366×768) : 2693 ms depuis le premier octet
- film de l'ouverture /nos-villas 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /renseignements (1366×768) : 2755 ms depuis le premier octet
- Ouverture / (390×844) : 2776 ms depuis le premier octet
- Ouverture /chez-vous (390×844) : 2657 ms depuis le premier octet
- film de l'ouverture /chez-vous 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /nos-villas (390×844) : 2652 ms depuis le premier octet
- Ouverture /renseignements (390×844) : 2693 ms depuis le premier octet
- Bords de l’écran / (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran /chez-vous (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran /nos-villas (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran /renseignements (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran / (1920×1080) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran : 0 images d’intro, 10 de voile et 110 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /nos-villas : aucune section épinglée ou plein écran.
- Tient dans l'écran /renseignements : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 379, tâche la plus longue 55 ms
- Fluidité /chez-vous 1366×768 (molette) : 0 % d'images lentes sur 333, tâche la plus longue 0 ms
- Fluidité /nos-villas 1366×768 (molette) : 0 % d'images lentes sur 324, tâche la plus longue 0 ms
- Fluidité /renseignements 1366×768 (molette) : 0 % d'images lentes sur 174, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1361, tâche la plus longue 0 ms
- Fluidité /chez-vous 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /nos-villas 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /renseignements 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.64 s de calcul au chargement (téléphone ralenti).
- Vitesse /chez-nous : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /chez-vous : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /nos-villas : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /renseignements : 0.54 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/chez-nous,/chez-vous,/renseignements --seulement=fichiers,mesures,ecran
```
