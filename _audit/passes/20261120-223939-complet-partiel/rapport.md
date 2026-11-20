# Rapport d’audit

Projet : `superhostraph-maquette` · 20/11/2026 23:46:11 · 7 min · 6 page(s) · audit complet (étapes : fichiers, mesures, ecran)

## Résumé

- Statut : **8 échec(s)**
- Passe : `20261120-223939-complet-partiel` · version ?v=1
- Échecs : **8**
- À regarder : **7**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (234), balayage (5), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-220016-rapide-cible | rapide | /,/nos-villas,/chez-vous,/chez-nous,/renseignements | toutes | 44 | 39 | 1 | échecs |
| 20261120-222209-standard | standard | toutes | toutes | 11 | 16 | 1 | échecs |
| **20261120-223939-complet-partiel** (celle-ci) | complet | toutes | fichiers, mesures, ecran | 8 | 7 | 0 | échecs |

## Échecs

### texte coupé (2)

- **texte coupé** — `/` — div.rangee:nth-of-type(2) > ul.rangee-piste > li.rangee-carte:nth-of-type(5) > p « Les couchers de soleil » — coupé par section#lieux > div.rangee:nth-of-type(2) « L’Île d’Or Les criques Le port Les villas Belle Ép » _(1728×1000 normal, 1728×1000 sansWebgl)_
- **texte coupé** — `/` — div.rangee:nth-of-type(2) > ul.rangee-piste > li.rangee-carte:nth-of-type(7) > p « Le bord de mer sous les pins » — coupé par section#lieux > div.rangee:nth-of-type(2) « L’Île d’Or Les criques Le port Les villas Belle Ép » _(2560×1440 normal, 2560×1440 sansWebgl)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.ouv-actions.ouv-anim:nth-of-type(3) > a.bouton:nth-of-type(1) « Voir les villas » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : bouton principal hors de l’écran** — `/chez-vous` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.ouv-actions.ouv-anim:nth-of-type(3) > a.bouton « Composer mon séjour » _(1440×900 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.ouv-info.ouv-info--sombre:nth-of-type(4) « 19 VILLAS · DE 4 À 12 VOYAGEURS · DE VALESCURE À A » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/chez-vous` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.ouv-info.ouv-info--sombre:nth-of-type(4) « SERVICE HAUTE COUTURE DÈS VOTRE ARRIVÉE » _(1440×900 normal, 1440×900 sansJs, 1728×1000 sansJs, 1440×900 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/renseignements` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.ouv-info.ouv-info--sombre:nth-of-type(4) « RÉPONSE PAR TÉLÉPHONE OU PAR E-MAIL » _(1440×900 sansJs)_

### contraste sur image (1)

- **contraste sur image** — `/chez-nous` — section#debut > div.ouv-texte.conteneur > p.surtitre.ouv-anim:nth-of-type(1) « SAINT-RAPHAËL » — 4.46:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `renseignements.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (6)

- **section sans visuel** — `/chez-nous` — section#station « Une station balnéaire au charme méditerranéen, ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-nous` — section#activites « Ce que l’on fait ici La mer Sports nautiques, plon » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-nous` — section#partenaires « Nos partenaires Les adresses et les professionnels » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-vous` — section#temps « Votre séjour, en quatre temps Avant Courses faites » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chez-vous` — section#inclus « Dans nos villas, d’office Linge de maison et servi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/renseignements` — section#demande « Votre demande Trois étapes : la villa et les dates » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 320×568 sansJs, 320×568 sansWebgl)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 42 min de travail pour 75 min de budget, 4 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 7 min pour 5 prévues.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /nos-villas : aucune section épinglée ou plein écran.
- Tient dans l'écran /renseignements : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/chez-nous,/chez-vous,/renseignements --seulement=fichiers,mesures
```
