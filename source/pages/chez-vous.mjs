/* Chez vous : ouverture scindée (le drap se retire de la photo), séjour en quatre temps, services en rangées
   alternées, ce qui est inclus, appel. */
import { html } from '../../outils/gabarit.mjs';
import { img, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'chez-vous', fichier: 'chez-vous', imagePartage: 'ouverture-chez-vous-1280.webp' };

export default (c) => {
  const temps = ['avant', 'arrivee', 'pendant', 'depart'];
  return html`
<section class="ouv-scindee" id="debut">
  <div class="ouv-scindee-texte">
    <p class="surtitre ouv-anim">${c.t('chezVous.surtitre')}</p>
    <h1 class="ouv-titre ouv-titre--sombre"><span class="ligne"><span class="ligne-in">${c.t('chezVous.titre1')}</span></span><span class="ligne"><span class="ligne-in"><em>${c.t('chezVous.titre2')}</em></span></span></h1>
    <p class="chapo ouv-anim masque-ecran-bas">${c.t('chezVous.texte')}</p>
    <p class="ouv-actions ouv-anim"><a class="bouton" href="#services" data-action-principale>${c.t('chezVous.action')}</a></p>
    <p class="ouv-info ouv-info--sombre ouv-anim" data-info-cle>${c.t('chezVous.info')}</p>
  </div>
  <div class="ouv-scindee-image" data-iris-centre>
    ${img(c, 'ouverture-chez-vous', { priorite: true, classe: 'ouv-scindee-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    <span class="drap" aria-hidden="true"></span>
  </div>
</section>

<section class="temps" id="temps">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('chezVous.temps.titre')}</h2>
    <div class="temps-frise">
      <svg class="temps-trait" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M4 22 C 160 6, 330 36, 500 20 S 840 6, 996 20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
      <ol class="temps-liste" data-anime="cascade">
        ${temps.map((k, i) => html`<li><span class="temps-point" aria-hidden="true"></span><h3>${c.t(`chezVous.temps.${k}`)}</h3><p>${c.t(`chezVous.temps.${k}Texte`)}</p></li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="familles" id="services">
  <div class="conteneur">
    <h2 class="titre-section" data-anime="lignes">${c.t('chezVous.familles.titre')}</h2>
  </div>
  ${c.donnees.services.map((s, i) => html`<article class="famille${i % 2 ? ' famille--inverse' : ''}" id="service-${s.id}">
    <div class="famille-images">
      ${img(c, s.image, { classe: 'famille-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-anime="rideau"' })}
      ${s.image2 ? img(c, s.image2, { classe: 'famille-media famille-media--petite', sizes: '(max-width: 760px) 60vw, 22vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' }) : ''}
    </div>
    <div class="famille-texte">
      <h3 class="famille-titre" data-anime="lignes">${s.titre}</h3>
      <p data-anime>${s.texte}</p>
      <ul class="famille-points" data-anime="cascade">${s.points.map((p) => html`<li>${p}</li>`)}</ul>
    </div>
  </article>`)}
</section>

<section class="inclus" id="inclus">
  <div class="conteneur inclus-grille">
    <h2 class="titre-section" data-anime="lignes">${c.t('chezVous.inclus.titre')}</h2>
    <ul class="inclus-liste" data-anime="cascade">
      ${[1, 2, 3, 4, 5, 6].map((n) => html`<li><svg class="coche" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>${c.t(`chezVous.inclus.l${n}`)}</li>`)}
    </ul>
  </div>
</section>

${appel(c, {
    image: 'appel-chez-vous', titre: c.t('chezVous.appel.titre'), texte: c.t('chezVous.appel.texte'),
    actions: c.lien('renseignements', { classe: 'bouton', texte: c.t('chezVous.appel.action') }),
  })}
`;
};
