import './styles/input.css';
import { renderPayments } from './components/Payments';
import { renderNavbar } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderPricing } from './components/Pricing';
import { renderPortfolio } from './components/Portfolio';
import { renderFooter } from './components/Footer';
import ScrollReveal from 'scrollreveal';

// --- NOTIFICACIÓN ESTILIZADA NEXUS ---
const showNexusToast = (title, message) => {
    const toastHTML = `
        <div id="nexus-toast" class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[10001] animate-fade-in-up">
            <div class="bg-slate-900 border border-blue-500/30 p-6 rounded-[2rem] shadow-2xl backdrop-blur-xl flex items-center gap-4 min-w-[320px]">
                <div class="bg-blue-500/20 p-3 rounded-full text-blue-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                    <h4 class="text-white font-black italic uppercase text-xs tracking-widest">${title}</h4>
                    <p class="text-slate-400 text-[10px] uppercase font-bold mt-1">${message}</p>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', toastHTML);
    setTimeout(() => {
        const toast = document.querySelector('#nexus-toast');
        if (toast) {
            toast.classList.add('opacity-0', 'transition-opacity', 'duration-500');
            setTimeout(() => toast.remove(), 500);
        }
    }, 4000);
};

// --- BOTÓN FLOTANTE WHATSAPP (MANTENIDO) ---
const renderWhatsAppButton = () => {
    const btn = `
        <a href="https://wa.me/584149037835" target="_blank" class="fixed bottom-6 right-6 z-[999] bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-90 flex items-center justify-center group">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.404c0 6.556-5.332 11.888-11.888 11.888-2.013 0-3.987-.51-5.742-1.478l-6.142 1.703zm6.342-4.102l.354.209c1.485.879 3.198 1.344 4.947 1.344 5.435 0 9.856-4.422 9.856-9.856 0-2.633-1.025-5.107-2.887-6.97s-4.337-2.887-6.97-2.887c-5.435 0-9.856 4.422-9.856 9.856 0 2.13.681 4.154 1.968 5.822l.232.302-1.01 3.688 3.772-.947z"/></svg>
            <span class="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">Chat Directo</span>
        </a>
    `;
    document.body.insertAdjacentHTML('beforeend', btn);
};

// --- LÓGICA DE PRIVACIDAD Y TÉRMINOS (MANTENIDO) ---
const initLegalLinks = () => {
    const footer = document.querySelector('#footer');
    footer.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            const text = link.innerText.toLowerCase();
            if (text.includes('privacidad') || text.includes('términos') || text.includes('terminos')) {
                e.preventDefault();
                const legalModal = `
                    <div id="legal-modal" class="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fade-in">
                        <div class="bg-slate-900 border border-white/10 p-8 md:p-12 max-w-2xl rounded-[2rem] shadow-2xl text-center">
                            <div class="mb-6 inline-flex p-4 bg-blue-500/10 rounded-full text-blue-500">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 class="text-xl font-black text-white italic uppercase mb-4">Información Legal <span class="text-blue-500">Nexus</span></h3>
                            <div class="text-slate-400 text-sm space-y-4 font-light leading-relaxed">
                                <p>Nuestras políticas de <strong>Privacidad y Términos</strong> están siendo actualizadas para este 2026 para brindarte mayor seguridad en tus proyectos digitales.</p>
                            </div>
                            <button id="close-legal" class="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95">Entendido</button>
                        </div>
                    </div>
                `;
                document.body.insertAdjacentHTML('beforeend', legalModal);
                document.body.style.overflow = 'hidden';
                document.querySelector('#close-legal').onclick = () => {
                    document.querySelector('#legal-modal').remove();
                    document.body.style.overflow = 'auto';
                };
            }
        }
    });
};

// --- LÓGICA DEL MODAL DE RESERVA (ACTUALIZADO CON EMAILJS Y TOAST) ---
const initBookingModal = () => {
    const modal = document.getElementById('modal-reserva');
    const btnOpen = document.getElementById('btn-open-modal');
    const btnClose = document.getElementById('btn-close-modal');
    const formReserva = document.getElementById('form-reserva');

    btnOpen?.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.replace('hidden', 'flex');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        modal.classList.replace('flex', 'hidden');
        document.body.style.overflow = 'auto';
    };

    btnClose?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    formReserva?.addEventListener('submit', function(e) {
        e.preventDefault();
        const btnSubmit = this.querySelector('button[type="submit"]');
        const originalText = btnSubmit.innerText;
        btnSubmit.innerText = "ENVIANDO...";
        btnSubmit.disabled = true;

        // ENVÍO REAL CON EMAILJS
        emailjs.sendForm('service_0s96maj', 'template_ixqca6w', this)
            .then(() => {
                showNexusToast("¡RESERVA RECIBIDA!", "Revisaremos tu proyecto pronto.");
                closeModal();
                this.reset();
            }, (err) => {
                showNexusToast("ERROR", "No se pudo enviar. Intenta por WhatsApp.");
                console.error('EmailJS Error:', err);
            })
            .finally(() => {
                btnSubmit.innerText = originalText;
                btnSubmit.disabled = false;
            });
    });
};

// --- RENDERIZADO ---
document.querySelector('#navbar').innerHTML = renderNavbar();
document.querySelector('#hero').innerHTML = renderHero();
document.querySelector('#portfolio').innerHTML = renderPortfolio();
document.querySelector('#pricing').innerHTML = renderPricing();
document.querySelector('#payments').innerHTML = renderPayments();
document.querySelector('#footer').innerHTML = renderFooter();

// Inicialización de funciones
renderWhatsAppButton();
initLegalLinks();
initBookingModal();

// --- CONFIGURADOR DE PLANES WHATSAPP (MANTENIDO) ---
const initPlanModal = () => {
    const pricingSection = document.querySelector('#pricing');
    const devPlans = [
        { id: 'basico', name: 'Básico', price: 30 },
        { id: 'emprendedor', name: 'Emprendedor', price: 70 },
        { id: 'business', name: 'Business', price: 100 }
    ];
    const maintPlans = [
        { id: 'none', name: 'Ninguno', price: 0 },
        { id: 'essential', name: 'Essential', price: 15 },
        { id: 'pro', name: 'Nexus Pro', price: 25 }
    ];

    pricingSection.addEventListener('click', (e) => {
        const btn = e.target.closest('.choose-plan-btn');
        if (btn) {
            e.preventDefault();
            const selectedPlanId = btn.getAttribute('data-plan-id');
            const selectedPlanType = btn.getAttribute('data-plan-type');

            const modalHTML = `
            <div id="plan-modal" class="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-4 bg-slate-950/98 backdrop-blur-2xl animate-fade-in">
                <div class="bg-slate-900 border border-white/10 w-full max-w-5xl rounded-[2rem] shadow-2xl flex flex-col md:flex-row max-h-[95vh] relative overflow-hidden">
                    <div class="flex-1 overflow-y-auto custom-scrollbar flex flex-col md:flex-row">
                        <div class="p-6 md:p-12 flex-1">
                            <h3 class="text-2xl font-black text-white italic uppercase tracking-tighter mb-8">Nexus <span class="text-blue-500">Config</span></h3>
                            <form id="nexus-form" class="space-y-6">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" id="nombre" placeholder="Tu Nombre" required class="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4 text-white text-sm outline-none">
                                    <input type="text" id="empresa" placeholder="Tu Empresa" required class="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4 text-white text-sm outline-none">
                                </div>
                                <div class="space-y-6">
                                    <div class="space-y-3">
                                        <label class="text-[10px] text-blue-500 font-black uppercase tracking-[0.2em]">1. Plan Desarrollo</label>
                                        <div class="grid grid-cols-1 gap-2">
                                            ${devPlans.map(p => `<label class="flex items-center p-4 bg-slate-800/30 border border-white/5 rounded-2xl cursor-pointer hover:bg-slate-800 transition-all"><input type="radio" name="dev-choice" value="${p.id}" ${selectedPlanId === p.id ? 'checked' : ''} class="w-5 h-5 text-blue-600"><span class="ml-4 text-sm text-slate-300 font-bold">${p.name} ($${p.price})</span></label>`).join('')}
                                        </div>
                                    </div>
                                    <div class="space-y-3">
                                        <label class="text-[10px] text-cyan-500 font-black uppercase tracking-[0.2em]">2. Soporte Mensual</label>
                                        <div class="grid grid-cols-1 gap-2">
                                            ${maintPlans.map(p => `<label class="flex items-center p-4 bg-slate-800/30 border border-white/5 rounded-2xl cursor-pointer hover:bg-slate-800 transition-all"><input type="radio" name="maint-choice" value="${p.id}" ${selectedPlanId === p.id ? 'checked' : (p.id === 'none' && selectedPlanType === 'dev' ? 'checked' : '')} class="w-5 h-5 text-cyan-600"><span class="ml-4 text-sm text-slate-300 font-bold">${p.name} ${p.price > 0 ? `($${p.price})` : ''}</span></label>`).join('')}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="p-6 md:p-12 bg-slate-950/50 w-full md:w-[400px] border-t md:border-t-0 md:border-l border-white/10 shrink-0 text-right">
                            <h4 class="text-[10px] text-slate-600 font-black uppercase tracking-[0.4em] mb-8 italic">Resumen</h4>
                            <div id="cart-summary" class="space-y-6 mb-12"></div>
                            <p id="display-total-base" class="text-4xl font-black text-white italic tracking-tighter"></p>
                            <p id="display-total-maint" class="text-[10px] text-cyan-500 font-bold uppercase italic"></p>
                            <button id="nexus-submit-btn" class="w-full py-5 bg-blue-600 mt-6 hover:bg-blue-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-600/30 transition-all">Confirmar Orden</button>
                            <button type="button" id="nexus-close-btn" class="w-full text-slate-600 text-[10px] font-black uppercase mt-4 hover:text-white transition-colors">[ Cerrar ]</button>
                        </div>
                    </div>
                </div>
            </div>`;

            document.body.insertAdjacentHTML('beforeend', modalHTML);
            document.body.style.overflow = 'hidden';

            const updateUI = () => {
                const devVal = document.querySelector('input[name="dev-choice"]:checked').value;
                const maintVal = document.querySelector('input[name="maint-choice"]:checked').value;
                const selectedDev = devPlans.find(p => p.id === devVal);
                const selectedMaint = maintPlans.find(p => p.id === maintVal);

                document.querySelector('#cart-summary').innerHTML = `
                    <div><p class="text-blue-500 text-[9px] font-black uppercase mb-1">Software</p><p class="text-white font-bold italic uppercase text-base">${selectedDev.name}</p><p class="text-slate-500 text-xs">$${selectedDev.price}</p></div>
                    <div class="pt-6 border-t border-white/5"><p class="text-cyan-500 text-[9px] font-black uppercase mb-1">Soporte</p><p class="text-white font-bold italic uppercase text-base">${selectedMaint.name}</p>${selectedMaint.price > 0 ? `<p class="text-slate-500 text-xs">$${selectedMaint.price}/mes</p>` : ''}</div>`;
                document.querySelector('#display-total-base').innerText = `$${selectedDev.price}`;
                document.querySelector('#display-total-maint').innerText = selectedMaint.price > 0 ? `+ $${selectedMaint.price}/mes` : 'Sin cargos recurrentes';
            };

            updateUI();
            document.querySelectorAll('input[name="dev-choice"], input[name="maint-choice"]').forEach(input => input.addEventListener('change', updateUI));
            document.querySelector('#nexus-close-btn').onclick = () => { document.querySelector('#plan-modal').remove(); document.body.style.overflow = 'auto'; };
            document.querySelector('#nexus-submit-btn').onclick = () => {
                const nombre = document.querySelector('#nombre').value;
                const empresa = document.querySelector('#empresa').value;
                if (!nombre || !empresa) return alert("Completa tus datos.");
                const devVal = document.querySelector('input[name="dev-choice"]:checked').value;
                const maintVal = document.querySelector('input[name="maint-choice"]:checked').value;
                const selectedDev = devPlans.find(p => p.id === devVal);
                const selectedMaint = maintPlans.find(p => p.id === maintVal);
                const text = `¡Hola Nexus Solutions! 🚀%0A%0A*ORDEN DE SERVICIO*%0AClient: ${nombre}%0AEmpresa: ${empresa}%0ADesarrollo: ${selectedDev.name}%0ASoporte: ${selectedMaint.name}`;
                window.open(`https://wa.me/584149037835?text=${text}`, '_blank');
                document.querySelector('#plan-modal').remove(); document.body.style.overflow = 'auto';
            };
        }
    });
};

initPlanModal();

// --- ANIMACIONES FINALES ---
ScrollReveal().reveal('.container', { delay: 200, distance: '30px', origin: 'bottom', duration: 800, cleanup: true });
ScrollReveal().reveal('.payment-card', { delay: 100, distance: '20px', origin: 'bottom', interval: 100, rotate: { x: 20, y: 0, z: 0 }, cleanup: true });

// Tecla Escape
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('#plan-modal, #legal-modal, #modal-reserva');
        if (activeModal) {
            if(activeModal.id === 'modal-reserva') activeModal.classList.replace('flex', 'hidden');
            else activeModal.remove();
            document.body.style.overflow = 'auto';
        }
    }
});