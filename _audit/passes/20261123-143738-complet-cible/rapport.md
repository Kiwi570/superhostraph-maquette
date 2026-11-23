# Rapport d’audit

Projet : `superhostraph-maquette` · 23/11/2026 15:53:13 · 16 min · 4 page(s) · audit complet ciblé sur /,/chez-vous,/chez-nous,/404

## Résumé

- Statut : **12 échec(s)**
- Passe : `20261123-143738-complet-cible` · version ?v=2
- Échecs : **12**
- À regarder : **22**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (156), balayage (3), films d’ouverture (6), films de transition (6), bords de l’écran (4), intro accélérable et passable (7), menu (1), clavier (4), liens et boutons (4), liens profonds (16), liens vers la page en cours (3), changements de hauteur (3), parcours du projet (1), tient dans l’écran (8), fluidité (6), défilement selon l’appareil (5), mouvement (6), effets du plan (6), vitesse (3), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | — dispensé | L’intro finit sur la marque : le « & » des volets rejoint celui de Madame&Monsieur dans l’en-tête, puis la page s’ouvre sur sa photo (data-iris-centre). |
| 3. La transition reprend le motif | ✓ présent | voile en persiennes |
| 4. Quelque chose relie les sections et les pages | — dispensé | Le « & » de Madame&Monsieur relie les pages : volets de l’intro, en-tête, voile entre les pages, macaron du classement, partenaires et signature du pied de page. |
| 5. Un titre fait l’événement sur chaque page | ⚠ à regarder | présent sur /chez-nous ; absent sur /chez-vous, /, /nos-villas, /renseignements |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /nos-villas |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-133842-rapide | rapide | toutes | toutes | 13 | 8 | 1 | échecs |
| 20261123-135110-rapide | rapide | toutes | toutes | 3 | 7 | 1 | échecs |
| 20261123-135824-rapide-partiel | rapide | toutes | parcours | 2 | 0 | 0 | échecs |
| 20261123-140550-complet | complet | toutes | toutes | 2 | 16 | 1 | échecs |
| 20261123-143229-complet-cible-partiel | complet | /,/chez-vous,/chez-nous | fichiers, mesures | 0 | 5 | 0 | complet |
| **20261123-143738-complet-cible** (celle-ci) | complet | /,/chez-vous,/chez-nous,/404 | toutes | 12 | 22 | 1 | échecs |

## Échecs

### mention « Illustration générée » absente (12)

- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(2) > picture > img « Îlot de cuisine impeccable, bouquet d’hortensias b » — service-entretien-640.webp _(1024×768 normal, 1280×720 normal, 1024×768 sansWebgl, 1280×720 sansWebgl)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(3) > picture > img « Berline sombre portière ouverte dans une allée de  » — service-transfert-640.webp _(1024×768 normal, 1280×720 normal, 1024×768 sansWebgl, 1280×720 sansWebgl)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(4) > picture > img « Tomates anciennes, huile d’olive, basilic et casse » — service-chef-640.webp _(1024×768 normal, 1280×720 normal, 1024×768 sansWebgl, 1280×720 sansWebgl)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(5) > picture > img « Lit à barreaux blanc avec langes pliés dans une ch » — service-bebe-640.webp _(1024×768 normal, 1280×720 normal, 1024×768 sansWebgl, 1280×720 sansWebgl)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(2) > picture > img « Îlot de cuisine impeccable, bouquet d’hortensias b » — service-entretien-960.webp _(1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, 1366×768 sansWebgl, 1440×900 sansWebgl, +2)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(3) > picture > img « Berline sombre portière ouverte dans une allée de  » — service-transfert-960.webp _(1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, 1366×768 sansWebgl, 1440×900 sansWebgl, +2)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(4) > picture > img « Tomates anciennes, huile d’olive, basilic et casse » — service-chef-960.webp _(1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, 1366×768 sansWebgl, 1440×900 sansWebgl, +2)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(5) > picture > img « Lit à barreaux blanc avec langes pliés dans une ch » — service-bebe-960.webp _(1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, 1366×768 sansWebgl, 1440×900 sansWebgl, +2)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(2) > picture > img « Îlot de cuisine impeccable, bouquet d’hortensias b » — service-entretien-1168.webp _(2560×1440 normal, 2560×1440 sansWebgl)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(3) > picture > img « Berline sombre portière ouverte dans une allée de  » — service-transfert-1168.webp _(2560×1440 normal, 2560×1440 sansWebgl)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(4) > picture > img « Tomates anciennes, huile d’olive, basilic et casse » — service-chef-1168.webp _(2560×1440 normal, 2560×1440 sansWebgl)_
- **mention « Illustration générée » absente** — `/chez-vous` — div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(5) > picture > img « Lit à barreaux blanc avec langes pliés dans une ch » — service-bebe-1168.webp _(2560×1440 normal, 2560×1440 sansWebgl)_

