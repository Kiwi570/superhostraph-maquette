/* Madame&Monsieur · effets propres au projet. Le socle gère l'ouverture, le voile (forme « persiennes », voile.js),
   l'en-tête, le défilement et la bibliothèque d'effets. Ici : l'intro des volets, les arrivées, et les effets du plan :
   voyageurs (curseur qui range la collection), cote (le littoral qui se dessine), rangee (lieux qui glissent),
   bandeau (photos des villas qui glissent), plus le catalogue filtrable, la fiche plein écran et la demande en étapes. */
import { demarrer, boucle, etat, quand, rafraichir, partir, suivre, lacher, bloquerDefilement, debloquerDefilement } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ordinateur = () => window.matchMedia('(min-width: 761px)').matches;

/* ---------- Ouverture de la page : lignes du titre et éléments d'appoint ---------- */
function ouvrirPage(tl, a) {
  const lignes = $$('.ouv-titre .ligne-in'), autres = $$('.ouv-anim');
  if (lignes.length) tl.fromTo(lignes, { yPercent: 135, y: 0 }, { yPercent: 0, y: 0, duration: 0.85, stagger: 0.11, ease: 'power3.out' }, a);
  if (autres.length) tl.fromTo(autres, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power2.out' }, a + 0.2);
  const media = $('.ouv-media img, .ouv-scindee-media img');
  if (media && !media.closest('[data-fx]')) tl.fromTo(media, { scale: 1.1 }, { scale: 1, duration: 1.6, ease: 'power2.out' }, Math.max(0, a - 0.6));
  const drap = $('.drap');
  if (drap) tl.fromTo(drap, { scaleY: 1 }, { scaleY: 0, duration: 0.9, ease: 'power3.inOut' }, Math.max(0, a - 0.35));
  const piste = $('[data-bandeau-piste]');
  if (piste) tl.fromTo(piste, { xPercent: 12, opacity: 0 }, { xPercent: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, Math.max(0, a - 0.2));
  return tl;
}

function etatFinalPage() {
  if (!gsap) return;
  gsap.set('.ouv-titre .ligne-in', { yPercent: 0, y: 0 });
  gsap.set('.ouv-anim', { opacity: 1, y: 0 });
  gsap.set('.drap', { scaleY: 0 });
  gsap.set('[data-bandeau-piste]', { xPercent: 0, opacity: 1 });
  const media = $('.ouv-media img, .ouv-scindee-media img');
  if (media && !media.closest('[data-fx]')) gsap.set(media, { scale: 1 });
}

/* ---------- Intro : les lames pivotent, « Madame » et « Monsieur » partent avec leurs volets, le « & » rejoint l'en-tête ---------- */
function jouerIntro() {
  if (!gsap) return null;
  const panneau = $('[data-ouverture]');
  const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
  if (!panneau) return ouvrirPage(tl, 0.2);
  const lamesG = $$('.volet--g .lame', panneau), lamesD = $$('.volet--d .lame', panneau);
  tl.fromTo([...lamesG, ...lamesD], { rotateX: 0 }, { rotateX: 66, duration: 0.6, ease: 'power2.inOut', stagger: { each: 0.022, grid: [2, lamesG.length], axis: 'y', from: 'start' } }, 0.15);
  tl.to('.ouverture-ligne', { opacity: 0, duration: 0.3 }, 0.6);
  /* Le « & » de l'intro rejoint celui de la marque, dans l'en-tête. */
  const amp = $('.ouverture-amp', panneau), cible = $('[data-marque-amp]');
  if (amp && cible) {
    const a = amp.getBoundingClientRect(), b = cible.getBoundingClientRect();
    if (b.width > 0) {
      const echelle = Math.max(0.12, b.height / Math.max(1, a.height));
      tl.to(amp, { x: b.left + b.width / 2 - (a.left + a.width / 2), y: b.top + b.height / 2 - (a.top + a.height / 2), scale: echelle, duration: 0.7, ease: 'power3.inOut' }, 0.8)
        .to(amp, { opacity: 0, duration: 0.15 }, 1.45);
    } else tl.to(amp, { opacity: 0, scale: 0.6, duration: 0.4 }, 0.9);
  }
  tl.to('.volet--g', { rotateY: 96, duration: 0.85, ease: 'power3.in' }, 0.95)
    .to('.volet--d', { rotateY: -96, duration: 0.85, ease: 'power3.in' }, 0.95)
    .to('.volet-mot', { opacity: 0, duration: 0.3 }, 1.4);
  ouvrirPage(tl, 1.5);
  return tl;
}

function arriveePage() {
  if (!gsap) return;
  ouvrirPage(gsap.timeline({ delay: 0.1 }), 0.05);
}

/* ---------- Effet « voyageurs » : le curseur range la collection (FLIP sans plugin) ---------- */
function voyageurs() {
  const curseur = $('[data-voyageurs-curseur]'), grille = $('[data-collection]');
  if (!curseur || !grille) return;
  const cartes = $$('.villa', grille), valeur = $('[data-voyageurs-valeur]'), nbV = $('[data-nb-villas]'), nbP = $('[data-nb-voyageurs]');
  const villas = cartes.map((el) => ({ el, n: +el.dataset.voyageurs, p: +el.dataset.prix }));
  const appliquer = (n, anime = true) => {
    valeur.textContent = n; nbP.textContent = n;
    nbV.textContent = villas.filter((v) => v.n >= n).length;
    const ordre = [...villas].sort((a, b) => (a.n >= n ? 0 : 1) - (b.n >= n ? 0 : 1) || a.n - b.n || a.p - b.p);
    const avant = new Map(cartes.map((el) => [el, el.hidden ? null : el.getBoundingClientRect()]));
    ordre.forEach((v, i) => { grille.appendChild(v.el); v.el.hidden = i >= 6; });
    if (!anime || !gsap) return;
    ordre.slice(0, 6).forEach((v) => {
      const a = avant.get(v.el), b = v.el.getBoundingClientRect();
      if (a) gsap.fromTo(v.el, { x: a.left - b.left, y: a.top - b.top }, { x: 0, y: 0, duration: 0.6, ease: 'power3.out', overwrite: true });
      else gsap.fromTo(v.el, { scale: 0.94, y: 16 }, { scale: 1, y: 0, duration: 0.5, ease: 'power2.out', overwrite: true });
    });
  };
  let demo = null;
  const arreterDemo = () => { if (demo) { demo.kill(); demo = null; } };
  curseur.addEventListener('input', () => { arreterDemo(); appliquer(+curseur.value); });
  ['pointerdown', 'keydown', 'touchstart'].forEach((t) => curseur.addEventListener(t, arreterDemo, { passive: true }));
  /* Démonstration à la première entrée à l'écran : le curseur glisse seul de 4 à 8 voyageurs. */
  if (gsap && ST) {
    ST.create({
      trigger: curseur, start: 'top 82%', once: true,
      onEnter: () => {
        if (etat.arrivee === 'retour') return;
        const o = { n: 4 }; let dernier = 0;
        appliquer(4, false);
        demo = gsap.to(o, { n: 8, duration: 1.6, ease: 'power1.inOut', delay: 0.3, onUpdate: () => { const n = Math.round(o.n); if (n !== dernier) { dernier = n; curseur.value = n; appliquer(n); } }, onComplete: () => { demo = null; } });
      },
    });
  }
}

/* ---------- Effet « cote » : le littoral se dessine au défilement, les secteurs s'allument ---------- */
function cote() {
  $$('.cote-carte').forEach((carte) => {
    const trait = $('[data-cote-trait]', carte), svg = $('.cote-svg', carte);
    const reperes = $$('.cote-repere', carte);
    if (!trait || !gsap || !ST) { carte.classList.add('allumee'); reperes.forEach((r) => r.classList.add('allume')); return; }
    const L = trait.getTotalLength();
    trait.style.strokeDasharray = `${L}`;
    const positions = reperes.map((r) => +(/translate\((\d+)/.exec(r.getAttribute('transform')) || [0, 0])[1] / 1200);
    gsap.set(reperes, { opacity: 0.25 });
    const allumer = (p) => reperes.forEach((r, i) => {
      const on = p >= positions[i] - 0.02 || (r.dataset.repere === 'valescure' && p > 0.18);
      if (on !== r.classList.contains('allume')) { r.classList.toggle('allume', on); gsap.to(r, { opacity: on ? 1 : 0.25, duration: 0.35, overwrite: true }); }
    });
    const mm = gsap.matchMedia();
    mm.add({ grand: '(min-width: 761px)', petit: '(max-width: 760px)' }, (ctx) => {
      const decal = () => (ctx.conditions.petit ? Math.max(0, svg.getBoundingClientRect().width - carte.clientWidth) : 0);
      const tl = gsap.timeline({ scrollTrigger: { trigger: carte, start: 'top 80%', end: 'bottom 55%', scrub: 0.6, invalidateOnRefresh: true, onUpdate: (s) => { allumer(s.progress); carte.classList.toggle('allumee', s.progress > 0.05); } } });
      tl.fromTo(trait, { strokeDashoffset: L }, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0);
      if (ctx.conditions.petit) tl.fromTo(svg, { x: 0 }, { x: () => -decal(), ease: 'none', duration: 1 }, 0);
    });
  });
}

/* ---------- Effets « rangee » et « bandeau » : des photos qui glissent pendant que la section passe (sans épinglage) ---------- */
function glissements() {
  /* Légendes des lieux : cachées tant qu'elles ne sont pas entières dans la rangée (jamais coupées au bord). */
  if ('IntersectionObserver' in window) $$('[data-rangee]').forEach((r) => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('hors-cadre', e.intersectionRatio < 0.98)), { root: r, threshold: [0, 0.98, 1] });
    $$('.rangee-carte p', r).forEach((p) => io.observe(p));
  });
  if (!gsap || !ST) return;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 1101px) and (min-height: 501px)', () => {
    $$('[data-rangee]').forEach((r) => {
      const piste = $('[data-rangee-piste]', r);
      gsap.fromTo(piste, { x: 0 }, { x: () => -Math.max(0, piste.scrollWidth - r.clientWidth), ease: 'none', scrollTrigger: { trigger: r, start: 'top bottom', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true } });
    });
  });
  $$('[data-bandeau]').forEach((b) => {
    const piste = $('[data-bandeau-piste]', b);
    const enveloppe = document.createElement('div');
    piste.parentNode.insertBefore(enveloppe, piste); enveloppe.appendChild(piste);
    enveloppe.className = 'bandeau-glisse';
    gsap.fromTo(enveloppe, { x: 0 }, { x: () => -Math.max(0, piste.scrollWidth - b.clientWidth) * 0.6, ease: 'none', scrollTrigger: { trigger: b.closest('section') || b, start: 'top top', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true } });
  });
}

