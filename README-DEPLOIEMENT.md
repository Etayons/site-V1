# Etayons — Guide de déploiement (GitHub → Vercel → OVH)

Le dossier contient tout ce qu'il faut : `index.html` (le site complet), `logo-etayons.png`, `robots.txt`, `vercel.json` (headers de sécurité), `.gitignore`.

Temps total estimé : 30 à 45 minutes. Aucune ligne de commande nécessaire.

---

## Étape 1 — GitHub (héberger le code) · ~10 min

1. Créez un compte sur https://github.com (ou connectez-vous).
2. Cliquez sur **New repository** (bouton vert).
   - Repository name : `etayons-site`
   - Visibilité : **Private**
   - Ne cochez rien d'autre → **Create repository**.
3. Sur la page du dépôt vide, cliquez sur **uploading an existing file**.
4. Glissez-déposez les 5 fichiers de ce dossier (`index.html`, `logo-etayons.png`, `robots.txt`, `vercel.json`, `.gitignore`).
5. En bas, cliquez **Commit changes**.

✅ Vérification : les 5 fichiers apparaissent dans le dépôt.

---

## Étape 2 — Vercel (mettre le site en ligne) · ~10 min

1. Allez sur https://vercel.com/signup et choisissez **Continue with GitHub** (ça lie les deux comptes automatiquement).
2. Cliquez **Add New → Project**.
3. Dans la liste, trouvez `etayons-site` → **Import**.
   (Si le dépôt n'apparaît pas : "Adjust GitHub App Permissions" → autorisez l'accès au dépôt.)
4. Ne changez AUCUN réglage (Framework Preset : "Other", pas de build command) → **Deploy**.
5. Après ~30 secondes, Vercel affiche une URL du type `etayons-site.vercel.app`.

✅ Vérification : ouvrez cette URL, le site s'affiche et la navigation fonctionne.

À partir de maintenant, chaque fichier modifié puis re-uploadé sur GitHub redéploie le site automatiquement.

---

## Étape 3 — OVH (brancher le domaine etayons.fr) · ~10 min + propagation

### 3a. Dans Vercel
1. Projet `etayons-site` → onglet **Settings → Domains**.
2. Tapez `etayons.fr` → **Add**. Ajoutez aussi `www.etayons.fr`.
3. Vercel affiche les enregistrements DNS exacts à créer. Notez-les
   (typiquement : A `76.76.21.21` pour etayons.fr et CNAME `cname.vercel-dns.com` pour www — utilisez TOUJOURS les valeurs affichées par Vercel, elles peuvent être spécifiques à votre projet).

### 3b. Dans OVH
1. Connectez-vous sur https://www.ovh.com/manager → **Noms de domaine → etayons.fr → Zone DNS**.
2. Supprimez (ou modifiez) les enregistrements existants de type A sur `etayons.fr` et CNAME sur `www` qui pointent vers OVH.
3. **Ajouter une entrée** :
   - Type **A** | Sous-domaine : *(vide)* | Cible : la valeur A donnée par Vercel (ex. `76.76.21.21`)
   - Type **CNAME** | Sous-domaine : `www` | Cible : la valeur donnée par Vercel (ex. `cname.vercel-dns.com.`)
4. Validez. La propagation prend de 15 minutes à quelques heures (rarement 24 h).

### 3c. Retour dans Vercel
- Dans Settings → Domains, attendez que `etayons.fr` passe à **Valid Configuration** (coche bleue).
- Le certificat HTTPS (SSL) est généré automatiquement. Rien à faire.
- Réglez `www.etayons.fr` pour rediriger vers `etayons.fr` (proposé par défaut).

✅ Vérification finale : https://etayons.fr s'ouvre avec le cadenas HTTPS.

---

## Étape 4 — Vérifications post-mise en ligne · ~5 min

1. **Mon Petit Cookie** : le bandeau doit maintenant apparaître (il ne fonctionne pas en local).
   Si absent : dashboard monpetitcookie.fr → vérifiez que le domaine déclaré est `etayons.fr`.
2. **Formulaire** : testez "Envoyer ma demande" → votre logiciel mail doit s'ouvrir pré-rempli vers contact@etayons.fr.
3. **Pages** : testez etayons.fr/#/a-propos, /#/carriere, une fiche de poste, /#/mentions-legales.
4. **Google** : sur https://search.google.com/search-console, ajoutez etayons.fr (validation par enregistrement DNS TXT chez OVH) pour suivre l'indexation.

---

## Pour mettre à jour le site ensuite

GitHub → dépôt `etayons-site` → cliquez sur `index.html` → icône crayon (ou re-upload du fichier) → **Commit changes**. Vercel redéploie tout seul en 30 secondes.

---

## Rappels importants

- L'email de réception des formulaires est `contact@etayons.fr` : vérifiez que cette boîte existe bien chez OVH (Emails → création de compte ou redirection).
- Le numéro RCS dans les mentions légales est "en cours d'attribution" : à compléter dès réception.
- Les chiffres des cas clients sont illustratifs (conservés à votre demande).
- Évolution future : quand vous passerez au projet Lovable + Supabase (contenu modifiable sans toucher au code, formulaire serveur), les fichiers du dossier `etayons-livrables` (SQL, client Supabase, hook) sont prêts ; le principe GitHub → Vercel restera identique, avec en plus la variable d'environnement `NITRO_PRESET=vercel`.
