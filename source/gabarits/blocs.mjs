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

/* Côte stylisée de Valescure à Anthéor : la mer et ses vagues en bas, les crêtes de l'Estérel à droite, un repère par
   secteur avec son nombre de villas, en lien vers le catalogue filtré. Le littoral se dessine au défilement
   (effet « cote » de site.js) ; sans JavaScript, tout est dessiné. */
const POINTS = {
  valescure: [262, 118], 'santa-lucia': [214, 222], boulouris: [420, 236], dramont: [606, 322], agay: [790, 229], antheor: [990, 297],
};
/* Le massif de l'Estérel en courbes de niveau, comme sur une carte. */
const RELIEF = ['M1293 30 C1303 51 1287 80 1269 100 C1251 121 1218 140 1185 152 C1153 164 1110 171 1075 171 C1039 171 1010 155 973 152 C935 150 886 163 850 156 C813 148 762 127 751 106 C740 85 773 53 783 30 C793 7 795 -11 809 -30 C823 -48 842 -67 868 -82 C893 -98 925 -112 961 -122 C997 -132 1052 -148 1086 -140 C1121 -133 1147 -98 1168 -79 C1188 -59 1190 -42 1211 -24 C1231 -6 1283 9 1293 30Z', 'M1240 33 C1246 50 1226 72 1210 88 C1194 105 1171 121 1145 130 C1119 138 1084 140 1056 141 C1027 141 1006 134 975 134 C944 134 897 147 869 140 C841 133 814 109 807 92 C801 74 826 51 832 33 C838 15 833 -0 842 -16 C852 -31 870 -45 890 -58 C911 -71 936 -86 965 -93 C994 -100 1039 -108 1066 -100 C1092 -93 1106 -63 1124 -48 C1142 -33 1156 -26 1175 -13 C1194 1 1234 16 1240 33Z', 'M1184 36 C1187 49 1168 66 1155 78 C1142 90 1126 103 1107 109 C1087 115 1061 114 1039 115 C1017 117 1001 117 976 118 C952 119 912 128 893 121 C873 114 862 93 858 78 C855 64 869 49 871 36 C874 23 867 10 874 -2 C880 -14 896 -25 912 -35 C928 -45 947 -60 969 -64 C992 -68 1026 -68 1046 -62 C1066 -55 1072 -33 1088 -23 C1103 -13 1124 -11 1140 -1 C1156 8 1182 23 1184 36Z', 'M1128 39 C1129 49 1115 60 1106 68 C1096 77 1085 86 1071 90 C1058 94 1039 93 1024 94 C1008 96 995 101 978 102 C960 103 931 107 918 101 C905 95 904 78 902 67 C899 57 904 48 904 39 C904 30 899 20 904 11 C908 2 920 -6 931 -13 C943 -21 958 -32 974 -34 C990 -36 1013 -32 1028 -27 C1042 -21 1045 -8 1058 -2 C1071 4 1092 3 1104 10 C1116 17 1128 29 1128 39Z', 'M1075 42 C1075 48 1067 55 1061 60 C1055 66 1047 71 1039 74 C1030 76 1020 75 1010 77 C1000 79 990 84 979 85 C968 86 950 85 943 81 C936 77 938 65 936 59 C934 52 933 48 933 42 C932 36 929 30 932 24 C935 18 942 13 950 8 C958 3 968 -4 978 -5 C988 -6 1002 -0 1011 3 C1020 6 1023 12 1032 15 C1041 19 1058 18 1065 22 C1072 27 1076 36 1075 42Z'];
/* Quelques pins parasols autour de Valescure. */
const PINS = [[186, 118], [214, 146], [336, 112], [362, 144], [404, 118], [160, 90]];
const LITTORAL = 'M0 196 C 120 206 180 214 236 226 C 300 238 360 226 420 236 C 480 246 540 262 572 300 C 590 322 612 330 628 312 C 650 288 690 282 720 270 C 750 258 766 230 792 228 C 820 226 832 262 860 276 C 900 296 950 286 990 296 C 1060 312 1130 318 1200 330';
export function cote(c, { compact = false } = {}) {
  const secteurs = c.donnees.secteurs.map((s) => ({ ...s, villas: c.donnees.villas.filter((v) => v.secteur === s.id) }));
  const mot = (n) => `${n} ${n > 1 ? c.s('accueil.cote.villas') : c.s('accueil.cote.villa')}`;
  /* Repères en HTML posés sur le dessin (pourcentages du viewBox) : de vrais liens, nets à toutes les tailles. */
  const rep = secteurs.map((s, i) => {
    const [x, y] = POINTS[s.id];
    return html`<a class="cote-repere" href="${c.url('villas', 'catalogue', `secteur=${s.id}`)}" data-libelle="${c.libelle('villas')}" data-superpose data-repere="${s.id}" data-x="${(x / 1200).toFixed(3)}" style="--i:${i}; left:${(x / 12).toFixed(2)}%; top:${(y / 4.7).toFixed(2)}%" aria-label="${s.nom} : ${mot(s.villas.length)}">
      <span class="cote-halo" aria-hidden="true"></span><span class="cote-point" aria-hidden="true">${s.villas.length}</span><span class="cote-nom" aria-hidden="true">${s.nom}</span>
    </a>`;
  });
  return html`<div class="cote-carte${compact ? ' cote-carte--compacte' : ''}" data-effet="cote" data-boucle-css>
  <div class="cote-cadre" data-cote-cadre><div class="cote-plan">
  <svg class="cote-svg" viewBox="0 0 1200 470" role="group" aria-labelledby="cote-titre-svg">
    <title id="cote-titre-svg">${c.s('accueil.cote.titre').replace(/<[^>]+>/g, '')}</title>
    <defs><linearGradient id="cote-profondeur" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dfe8ea"/><stop offset="1" stop-color="#c3d5da"/></linearGradient></defs>
    <g class="cote-relief">${RELIEF.map((d) => html`<path d="${d}"/>`)}</g>
    <g class="cote-pins">${PINS.map(([x, y]) => html`<g transform="translate(${x} ${y})"><path d="M0 0 v12"/><ellipse cx="0" cy="-2" rx="15" ry="6"/></g>`)}</g>
    <path class="cote-mer" d="${LITTORAL} L 1200 470 L 0 470 Z"/>
    <g class="cote-vagues" aria-hidden="true">
      <path d="M40 300 q 30 -10 60 0 t 60 0 t 60 0"/><path d="M300 380 q 30 -10 60 0 t 60 0 t 60 0 t 60 0"/>
      <path d="M760 400 q 30 -10 60 0 t 60 0 t 60 0"/><path d="M940 370 q 30 -10 60 0 t 60 0 t 60 0 t 60 0"/>
      <path d="M120 430 q 30 -10 60 0 t 60 0"/><path d="M820 330 q 30 -10 60 0 t 60 0"/>
    </g>
    <path class="cote-trait" data-cote-trait d="${LITTORAL}"/>
    <g class="cote-ile" transform="translate(640 400)"><path d="M-26 6 C -18 -6 -6 -10 4 -8 C 16 -6 24 0 28 8 Z"/><rect x="-3" y="-26" width="8" height="22"/></g>
    <text class="cote-legende" x="676" y="410">${c.s('accueil.cote.ileOr')}</text>
    <text class="cote-legende cote-legende--mer" x="280" y="336">${c.s('accueil.cote.mer')}</text>
    <text class="cote-legende cote-legende--esterel" x="1182" y="196" text-anchor="end">${c.s('accueil.cote.esterel')}</text>
    <text class="cote-ville" x="18" y="152">Saint-Raphaël</text>
  </svg>
  ${rep}
  </div></div>
  <p class="cote-consigne">${c.t('accueil.cote.toucher')}</p>
  <ul class="cote-liste">${secteurs.map((s) => html`<li><a href="${c.url('villas', 'catalogue', `secteur=${s.id}`)}" data-libelle="${c.libelle('villas')}" data-secteur-liste="${s.id}"><strong>${s.nom}</strong> <span class="cote-liste-nb">${mot(s.villas.length)}</span> <span class="cote-liste-noms">${s.villas.map((v) => v.nom).join(', ')}</span></a></li>`)}</ul>
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
