
export const renderNavbar = () => {
    return `
    <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/80 border-b border-white/5">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="flex items-center gap-3 group cursor-pointer">
                <img src="/icono2.jpg" alt="Nexus Logo" class="w-9 h-9 transition-transform group-hover:rotate-90 duration-500">
                <div class="flex flex-col">
                    <span class="text-xl font-black tracking-tighter text-white leading-none">NEXUS</span>
                    <span class="text-[10px] tracking-[0.3em] text-blue-500 font-bold">SOLUTIONS</span>
                </div>
            </div>
            <div class="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-bold text-slate-400">
                <a href="#home" class="hover:text-blue-500 transition-colors">Inicio</a>
                <a href="#portfolio" class="hover:text-blue-500 transition-colors">Proyectos</a>
                <a href="#pricing" class="hover:text-blue-500 transition-colors">Planes</a>
            </div>
            <a href="https://wa.me/584149037835" class="px-6 py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all uppercase">
                Contacto
            </a>
        </div>
    </nav>
    `;
};