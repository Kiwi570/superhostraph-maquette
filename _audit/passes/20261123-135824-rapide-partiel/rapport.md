# Rapport d’audit

Projet : `superhostraph-maquette` · 23/11/2026 15:01:15 · 3 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison (étapes : parcours)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261123-135824-rapide-partiel` · version ?v=2
- Échecs : **2**
- À regarder : **0**
- Non lancé : **0**
- Contrôles passés : intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (16), liens vers la page en cours (1), changements de hauteur (1), parcours du projet (1)

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-133842-rapide | rapide | toutes | toutes | 13 | 8 | 1 | échecs |
| 20261123-135110-rapide | rapide | toutes | toutes | 3 | 7 | 1 | échecs |
| **20261123-135824-rapide-partiel** (celle-ci) | rapide | toutes | parcours | 2 | 0 | 0 | échecs |

## Échecs

### lien profond (2)

- **lien profond** — `/ → /nos-villas#villa-chez-nous` — section pas en haut de l'écran (3152 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /nos-villas#villa-uccelli` — section pas en haut de l'écran (1223 px) _(1366×768 lien profond)_

## À regarder

Rien.

## Non lancé

Tout a été lancé.


## Repères

- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,parcours
```
