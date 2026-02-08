# Struttura Progetto Consigliata

Questa è la struttura ottimale per un portfolio su GitHub:

## Struttura Attuale vs Consigliata

### Attuale
```
.
├── PROGETTO_CARDS_CONFIG.md
├── css/
│   ├── projects.css
│   └── style.css
├── html/
│   ├── about.html
│   ├── contact.html
│   ├── index.html
│   └── projects.html
└── js/
    └── main.js
```

### Consigliata per GitHub
```
.
├── index.html                 # Home page (root)
├── about.html                # Pagina chi sono
├── projects.html             # Portfolio
├── contact.html              # Contatti
├── css/
│   ├── style.css             # Stili principali
│   └── projects.css          # Stili progetti
├── js/
│   └── main.js               # Script principale
├── assets/                   # NUOVO: Media e risorse
│   ├── images/               # Immagini progetto
│   ├── icons/                # Icone custom
│   └── documents/            # CV, certificati, ecc
├── .gitignore                # File da escludere
├── README.md                 # Documentazione progetto
├── SETUP_GITHUB.md          # Guida GitHub Pages
├── STRUCTURE.md             # Questo file
└── PROGETTO_CARDS_CONFIG.md # Configurazione (opzionale)
```

## Migrazione Consigliate

### 1. **Sposta HTML in Root**
- Attualmente gli HTML sono in cartella `html/`
- GitHub Pages preferisce `index.html` nella root
- Opzioni:
  - **A) Sposta i file** (root level) - CONSIGLIATO
  - **B) Configura GitHub Pages** per usare cartella `html/` (meno elegante)

### 2. **Crea Cartella Assets**
```
assets/
├── images/
│   ├── projects/
│   ├── about/
│   └── hero/
├── documents/
│   ├── cv.pdf
│   └── certificati/
└── icons/
    └── custom-icons/
```

### 3. **Aggiorna i Path nei File HTML**

Se sposti gli HTML in root, aggiorna i link:

**Prima (da `html/index.html`):**
```html
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/projects.css">
<script src="../js/main.js"></script>
```

**Dopo (da `index.html` in root):**
```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/projects.css">
<script src="js/main.js"></script>
```

### 4. **Aggiorna Link tra Pagine**

**Prima:**
```html
<a href="index.html">Home</a>
<a href="about.html">Chi sono</a>
```

**Dopo (stesso livello):**
```html
<a href="index.html">Home</a>
<a href="about.html">Chi sono</a>
```

## Vantaggi della Nuova Struttura

| Aspetto | Vantaggio |
|---------|-----------|
| **SEO** | Migliore indicizzazione motori ricerca |
| **GitHub Pages** | Supporto nativo e automatico |
| **URL Puliti** | `tuonome.github.io/projects.html` (non `/html/`) |
| **Manutenzione** | Più facile per chi legge il codice |
| **Assets** | Organizzazione media centralizzata |
| **Professionismo** | Struttura industry-standard |

## Prossimi Step

1. **Opzionale**: Riorganizza la struttura come consigliato sopra
2. **Leggi**: [SETUP_GITHUB.md](SETUP_GITHUB.md) per il deploy
3. **Personalizza**: README.md con i tuoi dati
4. **Carica**: Su GitHub!

## Alternative di Struttura

### Per Siti Multi-Pagina Grandi
```
├── index.html
├── pages/
│   ├── about.html
│   ├── projects.html
│   └── contact.html
├── css/
├── js/
└── assets/
```

### Per Siti Single-Page (SPA)
```
├── index.html
├── src/
│   ├── components/
│   ├── styles/
│   ├── js/
│   └── assets/
└── dist/ (build output)
```

**Consiglio**: Per un portfolio statico come il tuo, la struttura "root level" è perfetta!

---

*Domande? Consulta [README.md](README.md) o [SETUP_GITHUB.md](SETUP_GITHUB.md)*