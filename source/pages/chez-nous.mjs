/* Chez nous : ouverture plein cadre sur l'Île d'Or, Saint-Raphaël en quelques mots, l'Estérel qui s'ouvre en plein
   écran, lieux en mosaïque, activités, partenaires, appel. */
import { html } from '../../outils/gabarit.mjs';
import { img, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'chez-nous', fichier: 'chez-nous', imagePartage: 'ouverture-chez-nous-1440.webp' };

const ICONES = {
  mer: 'M4 18 q5 -6 10 0 t10 0 t10 0 t10 0 M4 28 q5 -6 10 0 t10 0 t10 0 t10 0 M4 38 q5 -6 10 0 t10 0 t10 0 t10 0',
  terre: 'M3 42 L17 16 L25 28 L32 19 L45 42 Z M17 16 l-3 7 l4 -2 l3 4',
  sport: 'M17 43 V6 L35 12 L17 18 M8 43 h22 M36 38 a3 3 0 1 0 0.1 0',
  culture: 'M3 43 Q24 14 45 43 M15 33 v-7 l5 -5 l5 5 v8 M25 28 v-6 l5 -5 l5 5 v9 M20 33 v-3',
  table: 'M15 5 h18 l-2 15 a7 7 0 0 1 -14 0 Z M24 27 v12 M16 41 h16 M17 12 h14',
};
export default (c) => {
  const act = ['mer', 'terre', 'sport', 'culture', 'table'];
  return html`
<section class="ouv ouv--bas" id="debut">
  ${img(c, 'ouverture-chez-nous', { priorite: true, classe: 'ouv-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10" data-iris-centre data-boucle-css' })}
  <div class="ouv-texte conteneur">
    <p class="surtitre ouv-anim">${c.t('chezNous.surtitre')}</p>
    <h1 class="ouv-titre"><span class="ligne"><span class="ligne-in">${c.t('chezNous.titre1')}</span></span><span class="ligne"><span class="ligne-in"><em>${c.t('chezNous.titre2')}</em></span></span></h1>
    <p class="ouv-actions ouv-anim"><a class="bouton" href="#lieux" data-action-principale>${c.t('chezNous.action')}</a> <span class="ouv-info" data-info-cle>${c.t('chezNous.info')}</span></p>
  </div>
</section>

<section class="station" id="station">
  <div class="conteneur station-grille">
    <p class="manifeste-grand" data-anime="mots">${c.t('chezNous.texte')}</p>
  </div>
</section>

<section class="esterel" data-fx="plein-ecran" data-fx-depart="inset(16% 22% 16% 22% round 24px)" style="--fx-longueur: 200svh" id="esterel">
  <div data-collant>
    ${img(c, 'esterel-mer', { classe: 'esterel-media', sizes: '100vw', attrs: 'data-fx-cible' })}
    <p class="esterel-mots" aria-hidden="true" data-grille="typo"><span data-fx-ecarte="g">${c.t('chezNous.esterel.gauche')}</span> <span data-fx-ecarte="d">${c.t('chezNous.esterel.droite')}</span></p>
    <p class="esterel-legende" data-fx-apres>${c.t('chezNous.esterel.legende')}</p>
  </div>
</section>

<section class="lieux" id="lieux">
  <div class="conteneur apercu-tete">
    <h2 class="titre-section" data-anime="lignes">${c.tb('chezNous.lieux.titre')}</h2>
    <p class="chapo" data-anime>${c.t('chezNous.lieux.texte')}</p>
  </div>
  <ul class="conteneur mosaique" data-anime="cascade">
    ${c.donnees.lieux.map((l, i) => html`<li class="mosaique-carte mosaique-carte--${i + 1}">${img(c, l.image, { classe: 'mosaique-media', sizes: '(max-width: 760px) 92vw, 33vw' })}<p>${l.titre}</p></li>`)}
  </ul>
</section>

<section class="activites" id="activites">
  <div class="conteneur activites-grille">
    <div class="activites-tete"><h2 class="titre-section" data-anime="lignes">${c.tb('chezNous.activites.titre')}</h2></div>
    <ul class="activites-liste">
      ${act.map((k) => html`<li class="activite"><svg class="activite-icone" viewBox="0 0 48 48" aria-hidden="true" data-fx="trace"><path d="${ICONES[k]}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><div><h3 data-anime="lignes">${c.t(`chezNous.activites.${k}`)}</h3><p data-anime>${c.t(`chezNous.activites.${k}Texte`)}</p></div></li>`)}
    </ul>
  </div>
</section>

<section class="partenaires" id="partenaires">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.tb('chezNous.partenaires.titre')}</h2>
    <p class="chapo" data-anime>${c.t('chezNous.partenaires.texte')}</p>
    <ul class="partenaires-liste" data-anime="cascade">${c.donnees.partenaires.map((p) => html`<li>${p}</li>`)}</ul>
  </div>
</section>

${appel(c, {
    image: 'appel-chez-nous', titre: c.tb('chezNous.appel.titre'), texte: c.t('chezNous.appel.texte'),
    actions: c.lien('villas', { classe: 'bouton', texte: c.t('chezNous.appel.action') }),
  })}
`;
};
