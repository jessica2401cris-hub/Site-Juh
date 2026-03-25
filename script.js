// ============================================
// SCRIPT.JS - JUH ESTÉTICA
// ============================================

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação ao carregar a página
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Adiciona classe ativa ao scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.classList.add('active');
        }
    });
});

// Rastreamento de cliques em botões (Analytics)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        console.log('Botão clicado:', buttonText);
        
        // Aqui você pode adicionar rastreamento com Google Analytics ou similar
        if (typeof gtag !== 'undefined') {
            gtag('event', 'button_click', {
                'button_name': buttonText
            });
        }
    });
});

// Validação de links do WhatsApp
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Verifica se o número do WhatsApp está válido
        const href = this.getAttribute('href');
        if (!href.includes('5563999455152')) {
            console.warn('Número do WhatsApp pode estar incorreto');
        }
    });
});

// Função para copiar número do WhatsApp
function copyWhatsAppNumber() {
    const number = '+55 63 99945-5152';
    navigator.clipboard.writeText(number).then(() => {
        alert('Número copiado: ' + number);
    }).catch(() => {
        alert('Número: ' + number);
    });
}

// Inicialização ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');
    
    // Adiciona animação aos elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-block, .differential-card, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Função para abrir WhatsApp com mensagem personalizada
function openWhatsApp(message = '') {
    const number = '5563999455152';
    const text = encodeURIComponent(message || 'Olá Juh! Gostaria de agendar um atendimento');
    window.open(`https://wa.me/${number}?text=${text}`, '_blank');
}
