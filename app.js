/* Etayons — script commun (multi-pages) */
/* ============================================================
   CONFIG EMAILJS  —  À RENSEIGNER (comme pour Vivalea)
   1. Crée un compte sur https://www.emailjs.com
   2. Ajoute un "Email Service" relié à contact@etayons.fr -> Service ID
   3. Crée un "Email Template" avec les variables :
      {{type}} {{from_name}} {{company}} {{email}} {{phone}} {{message}}
      et règle le "To email" sur contact@etayons.fr
   4. Copie tes 3 identifiants ci-dessous.
   Tant que ces valeurs restent des placeholders, le formulaire
   bascule automatiquement sur l'ouverture du logiciel mail (mailto).
   ============================================================ */
var EMAILJS_PUBLIC_KEY  = 'VOTRE_PUBLIC_KEY';
var EMAILJS_SERVICE_ID  = 'VOTRE_SERVICE_ID';
var EMAILJS_TEMPLATE_ID = 'VOTRE_TEMPLATE_ID';

(function () {
  'use strict';

  // ---- année copyright ----
  var copy = document.getElementById('copy');
  if (copy) copy.textContent = '© ' + new Date().getFullYear() + ' Etayons. Tous droits réservés.';

  var emailjsReady = false;
  var keysSet = EMAILJS_PUBLIC_KEY.indexOf('VOTRE_') !== 0 &&
                EMAILJS_SERVICE_ID.indexOf('VOTRE_') !== 0 &&
                EMAILJS_TEMPLATE_ID.indexOf('VOTRE_') !== 0;

  // ---- charge le SDK EmailJS seulement si des clés sont fournies ----
  if (keysSet) {
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = function () {
      try { emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY }); emailjsReady = true; }
      catch (e) { emailjsReady = false; }
    };
    document.head.appendChild(s);
  }

  // ---- carrousel cas clients (sur l'accueil) ----
  var stage = document.getElementById('uc-stage');
  if (stage) {
    var slides = Array.prototype.slice.call(document.querySelectorAll('.uc-slide'));
    var dots   = Array.prototype.slice.call(document.querySelectorAll('.uc-dot'));
    var idx = 0, paused = false, timer;
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
    timer = setInterval(function () { if (!paused) show(idx + 1); }, 5500);
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

    window.sendForm = function () {
      var val = function (id) { var el = document.getElementById(id); return el ? el.value.trim() : ''; };
      var ent = document.getElementById('cv-field').style.display === 'none';
      var params = {
        type: ent ? "Demande de Relais (entreprise)" : "Candidature (talent)",
        from_name: val('f1'),
        company: val('f2'),
        email: val('f3'),
        phone: val('f4'),
        message: val('fmsg')
      };
      if (!params.email || !params.from_name) {
        alert('Merci de renseigner au moins votre nom et votre email.');
        return;
      }
      function done() {
        formWrap.style.display = 'none';
        document.getElementById('form-sent').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (emailjsReady) {
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params).then(done, function (err) {
          alert("L'envoi a échoué. Vous pouvez nous écrire directement à contact@etayons.fr.");
          console.error(err);
        });
      } else {
        // repli : ouverture du logiciel mail
        var l1 = document.getElementById('l1').textContent,
            l2 = document.getElementById('l2').textContent,
            l4 = document.getElementById('l4').textContent,
            lm = document.getElementById('lmsg').textContent;
        var subject = ent ? ('[Site Etayons] Demande de Relais : ' + (params.company || params.from_name))
                          : ('[Site Etayons] Candidature : ' + params.from_name + ' ' + params.company);
        var body = l1 + ' : ' + params.from_name + '\n' + l2 + ' : ' + params.company + '\n' +
                   'Email : ' + params.email + '\n' + l4 + ' : ' + params.phone + '\n\n' +
                   lm + ' :\n' + params.message + (ent ? '' : '\n\n(CV à joindre à cet email)');
        window.location.href = 'mailto:contact@etayons.fr?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        done();
      }
    };

    // pré-sélection du mode via ?mode=candidat (depuis "Postuler à ce poste")
    try {
      var mode = new URLSearchParams(window.location.search).get('mode');
      if (mode === 'candidat') window.setMode('candidat');
    } catch (e) {}
  }
})();
