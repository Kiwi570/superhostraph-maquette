# Rapport d’audit

Projet : `superhostraph-maquette` · 23/11/2026 15:28:34 · 23 min · 6 page(s) · audit complet

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-140550-complet` · version ?v=2
- Échecs : **2**
- À regarder : **16**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (5), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (8), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | — dispensé | L’intro finit sur la marque : le « & » des volets rejoint celui de Madame&Monsieur dans l’en-tête, puis la page s’ouvre sur sa photo (data-iris-centre). |
| 3. La transition reprend le motif | ✓ présent | voile en persiennes |
| 4. Quelque chose relie les sections et les pages | — dispensé | Le « & » de Madame&Monsieur relie les pages : volets de l’intro, en-tête, voile entre les pages, macaron du classement, partenaires et signature du pied de page. |
| 5. Un titre fait l’événement sur chaque page | ⚠ à regarder | présent sur /chez-nous ; absent sur /chez-vous, /, /nos-villas, /renseignements |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-133842-rapide | rapide | toutes | toutes | 13 | 8 | 1 | échecs |
| 20261123-135110-rapide | rapide | toutes | toutes | 3 | 7 | 1 | échecs |
| 20261123-135824-rapide-partiel | rapide | toutes | parcours | 2 | 0 | 0 | échecs |
| **20261123-140550-complet** (celle-ci) | complet | toutes | toutes | 2 | 16 | 1 | échecs |

## Échecs

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/` — section#debut > a.ouv-defiler.ouv-anim « DÉCOUVRIR » — 27 × 98 px _(768×1024 normal, 768×1024 sansJs, 768×1024 sansWebgl)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/chez-vous` — #service-accueil > .famille-texte > .famille-numero[aria-hidden="true"] ; #service-accueil > .famille-texte > .famille-titre ; #service-accueil > .famille-texte > .vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

## À regarder

### grille : aucun titre ne fait l’événement (point 5) (4)

- **grille : aucun titre ne fait l’événement (point 5)** — `/chez-vous` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/nos-villas` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/renseignements` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (6)

- **section sans visuel** — `/chez-nous` — section#station « Une station balnéaire au charme méditerranéen, ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-nous` — section#activites « Ce que l’on fait ici La mer Sports nautiques, plon » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-nous` — section#partenaires « Nos partenaires Les adresses et les professionnels » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-vous` — section#temps « Votre séjour, en quatre temps Avant Courses faites » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-vous` — section#inclus « Dans nos villas, d’office Linge de maison et servi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/renseignements` — section#demande « Préparons votre séjour Trois étapes : la villa et  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl)_

### contraste sur image (1)

- **contraste sur image** — `/chez-nous` — section#debut > div.ouv-texte.conteneur > p.surtitre.ouv-anim:nth-of-type(1) « SAINT-RAPHAËL » — 4.29:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1), ombre portée à vérifier _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 80 ms (différence 21 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/nos-villas` — à 77 ms (différence 30 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/chez-nous` — écran différent à la même position après rechargement (6.4 %), voir comparaisons/rechargement-chez-nous-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/nos-villas` — écran différent à la même position après rechargement (4.3 %), voir comparaisons/rechargement-nos-villas-*.png _(1366×768)_

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
- Journal v2 : 2 étape(s) notée(s), 53 min de travail pour 55 min de budget, 0 min d’attente de l’utilisateur.
- Grille wouahou : point « 2. L’intro devient la page » dispensé (config.json) : L’intro finit sur la marque : le « & » des volets rejoint celui de Madame&Monsieur dans l’en-tête, puis la page s’ouvre sur sa photo (data-iris-centre)..
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : Le « & » de Madame&Monsieur relie les pages : volets de l’intro, en-tête, voile entre les pages, macaron du classement, partenaires et signature du pied de page..
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2764 ms depuis le premier octet
- Ouverture /chez-nous (1366×768) : 2646 ms depuis le premier octet
- film de l'ouverture /chez-nous 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /chez-vous (1366×768) : 2679 ms depuis le premier octet
- Ouverture /nos-villas (1366×768) : 2647 ms depuis le premier octet
- Ouverture /renseignements (1366×768) : 2671 ms depuis le premier octet
- Ouverture / (390×844) : 2777 ms depuis le premier octet
- Ouverture /chez-nous (390×844) : 2639 ms depuis le premier octet
- Ouverture /chez-vous (390×844) : 2666 ms depuis le premier octet
- Ouverture /nos-villas (390×844) : 2637 ms depuis le premier octet
- Ouverture /renseignements (390×844) : 2676 ms depuis le premier octet
- Bords de l’écran / (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran /chez-nous (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran /chez-vous (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran /nos-villas (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- bords de l’écran /nos-villas 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran /renseignements (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- bords de l’écran /renseignements 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran / (1920×1080) : aucune image où l’intro couvre tout l’écran, rien à juger.
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 0 images d’intro, 11 de voile et 134 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /nos-villas : aucune section épinglée ou plein écran.
- Tient dans l'écran /renseignements : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 437, tâche la plus longue 57 ms
- Fluidité /chez-nous 1366×768 (molette) : 0 % d'images lentes sur 336, tâche la plus longue 0 ms
- Fluidité /chez-vous 1366×768 (molette) : 0 % d'images lentes sur 335, tâche la plus longue 0 ms
- Fluidité /nos-villas 1366×768 (molette) : 0 % d'images lentes sur 331, tâche la plus longue 0 ms
- Fluidité /renseignements 1366×768 (molette) : 0 % d'images lentes sur 179, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1360, tâche la plus longue 55 ms
- Fluidité /chez-nous 390×844 (doigt) : 0 % d'images lentes sur 1367, tâche la plus longue 0 ms
- Fluidité /chez-vous 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /nos-villas 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Fluidité /renseignements 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Vitesse / : 0.64 s de calcul au chargement (téléphone ralenti).
- Vitesse /chez-nous : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /chez-vous : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /nos-villas : 0.51 s de calcul au chargement (téléphone ralenti).
- Vitesse /renseignements : 0.40 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/chez-vous --seulement=fichiers,mesures
```
