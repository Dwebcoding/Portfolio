/**
 * Mobile Testing Utilities
 * Viewport detection, breakpoint testing, and performance monitoring
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Update viewport information display
     * Calculates current viewport dimensions and breakpoint classification
     */
    function updateViewportInfo() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const viewportInfo = document.getElementById('viewport-info');
        
        if (viewportInfo) {
            viewportInfo.textContent = `Current viewport: ${width}x${height}px`;
        }
        
        // Breakpoint classification
        const breakpointIndicator = document.getElementById('breakpoint-indicator');
        if (breakpointIndicator) {
            let breakpoint = '';
            if (width <= 375) breakpoint = 'Extra Small Mobile';
            else if (width <= 480) breakpoint = 'Small Mobile';
            else if (width <= 768) breakpoint = 'Tablet';
            else if (width <= 1024) breakpoint = 'Desktop';
            else breakpoint = 'Large Desktop';
            
            breakpointIndicator.textContent = `Breakpoint: ${breakpoint}`;
        }
    }
    
    // Initialize viewport tracking
    updateViewportInfo();
    window.addEventListener('resize', updateViewportInfo);
    
    /**
     * Demo button interaction testing
     * Provides visual feedback for touch/click events
     */
    const testButtons = document.querySelectorAll('.demo-btn');
    testButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const originalText = btn.textContent;
            btn.textContent = 'Clicked!';
            btn.style.background = '#2ea043';
            btn.style.color = '#0d1117';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = 'transparent';
                btn.style.color = '#2ea043';
            }, 1000);
        });
    });
    
    /**
     * Basic performance benchmark
     * Measures DOM manipulation performance
     */
    function performanceTest() {
        const start = performance.now();
        
        // DOM creation benchmark
        for (let i = 0; i < 10000; i++) {
            document.createElement('div');
        }
        
        const end = performance.now();
        const perfResult = document.getElementById('perf-result');
        if (perfResult) {
            perfResult.textContent = `Performance test: ${(end - start).toFixed(2)}ms`;
        }
    }
    
    // Execute performance test after initialization
    setTimeout(performanceTest, 1000);
});