export const renderPayments = () => {
    const methods = [
        { name: 'Efectivo', desc: 'Dólares / Bolívares', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'text-green-500' },
        { name: 'Pago móvil', desc: 'Banesco / Mercantil', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', color: 'text-blue-400' },
        { name: 'PayPal', desc: 'Pagos Internacionales', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', color: 'text-blue-600' },
        { name: 'Binance', desc: 'USDT / BTC', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'text-yellow-500' },
        { name: 'Zinli', desc: 'Tarjeta Virtual', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'text-purple-500' }
    ];

    return `
    <section id="payments" class="py-24 bg-slate-950 relative overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <p class="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 italic">Transacciones Seguras</p>
                <h2 class="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">Métodos de <span class="text-blue-600">Pago</span></h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                ${methods.map(m => `
                    <div class="payment-card group bg-slate-900/40 border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 text-center">
                        <div class="mb-6 inline-flex p-4 bg-slate-800/50 rounded-2xl ${m.color} group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-black/20">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="${m.icon}"></path>
                            </svg>
                        </div>
                        <h3 class="text-white font-black italic uppercase text-sm tracking-widest mb-2">${m.name}</h3>
                        <p class="text-slate-500 text-[10px] font-medium leading-relaxed">${m.desc}</p>
                    </div>
                `).join('')}
            </div>

            <div class="mt-16 text-center">
                <div class="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-white/5 rounded-full">
                    <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span class="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Verificados: @nexu.solutionn</span>
                </div>
            </div>
        </div>
    </section>
    `;
};