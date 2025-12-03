/* =========================================
   MARKHOR TECH - MAIN JAVASCRIPT FILE
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. THEME PERSISTENCE (Light/Dark Mode Yaad Rakhna)
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check karein ke user ne pehlay koi setting ki thi?
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        themeToggle.checked = true; // Light mode on kar do
    }

    // Jab user button dabaye, to setting save kar lo
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });


    // 2. CONTACT FORM SUBMISSION (Fake Submit)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Page refresh honay se roko
            
            // Button ka text change karo
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Sending...";
            
            setTimeout(() => {
                alert("Thank you! Your message has been sent successfully to Markhor Tech.");
                contactForm.reset(); // Form khali kar do
                btn.innerText = originalText; // Button wapis pehlay jaisa kar do
            }, 1500);
        });
    }


    // 3. SMOOTH SCROLLING FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Sirf tab chalao agar link page ke andar ka ho (jaise #services)
            // Modal links (#signin) ko ignore karo
            if (targetId !== '#' && targetId !== '#signin' && targetId !== '#signup') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});