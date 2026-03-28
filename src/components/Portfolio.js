export const renderPortfolio = () => {
    const projects = [
        {
            title: "Criollos Tours",
            category: "Turismo & Aventura",
            description: "Plataforma multi-página para reservas de tours en Venezuela. Arquitectura robusta y diseño de alto impacto y formulario de contacto.",
            tags: ["Multi-página", "Firebase", "JS", "HTML5", "CSS3", "SEO"],
            image: "/criollostour2.png", 
            url: "https://criollostour.web.app/" 
        },
        {
            title: "Blog DeCafé",
            category: "Editorial",
            description: "Portal de contenido con diseño limpio. Optimizado para lectura fluida.",
            tags: ["Multi-página", "CSS Grid", "UX", "HTML5", "CSS3",],
            image: "/blogcafe.png",
            url: "https://cafetinblog.netlify.app/" 
        },
        {
            title: "GDLWebCamp",
            category: "Eventos Tech",
            description: "Gestión de conferencias con registro dinámico. Un ejemplo de funcionalidad y orden visual con campo para Google maps.",
            tags: ["Landing Page", "Animations", "UI", "HTML5", "CSS3",],
            image: "/BlogConfe.png",
            url: "https://fascinating-jalebi-3da2a4.netlify.app/" 
        }
    ];

    return `
    <section id="portfolio" class="py-24 bg-slate-950 relative">
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="container mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-xs font-bold tracking-[0.4em] text-blue-500 uppercase mb-4">Portafolio Premium</h2>
                <h3 class="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
                    Proyectos <span class="text-blue-600">Reales</span>
                </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${projects.map(project => `
                    <a href="${project.url}" target="_blank" 
                       class="group relative block bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:border-blue-500/40 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)]">
                        
                        <div class="relative h-64 sm:h-72 overflow-hidden bg-slate-800">
                            <img src="${project.image}" alt="${project.title}" 
                                 class="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1">
                            
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90"></div>
                            
                            <div class="absolute top-6 left-6 flex flex-wrap gap-2">
                                ${project.tags.map(tag => `
                                    <span class="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                        ${tag}
                                    </span>
                                `).join('')}
                            </div>
                        </div>

                        <div class="p-8">
                            <div class="flex justify-between items-start mb-4">
                                <div>
                                    <p class="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-1">${project.category}</p>
                                    <h4 class="text-2xl font-bold text-white italic uppercase">${project.title}</h4>
                                </div>
                                <div class="bg-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </div>
                            </div>
                            <p class="text-slate-400 text-sm font-light leading-relaxed">
                                ${project.description}
                            </p>
                        </div>

                        <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    </a>
                `).join('')}
            </div>
        </div>
    </section>
    `;
};