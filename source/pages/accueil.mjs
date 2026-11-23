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
  <a class="ouv-defiler ouv-anim masque-ecran-bas" href="#esprit"><span>${c.t('accueil.defiler')}</span><span class="ouv-defiler-trait" aria-hidden="true" data-boucle-css></span></a>
</section>

<section class="manifeste" id="esprit">
  <div class="conteneur manifeste-grille">
    <div class="manifeste-texte">
      <p class="surtitre" data-anime>${c.t('accueil.manifeste.surtitre')}</p>
      <p class="manifeste-grand" data-anime="mots">${c.tb('accueil.manifeste.texte')}</p>
      <p class="manifeste-suite" data-anime>${c.t('accueil.manifeste.suite')}</p>
      <p data-anime>${c.lien('chez-vous', { classe: 'lien-fleche', texte: c.t('accueil.manifeste.lien') })}</p>
      <ul class="chiffres" data-anime="cascade">
        <li><strong data-compteur="${V.length}">${V.length}</strong><span>${c.t('accueil.chiffres.villas')}</span></li>
        <li><strong data-compteur="${Math.max(...V.map((v) => v.voyageurs))}">${Math.max(...V.map((v) => v.voyageurs))}</strong><span>${c.t('accueil.chiffres.voyageurs')}</span></li>
        <li><strong data-compteur="${V.filter((v) => v.etoiles).length}">${V.filter((v) => v.etoiles).length}</strong><span>${c.t('accueil.chiffres.etoiles')}</span></li>
      </ul>
    </div>
    ${img(c, 'manifeste', { classe: 'manifeste-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
  </div>
</section>

<section class="collection" id="collection">
  <div class="conteneur collection-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.voyageurs.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.tb('accueil.voyageurs.titre')}</h2>
      <p class="chapo" data-anime>${c.t('accueil.voyageurs.texte')}</p>
    </div>
    <div class="curseur-voyageurs" data-effet="voyageurs" data-grille="manipuler" data-curseur-voyageurs>
      <label for="nb-voyageurs">${c.t('accueil.voyageurs.label')}</label>
      <div class="curseur-ligne">
        <input type="range" id="nb-voyageurs" min="2" max="12" step="1" value="${depart}" data-voyageurs-curseur>
        <output for="nb-voyageurs" class="curseur-valeur" data-voyageurs-valeur>${depart}</output>
      </div>
      <p class="pictos" data-pictos aria-hidden="true">${Array.from({ length: 12 }, (_, i) => html`<svg class="picto${i < depart ? ' plein' : ''}" viewBox="0 0 20 32"><circle cx="10" cy="6" r="5"/><path d="M2 31v-9c0-5 3.5-9 8-9s8 4 8 9v9z"/></svg>`)}</p>
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
    <h2 class="titre-section" data-anime="lignes">${c.tb('accueil.cote.titre')}</h2>
    <p class="chapo" data-anime>${c.t('accueil.cote.texte')}</p>
  </div>
  <div class="conteneur">${cote(c)}</div>
  <p class="conteneur note">${c.t('accueil.cote.note')}</p>
</section>

<section class="apercu-services" id="services">
  <div class="conteneur apercu-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('accueil.services.surtitre')}</p>
      <h2 class="titre-section" data-anime="lignes">${c.tb('accueil.services.titre')}</h2>
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
      <h2 class="titre-section" data-anime="lignes">${c.tb('accueil.lieux.titre')}</h2>
    </div>
    <div>
      <p class="chapo" data-anime>${c.t('accueil.lieux.texte')}</p>
      <p data-anime>${c.lien('chez-nous', { classe: 'lien-fleche', texte: c.t('accueil.lieux.lien') })}</p>
    </div>
  </div>
  <div class="rangee" data-rangee data-effet="rangee" tabindex="0" role="region" aria-label="${c.s('accueil.lieux.titre').replace(/<[^>]+>/g, '')}">
    <ul class="rangee-piste" data-rangee-piste>
      ${c.donnees.lieux.slice(0, 8).map((l) => html`<li class="rangee-carte">${img(c, l.image, { classe: 'rangee-media', sizes: '(max-width: 760px) 70vw, 28vw' })}<p>${l.titre}</p></li>`)}
    </ul>
  </div>
</section>

<section class="confiance" id="confiance">
  <div class="conteneur confiance-grille">
    <div class="confiance-tete">
      <h2 class="titre-section" data-anime="lignes">${c.tb('accueil.confiance.titre')}</h2>
      <svg class="macaron" viewBox="0 0 200 200" aria-hidden="true" data-effet="macaron">
        <defs><path id="macaron-cercle" d="M100 100 m-74 0 a74 74 0 1 1 148 0 a74 74 0 1 1 -148 0"/></defs>
        <g class="macaron-tour"><text><textPath href="#macaron-cercle" textLength="462">${c.s('accueil.confiance.macaron')}</textPath></text></g>
        <circle cx="100" cy="100" r="52" class="macaron-disque"/>
        <path class="macaron-etoiles" d="M74.0 78.4 L75.4 82.1 L79.3 82.3 L76.2 84.7 L77.3 88.5 L74.0 86.3 L70.7 88.5 L71.8 84.7 L68.7 82.3 L72.6 82.1Z M87.0 78.4 L88.4 82.1 L92.3 82.3 L89.2 84.7 L90.3 88.5 L87.0 86.3 L83.7 88.5 L84.8 84.7 L81.7 82.3 L85.6 82.1Z M100.0 78.4 L101.4 82.1 L105.3 82.3 L102.2 84.7 L103.3 88.5 L100.0 86.3 L96.7 88.5 L97.8 84.7 L94.7 82.3 L98.6 82.1Z M113.0 78.4 L114.4 82.1 L118.3 82.3 L115.2 84.7 L116.3 88.5 L113.0 86.3 L109.7 88.5 L110.8 84.7 L107.7 82.3 L111.6 82.1Z M126.0 78.4 L127.4 82.1 L131.3 82.3 L128.2 84.7 L129.3 88.5 L126.0 86.3 L122.7 88.5 L123.8 84.7 L120.7 82.3 L124.6 82.1Z"/>
        <path class="macaron-amp" d="M93.5 128.9Q90 128.9 87.7 127.8Q85.4 126.6 84.3 124.7Q83.2 122.9 83.2 120.4Q83.2 117.5 84.5 115.5Q85.8 113.6 88.1 112.4Q90.5 111.2 93.4 110.7Q92 108.4 91.4 106.6Q90.7 104.8 90.7 103.1Q90.7 100.5 91.9 98.7Q93.1 96.9 95.4 96Q97.6 95.1 100.6 95.1Q103.4 95.1 105.1 95.9Q106.9 96.7 107.7 98Q108.6 99.3 108.6 101.1Q108.6 103.4 107.5 104.9Q106.4 106.4 104.1 107.4Q101.9 108.5 98.3 109.4L105.1 118.6Q106 116.7 106.7 114.7Q107.4 112.6 107.8 110.8L108.2 109H116.8L116.7 109.5H116.1Q114.8 109.5 113.9 109.8Q113 110.2 112.3 111.1Q111.6 112 110.7 113.7Q109.8 115.4 108.8 117.3Q107.9 119.1 106.8 120.9L109.7 124.7Q110.9 126.4 111.7 127.2Q112.4 128 113.6 128H114L113.9 128.4H106.3L103.7 124.8Q101.9 126.5 99.4 127.7Q96.9 128.9 93.5 128.9ZM94.1 128.4Q96.7 128.4 98.7 126.9Q100.7 125.3 102.2 122.8L93.7 111Q91.8 112 90.6 113.3Q89.4 114.6 88.9 116.3Q88.3 117.9 88.3 120.3Q88.3 122.7 89 124.6Q89.7 126.4 91 127.4Q92.2 128.4 94.1 128.4ZM98.1 109.1Q100.3 107.8 101.7 106.5Q103 105.3 103.5 103.9Q104.1 102.5 104.1 100.7Q104.1 98.5 103.2 97Q102.3 95.6 100.4 95.6Q98 95.6 96.8 97.2Q95.6 98.8 95.6 102.2Q95.6 103.3 95.9 104.3Q96.1 105.4 96.6 106.6Q97.2 107.7 98.1 109.1Z"/>
      </svg>
    </div>
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
    image: 'appel-accueil', id: 'demande', titre: c.tb('accueil.appel.titre'), texte: c.t('accueil.appel.texte'),
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
