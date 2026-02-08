/**
 * Internationalization Data Structure
 * Centralized translation strings for multilingual support
 * Supported languages: English (en), Italian (it)
 * Default language: English (en)
 */

const translations = {
  en: {
    // Meta Tags
    meta_title: "Delibero Lorenzo | Web Developer",
    meta_description: "Portfolio of Lorenzo Delibero, a web developer specializing in modern and high-performance front-end solutions.",
    
    // Navbar
    nav_home: "/home",
    nav_projects: "/projects", 
    nav_about: "/about",
    nav_contact: "/contact",
    
    // Hero Section
    hero_command: "who_am_i",
    hero_output_name: '<span class="terminal-key">name</span>: "Lorenzo Delibero"',
    hero_output_role: '<span class="terminal-key">role</span>: "Web Developer"',
    hero_output_focus: '<span class="terminal-key">focus</span>: ["Structure", "Simplicity", "Performance"]',
    hero_output_status: '<span class="terminal-key">status</span>: "Open to collaborations and opportunities"',
    hero_cta: "view projects",
    
    // Skills Section
    skills_title: "tech_stack",
    skills_cta: "ls -a ./projects",
    
    // Projects Page
    projects_title: "projects",
    project_label_desc: "> description: ",
    project1_title: "Company-website - Wrong Site",
    project1_desc: "Showcase site for an architect, developed to be clean, professional and fully responsive.",
    project2_title: "Company-website - Dudù Stationery", 
    project2_desc: "Showcase site for a local stationery store, designed to highlight products, services and shop identity. Modern, responsive interface focused on user experience, developed with HTML5, CSS3, JavaScript and Bootstrap.",
    project3_title: "Company-website - DREAMCAR Site",
    project3_desc: "Responsive template for a workshop site. Modern design focused on simplicity for requesting quotes and viewing services.",
    project4_title: "Platform - SPLit (Under development)",
    project4_desc: "Web platform for architectural and structural survey listings, designed to connect architectural firms and industry professionals. The system features differentiated profiles, listing management and dedicated dashboards, with a modern, usability-oriented interface.",
    project5_title: "Company-website - Isla Lido Beach Resort",
    project5_desc: "Modern, responsive website for a beach resort destination, showcasing accommodations, services and local attractions with an engaging user experience.",
    
    // About Page
    about_title: "about_me",
    about_intro_lead: "// Web Designer & Developer",
    about_intro_p: "Web Designer with a strong technical background and a practical, problem-solving mindset. I completed a one-year AutoCAD course and worked for two years as a Mechanical Draftsman, where precision, structure and attention to detail were essential. These skills strongly influence my current approach to web design.",
    about_method_title: "/Approach",
    about_method_p1: "I design and build clean, responsive and user-focused websites, with a strong focus on layout clarity, usability and code structure. I mainly work with HTML, CSS and modern design tools.",
    about_method_p2: "I value simple, functional solutions and continuous improvement, aiming to create websites that are easy to use and effective.",
    about_goals_title: "/Connect", 
    about_goals_p1: "Ready to collaborate on your next project? Let's connect and discuss how we can bring your vision to life.",
    about_goals_p2: "",
    
    // Contact Page
    contact_title: "contact",
    contact_intro: "// Available for collaboration opportunities.",
    contact_label_name: "name",
    contact_label_email: "email", 
    contact_label_message: "message",
    contact_submit_btn: "./send_message.sh",
    contact_success_msg: "> Message sent successfully. Thank you for contacting me!",
    contact_error_msg: "> Error: all fields are required.",
    
    // Footer
    footer_identity_name: "Lorenzo Delibero",
    footer_identity_role: "Web Developer",
    footer_identity_tagline: "Codecrafter & Design Enthusiast",
    footer_nav_title: "Navigation",
    footer_nav_home: "/home",
    footer_nav_projects: "/projects",
    footer_nav_about: "/about", 
    footer_nav_contact: "/contact",
    footer_contact_title: "Contact",
    footer_copyright: "© 2026 Lorenzo Delibero.",
    footer_built_with: "Built with vanilla HTML, CSS and JavaScript.",
    footer_rights: "All rights reserved. Unauthorized reproduction is prohibited.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    
    // Legal Pages
    privacy_title: "Privacy Policy",
    privacy_description: "Privacy Policy of Lorenzo Delibero.",
    privacy_data_collection: "Data Collection",
    privacy_data_text: "This website does not collect personal data automatically. Contact information is only collected when voluntarily provided through the contact form.",
    privacy_cookies: "Cookies",
    privacy_cookies_text: "This site uses only essential cookies for language preferences. No tracking or analytics cookies are used.",
    privacy_contact: "Contact",
    privacy_contact_text: "For privacy-related questions, contact: lorenzo.delibero@email.com | Tel: +39 388 256 6019",
    
    terms_title: "Terms of Service",
    terms_description: "Terms of Service of Lorenzo Delibero.",
    terms_usage: "Website Usage",
    terms_usage_text: "This portfolio website is provided for informational purposes. All content is protected by copyright.",
    terms_intellectual: "Intellectual Property",
    terms_intellectual_text: "All designs, code, and content are the intellectual property of Lorenzo Delibero unless otherwise stated.",
    terms_contact: "Contact",
    terms_contact_text: "For questions about these terms, contact: lorenzo.delibero@email.com | Tel: +39 388 256 6019"
  },
  
  it: {
    // Meta Tags
    meta_title: "Delibero Lorenzo | Web Developer",
    meta_description: "Portfolio di Lorenzo Delibero, sviluppatore web specializzato in soluzioni front-end moderne e performanti.",
    
    // Navbar
    nav_home: "/home",
    nav_projects: "/progetti",
    nav_about: "/chi_sono", 
    nav_contact: "/contatti",
    
    // Hero Section
    hero_command: "chi_sono",
    hero_output_name: '<span class="terminal-key">nome</span>: "Lorenzo Delibero"',
    hero_output_role: '<span class="terminal-key">ruolo</span>: "Sviluppatore Web"',
    hero_output_focus: '<span class="terminal-key">focus</span>: ["Struttura", "Semplicità", "Performance"]',
    hero_output_status: '<span class="terminal-key">status</span>: "Aperto a collaborazioni e opportunità"',
    hero_cta: "visualizza progetti",
    
    // Skills Section
    skills_title: "stack_tecnologico",
    skills_cta: "ls -a ./projects",
    
    // Projects Page
    projects_title: "projects",
    project_label_desc: "> descrizione: ",
    project1_title: "Sito-aziendale - Wrong Site",
    project1_desc: "Sito vetrina per un'architetto, sviluppato per essere pulito, professionale e completamente responsive.",
    project2_title: "Sito-aziendale - Cartoleria Dudù",
    project2_desc: "Sito vetrina per una cartoleria locale, progettato per valorizzare prodotti, servizi e identità del negozio. Interfaccia moderna, responsive e orientata all'esperienza utente, sviluppata con HTML5, CSS3, JavaScript e Bootstrap.",
    project3_title: "Sito-aziendale - DREAMCAR Site", 
    project3_desc: "Template responsive per un sito di officina. Design moderno e focalizzato sulla semplicità di richiedere preventivi e visualizzare i servizi.",
    project4_title: "Piattaforma - SPLit (In aggiornamento)",
    project4_desc: "Piattaforma web per inserzioni di sopralluoghi architettonici e strutturali, progettata per mettere in contatto studi di architettura e professionisti del settore. Il sistema prevede profili differenziati, gestione delle inserzioni e dashboard dedicate, con un'interfaccia moderna e orientata all'usabilità.",
    project5_title: "Sito-aziendale - Isla Lido Beach Resort",
    project5_desc: "Sito web moderno e responsive per una destinazione resort balneare, che mostra alloggi, servizi e attrazioni locali con un'esperienza utente coinvolgente.",
    
    // About Page
    about_title: "about_me",
    about_intro_lead: "// Web Designer & Developer",
    about_intro_p: "Web Designer con un solido background tecnico e una mentalità pratica e orientata alla risoluzione dei problemi. Ho completato un corso di AutoCAD di un anno e ho lavorato per due anni come Disegnatore Meccanico, dove precisione, struttura e attenzione ai dettagli erano essenziali. Queste competenze influenzano fortemente il mio attuale approccio al web design.",
    about_method_title: "/Approccio",
    about_method_p1: "Progetto e realizzo siti web puliti, responsive e orientati all'utente, con un forte focus sulla chiarezza del layout, usabilità e struttura del codice. Lavoro principalmente con HTML, CSS e strumenti di design moderni.",
    about_method_p2: "Apprezzo le soluzioni semplici e funzionali e il miglioramento continuo, mirando a creare siti web facili da usare ed efficaci.",
    about_goals_title: "/Connettiti", 
    about_goals_p1: "Pronto a collaborare al tuo prossimo progetto? Connettiamoci e discutiamo di come possiamo dare vita alla tua visione.",
    about_goals_p2: "",
    
    // Contact Page
    contact_title: "contact",
    contact_intro: "// Disponibile per opportunità di collaborazione.",
    contact_label_name: "nome",
    contact_label_email: "email",
    contact_label_message: "messaggio", 
    contact_submit_btn: "./send_message.sh",
    contact_success_msg: "> Messaggio inviato con successo. Grazie per avermi contattato!",
    contact_error_msg: "> Errore: tutti i campi sono obbligatori.",
    
    // Footer
    footer_identity_name: "Lorenzo Delibero",
    footer_identity_role: "Web Developer", 
    footer_identity_tagline: "Codecrafter & Design Enthusiast",
    footer_nav_title: "Navigazione",
    footer_nav_home: "/home",
    footer_nav_projects: "/progetti",
    footer_nav_about: "/chi_sono",
    footer_nav_contact: "/contatti",
    footer_contact_title: "Contatti",
    footer_copyright: "© 2026 Lorenzo Delibero.",
    footer_built_with: "Realizzato con HTML, CSS e JavaScript vanilla.",
    footer_rights: "Tutti i diritti riservati. La riproduzione non autorizzata è vietata.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Termini di Servizio",
    
    // Legal Pages
    privacy_title: "Privacy Policy",
    privacy_description: "Privacy Policy di Lorenzo Delibero.",
    privacy_data_collection: "Raccolta Dati",
    privacy_data_text: "Questo sito web non raccoglie dati personali automaticamente. Le informazioni di contatto vengono raccolte solo quando fornite volontariamente tramite il modulo di contatto.",
    privacy_cookies: "Cookie",
    privacy_cookies_text: "Questo sito utilizza solo cookie essenziali per le preferenze linguistiche. Non vengono utilizzati cookie di tracciamento o analitici.",
    privacy_contact: "Contatto",
    privacy_contact_text: "Per domande relative alla privacy, contatta: lorenzo.delibero@email.com | Tel: +39 388 256 6019",
    
    terms_title: "Termini di Servizio",
    terms_description: "Termini di Servizio di Lorenzo Delibero.",
    terms_usage: "Utilizzo del Sito",
    terms_usage_text: "Questo sito portfolio è fornito a scopo informativo. Tutti i contenuti sono protetti da copyright.",
    terms_intellectual: "Proprietà Intellettuale",
    terms_intellectual_text: "Tutti i design, codici e contenuti sono proprietà intellettuale di Lorenzo Delibero salvo diversa indicazione.",
    terms_contact: "Contatto",
    terms_contact_text: "Per domande su questi termini, contatta: lorenzo.delibero@email.com | Tel: +39 388 256 6019"
  }
=======
/**
 * Internationalization Data Structure
 * Centralized translation strings for multilingual support
 * Supported languages: English (en), Italian (it)
 * Default language: English (en)
 */

const translations = {
  en: {
    // Meta Tags
    meta_title: "Delibero Lorenzo | Web Developer",
    meta_description: "Portfolio of Lorenzo Delibero, a web developer specializing in modern and high-performance front-end solutions.",
    
    // Navbar
    nav_home: "/home",
    nav_projects: "/projects", 
    nav_about: "/about",
    nav_contact: "/contact",
    
    // Hero Section
    hero_command: "who_am_i",
    hero_output_name: '<span class="terminal-key">name</span>: "Lorenzo Delibero"',
    hero_output_role: '<span class="terminal-key">role</span>: "Web Developer"',
    hero_output_focus: '<span class="terminal-key">focus</span>: ["Structure", "Simplicity", "Performance"]',
    hero_output_status: '<span class="terminal-key">status</span>: "Open to collaborations and opportunities"',
    hero_cta: "view projects",
    
    // Skills Section
    skills_title: "tech_stack",
    skills_cta: "ls -a ./projects",
    
    // Projects Page
    projects_title: "projects",
    project_label_desc: "> description: ",
    project1_title: "Company-website - Wrong Site",
    project1_desc: "Showcase site for an architect, developed to be clean, professional and fully responsive.",
    project2_title: "Company-website - Dudù Stationery", 
    project2_desc: "Showcase site for a local stationery store, designed to highlight products, services and shop identity. Modern, responsive interface focused on user experience, developed with HTML5, CSS3, JavaScript and Bootstrap.",
    project3_title: "Company-website - DREAMCAR Site",
    project3_desc: "Responsive template for a workshop site. Modern design focused on simplicity for requesting quotes and viewing services.",
    project4_title: "Platform - SPLit (Under development)",
    project4_desc: "Web platform for architectural and structural survey listings, designed to connect architectural firms and industry professionals. The system features differentiated profiles, listing management and dedicated dashboards, with a modern, usability-oriented interface.",
    project5_title: "Company-website - Isla Lido Beach Resort",
    project5_desc: "Modern, responsive website for a beach resort destination, showcasing accommodations, services and local attractions with an engaging user experience.",
    
    // About Page
    about_title: "about_me",
    about_intro_lead: "// Web Designer & Developer",
    about_intro_p: "Web Designer with a strong technical background and a practical, problem-solving mindset. I completed a one-year AutoCAD course and worked for two years as a Mechanical Draftsman, where precision, structure and attention to detail were essential. These skills strongly influence my current approach to web design.",
    about_method_title: "/Approach",
    about_method_p1: "I design and build clean, responsive and user-focused websites, with a strong focus on layout clarity, usability and code structure. I mainly work with HTML, CSS and modern design tools.",
    about_method_p2: "I value simple, functional solutions and continuous improvement, aiming to create websites that are easy to use and effective.",
    about_goals_title: "/Connect", 
    about_goals_p1: "Ready to collaborate on your next project? Let's connect and discuss how we can bring your vision to life.",
    about_goals_p2: "",
    
    // Contact Page
    contact_title: "contact",
    contact_intro: "// Available for collaboration opportunities.",
    contact_label_name: "name",
    contact_label_email: "email", 
    contact_label_message: "message",
    contact_submit_btn: "./send_message.sh",
    contact_success_msg: "> Message sent successfully. Thank you for contacting me!",
    contact_error_msg: "> Error: all fields are required.",
    
    // Footer
    footer_identity_name: "Lorenzo Delibero",
    footer_identity_role: "Web Developer",
    footer_identity_tagline: "Codecrafter & Design Enthusiast",
    footer_nav_title: "Navigation",
    footer_nav_home: "/home",
    footer_nav_projects: "/projects",
    footer_nav_about: "/about", 
    footer_nav_contact: "/contact",
    footer_contact_title: "Contact",
    footer_copyright: "© 2026 Lorenzo Delibero.",
    footer_built_with: "Built with vanilla HTML, CSS and JavaScript.",
    footer_rights: "All rights reserved. Unauthorized reproduction is prohibited.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    
    // Legal Pages
    privacy_title: "Privacy Policy",
    privacy_description: "Privacy Policy of Lorenzo Delibero.",
    privacy_data_collection: "Data Collection",
    privacy_data_text: "This website does not collect personal data automatically. Contact information is only collected when voluntarily provided through the contact form.",
    privacy_cookies: "Cookies",
    privacy_cookies_text: "This site uses only essential cookies for language preferences. No tracking or analytics cookies are used.",
    privacy_contact: "Contact",
    privacy_contact_text: "For privacy-related questions, contact: lorenzo.delibero@email.com | Tel: +39 388 256 6019",
    
    terms_title: "Terms of Service",
    terms_description: "Terms of Service of Lorenzo Delibero.",
    terms_usage: "Website Usage",
    terms_usage_text: "This portfolio website is provided for informational purposes. All content is protected by copyright.",
    terms_intellectual: "Intellectual Property",
    terms_intellectual_text: "All designs, code, and content are the intellectual property of Lorenzo Delibero unless otherwise stated.",
    terms_contact: "Contact",
    terms_contact_text: "For questions about these terms, contact: lorenzo.delibero@email.com | Tel: +39 388 256 6019"
  },
  
  it: {
    // Meta Tags
    meta_title: "Delibero Lorenzo | Web Developer",
    meta_description: "Portfolio di Lorenzo Delibero, sviluppatore web specializzato in soluzioni front-end moderne e performanti.",
    
    // Navbar
    nav_home: "/home",
    nav_projects: "/progetti",
    nav_about: "/chi_sono", 
    nav_contact: "/contatti",
    
    // Hero Section
    hero_command: "chi_sono",
    hero_output_name: '<span class="terminal-key">nome</span>: "Lorenzo Delibero"',
    hero_output_role: '<span class="terminal-key">ruolo</span>: "Sviluppatore Web"',
    hero_output_focus: '<span class="terminal-key">focus</span>: ["Struttura", "Semplicità", "Performance"]',
    hero_output_status: '<span class="terminal-key">status</span>: "Aperto a collaborazioni e opportunità"',
    hero_cta: "visualizza progetti",
    
    // Skills Section
    skills_title: "stack_tecnologico",
    skills_cta: "ls -a ./projects",
    
    // Projects Page
    projects_title: "projects",
    project_label_desc: "> descrizione: ",
    project1_title: "Sito-aziendale - Wrong Site",
    project1_desc: "Sito vetrina per un'architetto, sviluppato per essere pulito, professionale e completamente responsive.",
    project2_title: "Sito-aziendale - Cartoleria Dudù",
    project2_desc: "Sito vetrina per una cartoleria locale, progettato per valorizzare prodotti, servizi e identità del negozio. Interfaccia moderna, responsive e orientata all'esperienza utente, sviluppata con HTML5, CSS3, JavaScript e Bootstrap.",
    project3_title: "Sito-aziendale - DREAMCAR Site", 
    project3_desc: "Template responsive per un sito di officina. Design moderno e focalizzato sulla semplicità di richiedere preventivi e visualizzare i servizi.",
    project4_title: "Piattaforma - SPLit (In aggiornamento)",
    project4_desc: "Piattaforma web per inserzioni di sopralluoghi architettonici e strutturali, progettata per mettere in contatto studi di architettura e professionisti del settore. Il sistema prevede profili differenziati, gestione delle inserzioni e dashboard dedicate, con un'interfaccia moderna e orientata all'usabilità.",
    project5_title: "Sito-aziendale - Isla Lido Beach Resort",
    project5_desc: "Sito web moderno e responsive per una destinazione resort balneare, che mostra alloggi, servizi e attrazioni locali con un'esperienza utente coinvolgente.",
    
    // About Page
    about_title: "about_me",
    about_intro_lead: "// Web Designer & Developer",
    about_intro_p: "Web Designer con un solido background tecnico e una mentalità pratica e orientata alla risoluzione dei problemi. Ho completato un corso di AutoCAD di un anno e ho lavorato per due anni come Disegnatore Meccanico, dove precisione, struttura e attenzione ai dettagli erano essenziali. Queste competenze influenzano fortemente il mio attuale approccio al web design.",
    about_method_title: "/Approccio",
    about_method_p1: "Progetto e realizzo siti web puliti, responsive e orientati all'utente, con un forte focus sulla chiarezza del layout, usabilità e struttura del codice. Lavoro principalmente con HTML, CSS e strumenti di design moderni.",
    about_method_p2: "Apprezzo le soluzioni semplici e funzionali e il miglioramento continuo, mirando a creare siti web facili da usare ed efficaci.",
    about_goals_title: "/Connettiti", 
    about_goals_p1: "Pronto a collaborare al tuo prossimo progetto? Connettiamoci e discutiamo di come possiamo dare vita alla tua visione.",
    about_goals_p2: "",
    
    // Contact Page
    contact_title: "contact",
    contact_intro: "// Disponibile per opportunità di collaborazione.",
    contact_label_name: "nome",
    contact_label_email: "email",
    contact_label_message: "messaggio", 
    contact_submit_btn: "./send_message.sh",
    contact_success_msg: "> Messaggio inviato con successo. Grazie per avermi contattato!",
    contact_error_msg: "> Errore: tutti i campi sono obbligatori.",
    
    // Footer
    footer_identity_name: "Lorenzo Delibero",
    footer_identity_role: "Web Developer", 
    footer_identity_tagline: "Codecrafter & Design Enthusiast",
    footer_nav_title: "Navigazione",
    footer_nav_home: "/home",
    footer_nav_projects: "/progetti",
    footer_nav_about: "/chi_sono",
    footer_nav_contact: "/contatti",
    footer_contact_title: "Contatti",
    footer_copyright: "© 2026 Lorenzo Delibero.",
    footer_built_with: "Realizzato con HTML, CSS e JavaScript vanilla.",
    footer_rights: "Tutti i diritti riservati. La riproduzione non autorizzata è vietata.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Termini di Servizio",
    
    // Legal Pages
    privacy_title: "Privacy Policy",
    privacy_description: "Privacy Policy di Lorenzo Delibero.",
    privacy_data_collection: "Raccolta Dati",
    privacy_data_text: "Questo sito web non raccoglie dati personali automaticamente. Le informazioni di contatto vengono raccolte solo quando fornite volontariamente tramite il modulo di contatto.",
    privacy_cookies: "Cookie",
    privacy_cookies_text: "Questo sito utilizza solo cookie essenziali per le preferenze linguistiche. Non vengono utilizzati cookie di tracciamento o analitici.",
    privacy_contact: "Contatto",
    privacy_contact_text: "Per domande relative alla privacy, contatta: lorenzo.delibero@email.com | Tel: +39 388 256 6019",
    
    terms_title: "Termini di Servizio",
    terms_description: "Termini di Servizio di Lorenzo Delibero.",
    terms_usage: "Utilizzo del Sito",
    terms_usage_text: "Questo sito portfolio è fornito a scopo informativo. Tutti i contenuti sono protetti da copyright.",
    terms_intellectual: "Proprietà Intellettuale",
    terms_intellectual_text: "Tutti i design, codici e contenuti sono proprietà intellettuale di Lorenzo Delibero salvo diversa indicazione.",
    terms_contact: "Contatto",
    terms_contact_text: "Per domande su questi termini, contatta: lorenzo.delibero@email.com | Tel: +39 388 256 6019"
  }
>>>>>>> dd94f2ed607aa855ac339d05811801a492122e1e
};