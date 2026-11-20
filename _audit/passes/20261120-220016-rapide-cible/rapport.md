# Rapport d’audit

Projet : `superhostraph-maquette` · 20/11/2026 23:17:30 · 17 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/nos-villas,/chez-vous,/chez-nous,/renseignements

## Résumé

- Statut : **44 échec(s)**
- Passe : `20261120-220016-rapide-cible` · version ?v=1
- Échecs : **44**
- À regarder : **39**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (30), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (2), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), vitesse (5), captures (1)

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

### image de partage (5)

- **image de partage** — `chez-nous.html` — fichier introuvable : /assets/partage/chez-nous-fr.jpg
- **image de partage** — `chez-vous.html` — fichier introuvable : /assets/partage/chez-vous-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `nos-villas.html` — fichier introuvable : /assets/partage/villas-fr.jpg
- **image de partage** — `renseignements.html` — fichier introuvable : /assets/partage/renseignements-fr.jpg

### texte sous 12 px (3)

- **texte sous 12 px** — `/` — a.villa-lien > div.villa-image:nth-of-type(1) > span.villa-badges > span.badge « Meublé de tourisme ★★★★★ » — 11.8 px _(390×844 sansWebgl, 390×844 normal, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/nos-villas` — article.villa-carte > div.villa-image:nth-of-type(1) > span.villa-badges > span.badge « Meublé de tourisme ★★★★★ » — 11.8 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **texte sous 12 px** — `/nos-villas` — article.villa-carte > div.villa-image:nth-of-type(1) > span.villa-badges > span.badge.badge--clair « Nouveauté » — 11.8 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/` — section#confiance > div.mots:nth-of-type(2) > p:nth-of-type(1) « Valescure · Boulouris · Santa Lucia · Le Dramont · » — 1.00:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **contraste insuffisant** — `/` — section#confiance > div.mots:nth-of-type(2) > p:nth-of-type(2) « Airbnb · VRBO · Booking · WAY · Madame&Monsieur ·  » — 1.33:1 (minimum 3:1) _(390×844 sansWebgl, 390×844 normal, 1366×768 normal, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte.conteneur > p.ouv-info.ouv-anim:nth-of-type(4) « 19 VILLAS · DE 4 À 12 VOYAGEURS · DE VALESCURE À A » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/chez-nous` — section#debut > div.ouv-texte.conteneur > p.ouv-actions.ouv-anim:nth-of-type(2) > span.ouv-info « ENTRE CANNES ET SAINT-TROPEZ » _(390×844 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/renseignements` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.ouv-info.ouv-info--sombre:nth-of-type(4) « RÉPONSE PAR TÉLÉPHONE OU PAR E-MAIL » _(320×568 sansJs)_

### texte coupé (1)

- **texte coupé** — `/` — div.rangee:nth-of-type(2) > ul.rangee-piste > li.rangee-carte:nth-of-type(4) > p « Les villas Belle Époque » — coupé par section#lieux > div.rangee:nth-of-type(2) « L’Île d’Or Les criques Le port Les villas Belle Ép » _(844×390 normal)_

### élément recouvert (4)

- **élément recouvert** — `/` — div.conteneur:nth-of-type(2) > div.cote-carte.allumee > svg.cote-svg > g.cote-repere.allume:nth-of-type(5) — par div.conteneur:nth-of-type(2) > div.cote-carte.allumee > svg.cote-svg > path.cote-mer:nth-of-type(1) _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/` — div.conteneur:nth-of-type(2) > div.cote-carte.allumee > svg.cote-svg > g.cote-repere.allume:nth-of-type(4) — par div.conteneur:nth-of-type(2) > div.cote-carte.allumee > svg.cote-svg > path.cote-mer:nth-of-type(1) _(1366×768 normal)_
- **élément recouvert** — `/renseignements` — div.conteneur.joindre-grille > div.cote-carte.cote-carte--compacte:nth-of-type(2) > svg.cote-svg > g.cote-repere.allume:nth-of-type(5) — par div.conteneur.joindre-grille > div.cote-carte.cote-carte--compacte:nth-of-type(2) > svg.cote-svg > path.cote-mer:nth-of-type(1) _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/renseignements` — div.conteneur.joindre-grille > div.cote-carte.cote-carte--compacte:nth-of-type(2) > svg.cote-svg > g.cote-repere.allume:nth-of-type(4) — par div.conteneur.joindre-grille > div.cote-carte.cote-carte--compacte:nth-of-type(2) > svg.cote-svg > path.cote-mer:nth-of-type(1) _(1366×768 normal)_

### contraste sur image (1)

- **contraste sur image** — `/` — h1.ouv-titre > span.ligne:nth-of-type(2) > span.ligne-in > em « signature » — 2.71:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_

### accessibilité (axe) : color-contrast (2)

- **accessibilité (axe) : color-contrast** — `/` — a[href="/nos-villas#villa-chez-nous"] > .villa-texte > .villa-secteur ; a[href="/nos-villas#villa-chez-nous"] > .villa-texte > .villa-capacite ; a[href="/nos-villas#villa-chez-nous"] > .villa-texte > .villa-prix > .prix-nuit — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/` — p[data-sens="-1"] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/chez-nous` — section#esterel > div > p.esterel-mots:nth-of-type(1) > span:nth-of-type(2) « plonge dans la mer » — avec section#esterel > div > p.esterel-legende:nth-of-type(2) « Les rochers rouges de l’Estérel, entre Agay et Ant » _(320×568 sansJs)_

### photo faible affichée en grand (4)

- **photo faible affichée en grand** — `/chez-nous` — li.mosaique-carte.mosaique-carte--1:nth-of-type(1) > figure.media.mosaique-media > picture > img « L’Île d’Or et sa tour au coucher du soleil » — lieu-ile-d-or (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/chez-nous` — li.mosaique-carte.mosaique-carte--2:nth-of-type(2) > figure.media.mosaique-media > picture > img « Crique entre les rochers rouges, mer bleue » — lieu-crique (4/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/chez-nous` — li.mosaique-carte.mosaique-carte--9:nth-of-type(9) > figure.media.mosaique-media > picture > img « Front de mer de Saint-Raphaël, palmiers et dômes d » — lieu-front-de-mer (3/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/chez-nous` — li.mosaique-carte.mosaique-carte--10:nth-of-type(10) > figure.media.mosaique-media > picture > img « Le port et la grande roue » — lieu-vieux-port (3/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### titres dans l’ordre (1)

- **titres dans l’ordre** — `/nos-villas` — li#villa-palmeraie > article.villa-carte > div.villa-texte:nth-of-type(2) > h3.villa-nom « La Palmeraie » — h1 suivi de h3 _(390×844 normal, 390×844 sansJs, 1366×768 normal)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/renseignements` — input#f-nouvelles — 22 × 48 px _(390×844 sansJs, 320×568 sansJs)_

### bords de l’écran : bande d’une autre couleur le long du bord du haut pendant l’intro (5)

- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant l’intro** — `/` — bande en rgb(74, 110, 126) à côté de l’intro en rgb(20, 53, 69), sur 19 image(s) sur 106 (films/bords-intro-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant l’intro** — `/chez-nous` — bande en rgb(43, 85, 107) à côté de l’intro en rgb(20, 53, 69), sur 16 image(s) sur 94 (films/bords-intro-chez-nous-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant l’intro** — `/chez-vous` — bande en rgb(78, 113, 129) à côté de l’intro en rgb(20, 53, 69), sur 18 image(s) sur 115 (films/bords-intro-chez-vous-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant l’intro** — `/nos-villas` — bande en rgb(75, 110, 127) à côté de l’intro en rgb(20, 53, 69), sur 21 image(s) sur 120 (films/bords-intro-nos-villas-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du haut pendant l’intro** — `/renseignements` — bande en rgb(42, 84, 106) à côté de l’intro en rgb(20, 53, 69), sur 19 image(s) sur 109 (films/bords-intro-renseignements-1366.png) _(1366×768 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord du bas pendant l’intro (3)

- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant l’intro** — `/chez-vous` — bande en rgb(245, 241, 234) à côté de l’intro en rgb(19, 49, 64), sur 39 image(s) sur 115 (films/bords-intro-chez-vous-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant l’intro** — `/nos-villas` — bande en rgb(245, 241, 234) à côté de l’intro en rgb(19, 49, 64), sur 43 image(s) sur 120 (films/bords-intro-nos-villas-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant l’intro** — `/renseignements` — bande en rgb(245, 241, 234) à côté de l’intro en rgb(19, 49, 64), sur 36 image(s) sur 109 (films/bords-intro-renseignements-1366.png) _(1366×768 barre de défilement classique (15 px))_

### fiche (1)

- **fiche** — `/nos-villas` — photo suivante : compteur « NaN / 0 » _(undefined×undefined)_

### ne tient pas dans l’écran (3)

- **ne tient pas dans l’écran** — `/chez-nous` — section#esterel > div > p.esterel-mots:nth-of-type(1) « L’Estérel plonge dans la mer » — coupé en bas de 4 px (à 4 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/chez-nous` — section#esterel > div > p.esterel-mots:nth-of-type(1) « L’Estérel plonge dans la mer » — coupé en bas de 4 px (à 50 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/chez-nous` — section#esterel > div > p.esterel-mots:nth-of-type(1) « L’Estérel plonge dans la mer » — coupé en bas de 4 px (à 96 % de la scène) _(1000×560 épinglé, 1366×768 épinglé)_

### section sans effet au défilement (2)

- **section sans effet au défilement** — `/nos-villas` — section#catalogue.catalogue — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_
- **section sans effet au défilement** — `/renseignements` — section#demande.demande — aucun élément data-effet (bibliothèque : data-anime="lignes|mots|lettres|cascade|rideau", data-fx ; ou effet du projet marqué data-effet) _(1366×768 normal, 390×844 normal)_

### effet qui dérive sous la souris immobile (2)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] onde — l’image change encore 1.4 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_
- **effet qui dérive sous la souris immobile** — `/` — [data-souris] magnetique — l’image change encore 8.5 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

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

### texte de contenu sous 13 px (ordinateur) (24)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.ouv-texte.conteneur > p.surtitre.ouv-anim:nth-of-type(1) « CONCIERGERIE PRIVÉE · SAINT-RAPHAËL » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#esprit > div.conteneur.manifeste-grille > div.manifeste-texte > p.surtitre:nth-of-type(1) « PLUS QU’UN LIEU DE VIE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#collection > div.conteneur.collection-tete > div:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA COLLECTION » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#collection > div.conteneur.collection-tete > div.curseur-voyageurs:nth-of-type(2) > label « NOMBRE DE VOYAGEURS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.villa:nth-of-type(2) > a.villa-lien > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.villa:nth-of-type(3) > a.villa-lien > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.villa:nth-of-type(4) > a.villa-lien > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.villa:nth-of-type(6) > a.villa-lien > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#cote > div.conteneur.cote-tete:nth-of-type(1) > p.surtitre:nth-of-type(1) « ENTRE CANNES ET SAINT-TROPEZ » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-nous` — section#debut > div.ouv-texte.conteneur > p.surtitre.ouv-anim:nth-of-type(1) « SAINT-RAPHAËL » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/chez-vous` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.surtitre.ouv-anim:nth-of-type(1) « LES SERVICES » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/nos-villas` — section#debut > div.conteneur.ouv-villas-texte:nth-of-type(1) > p.surtitre.ouv-anim « LA COLLECTION » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/nos-villas` — div.conteneur > form.filtres > fieldset.filtre:nth-of-type(2) > legend « BUDGET PAR NUIT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/nos-villas` — li#villa-palmeraie > article.villa-carte > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/nos-villas` — li#villa-dolce-vita > article.villa-carte > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/nos-villas` — li#villa-estaou > article.villa-carte > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/nos-villas` — li#villa-soleada > article.villa-carte > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/nos-villas` — li#villa-mas-mirabelle > article.villa-carte > div.villa-texte:nth-of-type(2) > p.villa-secteur:nth-of-type(1) « AGAY · CAP ESTÉREL » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/renseignements` — section#debut > div.ouv-scindee-texte:nth-of-type(1) > p.surtitre.ouv-anim:nth-of-type(1) « RENSEIGNEMENTS » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/renseignements` — div.conteneur.demande-grille > form.formulaire.etapes > ol.etapes-fil > li.actif:nth-of-type(1) « LA VILLA ET LES DATES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/renseignements` — div.conteneur.demande-grille > form.formulaire.etapes > ol.etapes-fil > li:nth-of-type(2) « LES VOYAGEURS » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/renseignements` — div.conteneur.demande-grille > form.formulaire.etapes > ol.etapes-fil > li:nth-of-type(3) « VOS COORDONNÉES » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/renseignements` — div:nth-of-type(1) > dl.joindre-liste.fx-fini > div:nth-of-type(1) > dt « TÉLÉPHONE ET WHATSAPP » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/renseignements` — div:nth-of-type(1) > dl.joindre-liste.fx-fini > div:nth-of-type(3) > dt « CONCIERGERIE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (6)

- **section sans visuel** — `/chez-nous` — section#station « Une station balnéaire au charme méditerranéen, ent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/chez-nous` — section#activites « Ce que l’on fait ici La mer Sports nautiques, plon » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/chez-nous` — section#partenaires « Nos partenaires Les adresses et les professionnels » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/chez-vous` — section#temps « Votre séjour, en quatre temps Avant Courses faites » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/chez-vous` — section#inclus « Dans nos villas, d’office Linge de maison et servi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/renseignements` — section#demande « Trois étapes : la villa et les dates, les voyageur » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/chez-nous` — écran différent à la même position après rechargement (4.8 %), voir comparaisons/rechargement-chez-nous-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/nos-villas` — écran différent à la même position après rechargement (4.3 %), voir comparaisons/rechargement-nos-villas-*.png _(1366×768)_

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
- Audit rapide : étapes lourdes sur /, /chez-nous, /chez-vous, /nos-villas, /renseignements.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2760 ms depuis le premier octet
- Ouverture /chez-nous (1366×768) : 2658 ms depuis le premier octet
- Ouverture /chez-vous (1366×768) : 2689 ms depuis le premier octet
- Ouverture /nos-villas (1366×768) : 2681 ms depuis le premier octet
- Ouverture /renseignements (1366×768) : 2682 ms depuis le premier octet
- Ouverture / (390×844) : 2738 ms depuis le premier octet
- Ouverture /chez-nous (390×844) : 2677 ms depuis le premier octet
- Ouverture /chez-vous (390×844) : 2699 ms depuis le premier octet
- Ouverture /nos-villas (390×844) : 2650 ms depuis le premier octet
- Ouverture /renseignements (390×844) : 2666 ms depuis le premier octet
- bords de l’écran /chez-nous 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 544 images d’intro, 18 de voile et 114 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /chez-vous : aucune section épinglée ou plein écran.
- Tient dans l'écran /nos-villas : aucune section épinglée ou plein écran.
- Tient dans l'écran /renseignements : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 3 % d'images lentes sur 376, tâche la plus longue 208 ms
- Fluidité /chez-nous 1366×768 (molette) : 0 % d'images lentes sur 377, tâche la plus longue 0 ms
- Fluidité /chez-vous 1366×768 (molette) : 0 % d'images lentes sur 337, tâche la plus longue 0 ms
- Fluidité /nos-villas 1366×768 (molette) : 0 % d'images lentes sur 324, tâche la plus longue 0 ms
- Fluidité /renseignements 1366×768 (molette) : 0 % d'images lentes sur 169, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /chez-nous 390×844 (doigt) : 0 % d'images lentes sur 1361, tâche la plus longue 0 ms
- Fluidité /chez-vous 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /nos-villas 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /renseignements 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /chez-nous : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /chez-vous : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /nos-villas : 0.56 s de calcul au chargement (téléphone ralenti).
- Vitesse /renseignements : 0.37 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,bords,parcours,ecran,mouvement
```
