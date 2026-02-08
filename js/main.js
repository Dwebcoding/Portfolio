// Typewriter effect for hero section
function typewriterEffect(elementId, lines, speed = 40, callback) {
    const el = document.getElementById(elementId);
    if (!el) {
        console.error('Typewriter element not found:', elementId);
        const fallback = document.createElement('div');
        fallback.style.color = '#ff5555';
        fallback.style.textAlign = 'center';
        fallback.style.fontWeight = 'bold';
        fallback.innerText = 'Errore: hero-typewriter non trovato.';
        document.body.prepend(fallback);
        return;
    }
    let lineIdx = 0;
    let charIdx = 0;
    let currentLine = '';
    let output = '';
    function typeLine() {
        if (lineIdx >= lines.length) {
            if (callback) callback();
            return;
        }
        currentLine = lines[lineIdx];
        charIdx = 0;
        function typeChar() {
            if (charIdx < currentLine.length) {
                output += currentLine[charIdx];
                el.innerText = output;
                charIdx++;
                setTimeout(typeChar, speed);
            } else {
                output += '\n';
                el.innerText = output;
                lineIdx++;
                setTimeout(typeLine, speed * 2);
            }
        }
        typeChar();
    }
    output = '';
    typeLine();
    console.log('Typewriter started:', elementId);
}

document.addEventListener('DOMContentLoaded', function() {
    const heroLines = [
        '$ who_am_i',
        'name: "Lorenzo Delibero"',
        'role: "Web Developer"',
        'focus: ["Structure", "Simplicity", "Performance"]',
        'status: "Open to collaborations and opportunities"',
        '',
        '$ view projects'
    ];
    typewriterEffect('hero-typewriter', heroLines, 40);
});
/**
 * Main Application Controller
 * Handles DOM manipulation, event delegation, and performance optimizations
 * Dependencies: AOS, languageManager
 */

// AOS lazy initialization flag
let aosInitialized = false;

/**
 * Dynamic navigation path resolver
 * Updates all navigation links based on current page location
 */
function updateNavigationPaths() {
    const isInSubfolder = window.location.pathname.includes('/html/');
    const pathPrefix = isInSubfolder ? '' : 'html/';
    const rootPath = isInSubfolder ? '../' : '';
    
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html' || href === '../index.html') {
            link.setAttribute('href', rootPath + 'index.html');
        } else if (href === 'projects.html' || href === 'html/projects.html') {
            link.setAttribute('href', pathPrefix + 'projects.html');
        } else if (href === 'about.html' || href === 'html/about.html') {
            link.setAttribute('href', pathPrefix + 'about.html');
        } else if (href === 'contact.html' || href === 'html/contact.html') {
            link.setAttribute('href', pathPrefix + 'contact.html');
        }
    });
    
    // Update navbar brand link
    const brandLink = document.querySelector('.navbar-brand');
    if (brandLink) {
        brandLink.setAttribute('href', rootPath + 'index.html');
    }

    
    
    // Update other page links
    const pageLinks = document.querySelectorAll('a[href*=".html"]');
    pageLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#')) {
            if (href.includes('projects.html')) {
                link.setAttribute('href', pathPrefix + 'projects.html');
            } else if (href.includes('about.html')) {
                link.setAttribute('href', pathPrefix + 'about.html');
            } else if (href.includes('contact.html')) {
                link.setAttribute('href', pathPrefix + 'contact.html');
            } else if (href.includes('index.html')) {
                link.setAttribute('href', rootPath + 'index.html');
            }
        }
    });
}

/**
 * Footer component generator
 * Injects footer HTML into placeholder element with dynamic path resolution
 */
