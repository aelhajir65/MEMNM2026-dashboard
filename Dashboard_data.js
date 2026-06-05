// Dashboard_data.js -- genere automatiquement par Dashboard_refresh.py v2
// 05/06/2026 23:07 -- MEMNM-2026
// NE PAS EDITER MANUELLEMENT -- relancer Dashboard_refresh.py

const D = {
  "meta": {
    "version": "v2",
    "generated": "2026-06-05",
    "generated_full": "05/06/2026 23:07",
    "source": "Dashboard_refresh.py v2",
    "poly_ia": {
      "convention_nommage": "MEMNM2026_[MODULE]_[OBJET]_V[x.y]_[DATE].ext",
      "agents": [
        {
          "id": "P",
          "nom": "Perplexity",
          "role": "Exploration & Deep Research"
        },
        {
          "id": "C",
          "nom": "Claude",
          "role": "Stabilisation . Garde du canon"
        },
        {
          "id": "G",
          "nom": "Gemini",
          "role": "Audit . Validation croisee"
        }
      ],
      "tags_tracabilite": [
        "[C-PRODUIT]",
        "[G-AUDIT]",
        "[P-EXPLORE]",
        "[AZ]"
      ],
      "date_acte": "2026-05-04"
    }
  },
  "global_pct": 84,
  "delta_global": 0,
  "chantiers": [
    {
      "code": "A",
      "nom": "Relance quantitative",
      "pct": 85
    },
    {
      "code": "B",
      "nom": "Qualitatif EAKA/SAWT",
      "pct": 100
    },
    {
      "code": "C",
      "nom": "Social Listening EAC",
      "pct": 97
    },
    {
      "code": "D",
      "nom": "Stats & Scoring",
      "pct": 35
    },
    {
      "code": "E",
      "nom": "Redaction P.I-II",
      "pct": 93
    },
    {
      "code": "F",
      "nom": "Redaction P.III",
      "pct": 90
    },
    {
      "code": "G",
      "nom": "Redaction P.IV",
      "pct": 95
    },
    {
      "code": "H",
      "nom": "Finalisation",
      "pct": 20
    }
  ],
  "collecte": {
    "value": 673,
    "max": 322,
    "vague": "Vague 3",
    "date": "2026-06-02 00:00:00"
  },
  "delta_collecte": 0,
  "risques": {
    "crit": 1,
    "mid": 4
  },
  "chapitres_etat": [],
  "anomalies": {},
  "ch14_corrections": {
    "done": 0,
    "total": 3,
    "label": "Corrections residuelles Ch.14"
  },
  "inventaire": {
    "fichiers": 448,
    "canon": 0,
    "actif": 369,
    "draft": 0,
    "archive": 56,
    "majVersion": "Inventaire v12 . 05 Jun 2026",
    "dossiers": {
      "00_Manuscrit_Master": 9,
      "01_Drafts_Chapitres": 19,
      "02_Livrables_DEC030": 6,
      "03_Pilotage_Inventaire": 19,
      "04_Bibliographie": 3,
      "05_Diagnostic_Audit": 2,
      "06_Enquete_Pilote": 28,
      "07_Annexes_1-16": 28,
      "08_SSOT_V7.2": 61,
      "09_Scripts": 15,
      "10_Social_Listening": 100,
      "Racine": 4,
      "_ARCHIVE": 65,
      "_Dashboard_Public": 7,
      "TOTAL": 366
    }
  },
  "pages": [
    {
      "nom": "Preliminaires",
      "courant": 0,
      "cible": 9
    },
    {
      "nom": "Introduction generale",
      "courant": 29,
      "cible": 20,
      "source": "confirme",
      "alert": "overshoot"
    },
    {
      "nom": "Partie I (Ch.1-3)",
      "courant": 279,
      "cible": 140,
      "source": "confirme",
      "alert": "overshoot"
    },
    {
      "nom": "Partie II (Ch.4-6)",
      "courant": 154,
      "cible": 100,
      "source": "confirme",
      "alert": "overshoot"
    },
    {
      "nom": "Partie III (Ch.7-12)",
      "courant": 86,
      "cible": 195,
      "source": "confirme"
    },
    {
      "nom": "Partie IV (Ch.13-15)",
      "courant": 42,
      "cible": 80,
      "detail": "Ch13=13 Ch14=6 Ch15=20 (total cfg=42)",
      "source": "confirme"
    },
    {
      "nom": "Conclusion",
      "courant": 14,
      "cible": 16
    },
    {
      "nom": "Bibliographie",
      "courant": 42,
      "cible": 40,
      "alert": "overshoot"
    }
  ],
  "annexes": [
    {
      "ref": "01",
      "nom": "Plan detaille de l'ouvrage V2",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "02",
      "nom": "Sommaire editorial V2",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "03",
      "nom": "Protocole methodologique complet V7.2",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "04",
      "nom": "Note de synthese executive",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "05",
      "nom": "Questionnaire bilingue FR-AR V7.1",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "06",
      "nom": "Conformite CNDP (Loi 09-08)",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "07",
      "nom": "Transcription Q-R bilingue FR-AR",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "08",
      "nom": "Analyse de traduction FR-AR",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "09",
      "nom": "Annexe 7 -- Calcul taille d'echantillon",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "10",
      "nom": "Annexe 10 -- Pseudo-code scoring IMN",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "11",
      "nom": "Annexe 17 -- Budget previsionnel detaille",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "12",
      "nom": "Annexe 12 -- Plan pre-test pilote",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "13",
      "nom": "Annexe 13-bis V3 -- Grille EAKA (V.Finale)",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "14",
      "nom": "Annexe 14 V2 -- Guide focus groups (V.Finale)",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "15",
      "nom": "Annexe 15 V4.1 -- Protocole EAC (V.Finale)",
      "pages": 1,
      "etat": "Finalise"
    },
    {
      "ref": "16",
      "nom": "Annexe 16 -- Scripts analytiques",
      "pages": 1,
      "etat": "Finalise"
    }
  ],
  "jalons": [
    {
      "r": "J1",
      "n": "Envoi Relance Vague 1",
      "ch": "A",
      "d": "20 avr. 2026",
      "risk": "Faible",
      "stat": "✅ Terminé",
      "retard": false
    },
    {
      "r": "J2",
      "n": "23 cibles entretiens identifiées",
      "ch": "B",
      "d": "28 avr. 2026",
      "risk": "Moyen",
      "stat": "✅ Terminé",
      "retard": false
    },
    {
      "r": "J3",
      "n": "Envoi Relance Vague 2",
      "ch": "A",
      "d": "29 avr. 2026",
      "risk": "Moyen",
      "stat": "✅ Terminé",
      "retard": false
    },
    {
      "r": "J4",
      "n": "Collecte SL opérationnelle",
      "ch": "C",
      "d": "30 avr. 2026",
      "risk": "Moyen",
      "stat": "✅ Terminé · DB memnm2026 N=35 opérationnelle (01/05/2026)",
      "retard": false
    },
    {
      "r": "J5",
      "n": "Pipeline IMN validé sur N=104",
      "ch": "D",
      "d": "Mai 2026",
      "risk": "Faible",
      "stat": "✅ Terminé",
      "retard": false
    },
    {
      "r": "J6",
      "n": "Envoi Relance Vague 3 (ultime)",
      "ch": "A",
      "d": "11 mai 2026",
      "risk": "Élevé",
      "stat": "✅ Terminé",
      "retard": false
    },
    {
      "r": "J7",
      "n": "Écrêtage Sec. 2.4 terminé",
      "ch": "E",
      "d": "17 avr. 2026",
      "risk": "Faible",
      "stat": "✅ Terminé",
      "retard": false
    },
    {
      "r": "J8",
      "n": "CLÔTURE COLLECTE QUANT. ≥ 322",
      "ch": "A",
      "d": "Juin 2026",
      "risk": "CRITIQUE",
      "stat": "✅ Terminé",
      "retard": false
    },
    {
      "r": "J9",
      "n": "20+ entretiens réalisés",
      "ch": "B",
      "d": "Juin 2026",
      "risk": "Moyen",
      "stat": "✅ Terminé · 23/23 réalisés · Codage D1 complet · 01/06/2026",
      "retard": false
    },
    {
      "r": "J10",
      "n": "Résultats statistiques complets",
      "ch": "D",
      "d": "Juil. 2026",
      "risk": "Élevé",
      "stat": "📅 Planifié",
      "retard": false
    },
    {
      "r": "J11",
      "n": "Analyse qualitative terminée",
      "ch": "B+C",
      "d": "Août 2026",
      "risk": "Moyen",
      "stat": "📅 Planifié",
      "retard": false
    },
    {
      "r": "J12",
      "n": "Partie III complète (Ch.7-12)",
      "ch": "F",
      "d": "Oct. 2026",
      "risk": "Élevé",
      "stat": "📅 Planifié",
      "retard": false
    },
    {
      "r": "J13",
      "n": "Partie IV complète (Ch.13-15)",
      "ch": "G",
      "d": "Sept. 2026",
      "risk": "Moyen",
      "stat": "✅ Terminé · Partie IV pipeline fn CLOS · Ch.13v2 · Ch.14v1 · Ch.15v4 · 0 anomalie · 29/05/2026",
      "retard": false
    },
    {
      "r": "J14",
      "n": "Manuscrit complet → Prof. Saaf",
      "ch": "H",
      "d": "Nov. 2026",
      "risk": "Élevé",
      "stat": "📅 Planifié",
      "retard": false
    },
    {
      "r": "J15",
      "n": "Validation Prof. Saaf",
      "ch": "H",
      "d": "Déc. 2026",
      "risk": "Moyen",
      "stat": "📅 Planifié",
      "retard": false
    },
    {
      "r": "J16",
      "n": "🎯 PUBLICATION",
      "ch": "H",
      "d": "Mars-Avr. 2027",
      "risk": "CRITIQUE",
      "stat": "📅 Planifié",
      "retard": false
    },
    {
      "r": "J17",
      "n": "Introduction Générale v2 corrigée (B2 §9.D1)",
      "ch": "Ch.2 Méthodo",
      "d": "22 mai 2026",
      "risk": "Faible",
      "stat": "✅ Terminé · §9.D1 phantom supprimé · 8 272 mots · Charte3_v2",
      "retard": false
    },
    {
      "r": "J18",
      "n": "Conclusion Générale DRAFT v1 produite (A3)",
      "ch": "Ch.0 / Fin",
      "d": "22 mai 2026",
      "risk": "Faible",
      "stat": "✅ Terminé · 5 sections · 3 948 mots · Charte3 · [DRAFT]",
      "retard": false
    },
    {
      "r": "J19",
      "n": "POST-007 SIL_ALGO validé — BDD V1.6e",
      "ch": "EAC P0",
      "d": "22 mai 2026",
      "risk": "Faible",
      "stat": "✅ Terminé · comparaison OSC-005 · moy=66v σ=25 · VALIDÉ [AZ]",
      "retard": false
    },
    {
      "r": "J20",
      "n": "Dashboard_refresh.py patché (v10 + EAC V1.6e)",
      "ch": "Pilotage",
      "d": "22 mai 2026",
      "risk": "Faible",
      "stat": "✅ Terminé · Inventaire v10 · POST-007 VALIDÉ · Conclusion détectée",
      "retard": false
    },
    {
      "r": "J21",
      "n": "Ch.13 MASTER v1 produit + Glossaire IMN v1.0",
      "ch": "F+G / Pilotage",
      "d": "24 mai 2026",
      "risk": "Faible",
      "stat": "✅ Terminé · Ch.13 v4→MASTER (BDD V1.6e · §13.SL P0/P1 intégré) · Glossaire 35 entrées Charte3",
      "retard": false
    },
    {
      "r": "J22",
      "n": "Rappel n°3 enquête quantitative (N=231→322)",
      "ch": "A",
      "d": "2026-05-26 00:00:00",
      "risk": "Élevé",
      "stat": "✅ Terminé · Email ciblé 91 OSC non-répondants · 26/05/2026",
      "retard": false
    },
    {
      "r": "J23",
      "n": "Rappel n°2 entretiens qualitatifs EAC/EAKA",
      "ch": "B",
      "d": "Juin 2026",
      "risk": "Moyen",
      "stat": "✅ Terminé ·  relance terrain enquêteurs + OSC · 25/05/2026",
      "retard": false
    }
  ],
  "jalons_retard": [],
  "eac": {
    "phase": "P1 -- En cours",
    "corpus_annote": 72,
    "bdd_version": "V1.6e",
    "posts_bruts": 81,
    "ref_version": "V1.9",
    "ref_entrees": 37,
    "kappa": 0.7437,
    "langue": {
      "fr": 80.6,
      "ar": 18.1,
      "mix": 1.4
    },
    "sentiment": {
      "positif": 68.1,
      "neutre": 31.9,
      "negatif_alerte": 0
    },
    "gradient_yt": {
      "QI": 75,
      "QII": 20,
      "QIII": 0,
      "QIV": 0
    },
    "theme_dominant_QI": "TH_FORM 62.2%",
    "theme_dominant_QII": "TH_COMM 25.9%",
    "hypotheses": {
      "H1": "CONFIRMEE",
      "H2": "PARTIELLEMENT CONFIRMEE",
      "T4": "CONFIRMEE"
    },
    "sil_algo": [
      {
        "ref": "POST-007",
        "statut": "VALIDE [AZ] 22/05/2026 -- comparaison corpus OSC-005 (moy=66v, sigma=25, 37v=56% moy -- niche evenementielle)"
      },
      {
        "ref": "POST-042",
        "statut": "CONFIRME"
      }
    ],
    "jalons_p1": [
      {
        "id": "P1-1",
        "desc": "✅ CLOS 22/05/2026 -- A15.6.2 VALIDE [AZ] (D.1-D.4 conformes workflow, faisables P1, alignes CERSS)",
        "priorite": "✅ CLOS"
      },
      {
        "id": "P1-2",
        "desc": "✅ CLOS 22/05/2026 -- POST-007 VALIDE [AZ]",
        "priorite": "✅ CLOS"
      },
      {
        "id": "P1-3",
        "desc": "Collecte Facebook Phase P1 -- juin 2026",
        "priorite": "Haute"
      },
      {
        "id": "P1-4",
        "desc": "Terrain J2 OSC-022 + OSC-026 <= 20/06",
        "priorite": "Haute"
      },
      {
        "id": "P1-5",
        "desc": "Integrer EAC dans S14.2/14.4/14.5/14.6",
        "priorite": "Moyenne"
      }
    ]
  },
  "filesystem": {
    "00_Manuscrit_Master": 20,
    "01_Drafts_Chapitres": 26,
    "02_Livrables_DEC030": 10,
    "03_Pilotage_Inventaire": 30,
    "04_Bibliographie": 7,
    "05_Diagnostic_Audit": 3,
    "06_Enquete_Pilote": 57,
    "07_Annexes_1-16": 27,
    "08_SSOT_V7.2": 61,
    "09_Scripts": 66,
    "10_Social_Listening": 115,
    "_ARCHIVE": 88,
    "__total__": 510,
    "__date__": "2026-06-05"
  },
  "delta_fichiers": 62,
  "chapitres": [
    {
      "etat": "Finalisé (fn ✅)",
      "n": 12,
      "couleur": "sage"
    },
    {
      "etat": "En cours",
      "n": 1,
      "couleur": "gold"
    },
    {
      "etat": "À compléter",
      "n": 2,
      "couleur": "high"
    }
  ],
  "heures": [
    {
      "axe": "Redaction Partie I-II",
      "h": 320,
      "done": 0.9
    },
    {
      "axe": "Redaction Partie III",
      "h": 180,
      "done": 0.35
    },
    {
      "axe": "Redaction Partie IV",
      "h": 220,
      "done": 0.82
    },
    {
      "axe": "Finalisation & assemblage",
      "h": 120,
      "done": 0.2
    },
    {
      "axe": "Collecte quantitative",
      "h": 200,
      "done": 0.7
    },
    {
      "axe": "Collecte qualitative EAKA/SAWT",
      "h": 150,
      "done": 1.0
    },
    {
      "axe": "Social Listening EAC",
      "h": 180,
      "done": 0.97
    },
    {
      "axe": "Stats & Scoring IMN",
      "h": 80,
      "done": 0.0
    },
    {
      "axe": "Bibliographie & documentation",
      "h": 60,
      "done": 0.75
    },
    {
      "axe": "Pilotage & coordination",
      "h": 45,
      "done": 0.65
    }
  ],
  "evolution": {
    "dates": [
      "Jan",
      "Fev",
      "Mar",
      "Avr",
      "Mai"
    ],
    "footnotes": [
      0,
      12,
      28,
      45,
      62
    ],
    "fn_draft": [
      0,
      5,
      10,
      14,
      18
    ],
    "biblio": [
      0,
      18,
      35,
      58,
      74
    ],
    "bib_draft": [
      0,
      8,
      12,
      16,
      20
    ]
  },
  "h_total": 1555,
  "h_done": 1094
};
