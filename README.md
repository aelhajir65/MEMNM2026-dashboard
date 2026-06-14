# Dashboard de pilotage — MEMNM-2026

Tableau de bord public d'avancement du projet de recherche **« Société Civile et Écosystèmes Numériques au Maroc »** — ouvrage en préparation sous l'égide du CERSS (Centre d'Études et de Recherches en Sciences Sociales), direction scientifique : **Prof. Abdellah Saaf**.

## URL publique

🔗 **https://aelhajir65.github.io/MEMNM2026-dashboard/**

(URL active après les 5 étapes de setup décrites dans `SETUP.md`)

## Mise à jour automatique

Ce dashboard est régénéré **quotidiennement à 00:09** par un script local qui agrège :

- l'avancement par chantier (relance quantitative, qualitatif EAKA/SAWT, social listening, stats, rédaction, finalisation)
- les jalons critiques du chemin de publication
- l'état rédactionnel par partie (P.I à P.IV + biblio)
- les annexes méthodologiques (16 annexes)
- l'inventaire complet (143 fichiers · 768k mots)
- les risques et anomalies actifs

**Confidentialité** : aucune donnée brute ne quitte la machine locale. Seuls les agrégats de pilotage sont publiés ici. Les fichiers `.xlsx` (Pilotage, Inventaire) et les drafts `.docx` restent privés (exclus par `.gitignore`).

## Architecture

```
Repo public (GitHub Pages)
├── index.html              ← interface dashboard (Chart.js)
└── Dashboard_data.js       ← agrégats régénérés quotidiennement

Source locale (privée)
├── Pilotage_*.xlsx         ← saisie manuelle des KPIs
├── Inventaire_*.xlsx       ← état des 143 fichiers
└── 09_Scripts/Dashboard_refresh.py
                            ↓ push quotidien
```

## Référencement scientifique

Cadre théorique : approche « Double Critique » mobilisant Habermas, Gramsci, Castells avec l'héritage intellectuel local (Ibn Khaldoun, Al-Jabri, Khatibi, Pascon).

Méthodologie : enquête mixte sur **322 OSC** (cible quantitative) + 20+ entretiens EAKA/SAWT qualitatifs + dispositif social listening V4 (EAC/VDA).

Publication cible : **T1-T2 2027** (sous l'égide du CERSS).

## Citation

Pour citer cet outil de pilotage de recherche :

> El Hajir, A. (2026). *Dashboard de pilotage — MEMNM-2026*. Centre d'Études et de Recherches en Sciences Sociales (CERSS). [URL]

---
## Licence

Ce dashboard et les données agrégées qu'il publie sont mis à disposition sous licence **[Creative Commons Attribution – Pas d'Utilisation Commerciale – Pas de Modification 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr)**.

[![CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr)

Vous êtes autorisé à :
- **Partager** — copier, distribuer et communiquer le matériel par tous moyens et sous tous formats

Selon les conditions suivantes :
- **Attribution** — Vous devez créditer l'œuvre, intégrer un lien vers la licence et indiquer si des modifications ont été effectuées.
- **Pas d'Utilisation Commerciale** — Vous n'êtes pas autorisé à faire un usage commercial de ce matériel.
- **Pas de Modifications** — Dans le cas où vous effectuez un remix, que vous transformez, ou créez à partir de ce matériel, vous n'êtes pas autorisé à distribuer le matériel modifié.

## Comment citer

> El Hajir, A. (2026). *Dashboard de pilotage — MEMNM-2026 : Société Civile et Écosystèmes Numériques au Maroc*. Centre d'Études et de Recherches en Sciences Sociales (CERSS), Rabat. Disponible : https://aelhajir65.github.io/MEMNM2026-dashboard/

© 2026 Aziz El Hajir / CERSS — Tous droits réservés sur l'ouvrage à paraître.
*Dernière régénération automatique : voir l'entête du dashboard.*
