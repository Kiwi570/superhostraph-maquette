/* Parcours propres à Madame&Monsieur : filtres du catalogue (comptes vérifiés par le calcul), fiche plein écran
   (ouverture, photos, Échap, focus rendu), lien de fiche partagé, curseur des voyageurs, demande en trois étapes
   préremplie depuis une villa. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  for (const taille of [T('390×844'), T('1366×768')]) {
    const { ctx, page } = await contexte({ taille });
    const t = taille.nom || `${taille.w}×${taille.h}`;
    try {
      /* Catalogue : 8 voyageurs et piscine. */
      await page.goto(BASE + '/nos-villas?voyageurs=8&piscine=1', { waitUntil: 'load' });
      await attendrePret(page);
      const r = await page.evaluate(() => {
        const toutes = [...document.querySelectorAll('[data-catalogue] .villa')];
        const attendu = toutes.filter((li) => +li.dataset.voyageurs >= 8 && li.dataset.piscine === '1').length;
        const visibles = toutes.filter((li) => !li.hidden).length;
        return { attendu, visibles, affiche: +document.querySelector('[data-compte]').textContent };
      });
      if (r.attendu !== r.visibles || r.affiche !== r.visibles) R.echec('filtres', `8 voyageurs + piscine : ${r.visibles} villas visibles, ${r.affiche} annoncées, ${r.attendu} attendues`, { page: '/nos-villas', taille: t });
      /* Filtre qui ne laisse rien : message, jamais de page vide. */
      await page.locator('label.puce:has(input[name="voyageurs"][value="12"])').click();
      await page.locator('label.puce:has(input[name="vue-mer"])').click();
      await page.selectOption('#f-secteur', 'valescure');
      await attendre(400);
      const vide = await page.evaluate(() => ({ vide: !document.querySelector('[data-vide]').hidden, url: location.search }));
      if (!vide.vide) R.echec('filtres', 'aucun message quand aucune villa ne correspond', { page: '/nos-villas', taille: t });
      if (!/secteur=valescure/.test(vide.url)) R.echec('filtres', 'les filtres ne sont pas gardés dans l’adresse', { page: '/nos-villas', taille: t });
      await page.locator('[data-effacer]').click();
      await attendre(300);
      const n = await page.evaluate(() => document.querySelectorAll('[data-catalogue] .villa:not([hidden])').length);
      if (n !== 19) R.echec('filtres', `après « Effacer les filtres » : ${n} villas au lieu de 19`, { page: '/nos-villas', taille: t });
      /* Fiche plein écran. */
      const bouton = page.locator('[data-ouvrir-fiche="petit-roc"]');
      await bouton.scrollIntoViewIfNeeded();
      await bouton.click();
      await attendre(600);
      const f = await page.evaluate(() => {
        const b = document.querySelector('[data-fiche]');
        const img = b.querySelector('.media.active img');
        return { ouverte: !b.hidden, nom: b.querySelector('[data-fiche-nom]').textContent, image: !!img && img.complete && img.naturalWidth > 0, url: location.search };
      });
      if (!f.ouverte || !/Petit Roc/.test(f.nom)) R.echec('fiche', 'la fiche du Petit Roc ne s’ouvre pas', { page: '/nos-villas', taille: t });
      if (!/fiche=petit-roc/.test(f.url)) R.echec('fiche', 'la fiche n’a pas son propre lien', { page: '/nos-villas', taille: t });
      await page.locator('[data-fiche-suiv]').click();
      await attendre(400);
      const c = await page.locator('[data-fiche-compte]').textContent();
      if (!/^2 \/ 4$/.test((c || '').trim())) R.echec('fiche', `photo suivante : compteur « ${c} »`, { page: '/nos-villas', taille: t });
      await page.keyboard.press('Escape');
      await attendre(300);
      const fermee = await page.evaluate(() => ({ cachee: document.querySelector('[data-fiche]').hidden, focus: document.activeElement && document.activeElement.dataset.ouvrirFiche }));
      if (!fermee.cachee) R.echec('fiche', 'Échap ne ferme pas la fiche', { page: '/nos-villas', taille: t });
      if (fermee.focus !== 'petit-roc') R.regarder('fiche', 'le focus ne revient pas sur le bouton de la villa', { page: '/nos-villas', taille: t });
      /* Lien partagé vers une fiche. */
      await page.goto(BASE + '/nos-villas?fiche=boheme', { waitUntil: 'load' });
      await attendrePret(page);
      await attendre(500);
      const partage = await page.evaluate(() => !document.querySelector('[data-fiche]').hidden && /Bohème/.test(document.querySelector('[data-fiche-nom]').textContent));
      if (!partage) R.echec('fiche', 'le lien ?fiche=boheme n’ouvre pas la fiche de La Bohème', { page: '/nos-villas', taille: t });
      /* Demande préremplie depuis une villa, trois étapes. */
      await page.goto(BASE + '/renseignements?villa=uccelli&adultes=4', { waitUntil: 'load' });
      await attendrePret(page);
      const d = await page.evaluate(() => ({ villa: document.querySelector('#f-villa').value, recap: document.querySelector('[data-recap-villa]').textContent, adultes: document.querySelector('#f-adultes').value }));
      if (d.villa !== 'uccelli' || !/Uccelli/.test(d.recap) || d.adultes !== '4') R.echec('demande', `préremplissage : villa ${d.villa}, récapitulatif « ${d.recap} », adultes ${d.adultes}`, { page: '/renseignements', taille: t });
      await page.locator('[data-etape="1"] [data-suivant]').click();
      await attendre(300);
      const bloque = await page.evaluate(() => document.querySelector('[data-etape="1"]').classList.contains('active'));
      if (!bloque) R.echec('demande', 'on passe l’étape 1 sans dates', { page: '/renseignements', taille: t });
      await page.fill('#f-arrivee', '2027-07-10');
      await page.fill('#f-depart', '2027-07-17');
      await page.locator('[data-etape="1"] [data-suivant]').click();
      await attendre(500);
      const nuits = await page.locator('[data-recap-dates]').textContent();
      if (!/7 nuits/.test(nuits || '')) R.echec('demande', `récapitulatif des dates : « ${nuits} » (7 nuits attendues)`, { page: '/renseignements', taille: t });
      await page.locator('[data-etape="2"] [data-suivant]').click();
      await attendre(400);
      await page.fill('#f-nom', 'Essai');
      await page.fill('#f-email', 'essai@exemple.fr');
      await page.locator('[data-etape="3"] button[type="submit"]').dblclick();
      await attendre(400);
      const envoi = await page.evaluate(() => ({ msg: !document.querySelector('[data-message-envoi]').hidden, desactive: document.querySelector('[data-etape="3"] button[type="submit"]').disabled }));
      if (!envoi.msg || !envoi.desactive) R.echec('demande', 'envoi simulé : message absent ou bouton encore actif', { page: '/renseignements', taille: t });
    } catch (err) {
      R.echec('parcours', `parcours interrompu : ${err.message.split('\n')[0]}`, { taille: t });
    } finally { await ctx.close(); }
  }
}
