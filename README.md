# Madame&Monsieur · maquette

Maquette du site de la conciergerie Madame&Monsieur (superhostraph.com), villas en location saisonnière à Saint-Raphaël.
Adresse de démonstration : https://superhostraph-maquette.vercel.app

Direction « Volets ouverts » : lin, bleu de la rade (#12303F), rouge de l'Estérel (#B5452B). Titres Noto Serif Display (un mot en italique rouge), texte Albert Sans. Arriver dans une villa, c'est ouvrir les persiennes : l'intro ouvre deux volets à lames, et le voile entre les pages se ferme et s'ouvre en lames.

## Pages

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | Volets qui s'ouvrent sur La Bohème, manifeste, curseur des voyageurs qui range la collection, côte de Valescure à Anthéor qui se dessine, services, lieux qui glissent, classement ★★★★★ et plateformes, mini-demande |
| Nos villas | `/nos-villas` | Les 19 villas filtrables (voyageurs, budget, piscine, vue mer, secteur ; filtres gardés dans l'adresse), fiche plein écran (`?fiche=boheme`), « Demander cette villa » |
| Chez vous | `/chez-vous` | Le séjour en quatre temps, six familles de services, ce qui est inclus |
| Chez nous | `/chez-nous` | Saint-Raphaël, l'Estérel en plein écran, dix lieux, activités, partenaires |
| Renseignements | `/renseignements` | Demande en trois étapes avec récapitulatif, préremplie depuis une villa (`?villa=uccelli&adultes=4`), coordonnées, plan des secteurs |
| 404 | toute adresse inconnue | « Cette villa n'existe pas (encore) » |

## Construction

Site statique (HTML, CSS, JavaScript), sans étape de construction sur Vercel. Les pages sont générées depuis les données :

```
node outils/generer.mjs
```

- `donnees/textes/fr.json` : tous les textes ; `donnees/villas.json` : les 19 villas (capacités, prix, secteur, phrase, atouts) ; `donnees/services.json`, `lieux.json`, `partenaires.json`, `secteurs.json`.
- `source/pages/*.mjs` : une page par fichier ; `source/gabarits/` : en-tête, menu, pied, volets de l'intro, voile, blocs communs.
- `assets/css/site.css`, `assets/js/site.js` : le style et les effets propres au projet ; `assets/js/socle/` : base commune (ouverture, voile « persiennes », défilement, formulaires).
- Images : `plan-images.json` (quelle photo va où), produites en WebP par le pipeline de la bibliothèque des maquettes (`donnees/images.json`).
- Ne jamais modifier à la main les fichiers `*.html` : ils sont réécrits par le générateur.

## À fournir par le client (à compléter)

- **Mentions légales** : raison sociale (SAS MADAME&MONSIEUR), capital, siège, numéro SIREN/SIRET, directeur de la publication, hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (adresse donnée par les conditions d’utilisation de Vercel, octobre 2026). **Le SIREN affiché sur le site actuel (913 318 2591) a 10 chiffres : un SIREN en a 9, à corriger.**
- **Politique de confidentialité** : usage des données du formulaire de demande et de la lettre d'information (le site actuel propose d'y souscrire).
- **Activité réglementée** : si la conciergerie gère des locations pour le compte de propriétaires, vérifier les mentions liées (carte professionnelle, garantie financière, assurance responsabilité civile professionnelle) avec un conseil.
- **Logo** : le site actuel n'en a pas ; la maquette compose « Madame&Monsieur » dans les polices du site. À remplacer si un logo existe.
- **Crédits des illustrations générées** (mention « Illustration générée » à garder sur le site final) : clé posée sur une serviette, cuisine impeccable, berline dans l'allée, mise en place du chef, lit de bébé, tapis de yoga, bateau dans la crique, clé de la page 404.

### Retiré ou remplacé faute d'information

| Élément | Page | Ce qui est affiché |
|---|---|---|
| Astérisque des prix (jamais expliqué sur le site actuel) | Nos villas, accueil | « Fourchettes par nuit indiquées sur le site actuel ; le tarif exact dépend des dates et vous est donné avec la disponibilité. » |
| Chambres et salles de bain d'Eucalypta | Nos villas | Seulement « 10 voyageurs » |
| Fiche du Mas Mirabelle (absente du site actuel) | Nos villas | Fiche faite à partir de ses photos et de sa phrase |
| Harmony « prochainement dans la collection 2025 » | Nos villas | « Nouveauté », phrase sans date |
| Le Petit Roc : 4 voyageurs dans le tableau, 6 dans le texte | Nos villas | 4 voyageurs (valeur du tableau) |
| Secteur de chaque villa | Nos villas, accueil | Lu sur les plans des fiches du site actuel (à confirmer) |
| Piscine et vue mer de chaque villa | Filtres de Nos villas | Lues sur les photos de chaque villa (à confirmer) |
| « Inclus dans nos villas » | Chez vous | Repris des fiches La Dolce Vita et Le Petit Roc (à confirmer pour toutes) |
| Avis, notes, chiffres d'activité, horaires | partout | Rien n'est affiché : le site actuel n'en donne pas |
| Réponses de « Comment avez-vous connu Madame&Monsieur ? » | Renseignements | Champ libre |
| Liens vers Airbnb, VRBO, Booking, WAY | Accueil | Noms en texte, sans lien (adresses des annonces à fournir) |

Cinq villas portent le classement **Meublé de tourisme ★★★★★** visible sur leurs photos (La Bohème, La Soleada, Le Mas Mirabelle, Chez nous, Pirouschka) : à confirmer, et à compléter pour les autres villas classées.

## À la mise en ligne définitive

- Retirer `noindex` (balise `robots` de chaque page, via `source/gabarits/commun.mjs`, et en-tête `X-Robots-Tag` de `vercel.json`).
- Brancher le formulaire de demande et la mini-demande de l'accueil (aujourd'hui simulés : rien n'est envoyé) et le lien de la politique de confidentialité.
- Remplacer les mentions « à compléter » du pied de page par les vraies pages légales.
- Garder la mention « Illustration générée » sur les images créées par IA.

## Incohérences relevées sur le site actuel

Trois noms différents (Madame&Monsieur, superhostraph, maconciergeriesaintraphael), menu « PLUS » sans lien, adresses de pages « copie-de-la-conciergerie » et « coming-soon-03 », bouton WhatsApp qui appelle le numéro, photos de banque d'images sur la page « Chez vous » (remplacées ici par des photos des villas et des illustrations).
