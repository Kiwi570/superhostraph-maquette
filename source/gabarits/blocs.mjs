/* Blocs communs aux pages de Madame&Monsieur : carte de villa, côte de Valescure à Anthéor, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

export const nomSecteur = (c, id) => (c.donnees.secteurs.find((s) => s.id === id) || { nom: id }).nom;
export const alt = (c, nom) => (c.donnees.images[nom] && c.donnees.images[nom].alt) || '';
/* Image du pipeline : texte alternatif et cadrages (ordinateur, téléphone) lus dans donnees/images.json. */
export function img(c, nom, o = {}) {
  const i = c.donnees.images[nom] || {};
  return c.media({ nom, alt: i.alt || '', cadrage: i.cadrage || '50% 50%', cadrageMobile: i.mobile && i.mobile.cadrage, ...o });
}
export const prix = (c, v) => html`${c.t('villas.prixDe')} ${v.prix[0]} ${c.t('villas.prixA')} ${v.prix[1]} € <span class="prix-nuit">${c.t('commun.nuit')}</span>`;
export const capacite = (c, v) => v.chambres
  ? html`${v.voyageurs} ${c.t('commun.voyageurs')} · ${v.chambres} ${c.t('villas.chambres')} · ${v.sdb} ${c.t('villas.sdb')}`
  : html`${v.voyageurs} ${c.t('commun.voyageurs')}`;

/* Carte de villa. mode : 'accueil' (lien vers la fiche) ou 'catalogue' (bouton qui ouvre la fiche, galerie en réserve). */
export function carteVilla(c, v, { mode = 'accueil', cache = false, sizes = '(max-width: 760px) 92vw, (max-width: 1100px) 45vw, 30vw' } = {}) {
  const badges = [v.etoiles ? html`<span class="badge">${c.t('commun.etoiles')}</span>` : '', v.nouveau ? html`<span class="badge badge--clair">${c.t('commun.nouveau')}</span>` : ''];
  const corps = html`
    <div class="villa-image">${img(c, `villa-${v.id}-1`, { classe: 'villa-media', sizes })}<span class="villa-badges">${badges}</span></div>
    <div class="villa-texte">
      <p class="villa-secteur">${nomSecteur(c, v.secteur)}</p>
      <h3 class="villa-nom">${v.nom}</h3>
      <p class="villa-capacite">${capacite(c, v)}</p>
      <p class="villa-prix">${prix(c, v)}</p>
    </div>`;
  if (mode === 'accueil') {
    return html`<li class="villa"${cache ? brut(' hidden') : ''} data-villa="${v.id}" data-voyageurs="${v.voyageurs}" data-prix="${v.prix[0]}">
  <a class="villa-lien" href="${c.url('villas', `villa-${v.id}`)}" data-libelle="${c.libelle('villas')}">${corps}<span class="visuellement-cache"> · ${c.t('accueil.voyageurs.fiche')}</span></a>
</li>`;
  }
  const galerie = html`${[1, 2, 3, 4].map((i) => img(c, `villa-${v.id}-${i}`, { classe: 'fiche-media', sizes: '(max-width: 760px) 100vw, 60vw' }))}`;
  return html`<li class="villa" id="villa-${v.id}" data-villa="${v.id}" data-voyageurs="${v.voyageurs}" data-prix="${v.prix[0]}" data-prix-max="${v.prix[1]}" data-secteur="${v.secteur}" data-piscine="${v.piscine ? 1 : 0}" data-vue-mer="${v.vueMer ? 1 : 0}">
  <article class="villa-carte" data-anime>
    ${corps}
    <p class="villa-phrase">${v.phrase}</p>
    <p class="villa-actions">
      <button type="button" class="bouton bouton--contour bouton--petit" data-ouvrir-fiche="${v.id}" aria-haspopup="dialog">${c.t('villas.ouvrir')}<span class="visuellement-cache"> ${v.nom}</span></button>
      ${c.lien('renseignements', { params: `villa=${v.id}&adultes=${Math.min(v.voyageurs, 4)}`, classe: 'bouton bouton--petit', texte: html`${c.t('villas.demander')}<span class="visuellement-cache"> ${v.nom}</span>` })}
    </p>
    <template data-fiche-galerie>${galerie}</template>
    <template data-fiche-atouts>${brut(JSON.stringify({ atouts: v.atouts, etoiles: !!v.etoiles, piscine: v.piscine, vueMer: v.vueMer }))}</template>
  </article>
</li>`;
}