/* ---------- Catalogue : filtres gardés dans l'adresse ---------- */
function catalogue() {
  const form = $('[data-filtres]'), grille = $('[data-catalogue]');
  if (!form || !grille) return;
  const cartes = $$('.villa', grille), compte = $('[data-compte]'), mot = $('[data-compte-mot]'), vide = $('[data-vide]'), effacer = $('[data-effacer]');
  const mots = { un: 'villa', plusieurs: mot.textContent };
  const params = new URLSearchParams(location.search);
  ['voyageurs', 'budget', 'secteur'].forEach((k) => { const v = params.get(k); if (v != null) $$(`[name="${k}"]`, form).forEach((c) => { if (c.type === 'radio') c.checked = c.value === v; else c.value = v; }); });
  ['piscine', 'vue-mer'].forEach((k) => { const c = $(`[name="${k}"]`, form); if (c) c.checked = params.get(k) === '1'; });
  const lire = () => {
    const f = new FormData(form);
    return { voyageurs: +(f.get('voyageurs') || 0), budget: +(f.get('budget') || 0), piscine: f.get('piscine') === '1', vueMer: f.get('vue-mer') === '1', secteur: f.get('secteur') || '' };
  };
  const filtrer = (anime = true) => {
    const f = lire();
    let n = 0;
    cartes.forEach((li) => {
      const d = li.dataset;
      const ok = (!f.voyageurs || +d.voyageurs >= f.voyageurs) && (!f.budget || +d.prix <= f.budget) && (!f.piscine || d.piscine === '1') && (!f.vueMer || d.vueMer === '1') && (!f.secteur || d.secteur === f.secteur);
      if (ok) n++;
      if (ok && li.hidden) { li.hidden = false; if (anime && gsap) gsap.fromTo(li, { y: 18, scale: 0.97 }, { y: 0, scale: 1, duration: 0.45, ease: 'power2.out', clearProps: 'transform' }); }
      else if (!ok) li.hidden = true;
    });
    compte.textContent = n; mot.textContent = n > 1 ? mots.plusieurs : mots.un;
    vide.hidden = n > 0;
    const p = new URLSearchParams();
    if (f.voyageurs) p.set('voyageurs', f.voyageurs); if (f.budget) p.set('budget', f.budget);
    if (f.piscine) p.set('piscine', '1'); if (f.vueMer) p.set('vue-mer', '1'); if (f.secteur) p.set('secteur', f.secteur);
    const fiche = new URLSearchParams(location.search).get('fiche'); if (fiche) p.set('fiche', fiche);
    effacer.hidden = !(f.voyageurs || f.budget || f.piscine || f.vueMer || f.secteur);
    history.replaceState(history.state, '', location.pathname + (p.toString() ? `?${p}` : '') + location.hash);
    rafraichir && rafraichir();
  };
  form.addEventListener('change', () => filtrer());
  form.addEventListener('submit', (e) => e.preventDefault());
  effacer.addEventListener('click', () => { form.reset(); filtrer(); });
  filtrer(false);
  /* Arrivée sur une villa précise (#villa-…) : elle est mise en avant un instant. */
  const surligner = () => {
    const li = location.hash && /^#villa-/.test(location.hash) ? $(location.hash) : null;
    if (li) { li.hidden = false; li.classList.add('surligne'); setTimeout(() => li.classList.remove('surligne'), 2600); }
  };
  quand('pret', surligner);
}

