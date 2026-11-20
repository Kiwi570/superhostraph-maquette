/* Page 404 aux couleurs de Madame&Monsieur. */
import { html } from '../../outils/gabarit.mjs';
import { img } from '../gabarits/blocs.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv-scindee introuvable" id="debut">
  <div class="ouv-scindee-texte">
    <p class="surtitre ouv-anim">404</p>
    <h1 class="ouv-titre ouv-titre--sombre ouv-titre--moyen"><span class="ligne"><span class="ligne-in">${c.t('introuvable.titre')}</span></span></h1>
    <p class="chapo ouv-anim masque-ecran-bas">${c.t('introuvable.texte')}</p>
    <p class="ouv-actions ouv-anim">${c.lien('villas', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('accueil', { classe: 'bouton bouton--contour', texte: c.t('introuvable.accueil') })}</p>
    <p class="ouv-info ouv-info--sombre ouv-anim" data-info-cle>${c.t('accueil.info')}</p>
  </div>
  <div class="ouv-scindee-image" data-iris-centre>
    ${img(c, 'page-404', { priorite: true, classe: 'ouv-scindee-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  </div>
</section>
`;