/* Côte stylisée de Valescure à Anthéor : la mer en bas, l'Estérel à droite, un repère par secteur.
   Le tracé se dessine au défilement (effet « cote » de site.js) ; sans JavaScript, tout est dessiné. */
const POINTS = {
  valescure: [250, 92], boulouris: [418, 214], 'santa-lucia': [230, 222], dramont: [602, 292], agay: [790, 236], antheor: [985, 262],
};
export function cote(c, { compact = false } = {}) {
  const secteurs = c.donnees.secteurs.map((s) => ({ ...s, villas: c.donnees.villas.filter((v) => v.secteur === s.id) }));
  const rep = secteurs.map((s, i) => {
    const [x, y] = POINTS[s.id];
    const bas = s.id === 'valescure' ? -1 : 1;
    const tx = x, ty = y + bas * 46;
    return html`<g class="cote-repere" data-superpose data-repere="${s.id}" style="--i:${i}" transform="translate(${x} ${y})">
      <circle class="cote-halo" r="22"></circle><circle class="cote-point" r="7"></circle>
      <text class="cote-nom" x="0" y="${bas * 46 - (bas < 0 ? 0 : 0)}" text-anchor="middle">${s.nom}</text>
      <text class="cote-nb" x="0" y="${bas * 46 + (bas < 0 ? -26 : 24)}" text-anchor="middle">${s.villas.length} ${s.villas.length > 1 ? c.s('accueil.cote.villas') : c.s('accueil.cote.villa')}</text>
    </g>`;
  });
  return html`<div class="cote-carte${compact ? ' cote-carte--compacte' : ''}" data-effet="cote" data-boucle-css>
  <svg class="cote-svg" viewBox="0 0 1200 470" role="img" aria-labelledby="cote-titre-svg">
    <title id="cote-titre-svg">${c.t('accueil.cote.titre')}</title>
    <path class="cote-mer" d="M0 196 C 120 206 180 214 236 226 C 300 238 360 226 420 236 C 480 246 540 262 572 300 C 590 322 612 330 628 312 C 650 288 690 282 720 270 C 750 258 766 230 792 228 C 820 226 832 262 860 276 C 900 296 950 286 990 296 C 1060 312 1130 318 1200 330 L 1200 470 L 0 470 Z"/>
    <path class="cote-esterel" d="M700 0 L 742 58 L 768 40 L 806 112 L 838 84 L 872 150 L 906 118 L 948 176 L 982 138 L 1020 196 L 1060 150 L 1098 206 L 1140 168 L 1200 232 L 1200 0 Z"/>
    <text class="cote-ville" x="18" y="172">Saint-Raphaël</text>
    <path class="cote-trait" data-cote-trait d="M0 196 C 120 206 180 214 236 226 C 300 238 360 226 420 236 C 480 246 540 262 572 300 C 590 322 612 330 628 312 C 650 288 690 282 720 270 C 750 258 766 230 792 228 C 820 226 832 262 860 276 C 900 296 950 286 990 296 C 1060 312 1130 318 1200 330"/>
    <g class="cote-ile" transform="translate(632 392)"><path d="M-26 6 C -18 -6 -6 -10 4 -8 C 16 -6 24 0 28 8 Z"/><rect x="-3" y="-26" width="8" height="22"/></g>
    <text class="cote-legende" x="660" y="430">${c.s('accueil.cote.ileOr')}</text>
    <text class="cote-legende cote-legende--mer" x="250" y="380">${c.s('accueil.cote.mer')}</text>
    <text class="cote-legende cote-legende--esterel" x="1180" y="40" text-anchor="end">${c.s('accueil.cote.esterel')}</text>
    ${rep}
  </svg>
  <ul class="cote-liste">${secteurs.map((s) => html`<li data-secteur-liste="${s.id}"><strong>${s.nom}</strong> <span>${s.villas.map((v) => v.nom).join(', ')}</span></li>`)}</ul>
</div>`;
}

/* Appel final sur photo : une photo propre à chaque page. */
export function appel(c, { image, id = 'appel', titre, texte, actions, contenu = '' }) {
  return html`<section class="appel" id="${id}">
  ${img(c, image, { classe: 'appel-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
  <div class="appel-carte">
    <h2 data-anime="lignes">${titre}</h2>
    <p data-anime>${texte}</p>
    ${contenu}
    ${actions ? html`<p class="appel-actions" data-anime>${actions}</p>` : ''}
  </div>
</section>`;
}
