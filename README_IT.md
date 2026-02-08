# Portfolio - Lorenzo Delibero | Web Developer

Sito web portfolio moderno e responsivo con design ispirato al terminale e supporto multilingua. Sviluppato con tecnologie web vanilla per mostrare progetti e competenze tecniche.

## Demo Live

**[Visualizza Portfolio](https://dwebcoding.github.io/Dwebcoding-Portfolio/)**

## Panoramica

Portfolio professionale di web developer con:
- Interfaccia in stile terminale con effetti typewriter
- Sistema di internazionalizzazione completo (Italiano/Inglese)
- Design responsivo ottimizzato per tutti i dispositivi
- Showcase progetti con demo live e integrazione GitHub
- Form di contatto con validazione client-side
- Ottimizzato per le performance con standard web moderni

## Stack Tecnologico

### Linguaggi
- **HTML5** - Markup semantico e accessibilità
- **CSS3** - Styling moderno con custom properties, Flexbox, Grid
- **JavaScript ES6+** - Architettura modulare con async/await

### Framework e Librerie
- **Bootstrap 5.3.3** - Sistema di layout responsivo
- **AOS 2.3.1** - Libreria Animate On Scroll
- **Font Awesome 6.5.1** - Libreria di icone

### Font e Tipografia
- **JetBrains Mono** - Font monospace per tema terminale
- **Google Fonts** - Ottimizzazione web font

### Strumenti di Sviluppo
- **Git** - Controllo versione
- **GitHub Pages** - Hosting sito statico

## Dipendenze

### Dipendenze CDN
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Libreria Animazioni AOS -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- Icone Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">

<!-- Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- AOS JavaScript -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

### Nessun Processo di Build Richiesto
Questo progetto utilizza tecnologie web vanilla senza necessità di build tools o package manager.

## Struttura del Progetto

```
DWebcoding - Portfolio/
├── Assets/
│   ├── Icons/
│   └── Images/
│       ├── Cartoleria Dudù Screenshot/
│       ├── DREAMCAR Screenshot/
│       ├── GitHub Profile/
│       ├── SPLit Screenshot/
│       └── Wrong Site Screenshot/
├── css/
│   ├── style.css              # Stili principali + tema terminale
│   ├── projects.css           # Stili specifici progetti
│   ├── mobile-test.css        # Stili test mobile
│   └── performance.css        # Ottimizzazioni performance
├── js/
│   ├── lang.js               # Sistema gestione lingue
│   ├── main.js               # Funzionalità core
│   ├── translations.js       # Stringhe i18n (IT/EN)
│   └── mobile-test.js        # Utilità test mobile
├── index.html                # Homepage con hero terminale
├── about.html                # Pagina about con background professionale
├── projects.html             # Showcase progetti
├── contact.html              # Form contatti
├── privacy.html              # Privacy policy
├── terms.html                # Termini di servizio
├── mobile-test.html          # Test ottimizzazione mobile
└── README.md                 # Questo file
```

## Caratteristiche

### Interfaccia Terminale
- Effetti animazione typewriter
- Navigazione ispirata alla riga di comando
- Palette colori tema scuro GitHub
- Tipografia monospace

### Internazionalizzazione
- Sistema completo di traduzione Italiano/Inglese
- Cambio lingua dinamico
- Memorizzazione persistente preferenza lingua
- Aggiornamento meta tag SEO-friendly

### Design Responsivo
- Approccio mobile-first
- Breakpoint: 375px, 480px, 768px, 1024px+
- Elementi interfaccia touch-friendly
- Ottimizzato per navigazione con pollice

### Performance
- Lazy loading per immagini
- Animazioni ottimizzate con `will-change`
- Supporto reduced motion per accessibilità
- Gestione eventi efficiente con listener passivi

## Avvio Rapido

### Sviluppo Locale

1. **Clona il repository:**
```bash
git clone https://github.com/Dwebcoding/Dwebcoding-Portfolio.git
cd portfolio
```

2. **Avvia server locale:**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx live-server

# PHP
php -S localhost:8000
```

3. **Apri nel browser:** `http://localhost:8000`

### Deploy GitHub Pages

1. Fai fork di questo repository
2. Abilita GitHub Pages nelle impostazioni repository
3. Seleziona branch `main` come source
4. Il sito sarà disponibile su `https://tuonome.github.io/portfolio`

## Personalizzazione

### Configurazione Progetti
Modifica `js/translations.js` per aggiornare:
- Titoli e descrizioni progetti
- Link repository GitHub
- Stack tecnologici
- Informazioni contatto

### Colori Tema
Modifica variabili CSS in `css/style.css`:
```css
:root {
  --background-color: #0d1117;
  --primary-color: #2ea043;
  --secondary-color: #c9d1d9;
  --border-color: #30363d;
}
```

### Aggiungere Lingue
Estendi l'oggetto translations in `js/translations.js` seguendo la struttura esistente.

## Supporto Browser

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Metriche Performance

- **Punteggio Lighthouse:** 95+ (Performance, Accessibilità, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## Contribuire

1. Fai fork del repository
2. Crea un feature branch (`git checkout -b feature/miglioramento`)
3. Committa le modifiche (`git commit -m 'Aggiungi miglioramento'`)
4. Push al branch (`git push origin feature/miglioramento`)
5. Apri una Pull Request

## Licenza

Questo progetto è sotto licenza MIT - vedi il file [LICENSE](LICENSE) per dettagli.

## Contatti

**Lorenzo Delibero**
- Email: d.webcoding@gmail.com
- LinkedIn: [linkedin.com/in/dwebcoding](https://linkedin.com/in/dwebcoding)
- GitHub: [github.com/Dwebcoding](https://github.com/Dwebcoding)
- Repository: [github.com/Dwebcoding/Dwebcoding-Portfolio](https://github.com/Dwebcoding/Dwebcoding-Portfolio)
- Portfolio: [dwebcoding.github.io/Dwebcoding-Portfolio](https://dwebcoding.github.io/Dwebcoding-Portfolio/)

---

*Sviluppato con HTML, CSS e JavaScript vanilla - nessun framework, massima performance.*