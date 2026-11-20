/* Accueil Madame&Monsieur : volets qui s'ouvrent (intro), manifeste, collection au curseur des voyageurs,
   côte qui se dessine, services, lieux qui glissent, confiance, demande. */
import { html } from '../../outils/gabarit.mjs';
import { img, carteVilla, cote, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'ouverture-accueil-1440.webp' };

/* Ordre de la collection : les villas qui accueillent n voyageurs, de la plus juste à la plus grande. */
export const trierPour = (villas, n) => [...villas].sort((a, b) => {
  const ok = (v) => (v.voyageurs >= n ? 0 : 1);
  return ok(a) - ok(b) || a.voyageurs - b.voyageurs || a.prix[0] - b.prix[0];
});

export default (c) => {
  const V = c.donnees.villas, S = c.donnees.services;
  const depart = 8;
  const ordre = trierPour(V, depart);
  const apercu = ['accueil', 'table', 'mobilite', 'demande'].map((id) => S.find((s) => s.id === id));
  return html`
<section class="ouv ouv--accueil" id="debut">
  ${img(c, 'ouverture-accueil', { priorite: true, classe: 'ouv-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre data-boucle-css' })}
  <div class="ouv-texte conteneur">
    <p class="surtitre ouv-anim masque-ecran-tres-bas">${c.t('accueil.surtitre')}</p>
    <h1 class="ouv-titre"><span class="ligne"><span class="ligne-in">${c.t('accueil.titre1')}</span></span><span class="ligne"><span class="ligne-in">${c.t('accueil.titre2')} <em>${c.t('accueil.titre3')}</em></span></span></h1>
    <p class="ouv-sous ouv-anim masque-ecran-bas">${c.t('accueil.texte')}</p>
    <p class="ouv-actions ouv-anim">
      <a class="bouton" href="#collection" data-action-principale>${c.t('accueil.action')}</a>
      ${c.lien('renseignements', { classe: 'bouton bouton--clair', texte: c.t('accueil.action2') })}
    </p>
    <p class="ouv-info ouv-anim" data-info-cle>${c.t('accueil.info')}</p>
  </div>
</section>

<section class="manifeste" id="esprit">
  <div class="conteneur manifeste-grille">
    <div class="manifeste-texte">
      <p class="surtitre" data-anime>${c.t('accueil.manifeste.surtitre')}</p>
      <p class="manifeste-grand" data-anime="mots">${c.t('accueil.manifeste.texte')}</p>
      <p class="manifeste-suite" data-anime>${c.t('accueil.manifeste.suite')}</p>
      <p data-anime>${c.lien('chez-vous', { classe: 'lien-fleche', texte: c.t('accueil.manifeste.lien') })}</p>
    </div>
    ${img(c, 'manifeste', { classe: 'manifeste-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  </div>
</section>

<section class="collection" id="collection">
  <div class="conteneur collection-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.voyageurs.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.voyageurs.titre')}</h2>
      <p class="chapo" data-anime>${c.t('accueil.voyageurs.texte')}</p>
    </div>
    <div class="curseur-voyageurs" data-effet="voyageurs" data-curseur-voyageurs>
      <label for="nb-voyageurs">${c.t('accueil.voyageurs.label')}</label>
      <div class="curseur-ligne">
        <input type="range" id="nb-voyageurs" min="2" max="12" step="1" value="${depart}" data-voyageurs-curseur>
        <output for="nb-voyageurs" class="curseur-valeur" data-voyageurs-valeur>${depart}</output>
      </div>
      <p class="curseur-resultat" aria-live="polite"><strong data-nb-villas>${V.filter((v) => v.voyageurs >= depart).length}</strong> ${c.t('accueil.voyageurs.resultat')} <strong data-nb-voyageurs>${depart}</strong> ${c.t('commun.voyageurs')}</p>
    </div>
  </div>
  <ul class="conteneur collection-grille" data-collection>
    ${ordre.map((v, i) => carteVilla(c, v, { cache: i >= 6 }))}
  </ul>
  <p class="conteneur collection-tous">${c.lien('villas', { classe: 'bouton bouton--contour', texte: c.t('accueil.voyageurs.tous') })}</p>
</section>

<section class="cote" id="cote">
  <div class="conteneur cote-tete">
    <p class="surtitre" data-anime>${c.t('accueil.cote.surtitre')}</p>
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.cote.titre')}</h2>
    <p class="chapo" data-anime>${c.t('accueil.cote.texte')}</p>
  </div>
  <div class="conteneur">${cote(c)}</div>
  <p class="conteneur note">${c.t('accueil.cote.note')}</p>
</section>

<section class="apercu-services" id="services">
  <div class="conteneur apercu-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.services.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.services.titre')}</h2>
    </div>
    <div>
      <p class="chapo" data-anime>${c.t('accueil.services.texte')}</p>
      <p data-anime>${c.lien('chez-vous', { classe: 'lien-fleche', texte: c.t('accueil.services.lien') })}</p>
    </div>
  </div>
  <ul class="conteneur apercu-grille" data-anime="cascade">
    ${apercu.map((s) => html`<li class="apercu-carte">
      ${img(c, s.image, { classe: 'apercu-media', sizes: '(max-width: 760px) 92vw, 25vw' })}
      <h3>${s.titre}</h3>
      <p>${s.points.join(' · ')}</p>
    </li>`)}
  </ul>
</section>

<section class="lieux-apercu" id="lieux">
  <div class="conteneur apercu-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.lieux.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.t('accueil.lieux.titre')}</h2>
    </div>
    <div>
      <p class="chapo" data-anime>${c.t('accueil.lieux.texte')}</p>
      <p data-anime>${c.lien('chez-nous', { classe: 'lien-fleche', texte: c.t('accueil.lieux.lien') })}</p>
    </div>
  </div>
  <div class="rangee" data-rangee data-effet="rangee" tabindex="0" role="region" aria-label="${c.s('accueil.lieux.titre')}">
    <ul class="rangee-piste" data-rangee-piste>
      ${c.donnees.lieux.slice(0, 8).map((l) => html`<li class="rangee-carte">${img(c, l.image, { classe: 'rangee-media', sizes: '(max-width: 760px) 70vw, 28vw' })}<p>${l.titre}</p></li>`)}
    </ul>
  </div>
</section>

<section class="confiance" id="confiance">
  <div class="conteneur confiance-grille">
    <h2 class="titre-section" data-anime="lignes">${c.t('accueil.confiance.titre')}</h2>
    <div class="confiance-texte" data-anime="cascade">
      <p class="confiance-etoiles"><span class="etoiles" aria-hidden="true">★★★★★</span> ${c.t('accueil.confiance.etoiles')}</p>
      <p>${c.t('accueil.confiance.etoilesListe')}</p>
      <p>${c.t('accueil.confiance.plateformes')}</p>
    </div>
  </div>
  <div class="mots" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${c.t('accueil.confiance.ruban')} ${c.t('accueil.confiance.ruban')}</p>
    <p data-fx-rangee data-sens="-1">${c.t('accueil.confiance.ruban2')} ${c.t('accueil.confiance.ruban2')}</p>
  </div>
</section>

${appel(c, {
    image: 'appel-accueil', id: 'demande', titre: c.t('accueil.appel.titre'), texte: c.t('accueil.appel.texte'),
    contenu: html`<form class="mini-demande" action="${c.url('renseignements')}" method="get" data-mini-demande data-anime>
      <div class="champ"><label for="m-villa">${c.t('accueil.appel.villa')}</label>
        <select id="m-villa" name="villa"><option value="">${c.t('accueil.appel.villaIndifferente')}</option>${V.map((v) => html`<option value="${v.id}">${v.nom}</option>`)}</select></div>
      <div class="champ"><label for="m-arrivee">${c.t('accueil.appel.arrivee')}</label><input id="m-arrivee" name="arrivee" type="date"></div>
      <div class="champ champ--court"><label for="m-voyageurs">${c.t('accueil.appel.voyageurs')}</label><input id="m-voyageurs" name="adultes" type="number" min="1" max="12" value="4" inputmode="numeric"></div>
      <button type="submit" class="bouton">${c.t('accueil.appel.envoyer')}</button>
    </form>`,
  })}
`;
};
