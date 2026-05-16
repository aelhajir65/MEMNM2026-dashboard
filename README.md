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

*Dernière régénération automatique : voir l'entête du dashboard.*
