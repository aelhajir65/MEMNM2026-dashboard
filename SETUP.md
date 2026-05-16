# Déploiement initial — Dashboard public GitHub Pages

Guide de configuration **à exécuter UNE SEULE FOIS** sur votre machine locale (terminal).
Durée estimée : **~10 minutes**.

---

## Étape 1 — Créer le repo sur GitHub (interface web)

1. Aller sur https://github.com/new
2. **Repository name** : `MEMNM2026-dashboard` (suggestion)
3. **Description** : « Dashboard public de pilotage — Société Civile et Écosystèmes Numériques au Maroc (CERSS) »
4. Visibilité : **Public** (requis pour GitHub Pages gratuit en compte standard)
5. **NE PAS** cocher « Add a README », « Add .gitignore », « Add license » (nous avons déjà ces fichiers)
6. Cliquer **Create repository**

URL du repo : **https://github.com/aelhajir65/MEMNM2026-dashboard**

---

## Étape 2 — Générer un Personal Access Token (PAT) pour push automatique

1. Aller sur https://github.com/settings/tokens?type=beta
2. Cliquer **Generate new token (fine-grained)**
3. **Token name** : `MEMNM2026-cowork-push`
4. **Expiration** : 1 an (date la plus longue possible)
5. **Repository access** : Only select repositories → cocher `MEMNM2026-dashboard`
6. **Permissions** → Repository permissions :
   - **Contents** : Read and write
   - **Metadata** : Read-only (par défaut)
   - **Pages** : Read and write (optionnel, pour déclencher le déploiement via API)
7. Cliquer **Generate token** → copier le token (commence par `github_pat_…`)

⚠️ **Sauvegardez ce token immédiatement** (gestionnaire de mots de passe) : il ne sera plus visible après cette page.

---

## Étape 3 — Initialiser et pousser le repo (terminal local)

Ouvrez un terminal et exécutez (bloc copiable, REMPLACEZ uniquement `<TOKEN>` par votre PAT) :

```bash
# Aller dans le dossier public (adapter le chemin si nécessaire)
cd ~/Documents/MEMNM2026/_Dashboard_Public/

# Nettoyer toute trace de git précédente
rm -rf .git

# Initialiser le repo + identité git
git init -b main
git config user.name  "Aziz El Hajir"
git config user.email "aelhajir@gmail.com"

# Ajouter tous les fichiers publics et vérifier le contenu
git add -A
git status        # ⚠️ vérifier qu'AUCUN .xlsx ni .docx n'apparaît

# Commit initial
git commit -m "Initial commit · Dashboard MEMNM-2026 public"

# Connecter au repo distant (REMPLACEZ <TOKEN> par votre PAT)
git remote add origin https://<TOKEN>@github.com/aelhajir65/MEMNM2026-dashboard.git

# Pousser vers GitHub
git push -u origin main
```

Si le push réussit, vous verrez `Branch 'main' set up to track 'origin/main'`.

---

## Étape 4 — Activer GitHub Pages

1. Sur GitHub : `Settings → Pages` (menu latéral gauche)
2. **Source** : sélectionner **GitHub Actions**
3. Le workflow `.github/workflows/pages.yml` se déclenche automatiquement
4. Attendre ~1 minute, puis revenir sur la page Pages
5. L'URL publique apparaît : **https://aelhajir65.github.io/MEMNM2026-dashboard/**

---

## Étape 5 — Vérifier que le Dashboard est en ligne

Ouvrir l'URL dans un navigateur. Vous devriez voir le dashboard avec :
- Cadran KPI Global (~56%)
- Cadran Collecte (104/322 ou la valeur courante)
- 8 chantiers, 16 jalons, 16 annexes
- Toolbar avec boutons clair/sombre

Si l'URL renvoie 404, attendez 1-2 minutes supplémentaires (premier déploiement) et rafraîchissez.

---

## Mise à jour quotidienne automatique

Une fois l'étape 3 effectuée (remote configuré avec PAT), le push se fait automatiquement via le script `09_Scripts/Sync_Dashboard_Public.py`.

Pour intégrer dans la tâche planifiée Cowork existante (00:09 quotidien), il suffit d'ajouter à la fin de `Dashboard_refresh.py` :

```python
# Étape finale : sync vers le repo public GitHub
try:
    subprocess.run(
        [sys.executable, str(ROOT / "09_Scripts" / "Sync_Dashboard_Public.py")],
        check=False, capture_output=True, text=True, timeout=60
    )
except Exception as e:
    log(f"Sync public échoué (non bloquant) : {e}")
```

Ou bien créer une tâche Cowork supplémentaire qui chaîne `Dashboard_refresh.py` puis `Sync_Dashboard_Public.py`.

---

## En cas de problème

| Symptôme | Cause probable | Solution |
|---|---|---|
| `git push` → 403 Permission denied | PAT expiré ou mal copié | Régénérer le PAT (Étape 2) et mettre à jour le remote |
| GitHub Pages URL → 404 | Source mal configurée | Étape 4 : source = GitHub Actions, pas « Deploy from branch » |
| Le dashboard est blanc | `Dashboard_data.js` absent ou cassé | Vérifier que le fichier est dans le commit |
| Chart.js ne charge pas | Bloqueur de CDN dans le réseau | Le user-visible est OK, vérifier dans la console navigateur |
| `xlsx` poussé par erreur | `.gitignore` mal placé | Vérifier que `.gitignore` est à la racine du repo public (pas de la racine MEMNM2026) |

---

## Sécurité

✅ **Ce qui est public** : les agrégats KPI, noms de chantiers, intitulés de jalons, états de chapitres, comptes de pages.

❌ **Ce qui reste privé** (jamais poussé) :
- `Pilotage_*.xlsx` (saisies KPI manuelles)
- `Inventaire_*.xlsx` (143 fichiers inventoriés)
- `Bibliographie*.xlsx` (200+ références)
- Tous les `.docx` (drafts de chapitres, notes Saaf, etc.)
- `_ARCHIVE/` (versions antérieures)
- Tous les `.py` (scripts de génération)

Si vous voulez retirer un élément du dashboard public (par ex. les noms exacts des jalons), éditer la fonction `to_js()` dans `Dashboard_refresh.py` pour les anonymiser avant publication.
