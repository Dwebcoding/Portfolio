/**
 * SEO Manager - Structured Data and Meta Tag Management
 * Handles JSON-LD structured data injection for better search engine visibility
 */

const seoManager = {
    /**
     * Inject structured data for portfolio website
     */
    injectStructuredData() {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Lorenzo Delibero",
            "jobTitle": "Web Developer",
            "url": "https://dwebcoding.github.io/",
            "sameAs": [
                "https://github.com/Dwebcoding/Dwebcoding-Portfolio",
                "https://www.linkedin.com/in/dwebcoding/",
                "https://wa.me/393882566019"
            ],
            "knowsAbout": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Web Development", "Frontend Development"],
            "email": "d.webcoding@gmail.com",
            "telephone": "+39 388 256 6019",
            "worksFor": {
                "@type": "Organization",
                "name": "Freelance Web Developer"
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    },

    /**
     * Update page-specific meta tags
     */
    updateMetaTags(pageType) {
        const metaConfigs = {
            home: {
                title: "Lorenzo Delibero | Web Developer Portfolio",
                description: "Portfolio professionale di Lorenzo Delibero, sviluppatore web specializzato in HTML5, CSS3, JavaScript e Bootstrap.",
                keywords: "Lorenzo Delibero, web developer, portfolio, HTML, CSS, JavaScript, Bootstrap"
            },
            projects: {
                title: "Progetti Web | Lorenzo Delibero",
                description: "Scopri i progetti web realizzati da Lorenzo Delibero: siti responsive, applicazioni JavaScript e soluzioni frontend.",
                keywords: "progetti web, portfolio progetti, sviluppo frontend, siti responsive"
            },
            about: {
                title: "Chi Sono | Lorenzo Delibero Web Developer",
                description: "Conosci Lorenzo Delibero: competenze, esperienza e approccio allo sviluppo web moderno.",
                keywords: "Lorenzo Delibero, competenze web developer, esperienza sviluppo web"
            },
            contact: {
                title: "Contatti | Lorenzo Delibero",
                description: "Contatta Lorenzo Delibero per progetti web, collaborazioni e opportunità di lavoro.",
                keywords: "contatti web developer, collaborazioni, progetti web"
            }
        };

        const config = metaConfigs[pageType];
        if (config) {
            document.title = config.title;
            
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', config.description);
            
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) metaKeywords.setAttribute('content', config.keywords);
        }
    },

    /**
     * Initialize SEO enhancements
     */
    init() {
        this.injectStructuredData();
        
        // Determine page type from URL
        const path = window.location.pathname;
        let pageType = 'home';
        
        if (path.includes('projects.html')) pageType = 'projects';
        else if (path.includes('about.html')) pageType = 'about';
        else if (path.includes('contact.html')) pageType = 'contact';
        
        this.updateMetaTags(pageType);
    }
};