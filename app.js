/* Etayons — script commun (multi-pages) */
/* ============================================================
   FORMULAIRE — Web3Forms
   1. Va sur https://web3forms.com
   2. Entre contact@etayons.fr -> tu reçois une "Access Key" par email
   3. Colle-la ci-dessous (elle est publique par design, aucun risque).
   Tant que la clé reste le placeholder, le formulaire bascule
   automatiquement sur l'ouverture du logiciel mail (mailto).
   ============================================================ */
var WEB3FORMS_ACCESS_KEY = '550ff9b7-a5c8-40e1-961b-9e4f73eab288';

(function () {
  'use strict';

  // ---- année copyright ----
  var copy = document.getElementById('copy');
  if (copy) copy.textContent = '© ' + new Date().getFullYear() + ' Etayons. Tous droits réservés.';

  var keySet = WEB3FORMS_ACCESS_KEY.indexOf('VOTRE_') !== 0 && WEB3FORMS_ACCESS_KEY.length > 10;

  // ---- carrousel cas clients (accueil) ----
  var stage = document.getElementById('uc-stage');
  if (stage) {
    var slides = Array.prototype.slice.call(document.querySelectorAll('.uc-slide'));
    var dots   = Array.prototype.slice.call(document.querySelectorAll('.uc-dot'));
    var idx = 0, paused = false;
    function show(i) {
      idx = (i + slides.length) % slides.length;
      slides.forEach(function (sl, k) { sl.style.display = k === idx ? 'block' : 'none'; });
      dots.forEach(function (d, k) {
        d.style.width = k === idx ? '34px' : '10px';
        d.style.background = k === idx ? 'var(--or-l)' : 'rgba(255,255,255,.3)';
      });
    }
    dots.forEach(function (d) { d.addEventListener('click', function () { show(+d.getAttribute('data-i')); }); });
    var prev = document.querySelector('[data-uc="prev"]'), next = document.querySelector('[data-uc="next"]');
    if (prev) prev.addEventListener('click', function () { show(idx - 1); });
    if (next) next.addEventListener('click', function () { show(idx + 1); });
    stage.addEventListener('mouseenter', function () { paused = true; });
    stage.addEventListener('mouseleave', function () { paused = false; });
    setInterval(function () { if (!paused) show(idx + 1); }, 5500);
    show(0);
  }

  // ---- formulaire contact / candidature ----
  var formWrap = document.getElementById('form-wrap');
  if (formWrap) {
    // bascule entreprise / candidat
    window.setMode = function (m) {
      var ent = m === 'entreprise';
      var on = document.getElementById(ent ? 'm-entreprise' : 'm-candidat');
      var off = document.getElementById(ent ? 'm-candidat' : 'm-entreprise');
      on.style.cssText += ';border-color:var(--or-d);background:var(--marine);color:#fff;box-shadow:4px 4px 0 var(--or-d)';
      off.style.cssText += ';border-color:var(--bord);background:#fff;color:var(--marine);box-shadow:none';
      off.querySelector('div+div').style.color = 'var(--mut)';
      on.querySelector('div+div').style.color = 'rgba(255,255,255,.7)';
      document.getElementById('l1').textContent = ent ? 'Nom & prénom' : 'Nom';
      document.getElementById('l2').textContent = ent ? 'Société' : 'Prénom';
      document.getElementById('l4').textContent = ent ? 'Téléphone' : 'Spécialité';
      document.getElementById('lmsg').textContent = ent ? 'Brief du projet / compétences recherchées' : 'Message & lien portfolio';
      document.getElementById('cv-field').style.display = ent ? 'none' : 'block';
    };

    function done() {
      formWrap.style.display = 'none';
      document.getElementById('form-sent').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.sendForm = function () {
      var val = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var ent = document.getElementById('cv-field').style.display === 'none';
      var l1 = document.getElementById('l1').textContent,
          l2 = document.getElementById('l2').textContent,
          l4 = document.getElementById('l4').textContent,
          lm = document.getElementById('lmsg').textContent;
      var name = val('f1'), email = val('f3');
      if (!email || !name) { alert('Merci de renseigner au moins votre nom et votre email.'); return; }

      var typeLabel = ent ? 'Demande de Relais (entreprise)' : 'Candidature (talent)';
      var subject = ent
        ? '[Site Etayons] Demande de Relais : ' + (val('f2') || name)
        : '[Site Etayons] Candidature : ' + name + ' ' + val('f2');
      var bodyText =
        l1 + ' : ' + name + '\n' +
        l2 + ' : ' + val('f2') + '\n' +
        'Email : ' + email + '\n' +
        l4 + ' : ' + val('f4') + '\n' +
        (ent ? '' : 'Lien CV / portfolio : ' + val('fcv') + '\n') +
        '\n' + lm + ' :\n' + val('fmsg');

      if (keySet) {
        var btn = document.querySelector('#form-wrap .btns');
        if (btn) { btn.textContent = 'Envoi…'; btn.style.pointerEvents = 'none'; }
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: subject,
            from_name: 'Site Etayons',
            type: typeLabel,
            replyto: email,
            email: email,
            message: bodyText
          })
        }).then(function (r) { return r.json(); })
          .then(function (data) {
            if (data && data.success) { done(); }
            else { throw new Error((data && data.message) || 'échec'); }
          })
          .catch(function (err) {
            if (btn) { btn.textContent = 'Envoyer ma demande'; btn.style.pointerEvents = ''; }
            alert("L'envoi a échoué. Vous pouvez nous écrire directement à contact@etayons.fr.");
            console.error(err);
          });
      } else {
        // repli : ouverture du logiciel mail
        window.location.href = 'mailto:contact@etayons.fr?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyText);
        done();
      }
    };

    // pré-sélection candidat via ?mode=candidat
    try {
      if (new URLSearchParams(window.location.search).get('mode') === 'candidat') window.setMode('candidat');
    } catch (e) {}
  }
})();
