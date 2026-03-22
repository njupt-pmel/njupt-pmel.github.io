document.addEventListener('DOMContentLoaded', function() {
    // Get current language from localStorage or default to 'zh'
    let currentLang = localStorage.getItem('lang') || 'zh';
    
    // Initialize language
    setLanguage(currentLang);
    
    // Language switch click handlers
    document.querySelectorAll('.lang-switch a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('lang', lang);
        });
    });
    
    // Mobile menu toggle
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var nav = document.querySelector('nav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Set active nav link
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(function(link) {
        var href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});

function setLanguage(lang) {
    // Update language switch buttons
    document.querySelectorAll('.lang-switch a').forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        }
    });
    
    // Update all elements with data-zh and data-en attributes
    document.querySelectorAll('[data-' + lang + ']').forEach(function(el) {
        el.textContent = el.getAttribute('data-' + lang);
    });
    
    // Update html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}
