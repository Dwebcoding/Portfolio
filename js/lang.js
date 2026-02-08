/**
 * Internationalization Management System
 * Handles language switching, localStorage persistence, and DOM translation
 * Supported languages: English (en), Italian (it)
 * Default language: English (en)
 */

class LanguageManager {
  constructor() {
    this.currentLang = 'en';
    this.terminalAnimationId = 0;
  }

  /**
   * Initialize language system with saved preferences
   */
  init() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.setupLanguageSwitcher();
    this.setLanguage(savedLang);
  }

  /**
   * Bind event listeners to language switcher elements
   */
  setupLanguageSwitcher() {
    document.querySelectorAll('.lang-switch').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.target.dataset.lang;
        this.setLanguage(lang);
      });
    });
  }

  /**
   * Set active language and apply translations
   * @param {string} lang - Language code ('en' or 'it')
   */
  setLanguage(lang) {
    if (!translations[lang]) {
      console.warn(`Language '${lang}' not found, using default 'en'`);
      lang = 'en';
    }

    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.updateLanguageSwitcher(lang);
    this.translatePage(lang);
    this.restartTerminalEffect();
  }

  /**
   * Update language switcher UI state
   * @param {string} activeLang - Currently active language
   */
  updateLanguageSwitcher(activeLang) {
    document.querySelectorAll('.lang-switch').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === activeLang);
    });
  }

  /**
   * Apply translations to DOM elements with i18n attributes
   * @param {string} lang - Language code
   */
  translatePage(lang) {
    const langData = translations[lang];
    
    document.documentElement.lang = lang;
    
    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (langData[key]) {
        element.innerHTML = langData[key];
      }
    });
    
    // Translate placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (langData[key]) {
        element.placeholder = langData[key];
      }
    });
    
    // Translate title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      if (langData[key]) {
        element.title = langData[key];
      }
    });
    
    this.updateMetaTags(lang);
  }

  /**
   * Update document meta tags for SEO
   * @param {string} lang - Language code
   */
  updateMetaTags(lang) {
    const langData = translations[lang];
    
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement && langData.meta_title) {
      titleElement.textContent = langData.meta_title;
    }
    
    const metaDesc = document.querySelector('meta[data-i18n-content]');
    if (metaDesc && langData.meta_description) {
      metaDesc.setAttribute('content', langData.meta_description);
    }
  }

  /**
   * Restart terminal animation with current language
   */
  restartTerminalEffect() {
    if (document.getElementById('hero-terminal-output')) {
      this.initTerminalEffect();
    }
  }

  /**
   * Typewriter animation using requestAnimationFrame
   * @param {HTMLElement} element - Target element
   * @param {string} text - Text to animate
   * @param {number} speed - Animation speed in milliseconds
   * @returns {Promise} - Resolves when animation completes
   */
  typewriter(element, text, speed = 40) {
    return new Promise(resolve => {
      let i = 0;
      element.innerHTML = "";
      const cursor = '<span class="cursor">_</span>';
      element.innerHTML = cursor;

      const type = () => {
        if (i < text.length) {
          element.innerHTML = text.substring(0, i + 1) + cursor;
          i++;
          requestAnimationFrame(() => setTimeout(type, speed));
        } else {
          element.innerHTML = text;
          resolve();
        }
      };
      
      requestAnimationFrame(type);
    });
  }

  /**
   * Initialize terminal hero animation sequence
   * Handles animation interruption and cleanup
   */
  async initTerminalEffect() {
    const terminalContainer = document.getElementById('hero-terminal-output');
    const ctaContainer = document.getElementById('hero-cta');

    if (!terminalContainer || !ctaContainer) return;

    const currentId = ++this.terminalAnimationId;
    
    terminalContainer.innerHTML = '';
    ctaContainer.innerHTML = '';

    const langData = translations[this.currentLang];
    const command = langData.hero_command;
    const outputLines = [
      langData.hero_output_name,
      langData.hero_output_role,
      langData.hero_output_focus,
      langData.hero_output_status
    ];
    const cta = langData.hero_cta;

    try {
      // Command input animation
      const commandElement = document.createElement('p');
      commandElement.className = 'terminal-prompt';
      commandElement.innerHTML = `$ <span></span>`;
      terminalContainer.appendChild(commandElement);
      
      await this.typewriter(commandElement.querySelector('span'), command);
      if (currentId !== this.terminalAnimationId) return;

      await new Promise(resolve => setTimeout(resolve, 800));
      if (currentId !== this.terminalAnimationId) return;

      // Output lines animation
      for (const line of outputLines) {
        const p = document.createElement('p');
        p.className = 'terminal-output-line';
        terminalContainer.appendChild(p);
        
        await this.typewriter(p, line, 25);
        if (currentId !== this.terminalAnimationId) return;
        
        await new Promise(resolve => setTimeout(resolve, 150));
        if (currentId !== this.terminalAnimationId) return;
      }

      await new Promise(resolve => setTimeout(resolve, 400));
      if (currentId !== this.terminalAnimationId) return;

      // CTA animation
      const isInSubfolder = window.location.pathname.includes('/html/');
      const pathPrefix = isInSubfolder ? '' : 'html/';
      
      const ctaElement = document.createElement('p');
      ctaElement.className = 'terminal-prompt';
      ctaElement.innerHTML = `$ <a href="${pathPrefix}projects.html" class="terminal-link"></a>`;
      ctaContainer.appendChild(ctaElement);
      
      await this.typewriter(ctaElement.querySelector('a'), cta);
    } catch (error) {
      console.warn('Terminal animation interrupted:', error);
    }
  }

  /**
   * Get current active language
   * @returns {string} Current language code
   */
  getCurrentLanguage() {
    return this.currentLang;
  }

  /**
   * Get translation string for key
   * @param {string} key - Translation key
   * @param {string} lang - Language code (optional)
   * @returns {string} Translated text or key if not found
   */
  getTranslation(key, lang = null) {
    const targetLang = lang || this.currentLang;
    return translations[targetLang]?.[key] || key;
  }
}

// Global instance
const languageManager = new LanguageManager();