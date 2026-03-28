export const renderHero = () => {
    return `
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
        
        <div class="absolute inset-0 z-0 opacity-20" 
             style="background-image: radial-gradient(#3b82f6 1px, transparent 1px); background-size: 40px 40px;">
        </div>

        <div class="absolute inset-0 z-0">
            <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[130px] rounded-full animate-pulse-slow"></div>
            <div class="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[130px] rounded-full animate-float"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10 text-center">
            
            <div class="inline-flex items-center gap-3 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase bg-blue-500/5 border border-blue-500/20 rounded-full backdrop-blur-md">
                <span class="flex items-center gap-1.5">
                    <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>Impulsando Negocios 🇻🇪 <span class="text-slate-500 mx-1">|</span> Miranda <span class="inline-block w-3 h-2 bg-gradient-to-b from-yellow-400 via-red-600 to-black rounded-sm shadow-sm shadow-yellow-500/20"></span></span>
            </div>

            <h1 class="text-6xl md:text-8xl font-black mb-6 tracking-tighter italic leading-none">
                <span class="text-white">SOFTWARE</span><br>
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400">
                    DE OTRO NIVEL
                </span>
            </h1>

            <p class="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 font-light leading-relaxed">
                En <span class="text-white font-semibold italic uppercase">Nexus Solutions</span> no solo hacemos webs, creamos herramientas digitales que escalan tu negocio. Desde <span class="text-blue-400 font-bold">$30</span>.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                <a href="#pricing" class="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-black shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] transition-all hover:scale-105 uppercase text-xs tracking-widest">
                    Ver Planes
                </a>
                <button id="btn-open-modal" class="px-10 py-4 bg-slate-900/50 hover:bg-slate-800 text-white rounded-full font-black border border-slate-700 backdrop-blur-md transition-all hover:scale-105 uppercase text-xs tracking-widest">
                    Reservar Consulta
                </button>
            </div>
        </div>

        <div id="modal-reserva" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-fade-in">
            <div class="bg-slate-900 border border-white/10 w-full max-w-lg rounded-[2.5rem] p-6 md:p-10 relative shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar">
                
                <button id="btn-close-modal" class="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <h3 class="text-2xl font-black text-white italic uppercase tracking-tighter mb-2">Reserva tu <span class="text-blue-500">Cita</span></h3>
                <p class="text-slate-400 text-[10px] mb-8 uppercase tracking-widest font-bold">Nexus Solutions Office • Miranda</p>

                <form id="form-reserva" class="space-y-4 text-left">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-1">
                            <label class="text-[9px] text-slate-500 uppercase font-black ml-2">Nombre / Empresa</label>
                            <input type="text" name="user_name" placeholder="Ej: Juan Pérez" required class="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white text-sm focus:border-blue-500 outline-none transition-all">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[9px] text-slate-500 uppercase font-black ml-2">Email de contacto</label>
                            <input type="email" name="user_email" placeholder="ejemplo@correo.com" required class="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white text-sm focus:border-blue-500 outline-none transition-all">
                        </div>
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] text-slate-500 uppercase font-black ml-2">Servicio de interés</label>
                        <select name="service" class="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white text-sm focus:border-blue-500 outline-none transition-all appearance-none">
                            <option value="Landing Page">Landing Page</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Web App Custom">Web App Custom (Software)</option>
                
                        </select>
                    </div>

                    <div class="space-y-1">
                        <label class="text-[9px] text-blue-500 uppercase font-black ml-2">Resumen de tu proyecto</label>
                        <textarea name="project_summary" placeholder="Cuéntanos brevemente qué necesitas para darte una visión..." required class="w-full bg-slate-800/50 border border-white/5 rounded-2xl px-5 py-4 text-white text-sm focus:border-blue-500 outline-none transition-all h-28 resize-none"></textarea>
                    </div>

                    <button type="submit" class="w-full py-5 mt-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] shadow-lg shadow-blue-600/30 transition-all active:scale-95">
                        Confirmar Envío
                    </button>
                </form>
            </div>
        </div>

        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
            <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </section>
    `;
};