## À regarder

### grille : aucun titre ne fait l’événement (point 5) (4)

- **grille : aucun titre ne fait l’événement (point 5)** — `/chez-vous` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/nos-villas` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"
- **grille : aucun titre ne fait l’événement (point 5)** — `/renseignements` — absent de cette page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### texte de contenu sous 13 px (ordinateur) (12)

- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.apercu-grille > li.apercu-carte:nth-of-type(2) > figure.media.apercu-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1728×1000 normal, 1440×900 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.apercu-grille > li.apercu-carte:nth-of-type(3) > figure.media.apercu-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1728×1000 normal, 1440×900 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.conteneur.apercu-grille > li.apercu-carte:nth-of-type(4) > figure.media.apercu-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1728×1000 normal, 1440×900 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > div.ouv-scindee-image:nth-of-type(2) > figure.media.ouv-scindee-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — div.familles-scene:nth-of-type(2) > div.familles-pile:nth-of-type(1) > figure.media.famille-media:nth-of-type(6) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — article#service-accueil > div.famille-texte:nth-of-type(2) > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — article#service-famille > div.famille-texte:nth-of-type(2) > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — article#service-entretien > div.famille-images:nth-of-type(1) > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — article#service-mobilite > div.famille-images:nth-of-type(1) > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — article#service-table > div.famille-images:nth-of-type(1) > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — article#service-famille > div.famille-images:nth-of-type(1) > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — article#service-demande > div.famille-images:nth-of-type(1) > figure.media.famille-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 sansJs, 1280×720 sansJs, 1366×768 sansJs, 1440×900 sansJs, 1728×1000 sansJs, 1920×1080 sansJs, +1)_

### section sans visuel (5)

- **section sans visuel** — `/chez-nous` — section#station « Une station balnéaire au charme méditerranéen, ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-nous` — section#activites « Ce que l’on fait ici La mer Sports nautiques, plon » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-nous` — section#partenaires « Nos partenaires Les adresses et les professionnels » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-vous` — section#temps « Votre séjour, en quatre temps Avant Courses faites » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-vous` — section#inclus « Dans nos villas, d’office Linge de maison et servi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/chez-nous` — écran différent à la même position après rechargement (6.4 %), voir comparaisons/rechargement-chez-nous-*.png _(1366×768)_

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
- Ouverture / (1366×768) : 2833 ms depuis le premier octet
- Ouverture /chez-nous (1366×768) : 2688 ms depuis le premier octet
- film de l'ouverture /chez-nous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /chez-vous (1366×768) : 2675 ms depuis le premier octet
- Ouverture / (390×844) : 2809 ms depuis le premier octet
- Ouverture /chez-nous (390×844) : 2637 ms depuis le premier octet
- film de l'ouverture /chez-nous 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /chez-vous (390×844) : 2716 ms depuis le premier octet
- Bords de l’écran / (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran /chez-nous (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- bords de l’écran /chez-nous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran /chez-vous (1366×768) : aucune image où l’intro couvre tout l’écran, rien à juger.
- Bords de l’écran / (1920×1080) : aucune image où l’intro couvre tout l’écran, rien à juger.
- bords de l’écran / 1920×1080 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 0 images d’intro, 5 de voile et 88 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chez-vous : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 377, tâche la plus longue 57 ms
- Fluidité /chez-nous 1366×768 (molette) : 0 % d'images lentes sur 333, tâche la plus longue 0 ms
- Fluidité /chez-vous 1366×768 (molette) : 0 % d'images lentes sur 322, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1359, tâche la plus longue 0 ms
- Fluidité /chez-nous 390×844 (doigt) : 0 % d'images lentes sur 1360, tâche la plus longue 0 ms
- Fluidité /chez-vous 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Vitesse / : 0.57 s de calcul au chargement (téléphone ralenti).
- Vitesse /chez-nous : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /chez-vous : 0.33 s de calcul au chargement (téléphone ralenti).

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
