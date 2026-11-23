/* Nos villas : grand titre et bandeau de photos qui glisse, filtres gardés dans l'adresse, fiche plein écran. */
import { html } from '../../outils/gabarit.mjs';
import { img, carteVilla, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'villas', fichier: 'nos-villas', imagePartage: 'villa-palmeraie-1-1280.webp' };

export default (c) => {
  const V = c.donnees.villas;
  const bandeau = ['palmeraie', 'boheme', 'uccelli', 'estaou', 'alice', 'harmony', 'chez-nous', 'camelias', 'aiguebonne', 'soleada'];
  const choix = (nom, valeur, libelle, coche = false, type = 'radio') => html`<label class="puce"><input type="${type}" name="${nom}" value="${valeur}"${coche ? html` checked` : ''}><span>${libelle}</span></label>`;
  return html`
<section class="ouv-villas" id="debut">
  <div class="conteneur ouv-villas-texte">
    <p class="surtitre ouv-anim">${c.t('villas.surtitre')}</p>
    <h1 class="ouv-titre ouv-titre--sombre"><span class="ligne"><span class="ligne-in">${c.t('villas.titre1')}</span></span><span class="ligne"><span class="ligne-in"><em>${c.t('villas.titre2')}</em></span></span></h1>
    <div class="ouv-villas-cote ouv-anim">
      <p class="masque-ecran-bas">${c.t('villas.texte')}</p>
      <p class="ouv-actions"><a class="bouton" href="#catalogue" data-action-principale>${c.t('villas.action')}</a> <span class="ouv-info ouv-info--sombre" data-info-cle>${c.t('villas.info')}</span></p>
    </div>
  </div>
  <div class="bandeau" data-bandeau data-effet="bandeau" data-iris-centre aria-hidden="true">
    <ul class="bandeau-piste" data-bandeau-piste>
      ${bandeau.map((id, i) => html`<li class="bandeau-carte${i % 2 ? ' bandeau-carte--bas' : ''}">${img(c, `villa-${id}-2`, { classe: 'bandeau-media', sizes: '(max-width: 760px) 60vw, 26vw', priorite: i < 3 })}</li>`)}
    </ul>
  </div>
</section>

<section class="catalogue" id="catalogue">
  <div class="conteneur">
    <h2 class="catalogue-titre" data-anime="lignes">${c.tb('villas.liste')}</h2>
    <button type="button" class="filtres-bouton" data-filtres-bouton aria-expanded="false" aria-controls="filtres"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M7 12h10M10 17h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>${c.t('villas.filtrer')} <span class="filtres-nb" data-filtres-nb></span></button>
    <form class="filtres" id="filtres" data-filtres aria-label="${c.s('villas.filtres')}">
      <fieldset class="filtre">
        <legend>${c.t('villas.voyageurs')}</legend>
        <div class="puces">${choix('voyageurs', '', c.t('villas.voyageursTous'), true)}${[4, 6, 8, 10, 12].map((n) => choix('voyageurs', n, n === 12 ? '12' : `${n}+`))}</div>
      </fieldset>
      <fieldset class="filtre">
        <legend>${c.t('villas.budget')}</legend>
        <div class="puces">${choix('budget', '', c.t('villas.budgetTous'), true)}${choix('budget', '500', c.t('villas.budget1'))}${choix('budget', '700', c.t('villas.budget2'))}</div>
      </fieldset>
      <fieldset class="filtre">
        <legend class="visuellement-cache">${c.t('villas.piscine')} · ${c.t('villas.vueMer')}</legend>
        <div class="puces">${choix('piscine', '1', c.t('villas.piscine'), false, 'checkbox')}${choix('vue-mer', '1', c.t('villas.vueMer'), false, 'checkbox')}</div>
      </fieldset>
      <div class="filtre filtre--secteur">
        <label for="f-secteur">${c.t('villas.secteur')}</label>
        <select id="f-secteur" name="secteur"><option value="">${c.t('villas.secteurTous')}</option>${c.donnees.secteurs.map((s) => html`<option value="${s.id}">${s.nom}</option>`)}</select>
      </div>
      <div class="filtre filtre--secteur">
        <label for="f-tri">${c.t('villas.tri')}</label>
        <select id="f-tri" name="tri"><option value="">${c.t('villas.triReco')}</option><option value="prix">${c.t('villas.triPrix')}</option><option value="prix-desc">${c.t('villas.triPrixDesc')}</option><option value="capacite">${c.t('villas.triCapacite')}</option></select>
      </div>
    </form>
    <div class="catalogue-barre">
      <p class="catalogue-compte" aria-live="polite"><strong data-compte>${V.length}</strong> <span data-compte-mot>${c.t('villas.resultat')}</span></p>
      <button type="button" class="lien-bouton" data-effacer hidden>${c.t('villas.effacer')}</button>
    </div>
    <ul class="catalogue-grille" data-catalogue data-grille="retour">
      ${V.map((v) => carteVilla(c, v, { mode: 'catalogue' }))}
    </ul>
    <p class="catalogue-vide" data-vide hidden>${c.t('villas.vide')}</p>
    <p class="note">${c.t('villas.prixNote')}</p>
  </div>
</section>

<div class="fiche" data-fiche role="dialog" aria-modal="true" aria-labelledby="fiche-titre" data-recouvrement hidden>
  <div class="fiche-boite" data-fiche-boite>
    <button type="button" class="fiche-fermer" data-fiche-fermer aria-label="${c.s('villas.fermer')}"><span aria-hidden="true">×</span></button>
    <div class="fiche-galerie">
      <div class="fiche-photos" data-fiche-photos></div>
      <div class="fiche-vignettes" data-fiche-vignettes></div>
      <div class="fiche-nav">
        <button type="button" data-fiche-prec aria-label="${c.s('villas.precedente')}"><span aria-hidden="true">←</span></button>
        <span class="fiche-compte" data-fiche-compte>1 / 4</span>
        <button type="button" data-fiche-suiv aria-label="${c.s('villas.suivante')}"><span aria-hidden="true">→</span></button>
      </div>
    </div>
    <div class="fiche-texte">
      <p class="villa-secteur" data-fiche-secteur></p>
      <h2 id="fiche-titre" data-fiche-nom></h2>
      <p class="fiche-capacite" data-fiche-capacite></p>
      <p class="fiche-prix" data-fiche-prix></p>
      <p class="fiche-phrase" data-fiche-phrase></p>
      <ul class="fiche-atouts" data-fiche-atouts></ul>
      <p class="fiche-inclus">${c.t('villas.inclus')}</p>
      <p><a class="bouton" href="${c.url('renseignements')}" data-fiche-demande data-libelle="${c.libelle('renseignements')}">${c.t('villas.demander')}</a></p>
    </div>
  </div>
</div>

${appel(c, {
    image: 'appel-villas', titre: c.tb('villas.appel.titre'), texte: c.t('villas.appel.texte'),
    actions: html`${c.lien('renseignements', { classe: 'bouton', texte: c.t('villas.appel.action') })} <a class="bouton bouton--clair" href="tel:${c.site.contact.telephoneLien}">${c.t('villas.appel.appeler')}</a>`,
  })}
`;
};
