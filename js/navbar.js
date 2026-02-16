// Navbar Component - Centralized navigation for all pages
function loadNavbar() {
  const navbarHTML = `
    <!-- Primary Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="/index.html">
                <img src="/Portfolio/Assets/Images/Portfolio/Logo%20BIG%202.png" alt="D Webcoding Logo" height="60">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="/index.html" data-i18n="nav_home"><i class="fas fa-home"></i> /home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/html/projects.html" data-i18n="nav_projects"><i class="fas fa-code-branch"></i> /projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/html/about.html" data-i18n="nav_about"><i class="fas fa-user-circle"></i> /about</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/html/contact.html" data-i18n="nav_contact"><i class="fas fa-envelope"></i> /contact</a>
                    </li>
                    <!-- Language Switcher Component -->
                    <li class="nav-item lang-switcher">
                        <a href="#" class="lang-switch" data-lang="it">IT</a>
                        <span style="color: var(--border-color);">/</span>
                        <a href="#" class="lang-switch" data-lang="en">EN</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  `;

  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.innerHTML = navbarHTML;
  }
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);
