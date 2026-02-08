# Recommended Project Structure

This is the optimal structure for a GitHub portfolio:

## Current vs Recommended Structure

### Current
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

### Recommended for GitHub
```
.
├── index.html                 # Home page (root)
├── about.html                # About page
├── projects.html             # Portfolio
├── contact.html              # Contact
├── css/
│   ├── style.css             # Main styles
│   └── projects.css          # Project styles
├── js/
│   └── main.js               # Main script
├── assets/                   # NEW: Media and resources
│   ├── images/               # Project images
│   ├── icons/                # Custom icons
│   └── documents/            # CV, certificates, etc
├── .gitignore                # Files to exclude
├── README.md                 # Project documentation
├── SETUP_GITHUB.md          # GitHub Pages guide
├── STRUCTURE.md             # This file
└── PROGETTO_CARDS_CONFIG.md # Configuration (optional)
```

## Recommended Migrations

### 1. **Move HTML to Root**
- Currently HTML files are in `html/` folder
- GitHub Pages prefers `index.html` in root
- Options:
  - **A) Move files** (root level) - RECOMMENDED
  - **B) Configure GitHub Pages** to use `html/` folder (less elegant)

### 2. **Create Assets Folder**
```
assets/
├── images/
│   ├── projects/
│   ├── about/
│   └── hero/
├── documents/
│   ├── cv.pdf
│   └── certificates/
└── icons/
    └── custom-icons/
```

### 3. **Update Paths in HTML Files**

If you move HTML to root, update links:

**Before (from `html/index.html`):**
```html
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/projects.css">
<script src="../js/main.js"></script>
```

**After (from `index.html` in root):**
```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/projects.css">
<script src="js/main.js"></script>
```

### 4. **Update Links Between Pages**

**Before:**
```html
<a href="index.html">Home</a>
<a href="about.html">About</a>
```

**After (same level):**
```html
<a href="index.html">Home</a>
<a href="about.html">About</a>
```

## Advantages of New Structure

| Aspect | Advantage |
|---------|-----------|
| **SEO** | Better search engine indexing |
| **GitHub Pages** | Native and automatic support |
| **Clean URLs** | `yourusername.github.io/projects.html` (not `/html/`) |
| **Maintenance** | Easier for code readers |
| **Assets** | Centralized media organization |
| **Professionalism** | Industry-standard structure |

## Next Steps

1. **Optional**: Reorganize structure as recommended above
2. **Read**: [SETUP_GITHUB.md](SETUP_GITHUB.md) for deployment
3. **Customize**: README.md with your data
4. **Upload**: To GitHub!

## Alternative Structures

### For Large Multi-Page Sites
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

### For Single-Page Apps (SPA)
```
├── index.html
├── src/
│   ├── components/
│   ├── styles/
│   ├── js/
│   └── assets/
└── dist/ (build output)
```

**Recommendation**: For a static portfolio like yours, the "root level" structure is perfect!

---

*Questions? Check [README.md](README.md) or [SETUP_GITHUB.md](SETUP_GITHUB.md)*