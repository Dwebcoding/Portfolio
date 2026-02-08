# Portfolio - Lorenzo Delibero | Web Developer

Modern, responsive portfolio website with terminal-inspired design and multilingual support. Built with vanilla web technologies to showcase projects and technical skills.

## Live Demo

**[View Portfolio](https://dlwdesign.github.io/portfolio)**

## Overview

Professional web developer portfolio featuring:
- Terminal-style interface with typewriter effects
- Complete internationalization system (Italian/English)
- Responsive design optimized for all devices
- Project showcase with live demos and GitHub integration
- Contact form with client-side validation
- Performance-optimized with modern web standards

## Tech Stack

### Languages
- **HTML5** - Semantic markup and accessibility
- **CSS3** - Modern styling with custom properties, Flexbox, Grid
- **JavaScript ES6+** - Modular architecture with async/await

### Frameworks & Libraries
- **Bootstrap 5.3.3** - Responsive layout system
- **AOS 2.3.1** - Animate On Scroll library
- **Font Awesome 6.5.1** - Icon library

### Fonts & Typography
- **JetBrains Mono** - Monospace font for terminal theme
- **Google Fonts** - Web font optimization

### Development Tools
- **Git** - Version control
- **GitHub Pages** - Static site hosting

## Dependencies

### CDN Dependencies
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- AOS Animation Library -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">

<!-- Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- AOS JavaScript -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

### No Build Process Required
This project uses vanilla web technologies with no build tools or package managers required.

## Project Structure

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
│   ├── style.css              # Main styles + terminal theme
│   ├── projects.css           # Project-specific styles
│   ├── mobile-test.css        # Mobile testing styles
│   └── performance.css        # Performance optimizations
├── js/
│   ├── lang.js               # Language management system
│   ├── main.js               # Core functionality
│   ├── translations.js       # i18n strings (IT/EN)
│   └── mobile-test.js        # Mobile testing utilities
├── index.html                # Homepage with terminal hero
├── about.html                # About page with professional background
├── projects.html             # Project showcase
├── contact.html              # Contact form
├── privacy.html              # Privacy policy
├── terms.html                # Terms of service
├── mobile-test.html          # Mobile optimization testing
└── README.md                 # This file
```

## Features

### Terminal Interface
- Typewriter animation effects
- Command-line inspired navigation
- GitHub dark theme color palette
- Monospace typography throughout

### Internationalization
- Complete Italian/English translation system
- Dynamic language switching
- Persistent language preference storage
- SEO-friendly meta tag updates

### Responsive Design
- Mobile-first approach
- Breakpoints: 375px, 480px, 768px, 1024px+
- Touch-friendly interface elements
- Optimized for thumb navigation

### Performance
- Lazy loading for images
- Optimized animations with `will-change`
- Reduced motion support for accessibility
- Efficient event handling with passive listeners

## Quick Start

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/DLWDesign/portfolio.git
cd portfolio
```

2. **Start a local server:**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx live-server

# PHP
php -S localhost:8000
```

3. **Open in browser:** `http://localhost:8000`

### GitHub Pages Deployment

1. Fork this repository
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source
4. Site will be available at `https://yourusername.github.io/portfolio`

## Customization

### Project Configuration
Edit `js/translations.js` to update:
- Project titles and descriptions
- GitHub repository links
- Technology stacks
- Contact information

### Theme Colors
Modify CSS variables in `css/style.css`:
```css
:root {
  --background-color: #0d1117;
  --primary-color: #2ea043;
  --secondary-color: #c9d1d9;
  --border-color: #30363d;
}
```

### Adding Languages
Extend the translations object in `js/translations.js` following the existing structure.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhancement`)
3. Commit your changes (`git commit -m 'Add enhancement'`)
4. Push to the branch (`git push origin feature/enhancement`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Lorenzo Delibero**
- Email: d.webcoding@gmail.com
- LinkedIn: [linkedin.com/in/dwebcoding](https://linkedin.com/in/dwebcoding)
- GitHub: [github.com/Dwebcoding](https://github.com/Dwebcoding)
- Portfolio: [dlwdesign.github.io](https://dlwdesign.github.io)

---

*Built with vanilla HTML, CSS, and JavaScript - no frameworks, maximum performance.*