export const renderFooter = () => {
    // Definimos los iconos y links (Añade tus enlaces reales en 'link')
    const socials = [
        { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', color: 'hover:bg-blue-600', link: 'https://www.facebook.com/profile.php?id=61585061983210&locale=es_LA' },
        { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', color: 'hover:bg-pink-600', link: 'https://www.instagram.com/nexu.solutionn/' },
        { name: 'X', icon: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z', color: 'hover:bg-slate-800', link: '#' },
        { name: 'TikTok', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.59-5.75-.29-4.36 3.35-8.23 7.71-8.23.03 0 .05 0 .08.01v4.27c-.57-.07-1.13-.03-1.67.12-1.23.28-2.36 1.15-2.82 2.33-.49 1.14-.35 2.5.31 3.55.53.86 1.41 1.46 2.39 1.6.7.13 1.44.1 2.08-.14 1.05-.33 1.88-1.2 2.1-2.28.08-.43.07-.87.07-1.3V.02z', color: 'hover:bg-cyan-500', link: '#' }
    ];

    return `
    <footer class="relative bg-slate-950 pt-24 pb-12 border-t border-white/5 overflow-hidden">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                
                <div class="space-y-6">
                    <div class="group cursor-default">
                        <h3 class="text-3xl font-black text-white italic uppercase tracking-tighter">
                            Nexus <span class="text-blue-600 group-hover:text-cyan-400 transition-colors">Solutions</span>
                        </h3>
                        <div class="h-1 w-12 bg-blue-600 mt-2 rounded-full transition-all group-hover:w-24"></div>
                    </div>
                    <p class="text-slate-500 text-sm leading-relaxed italic font-light">
                        Impulsando el escalado digital de negocios en Venezuela con tecnología de alto impacto y diseño premium.
                    </p>
                </div>

                <div class="flex flex-col items-center">
                    <h4 class="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mb-10 italic">Social Connect</h4>
                    <div class="flex gap-6">
                        ${socials.map(s => `
                            <a href="${s.link}" class="group relative" aria-label="${s.name}">
                                <div class="absolute inset-0 bg-slate-800 rounded-xl transform translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-300"></div>
                                
                                <div class="relative w-12 h-12 flex items-center justify-center bg-slate-900 border border-white/10 rounded-xl transform -rotate-6 group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500 ${s.color}">
                                    <svg class="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="${s.icon}"/>
                                    </svg>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>

                <div class="flex flex-col items-start md:items-end">
                    <h4 class="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mb-8 italic">Contacto Directo</h4>
                    <a href="mailto:nexusolutionn@gmail.com" class="text-white font-bold italic hover:text-blue-500 transition-colors mb-2 tracking-tighter">nexusolutionn@gmail.com</a>
                    <p class="text-slate-600 text-[10px] font-black uppercase tracking-widest leading-none">Miranda, Venezuela</p>
                </div>
            </div>

            <div class="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex flex-col items-center md:items-start gap-1">
                    <p class="text-[10px] text-slate-600 font-black uppercase tracking-widest">© 2026 Nexus Solutions.</p>
                </div>
                
                <div class="flex gap-8">
                    <a href="#" class="group relative text-slate-600 hover:text-white text-[10px] font-black uppercase transition-all italic tracking-widest">
                        Privacidad
                        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all group-hover:w-full"></span>
                    </a>
                    <a href="#" class="group relative text-slate-600 hover:text-white text-[10px] font-black uppercase transition-all italic tracking-widest">
                        Términos
                        <span class="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all group-hover:w-full"></span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    `;
};