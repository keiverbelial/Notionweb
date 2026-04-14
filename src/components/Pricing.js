export const renderPricing = () => {
    const devPlans = [
        {
            id: "basico", // ID para el carrito
            name: "Básico",
            price: "30",
            desc: "Presencia digital rápida",
            features: ["Landing Page (1 sección)", "1 Ronda de cambios", "Optimización SEO base", "Entrega en 3-5 días"],
            color: "border-slate-800",
            btn: "bg-slate-800 hover:bg-slate-700"
        },
        {
            id: "emprendedor",
            name: "Emprendedor",
            price: "70",
            desc: "Impulso para tu negocio",
            features: ["Multi-página (4 secciones)", "2 Rondas de cambios", "Formulario de contacto", "Integración con RRSS"],
            color: "border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]",
            btn: "bg-blue-600 hover:bg-blue-500",
            popular: true
        },
        {
            id: "business",
            name: "Business",
            price: "100",
            desc: "Poder ilimitado",
            features: ["Web Premium ilimitada", "3 Rondas de cambios", "Alta velocidad de carga", "SEO Avanzado Pro"],
            color: "border-purple-500/30",
            btn: "bg-gradient-to-r from-purple-600 to-blue-600"
        }
    ];

    const maintenancePlans = [
        {
            id: "essential",
            name: "Essential",
            price: "20",
            desc: "Seguridad y estabilidad",
            features: ["Copias de seguridad", "Actualizaciones menores", "Soporte vía Correo", "Monitoreo 24/7"],
            btn: "border border-slate-700 hover:bg-slate-800"
        },
        {
            id: "pro",
            name: "Nexus Pro",
            price: "30",
            desc: "Soporte VIP y cambios",
            features: ["Soporte WhatsApp VIP", "1 Cambio de diseño/mes", "Seguridad Avanzada", "Optimización mensual"],
            btn: "bg-blue-600 shadow-lg shadow-blue-500/20",
            popular: true
        }
    ];

    const cardTemplate = (plan, isMonthly) => `
        <div class="relative group p-8 rounded-[2.5rem] bg-slate-900/40 border ${plan.color || 'border-white/5'} backdrop-blur-md transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
            ${plan.popular ? '<span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest text-white z-20 shadow-lg shadow-blue-500/40">Recomendado</span>' : ''}
            
            <h4 class="text-2xl font-black text-white italic uppercase mb-1 plan-name">${plan.name}</h4>
            <p class="text-slate-500 text-xs mb-6 font-light">${plan.desc}</p>
            
            <div class="mb-8 flex items-baseline gap-1">
                <span class="text-5xl font-black text-white italic">$${plan.price}</span>
                ${isMonthly ? '<span class="text-slate-500 text-sm font-bold">/mes</span>' : ''}
            </div>

            <ul class="space-y-4 mb-10 flex-grow">
                ${plan.features.map(f => `
                    <li class="flex items-center gap-3 text-slate-400 text-sm">
                        <svg class="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                        ${f}
                    </li>
                `).join('')}
            </ul>

            <button 
                data-plan-id="${plan.id}" 
                data-plan-type="${isMonthly ? 'maint' : 'dev'}" 
                class="choose-plan-btn w-full py-4 rounded-2xl text-center text-xs font-black uppercase tracking-widest transition-all ${plan.btn}"
            >
                Elegir Plan
            </button>
        </div>
    `;

    return `
    <section id="pricing" class="py-24 bg-slate-950 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] -z-10"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 blur-[120px] -z-10"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-4">Planes de <span class="text-blue-600">Desarrollo</span></h2>
                <p class="text-slate-400 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base italic">Construimos la base sólida que tu negocio necesita para destacar en el mundo digital.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                ${devPlans.map(p => cardTemplate(p, false)).join('')}
            </div>

            <div class="pt-16 border-t border-white/5">
                <div class="text-center mb-16">
                    <h3 class="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-4">Planes de <span class="text-cyan-500">Mantenimiento</span></h3>
                    <p class="text-slate-500 max-w-xl mx-auto font-light text-sm italic">Tranquilidad total para tu negocio. Nosotros nos encargamos de que todo funcione perfecto.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    ${maintenancePlans.map(p => cardTemplate(p, true)).join('')}
                </div>
            </div>
        </div>
    </section>
    `;
};