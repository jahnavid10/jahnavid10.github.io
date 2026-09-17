const translations = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",

    "intro.kicker": "Data Scientist · AI/ML Engineer",
    "intro.line": "Building production systems from raw sensor data, text, and images - no notebook graveyards.",
    "intro.scroll": "Scroll",

    "about.eyebrow": "01 · About",
    "about.lede": "I'm a Machine Learning Engineer with production experience at <strong>Bosch&nbsp;Rexroth</strong> and prior analytics experience at <strong>Amazon</strong>, holding an M.Sc. in Mechatronics from Universität&nbsp;Siegen.",
    "about.text": "I build end-to-end systems rather than notebooks - ETL and feature pipelines, distributed training on AWS SageMaker, containerised deployment with Docker and Airflow, and MLflow experiment tracking. Comfortable across the stack, from embedded signal compression to Retrieval-Augmented Generation.",
    "about.btnProjects": "View Projects",
    "about.btnContact": "Get in Touch",
    "about.cvEn": "Download CV (English)",
    "about.cvDe": "Lebenslauf (Deutsch)",
    "about.fact.location": "Siegen, Germany",
    "about.fact.degree": "M.Sc. Mechatronics",
    "about.fact.languages": "English (C2) · German (A2/B1)",

    "exp.eyebrow": "02 · Experience",
    "exp.title": "Where I've Worked",
    "exp.r1.title": "Master Thesis Researcher",
    "exp.r1.org": "Universität Siegen · Siegen, Germany",
    "exp.r1.li1": "Designed a Python/JavaScript quantisation pipeline benchmarking four compression methods for 12-channel wearable sensor data, cutting payload size by 97% (20 MB to under 1 MB).",
    "exp.r1.li2": "Established the practical accuracy–compression boundary for on-device edge deployment by measuring downstream Human Activity Recognition (Tiny-HAR) performance across compression levels, defining the usable operating range for lossy sensor encoding.",
    "exp.r1.li3": "Implemented 1-byte-per-sample encoding on the WEAR benchmark dataset with temporal activity patterns preserved.",
    "exp.r1.li4": "Delivered a browser-based visualisation tool rendering at 100 FPS with sub-50 ms decode latency for interactive time-series exploration.",
    "exp.r2.title": "Machine Learning Intern",
    "exp.r2.org": "Bosch Rexroth · Ulm, Germany",
    "exp.r2.li1": "Built an end-to-end fault-detection system for production hydraulic sensors - ETL, signal feature extraction, and deployment - replacing manual inspection with real-time anomaly detection.",
    "exp.r2.li2": "Benchmarked Linear Autoencoder, CNN, and LSTM-Autoencoder architectures using distributed AWS SageMaker training jobs with Optuna hyperparameter search.",
    "exp.r2.li3": "Industrialised the team's MLOps workflow: Docker containerisation, Apache Airflow orchestration, MLflow experiment logging, and Grafana health telemetry.",
    "exp.r2.li4": "Shipped interactive Explainable AI dashboards (SHAP, LIME) in Streamlit for domain engineers.",
    "exp.r3.title": "Student Researcher - Recommender Systems",
    "exp.r3.org": "Universität Siegen · Siegen, Germany",
    "exp.r3.li1": "Ran 96+ controlled hypothesis experiments on MovieLens quantifying how top-percentile user pruning affects Implicit ALS versus KNN recommenders.",
    "exp.r3.li2": "Identified a structural asymmetry between model families at equivalent sparsity thresholds: a 10.67% NDCG penalty for ALS against a 9.6% NDCG gain for KNN.",
    "exp.r3.li3": "Automated the evaluation pipeline (LensKit, Implicit, scikit-learn, Seaborn) for reproducible comparative statistics.",
    "exp.r4.title": "Business Operations Analyst (Data Analyst)",
    "exp.r4.org": "Amazon · Hyderabad, India",
    "exp.r4.li1": "Raised catalogue defect-identification precision by 11% by redesigning SQL preprocessing pipelines and aligning ETL validation rules with SOP protocols.",
    "exp.r4.li2": "Traced root-cause drivers of customer complaints and counterfeit listings through cross-tabulated anomaly analysis in SQL, Power BI, and Excel.",
    "exp.r4.li3": "Architected automated Power BI KPI dashboards used as the cross-functional reference for weekly quality reporting.",
    "exp.r4.li4": "Led SQL tuning and data-tagging workshops for 10+ junior analysts, shortening onboarding cycles.",

    "thesis.report": "Thesis Report (PDF)",
    "thesis.repo": "GitHub Repository",

    "proj.eyebrow": "03 · Projects",
    "proj.title": "Selected Work",
    "proj.p1.desc": "A retrieval-augmented generation pipeline over a 15K-article BBC News corpus. FAISS vector indexing and Sentence Transformer embeddings ground every answer in retrieved sources to eliminate hallucinated responses, served through interactive Gradio and Streamlit interfaces.",
    "proj.p2.desc": "A Hugging Face Spaces application comparing five deep learning restoration models - CBDNet, IRCNN, U-Net, RCAN, and Autoencoders - across six no-reference perceptual quality benchmarks.",
    "proj.cta": "View live demo",

    "skills.eyebrow": "04 · Skills",
    "skills.title": "Technical Skills",
    "skills.g1": "Programming & Core",
    "skills.g2": "Machine Learning",
    "skills.g3": "Deep Learning & GenAI",
    "skills.g4": "MLOps & Cloud",
    "skills.g5": "Analytics & Visualisation",
    "skills.g6": "Languages",
    "skills.langEn": "English - C2 (fluent)",
    "skills.langDe": "German - A2/B1 (intermediate, actively improving)",

    "edu.eyebrow": "05 · Education",
    "edu.title": "Academic Background",
    "edu.d1.title": "M.Sc. Mechatronics",
    "edu.d1.org": "Universität Siegen · Siegen, Germany",
    "edu.d1.note": "Focus: Machine Learning, Deep Learning, Signal Processing, Embedded Control, Project Management.",
    "edu.d2.title": "B.E. Mechanical Engineering",
    "edu.d2.org": "Vardhaman College of Engineering · Hyderabad, India",
    "edu.d2.note": "Focus: Auto CAD, Material Science, Engineering Electronics, Entrepreneurship, Hydraulics.",

    "cert.eyebrow": "06 · Certifications",
    "cert.title": "Certifications",
    "cert.note": "Credential links coming soon.",

    "contact.eyebrow": "07 · Contact",
    "contact.title": "Let's build<br>something great.",
    "contact.sub": "Open to Machine Learning Engineer, Data Scientist, AI Engineer, and Research/PhD roles.",

    "footer.text": "Built with HTML, CSS & JS - hosted on GitHub Pages."
  },

  de: {
    "nav.about": "Über mich",
    "nav.experience": "Werdegang",
    "nav.projects": "Projekte",
    "nav.skills": "Kenntnisse",
    "nav.education": "Ausbildung",
    "nav.certifications": "Zertifikate",
    "nav.contact": "Kontakt",

    "intro.kicker": "Data Scientist · AI/ML Engineer",
    "intro.line": "Ich baue produktionsreife Systeme aus rohen Sensordaten, Texten und Bildern - keine vergessenen Notebooks.",
    "intro.scroll": "Scrollen",

    "about.eyebrow": "01 · Über mich",
    "about.lede": "Ich bin Machine Learning Engineer mit Praxiserfahrung bei <strong>Bosch&nbsp;Rexroth</strong> und vorheriger Analytics-Erfahrung bei <strong>Amazon</strong>, mit einem M.Sc. in Mechatronik von der Universität&nbsp;Siegen.",
    "about.text": "Ich baue durchgängige Systeme statt einzelner Notebooks - ETL- und Feature-Pipelines, verteiltes Training auf AWS SageMaker, containerisiertes Deployment mit Docker und Airflow sowie Experiment-Tracking mit MLflow. Zu Hause im gesamten Stack, von eingebetteter Signalkompression bis Retrieval-Augmented Generation.",
    "about.btnProjects": "Projekte ansehen",
    "about.btnContact": "Kontakt aufnehmen",
    "about.cvEn": "CV herunterladen (Englisch)",
    "about.cvDe": "Lebenslauf herunterladen (Deutsch)",
    "about.fact.location": "Siegen, Deutschland",
    "about.fact.degree": "M.Sc. Mechatronik",
    "about.fact.languages": "Englisch (C2) · Deutsch (A2/B1)",

    "exp.eyebrow": "02 · Werdegang",
    "exp.title": "Beruflicher Werdegang",
    "exp.r1.title": "Masterandin (Masterarbeit)",
    "exp.r1.org": "Universität Siegen · Siegen, Deutschland",
    "exp.r1.li1": "Python/JavaScript-Quantisierungs-Pipeline entwickelt, die vier Kompressionsverfahren für 12-Kanal-Wearable-Sensordaten vergleicht und die Datenmenge um 97 % reduziert (20 MB auf unter 1 MB).",
    "exp.r1.li2": "Praktische Grenze zwischen Genauigkeit und Kompression für Edge-Deployment ermittelt, gemessen anhand der Human-Activity-Recognition-Leistung (Tiny-HAR) über verschiedene Kompressionsstufen, und den nutzbaren Betriebsbereich für verlustbehaftete Sensorkodierung definiert.",
    "exp.r1.li3": "1-Byte-pro-Sample-Kodierung auf dem WEAR-Benchmark-Datensatz umgesetzt, wobei zeitliche Aktivitätsmuster erhalten blieben.",
    "exp.r1.li4": "Browserbasiertes Visualisierungstool mit 100 FPS und einer Decodier-Latenz unter 50 ms für die interaktive Zeitreihen-Exploration entwickelt.",
    "exp.r2.title": "Praktikantin Machine Learning",
    "exp.r2.org": "Bosch Rexroth · Ulm, Deutschland",
    "exp.r2.li1": "Durchgängiges Fehlererkennungssystem für hydraulische Produktionssensoren aufgebaut - ETL, Signal-Feature-Extraction und Deployment - und manuelle Inspektion durch Echtzeit-Anomalieerkennung ersetzt.",
    "exp.r2.li2": "Linear-Autoencoder-, CNN- und LSTM-Autoencoder-Architekturen mittels verteilter AWS-SageMaker-Trainingsjobs und Optuna-Hyperparameter-Suche verglichen.",
    "exp.r2.li3": "MLOps-Workflow des Teams industrialisiert: Docker-Containerisierung, Orchestrierung mit Apache Airflow, Experiment-Logging mit MLflow und Grafana-Health-Telemetrie.",
    "exp.r2.li4": "Interaktive Explainable-AI-Dashboards (SHAP, LIME) in Streamlit für Fachingenieure bereitgestellt.",
    "exp.r3.title": "Studentische Forscherin - Recommender Systems",
    "exp.r3.org": "Universität Siegen · Siegen, Deutschland",
    "exp.r3.li1": "96+ kontrollierte Hypothesenexperimente auf MovieLens durchgeführt, um den Einfluss von Top-Percentile User Pruning auf Implicit-ALS- versus KNN-Recommender zu quantifizieren.",
    "exp.r3.li2": "Strukturelle Asymmetrie zwischen den Modellfamilien bei gleichen Sparsity-Schwellenwerten identifiziert: 10,67 % NDCG-Verlust bei ALS gegenüber 9,6 % NDCG-Gewinn bei KNN.",
    "exp.r3.li3": "Evaluierungs-Pipeline (LensKit, Implicit, scikit-learn, Seaborn) für reproduzierbare Vergleichsstatistiken automatisiert.",
    "exp.r4.title": "Business Operations Analyst (Datenanalystin)",
    "exp.r4.org": "Amazon · Hyderabad, Indien",
    "exp.r4.li1": "Genauigkeit der Katalog-Fehlererkennung um 11 % gesteigert durch Neugestaltung der SQL-Preprocessing-Pipelines und Abgleich der ETL-Validierungsregeln mit SOP-Protokollen.",
    "exp.r4.li2": "Ursachen von Kundenbeschwerden und gefälschten Angeboten mittels kreuztabellierter Anomalieanalyse in SQL, Power BI und Excel ermittelt.",
    "exp.r4.li3": "Automatisierte Power-BI-KPI-Dashboards konzipiert, die als bereichsübergreifende Referenz für das wöchentliche Qualitätsreporting dienten.",
    "exp.r4.li4": "SQL-Tuning- und Data-Tagging-Workshops für 10+ Junior-Analysten geleitet und dadurch die Einarbeitungszeit verkürzt.",

    "thesis.report": "Abschlussarbeit (PDF)",
    "thesis.repo": "GitHub-Repository",

    "proj.eyebrow": "03 · Projekte",
    "proj.title": "Ausgewählte Projekte",
    "proj.p1.desc": "Eine Retrieval-Augmented-Generation-Pipeline über einen BBC-News-Korpus mit 15.000 Artikeln. FAISS-Vektorindexierung und Sentence-Transformer-Embeddings verankern jede Antwort in den abgerufenen Quellen und eliminieren so Halluzinationen — bereitgestellt über interaktive Gradio- und Streamlit-Oberflächen.",
    "proj.p2.desc": "Eine Hugging-Face-Spaces-Anwendung, die fünf Deep-Learning-Restaurierungsmodelle - CBDNet, IRCNN, U-Net, RCAN und Autoencoder - anhand von sechs No-Reference-Bildqualitätsmetriken vergleicht.",
    "proj.cta": "Live-Demo ansehen",

    "skills.eyebrow": "04 · Kenntnisse",
    "skills.title": "Technische Kenntnisse",
    "skills.g1": "Programmierung & Grundlagen",
    "skills.g2": "Machine Learning",
    "skills.g3": "Deep Learning & GenAI",
    "skills.g4": "MLOps & Cloud",
    "skills.g5": "Analytics & Visualisierung",
    "skills.g6": "Sprachen",
    "skills.langEn": "Englisch - C2 (fließend)",
    "skills.langDe": "Deutsch - A2/B1 (Mittelstufe, wird aktiv verbessert)",

    "edu.eyebrow": "05 · Ausbildung",
    "edu.title": "Akademischer Werdegang",
    "edu.d1.title": "M.Sc. Mechatronik",
    "edu.d1.org": "Universität Siegen · Siegen, Deutschland",
    "edu.d1.note": "Schwerpunkte: Machine Learning, Deep Learning, Signalverarbeitung, Embedded Control, Projektmanagement.",
    "edu.d2.title": "B.E. Maschinenbau",
    "edu.d2.org": "Vardhaman College of Engineering · Hyderabad, Indien",
    "edu.d2.note": "Schwerpunkte: AutoCAD, Werkstoffkunde, Elektrotechnik, Unternehmertum, Hydraulik.",

    "cert.eyebrow": "06 · Zertifikate",
    "cert.title": "Zertifikate",
    "cert.note": "Nachweislinks folgen in Kürze.",

    "contact.eyebrow": "07 · Kontakt",
    "contact.title": "Lass uns etwas<br>Großartiges bauen.",
    "contact.sub": "Offen für Positionen als Machine Learning Engineer, Data Scientist, AI Engineer sowie im Bereich Forschung/Promotion.",

    "footer.text": "Erstellt mit HTML, CSS & JS - gehostet auf GitHub Pages."
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value === undefined) return;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  applyLanguage(saved === 'de' ? 'de' : 'en');

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang-btn')));
  });
});