function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    // Determine if we're in a subfolder (html/) or root
    const isInSubfolder = window.location.pathname.includes('/html/');
    const pathPrefix = isInSubfolder ? '' : 'html/';
    const rootPath = isInSubfolder ? '../' : '';

    placeholder.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <h5><i class="fas fa-user-astronaut"></i> <span data-i18n="footer_identity_name"></span></h5>
                <div class="col-md-4 mb-3">
                    <h5><i class="fas fa-sitemap"></i> <span data-i18n="footer_nav_title"></span></h5>
                    <ul class="list-unstyled">
                        <li><a href="${rootPath}index.html" data-i18n="footer_nav_home"></a></li>
                        <li><a href="${pathPrefix}projects.html" data-i18n="footer_nav_projects"></a></li>
                        <li><a href="${pathPrefix}about.html" data-i18n="footer_nav_about"></a></li>
                        <li><a href="${pathPrefix}contact.html" data-i18n="footer_nav_contact"></a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5><i class="fas fa-satellite-dish"></i> <span data-i18n="footer_contact_title"></span></h5>
                    <div class="social-icons">
                        <a href="mailto:d.webcoding@gmail.com" aria-label="Email">
                            <i class="fas fa-envelope"></i> Email
                        </a>
                        <a href="https://github.com/Dwebcoding/Dwebcoding-Portfolio" target="_blank" rel="noopener" aria-label="GitHub">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/dwebcoding/" target="_blank" rel="noopener" aria-label="LinkedIn">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="https://wa.me/393882566019 " target="_blank" rel="noopener" aria-label="WhatsApp">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="mb-0">
                    <span data-i18n="footer_copyright"></span> 
                    <span data-i18n="footer_built_with"></span>
                    <br>
                    <span data-i18n="footer_rights"></span>
                    <br><br>
                    <a href="${pathPrefix}privacy.html" data-i18n="footer_privacy"></a> | 
                    <a href="${pathPrefix}terms.html" data-i18n="footer_terms"></a>
                </p>
            </div>
        </div>
    </footer>`;
}

/**
 * AOS library initialization with performance optimizations
 * Includes reduced motion support and lazy loading
 */
function initAOS() {
    if (aosInitialized) return;
    
    AOS.init({
        duration: 600,
        once: true,
        offset: 30,
        easing: 'ease-out-cubic',
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    
    aosInitialized = true;
}

/**
 * Hero Terminal Section
 * Injects "Visualizza progetti" CTA with correct dynamic path
 */
function initHeroCTA() {
    const heroCta = document.getElementById('hero-cta');
    if (!heroCta) return;

    const isInSubfolder = window.location.pathname.includes('/html/');
    const pathPrefix = isInSubfolder ? '' : 'html/';

    heroCta.innerHTML = `
        <a href="${pathPrefix}projects.html" class="hero-cta-link">
            Visualizza progetti
        </a>
    `;
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', initHeroCTA);

/**
 * Application initialization and event binding
 * Implements lazy loading and performance optimizations
 */
document.addEventListener('DOMContentLoaded', () => {
    updateNavigationPaths();
    loadFooter();
    languageManager.init();
    seoManager.init();
    
    // Lazy AOS initialization on first scroll event
    let scrolled = false;
    const handleScroll = () => {
        if (!scrolled) {
            initAOS();
            scrolled = true;
            window.removeEventListener('scroll', handleScroll);
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Fallback AOS initialization after timeout
    setTimeout(() => {
        if (!scrolled) initAOS();
    }, 2000);

    // Contact form validation and submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name')?.trim();
            const email = formData.get('email')?.trim();
            const message = formData.get('message')?.trim();
            const confirmation = document.getElementById('form-confirmation');

            if (!name || !email || !message) {
                confirmation.textContent = languageManager.getTranslation('contact_error_msg');
                confirmation.style.color = '#dc3545';
            } else {
                confirmation.textContent = languageManager.getTranslation('contact_success_msg');
                confirmation.style.color = '#2ea043';
                contactForm.reset();
            }
        });
    }
/**
 * Main Application Controller
 * Handles DOM manipulation, event delegation, and performance optimizations
 * Dependencies: AOS, languageManager
 */

// AOS lazy initialization flag
let aosInitialized = false;

/**
 * Dynamic navigation path resolver
 * Updates all navigation links based on current page location
 */
function updateNavigationPaths() {
    const isInSubfolder = window.location.pathname.includes('/html/');
    const pathPrefix = isInSubfolder ? '' : 'html/';
    const rootPath = isInSubfolder ? '../' : '';
    
    // Update navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html' || href === '../index.html') {
            link.setAttribute('href', rootPath + 'index.html');
        } else if (href === 'projects.html' || href === 'html/projects.html') {
            link.setAttribute('href', pathPrefix + 'projects.html');
        } else if (href === 'about.html' || href === 'html/about.html') {
            link.setAttribute('href', pathPrefix + 'about.html');
        } else if (href === 'contact.html' || href === 'html/contact.html') {
            link.setAttribute('href', pathPrefix + 'contact.html');
        }
    });
    
    // Update navbar brand link
    const brandLink = document.querySelector('.navbar-brand');
    if (brandLink) {
        brandLink.setAttribute('href', rootPath + 'index.html');
    }

    
    
    // Update other page links
    const pageLinks = document.querySelectorAll('a[href*=".html"]');
    pageLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#')) {
            if (href.includes('projects.html')) {
                link.setAttribute('href', pathPrefix + 'projects.html');
            } else if (href.includes('about.html')) {
                link.setAttribute('href', pathPrefix + 'about.html');
            } else if (href.includes('contact.html')) {
                link.setAttribute('href', pathPrefix + 'contact.html');
            } else if (href.includes('index.html')) {
                link.setAttribute('href', rootPath + 'index.html');
            }
        }
    });
}

/**
 * Footer component generator
 * Injects footer HTML into placeholder element with dynamic path resolution
 */
function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    // Determine if we're in a subfolder (html/) or root
    const isInSubfolder = window.location.pathname.includes('/html/');
    const pathPrefix = isInSubfolder ? '' : 'html/';
    const rootPath = isInSubfolder ? '../' : '';

    placeholder.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <h5><i class="fas fa-user-astronaut"></i> <span data-i18n="footer_identity_name"></span></h5>
                    <p class="mb-1" data-i18n="footer_identity_role"></p>
                    <p class="footer-tagline" data-i18n="footer_identity_tagline"></p>
                </div>
                <div class="col-md-4 mb-3">
                    <h5><i class="fas fa-sitemap"></i> <span data-i18n="footer_nav_title"></span></h5>
                    <ul class="list-unstyled">
                        <li><a href="${rootPath}index.html" data-i18n="footer_nav_home"></a></li>
                        <li><a href="${pathPrefix}projects.html" data-i18n="footer_nav_projects"></a></li>
                        <li><a href="${pathPrefix}about.html" data-i18n="footer_nav_about"></a></li>
                        <li><a href="${pathPrefix}contact.html" data-i18n="footer_nav_contact"></a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5><i class="fas fa-satellite-dish"></i> <span data-i18n="footer_contact_title"></span></h5>
                    <div class="social-icons">
                        <a href="mailto:d.webcoding@gmail.com" aria-label="Email">
                            <i class="fas fa-envelope"></i> Email
                        </a>
                        <a href="https://github.com/Dwebcoding/Dwebcoding-Portfolio" target="_blank" rel="noopener" aria-label="GitHub">
                            <i class="fab fa-github"></i> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/dwebcoding/" target="_blank" rel="noopener" aria-label="LinkedIn">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="https://wa.me/393882566019 " target="_blank" rel="noopener" aria-label="WhatsApp">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="mb-0">
                    <span data-i18n="footer_copyright"></span> 
                    <span data-i18n="footer_built_with"></span>
                    <br>
                    <span data-i18n="footer_rights"></span>
                    <br><br>
                    <a href="${pathPrefix}privacy.html" data-i18n="footer_privacy"></a> | 
                    <a href="${pathPrefix}terms.html" data-i18n="footer_terms"></a>
                </p>
            </div>
        </div>
    </footer>`;
}

