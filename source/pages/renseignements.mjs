/* Renseignements : ouverture scindée inversée, demande en trois étapes avec récapitulatif collant, coordonnées
   et côte avec les secteurs. Formulaire simulé, prérempli par l'adresse (?villa=…&adultes=…&arrivee=…). */
import { html } from '../../outils/gabarit.mjs';
import { img, cote } from '../gabarits/blocs.mjs';

export const page = { cle: 'renseignements', fichier: 'renseignements', imagePartage: 'ouverture-renseignements-1280.webp' };

export default (c) => {
  const V = c.donnees.villas;
  const nombre = (id, nom, min, max, val) => html`<div class="champ champ--nombre"><label for="${id}">${c.t(`renseignements.${nom}`)}</label>
    <div class="compteur-champ"><button type="button" data-moins="${id}" aria-label="−1 ${c.s(`renseignements.${nom}`)}">−</button><input id="${id}" name="${nom}" type="number" min="${min}" max="${max}" value="${val}" inputmode="numeric"><button type="button" data-plus="${id}" aria-label="+1 ${c.s(`renseignements.${nom}`)}">+</button></div></div>`;
  return html`
<section class="ouv-scindee ouv-scindee--inverse" id="debut">
  <div class="ouv-scindee-texte">
    <p class="surtitre ouv-anim">${c.t('renseignements.surtitre')}</p>
    <h1 class="ouv-titre ouv-titre--sombre"><span class="ligne"><span class="ligne-in">${c.t('renseignements.titre1')}</span></span><span class="ligne"><span class="ligne-in"><em>${c.t('renseignements.titre2')}</em></span></span></h1>
    <p class="chapo ouv-anim masque-ecran-bas">${c.t('renseignements.texte')}</p>
    <p class="ouv-actions ouv-anim"><a class="bouton" href="#demande" data-action-principale>${c.t('renseignements.action')}</a> <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    <p class="ouv-info ouv-info--sombre ouv-anim" data-info-cle>${c.t('renseignements.info')}</p>
  </div>
  <div class="ouv-scindee-image" data-iris-centre>
    ${img(c, 'ouverture-renseignements', { priorite: true, classe: 'ouv-scindee-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  </div>
</section>

<section class="demande" id="demande">
  <div class="conteneur"><h2 class="titre-section" data-anime="lignes">${c.t('renseignements.demandeTitre')}</h2></div>
  <div class="conteneur demande-grille">
    <form class="formulaire etapes" data-formulaire data-etapes action="#" novalidate>
      <p class="etapes-annonce">${c.t('renseignements.etapes')}</p>
      <ol class="etapes-fil" aria-hidden="true"><li data-fil="1" class="actif">${c.t('renseignements.etape1')}</li><li data-fil="2">${c.t('renseignements.etape2')}</li><li data-fil="3">${c.t('renseignements.etape3')}</li></ol>
      <div class="etapes-cadre" data-etapes-cadre>
        <fieldset class="etape" data-etape="1">
          <legend>1 · ${c.t('renseignements.etape1')}</legend>
          <div class="champ"><label for="f-villa">${c.t('renseignements.villa')}</label>
            <select id="f-villa" name="villa" required><option value="">${c.t('renseignements.villaChoisir')}</option><option value="conseil">${c.t('renseignements.villaConseil')}</option>${V.map((v) => html`<option value="${v.id}" data-voyageurs="${v.voyageurs}">${v.nom} · ${v.voyageurs} ${c.t('commun.voyageurs')}</option>`)}</select></div>
          <div class="champs-deux">
            <div class="champ"><label for="f-arrivee">${c.t('renseignements.arrivee')}</label><input id="f-arrivee" name="arrivee" type="date" required></div>
            <div class="champ"><label for="f-depart">${c.t('renseignements.depart')}</label><input id="f-depart" name="depart" type="date" required></div>
          </div>
          <p class="etape-actions"><button type="button" class="bouton" data-suivant>${c.t('renseignements.suivant')}</button></p>
        </fieldset>
        <fieldset class="etape" data-etape="2">
          <legend>2 · ${c.t('renseignements.etape2')}</legend>
          <div class="champs-deux">${nombre('f-adultes', 'adultes', 1, 12, 2)}${nombre('f-enfants', 'enfants', 0, 10, 0)}</div>
          <div class="champ"><label for="f-autres">${c.t('renseignements.autres')}</label><textarea id="f-autres" name="autres" rows="4" placeholder="${c.s('renseignements.autresAide')}"></textarea></div>
          <p class="etape-actions"><button type="button" class="bouton bouton--contour" data-precedent>${c.t('renseignements.precedent')}</button> <button type="button" class="bouton" data-suivant>${c.t('renseignements.suivant')}</button></p>
        </fieldset>
        <fieldset class="etape" data-etape="3">
          <legend>3 · ${c.t('renseignements.etape3')}</legend>
          <div class="champs-deux">
            <div class="champ"><label for="f-prenom">${c.t('renseignements.prenom')}</label><input id="f-prenom" name="prenom" autocomplete="given-name"></div>
            <div class="champ"><label for="f-nom">${c.t('renseignements.nom')}</label><input id="f-nom" name="nom" autocomplete="family-name" required></div>
          </div>
          <div class="champs-deux">
            <div class="champ"><label for="f-email">${c.t('renseignements.email')}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
            <div class="champ"><label for="f-tel">${c.t('renseignements.tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel"></div>
          </div>
          <div class="champ"><label for="f-connu">${c.t('renseignements.connu')}</label><input id="f-connu" name="connu"></div>
          <div class="champ champ--case"><input id="f-nouvelles" name="nouvelles" type="checkbox" value="oui"><label for="f-nouvelles">${c.t('renseignements.newsletter')}</label></div>
          <p class="mention-donnees">${c.tb('renseignements.donnees')}</p>
          <p class="etape-actions"><button type="button" class="bouton bouton--contour" data-precedent>${c.t('renseignements.precedent')}</button> <button type="submit" class="bouton">${c.t('renseignements.envoyer')}</button></p>
        </fieldset>
      </div>
      <p data-message-envoi data-texte="${c.s('renseignements.envoye')}" role="status" tabindex="-1" hidden></p>
    </form>
    <aside class="recap" data-recap aria-label="${c.s('renseignements.recap')}">
      <p class="recap-titre">${c.t('renseignements.recap')}</p>
      <div class="recap-image" data-recap-image>${img(c, 'villa-palmeraie-1', { classe: 'recap-media', sizes: '(max-width: 760px) 40vw, 26vw', attrs: 'data-anime="rideau"' })}</div>
      <dl class="recap-liste">
        <div><dt>${c.t('renseignements.recapVilla')}</dt><dd data-recap-villa>${c.t('renseignements.recapVide')}</dd></div>
        <div><dt>${c.t('renseignements.recapDates')}</dt><dd data-recap-dates>${c.t('renseignements.recapVide')}</dd></div>
        <div><dt>${c.t('renseignements.recapVoyageurs')}</dt><dd data-recap-voyageurs>2</dd></div>
      </dl>
      <template data-recap-images>${V.map((v) => html`<span data-id="${v.id}" data-src="/assets/images/villa-${v.id}-1-640.webp" data-alt="${(c.donnees.images[`villa-${v.id}-1`] || {}).alt || ''}"></span>`)}</template>
    </aside>
  </div>
</section>

<section class="joindre" id="joindre">
  <div class="conteneur joindre-grille">
    <div>
      <h2 class="titre-section" data-anime="lignes">${c.t('renseignements.joindre.titre')}</h2>
      <dl class="joindre-liste" data-anime="cascade">
        <div><dt>${c.t('renseignements.joindre.tel')}</dt><dd><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></dd></div>
        <div><dt>${c.t('renseignements.joindre.email')}</dt><dd><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></dd></div>
        <div><dt>${c.t('renseignements.joindre.adresse')}</dt><dd>${c.site.contact.adresse}</dd></div>
      </dl>
      <p class="note" data-anime>${c.t('renseignements.joindre.note')}</p>
    </div>
    ${cote(c, { compact: true })}
  </div>
</section>
`;
};