/* ---------- Fiche plein écran d'une villa ---------- */
function fiche() {
  const boite = $('[data-fiche]');
  if (!boite) return;
  const photos = $('[data-fiche-photos]', boite), compteur = $('[data-fiche-compte]', boite), demande = $('[data-fiche-demande]', boite);
  let index = 0, liste = [], declencheur = null;
  const montrer = (i) => {
    index = (i + liste.length) % liste.length;
    liste.forEach((m, k) => m.classList.toggle('active', k === index));
    compteur.textContent = `${index + 1} / ${liste.length}`;
  };
  const ouvrir = (id, bouton) => {
    const li = $(`.villa[data-villa="${CSS.escape(id)}"]`);
    if (!li) return;
    declencheur = bouton || null;
    photos.innerHTML = $('[data-fiche-galerie]', li).innerHTML;
    liste = $$('.media', photos);
    $$('img', photos).forEach((im) => { im.loading = 'eager'; });
    const info = JSON.parse($('[data-fiche-atouts]', li).innerHTML);
    $('[data-fiche-nom]', boite).textContent = $('.villa-nom', li).textContent;
    $('[data-fiche-secteur]', boite).textContent = $('.villa-secteur', li).textContent;
    $('[data-fiche-capacite]', boite).textContent = $('.villa-capacite', li).textContent;
    $('[data-fiche-prix]', boite).textContent = $('.villa-prix', li).textContent;
    $('[data-fiche-phrase]', boite).textContent = $('.villa-phrase', li).textContent;
    const atouts = [...info.atouts]; if (info.etoiles) atouts.unshift('Meublé de tourisme ★★★★★');
    $('[data-fiche-atouts]', boite).innerHTML = atouts.map((a) => `<li>${a.replace(/</g, '&lt;')}</li>`).join('');
    demande.href = `${demande.getAttribute('href').split('?')[0]}?villa=${encodeURIComponent(id)}&adultes=${Math.min(+li.dataset.voyageurs, 4)}`;
    boite.hidden = false;
    bloquerDefilement('fiche'); suivre(boite);
    montrer(0);
    if (gsap) gsap.fromTo($('[data-fiche-boite]', boite), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out' });
    const p = new URLSearchParams(location.search); p.set('fiche', id);
    history.replaceState(history.state, '', `${location.pathname}?${p}${location.hash}`);
    $('[data-fiche-fermer]', boite).focus();
  };
  const fermer = () => {
    if (boite.hidden) return;
    boite.hidden = true;
    debloquerDefilement('fiche'); lacher(boite);
    const p = new URLSearchParams(location.search); p.delete('fiche');
    history.replaceState(history.state, '', location.pathname + (p.toString() ? `?${p}` : '') + location.hash);
    if (declencheur) declencheur.focus();
  };
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-ouvrir-fiche]');
    if (b) { ouvrir(b.dataset.ouvrirFiche, b); return; }
    if (e.target === boite) fermer();
  });
  $('[data-fiche-fermer]', boite).addEventListener('click', fermer);
  $('[data-fiche-prec]', boite).addEventListener('click', () => montrer(index - 1));
  $('[data-fiche-suiv]', boite).addEventListener('click', () => montrer(index + 1));
  let x0 = null;
  photos.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  photos.addEventListener('touchend', (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) montrer(index + (dx < 0 ? 1 : -1)); x0 = null; }, { passive: true });
  document.addEventListener('keydown', (e) => {
    if (boite.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); fermer(); }
    else if (e.key === 'ArrowRight') montrer(index + 1);
    else if (e.key === 'ArrowLeft') montrer(index - 1);
    else if (e.key === 'Tab') {
      const f = $$('button, a[href]', boite).filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  const id = new URLSearchParams(location.search).get('fiche');
  if (id) quand('pret', () => ouvrir(id));
}

/* ---------- Demande en trois étapes, récapitulatif en direct ---------- */
function demande() {
  const form = $('[data-etapes]');
  if (!form) return;
  const etapes = $$('[data-etape]', form), cadre = $('[data-etapes-cadre]', form), fil = $$('[data-fil]', form);
  let courante = 0;
  const aller = (i, focus = true) => {
    const h0 = cadre.offsetHeight;
    etapes.forEach((e, k) => e.classList.toggle('active', k === i));
    fil.forEach((f, k) => { f.classList.toggle('actif', k === i); f.classList.toggle('fait', k < i); });
    courante = i;
    if (gsap && focus) { const h1 = cadre.offsetHeight; gsap.fromTo(cadre, { height: h0 }, { height: h1, duration: 0.4, ease: 'power2.out', clearProps: 'height', onComplete: () => rafraichir && rafraichir() }); }
    if (focus) { const champ = $('select, input, textarea', etapes[i]); champ && champ.focus({ preventScroll: true }); }
  };
  const valide = (i) => {
    let ok = true;
    $$('[required]', etapes[i]).forEach((c) => {
      const vide = !String(c.value || '').trim();
      c.toggleAttribute('aria-invalid', vide);
      if (vide && ok) { ok = false; c.focus(); }
    });
    const a = $('#f-arrivee'), d = $('#f-depart');
    if (ok && i === 0 && a.value && d.value && d.value <= a.value) { d.setAttribute('aria-invalid', 'true'); d.focus(); ok = false; }
    return ok;
  };
  form.addEventListener('click', (e) => {
    if (e.target.closest('[data-suivant]')) { if (valide(courante)) aller(Math.min(courante + 1, etapes.length - 1)); }
    else if (e.target.closest('[data-precedent]')) aller(Math.max(courante - 1, 0));
    const pm = e.target.closest('[data-plus], [data-moins]');
    if (pm) {
      const c = $(`#${pm.dataset.plus || pm.dataset.moins}`);
      c.value = Math.max(+c.min, Math.min(+c.max, (+c.value || 0) + (pm.dataset.plus ? 1 : -1)));
      c.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });
  aller(0, false);
  /* Récapitulatif. */
  const villa = $('#f-villa'), rV = $('[data-recap-villa]'), rD = $('[data-recap-dates]'), rN = $('[data-recap-voyageurs]'), vide = rV.textContent;
  const images = new Map($$('[data-recap-images] span', $('[data-recap]').querySelector('template').content).map((s) => [s.dataset.id, s]));
  const image = $('[data-recap-image] img');
  const fmt = (v) => (v ? new Date(`${v}T12:00:00`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }) : '');
  const maj = () => {
    const o = villa.selectedOptions[0];
    rV.textContent = villa.value ? o.textContent.split(' · ')[0] : vide;
    const im = images.get(villa.value);
    if (im && image && image.dataset.src !== im.dataset.src) { image.removeAttribute('srcset'); image.src = im.dataset.src; image.alt = im.dataset.alt; image.dataset.src = im.dataset.src; }
    const a = $('#f-arrivee').value, d = $('#f-depart').value;
    let dates = vide;
    if (a && d && d > a) { const n = Math.round((new Date(d) - new Date(a)) / 864e5); dates = `${fmt(a)} → ${fmt(d)} · ${n} ${n > 1 ? 'nuits' : 'nuit'}`; } else if (a) dates = `${fmt(a)} →`;
    rD.textContent = dates;
    const ad = +$('#f-adultes').value || 0, en = +$('#f-enfants').value || 0;
    rN.textContent = `${ad} adulte${ad > 1 ? 's' : ''}${en ? ` · ${en} enfant${en > 1 ? 's' : ''}` : ''}`;
  };
  form.addEventListener('input', maj); form.addEventListener('change', maj);
  maj();
}

/* ---------- Mini-demande de l'accueil : vers Renseignements, sous le voile ---------- */
function miniDemande() {
  const f = $('[data-mini-demande]');
  if (!f) return;
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = new URLSearchParams();
    new FormData(f).forEach((v, k) => { if (v) p.set(k, v); });
    const url = `${f.getAttribute('action')}${p.toString() ? `?${p}` : ''}#demande`;
    if (partir) partir(url, 'Renseignements'); else location.href = url;
  });
}

demarrer({
  preparer() {
    voyageurs();
    cote();
    glissements();
    catalogue();
    fiche();
    demande();
    miniDemande();
  },
  jouer: jouerIntro,
  etatFinal: etatFinalPage,
  arrivee: arriveePage,
});
