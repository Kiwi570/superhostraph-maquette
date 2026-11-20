/* Chez nous : ouverture plein cadre sur l'Île d'Or, Saint-Raphaël en quelques mots, l'Estérel qui s'ouvre en plein
   écran, lieux en mosaïque, activités, partenaires, appel. */
import { html } from '../../outils/gabarit.mjs';
import { img, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'chez-nous', fichier: 'chez-nous', imagePartage: 'ouverture-chez-nous-1440.webp' };

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

<section class="esterel" data-fx="plein-ecran" id="esterel">
  <div data-collant>
    ${img(c, 'esterel-mer', { classe: 'esterel-media', sizes: '100vw', attrs: 'data-fx-cible' })}
    <p class="esterel-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('chezNous.esterel.gauche')}</span> <span data-fx-ecarte="d">${c.t('chezNous.esterel.droite')}</span></p>
    <p class="esterel-legende" data-fx-apres>${c.t('chezNous.esterel.legende')}</p>
  </div>
</section>

<section class="lieux" id="lieux">
  <div class="conteneur apercu-tete">
    <h2 class="titre-section" data-anime="lignes">${c.t('chezNous.lieux.titre')}</h2>
    <p class="chapo" data-anime>${c.t('chezNous.lieux.texte')}</p>
  </div>
  <ul class="conteneur mosaique" data-anime="cascade">
    ${c.donnees.lieux.map((l, i) => html`<li class="mosaique-carte mosaique-carte--${i + 1}">${img(c, l.image, { classe: 'mosaique-media', sizes: '(max-width: 760px) 92vw, 33vw' })}<p>${l.titre}</p></li>`)}
  </ul>
</section>

<section class="activites" id="activites">
  <div class="conteneur activites-grille">
    <div class="activites-tete"><h2 class="titre-section" data-anime="lignes">${c.t('chezNous.activites.titre')}</h2></div>
    <ul class="activites-liste">
      ${act.map((k) => html`<li class="activite"><h3 data-anime="lignes">${c.t(`chezNous.activites.${k}`)}</h3><p data-anime>${c.t(`chezNous.activites.${k}Texte`)}</p></li>`)}
    </ul>
  </div>
</section>

<section class="partenaires" id="partenaires">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('chezNous.partenaires.titre')}</h2>
    <p class="chapo" data-anime>${c.t('chezNous.partenaires.texte')}</p>
    <ul class="partenaires-liste" data-anime="cascade">${c.donnees.partenaires.map((p) => html`<li>${p}</li>`)}</ul>
  </div>
</section>

${appel(c, {
    image: 'appel-chez-nous', titre: c.t('chezNous.appel.titre'), texte: c.t('chezNous.appel.texte'),
    actions: c.lien('villas', { classe: 'bouton', texte: c.t('chezNous.appel.action') }),
  })}
`;
};