/**
 * AOS library initialization with performance optimizations
 * Includes reduced motion support and lazy loading
 */
function initAOS() {
    if (aosInitialized) return;
    
    AOS.init({
        duration: 600,
        once: true,
        offset: 30,
        easing: 'ease-out-cubic',
        disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
    
    aosInitialized = true;
}

/**
 * Hero Terminal Section
 * Injects "Visualizza progetti" CTA with correct dynamic path
 */
function initHeroCTA() {
    const heroCta = document.getElementById('hero-cta');
    if (!heroCta) return;

    const isInSubfolder = window.location.pathname.includes('/html/');
    const pathPrefix = isInSubfolder ? '' : 'html/';

    heroCta.innerHTML = `
        <a href="${pathPrefix}projects.html" class="hero-cta-link">
            Visualizza progetti
        </a>
    `;
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', initHeroCTA);

/**
 * Application initialization and event binding
 * Implements lazy loading and performance optimizations
 */
document.addEventListener('DOMContentLoaded', () => {
    updateNavigationPaths();
    loadFooter();
    languageManager.init();
    seoManager.init();
    
    // Lazy AOS initialization on first scroll event
    let scrolled = false;
    const handleScroll = () => {
        if (!scrolled) {
            initAOS();
            scrolled = true;
            window.removeEventListener('scroll', handleScroll);
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Fallback AOS initialization after timeout
    setTimeout(() => {
        if (!scrolled) initAOS();
    }, 2000);

    // Contact form validation and submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name')?.trim();
            const email = formData.get('email')?.trim();
            const message = formData.get('message')?.trim();
            const confirmation = document.getElementById('form-confirmation');

            if (!name || !email || !message) {
                confirmation.textContent = languageManager.getTranslation('contact_error_msg');
                confirmation.style.color = '#dc3545';
            } else {
                confirmation.textContent = languageManager.getTranslation('contact_success_msg');
                confirmation.style.color = '#2ea043';
                contactForm.reset();
            }
        });
    }
});