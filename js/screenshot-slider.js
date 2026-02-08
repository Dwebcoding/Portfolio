 * Island Screenshot Slider
 * Handles screenshot gallery navigation for project cards
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all screenshot sliders
    const initializeScreenshotSliders = () => {
        const sliders = document.querySelectorAll('.island-screenshot-slider');
        
        sliders.forEach((slider) => {
            const container = slider.querySelector('.screenshot-container');
            const slides = slider.querySelectorAll('.screenshot-slide');
            const dots = slider.querySelectorAll('.screenshot-dot');
            
            let currentSlide = 0;
            const totalSlides = slides.length;
            
            if (totalSlides === 0) return; // Skip if no slides
            
            // Show specific slide
            const showSlide = (index) => {
                if (index >= totalSlides) {
                    currentSlide = 0;
                } else if (index < 0) {
                    currentSlide = totalSlides - 1;
                } else {
                    currentSlide = index;
                }
                
                // Hide all slides and dots
                slides.forEach((slide) => {
                    slide.classList.remove('active');
                });
                dots.forEach((dot) => {
                    dot.classList.remove('active');
                });
                
                // Show current slide and dot
                if (slides[currentSlide]) {
                    slides[currentSlide].classList.add('active');
                }
                if (dots[currentSlide]) {
                    dots[currentSlide].classList.add('active');
                }
            };
            
            // Click handlers for dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
                
                // Keyboard support when dot is focused
                dot.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') {
                        showSlide(currentSlide - 1);
                    } else if (e.key === 'ArrowRight') {
                        showSlide(currentSlide + 1);
                    }
                });
            });
            
            // Initialize first slide
            showSlide(0);
        });
    };
    
    // Initialize on page load
    initializeScreenshotSliders();
    
    // Re-initialize if content is dynamically added
    const observer = new MutationObserver(() => {
        initializeScreenshotSliders();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
/**
 * Island Screenshot Slider
 * Handles screenshot gallery navigation for project cards
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all screenshot sliders
    const initializeScreenshotSliders = () => {
        const sliders = document.querySelectorAll('.island-screenshot-slider');
        
        sliders.forEach((slider) => {
            const container = slider.querySelector('.screenshot-container');
            const slides = slider.querySelectorAll('.screenshot-slide');
            const dots = slider.querySelectorAll('.screenshot-dot');
            
            let currentSlide = 0;
            const totalSlides = slides.length;
            
            if (totalSlides === 0) return; // Skip if no slides
            
            // Show specific slide
            const showSlide = (index) => {
                if (index >= totalSlides) {
                    currentSlide = 0;
                } else if (index < 0) {
                    currentSlide = totalSlides - 1;
                } else {
                    currentSlide = index;
                }
                
                // Hide all slides and dots
                slides.forEach((slide) => {
                    slide.classList.remove('active');
                });
                dots.forEach((dot) => {
                    dot.classList.remove('active');
                });
                
                // Show current slide and dot
                if (slides[currentSlide]) {
                    slides[currentSlide].classList.add('active');
                }
                if (dots[currentSlide]) {
                    dots[currentSlide].classList.add('active');
                }
            };
            
            // Click handlers for dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    showSlide(index);
                });
                
                // Keyboard support when dot is focused
                dot.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') {
                        showSlide(currentSlide - 1);
                    } else if (e.key === 'ArrowRight') {
                        showSlide(currentSlide + 1);
                    }
                });
            });
            
            // Initialize first slide
            showSlide(0);
        });
    };
    
    // Initialize on page load
    initializeScreenshotSliders();
    
    // Re-initialize if content is dynamically added
    const observer = new MutationObserver(() => {
        initializeScreenshotSliders();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
