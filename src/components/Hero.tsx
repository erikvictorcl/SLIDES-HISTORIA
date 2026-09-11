import React from 'react';
import { Star, BookOpen, ArrowRight } from 'lucide-react';

// =============================================================================
// IMAGENS DOS DISPOSITIVOS NO HERO (NOTEBOOK E CELULAR)
// Imagens inseridas diretamente via links externos com proporções nativas
// CELULAR: https://i.imgur.com/JDjCqwY.png
// NOTEBOOK: https://i.imgur.com/m0LGMac.jpeg
// =============================================================================
const imagemNotebook = 'https://i.imgur.com/m0LGMac.jpeg';
const imagemCelular = 'https://i.imgur.com/JDjCqwY.png';

export const Hero: React.FC = () => {
  const handleScrollToOffers = () => {
    const section = document.getElementById('ofertas');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full bg-[#FAF9F6] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 overflow-hidden">
      {/* =====================================================================
          GRANDE CARD BRANCO CENTRALIZADO DO HERO
          Cantos bem arredondados, borda sutil, sombra leve e amplo respiro
          ===================================================================== */}
      <div 
        id="hero-main-card"
        className="relative max-w-4xl lg:max-w-5xl mx-auto bg-white border border-[#EBE6DD] rounded-[28px] sm:rounded-[36px] p-5 sm:p-10 md:p-12 shadow-xl shadow-slate-900/5 text-center flex flex-col items-center z-10"
      >
        
        {/* 1. SELO / PROVA SOCIAL NO TOPO */}
        <div className="flex items-center justify-center mb-5 sm:mb-6">
          <div 
            id="hero-badge"
            className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#EBE6DD] px-4 py-1.5 rounded-full shadow-xs"
          >
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
              Aprovado por +1.250 professores de História no Brasil
            </span>
          </div>
        </div>

        {/* 2. HEADLINE PRINCIPAL */}
        <h1 
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B3B57] tracking-tight leading-[1.15] mb-5 sm:mb-6 font-display max-w-3xl"
        >
          +300 Slides de História para o <span className="text-[#26619C]">ENEM</span> com aulas mais{' '}
          <span className="text-[#26619C]">visuais, organizadas</span> e prontas.
        </h1>

        {/* 2.1 BADGE ABAIXO DO TÍTULO (ESCOPO ESCOLAR) */}
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <div 
            id="hero-scope-pill"
            className="inline-flex items-center gap-2 border border-[#D3E3F2] px-4 py-1.5 rounded-full"
          >
            <BookOpen className="w-4 h-4 text-[#26619C] shrink-0 stroke-[1.75]" />
            <span className="text-sm sm:text-[15px] font-medium text-[#1B3B57]">
              Do 6º ano EF ao 3º ano EM
            </span>
          </div>
        </div>

        {/* 3. MOCKUP PREMIUM: MACBOOK + IPHONE (COMPOSIÇÃO DE PRODUTO DIGITAL) */}
        <div id="hero-devices-mockup" className="relative w-full max-w-[800px] mb-8 sm:mb-10 mx-auto select-none">
          
          {/* 1. MACBOOK (ELEMENTO PRINCIPAL EM DESTAQUE) */}
          <div id="mockup-notebook" className="relative w-full">
            
            {/* Tampa do MacBook (Chassi Superior em Alumínio Space Gray com Borda Fina) */}
            <div className="relative rounded-t-[18px] sm:rounded-t-[24px] bg-[#1a1f29] p-2 sm:p-2.5 border-[2px] sm:border-[2.5px] border-[#384252] shadow-2xl shadow-slate-950/40">
              
              {/* Notch / Câmera FaceTime HD centralizada */}
              <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-12 sm:w-16 h-2 sm:h-2.5 bg-black rounded-b-md flex items-center justify-center gap-1 px-1">
                  <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#151c27] ring-1 ring-slate-700/60" />
                  <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              {/* Área Útil da Tela Liquid Retina do MacBook (Proporção 16:10) */}
              <div className="relative aspect-[16/10] w-full rounded-t-[10px] sm:rounded-t-[14px] rounded-b-[4px] overflow-hidden bg-[#0a0d14] border border-white/5 flex items-center justify-center shadow-inner">
                
                {/* Imagem do MacBook */}
                <div id="imagemNotebook" className="w-full h-full relative overflow-hidden bg-[#0b1017] flex items-center justify-center">
                  <img 
                    src={imagemNotebook} 
                    alt="Slide de História para o ENEM no MacBook" 
                    className="w-full h-full object-contain select-none block" 
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={800}
                    height={500}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/m0LGMac.jpeg';
                    }}
                  />
                </div>

              </div>
            </div>

            {/* Dobradiça central do MacBook */}
            <div className="relative w-full h-1 bg-[#10141d] mx-auto border-t border-black/40" />

            {/* Base Unibody do MacBook (Perfil de alumínio usinado com entalhe frontal para abertura) */}
            <div className="relative w-[103%] -ml-[1.5%] h-3 sm:h-4 bg-gradient-to-b from-[#2d3545] via-[#232936] to-[#1c222c] rounded-b-xl shadow-2xl border-t border-slate-500/50 flex justify-center items-start">
              {/* Entalhe frontal com chanfro para os dedos */}
              <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#12161e] rounded-b-md shadow-inner border-t border-white/10" />
            </div>
          </div>

          {/* 2. IPHONE (ELEMENTO SECUNDÁRIO, FINO, MODERNO E COMPACTO) */}
          <div 
            id="mockup-celular" 
            className="absolute -bottom-3 sm:-bottom-5 -right-1 sm:right-1 md:right-2 w-[19%] sm:w-[20%] min-w-[90px] sm:min-w-[110px] max-w-[150px] z-20 transition-transform duration-300 hover:translate-y-[-4px]"
          >
            {/* Chassi de Titânio do iPhone */}
            <div className="relative rounded-[22px] sm:rounded-[30px] p-1 sm:p-1.5 bg-[#141923] border-[2px] sm:border-[2.5px] border-slate-600/80 shadow-2xl shadow-black/80 ring-1 ring-white/15">
              
              {/* Botões laterais sutis (Volume e Botão de Ação) */}
              <div className="absolute -left-[3px] top-8 sm:top-10 w-[2px] h-3 sm:h-4 bg-slate-500 rounded-l-xs" />
              <div className="absolute -left-[3px] top-13 sm:top-16 w-[2px] h-3 sm:h-4 bg-slate-500 rounded-l-xs" />
              <div className="absolute -right-[3px] top-10 sm:top-12 w-[2px] h-5 sm:h-6 bg-slate-500 rounded-r-xs" />

              {/* Área Útil da Tela Super Retina XDR do iPhone (Proporção 19.5:9) */}
              <div className="relative aspect-[9/19.5] w-full rounded-[18px] sm:rounded-[25px] overflow-hidden bg-[#07090e] border border-white/10 flex items-center justify-center">
                
                {/* Dynamic Island flutuante */}
                <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                  <div className="w-8 sm:w-10 h-2.5 sm:h-3 bg-black rounded-full flex items-center justify-end pr-1 shadow-xs border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#111622] ring-1 ring-slate-800" />
                  </div>
                </div>

                {/* Imagem do iPhone */}
                <div id="imagemCelular" className="w-full h-full relative overflow-hidden bg-[#0c1017] flex items-center justify-center">
                  <img 
                    src={imagemCelular} 
                    alt="Material de História para o ENEM no iPhone" 
                    className="w-full h-full object-contain select-none block" 
                    loading="eager"
                    fetchPriority="low"
                    decoding="async"
                    width={150}
                    height={325}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/JDjCqwY.png';
                    }}
                  />
                </div>

                {/* Barra Home Indicator do iOS */}
                <div className="absolute bottom-1 sm:bottom-1.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  <div className="w-8 sm:w-11 h-0.5 sm:h-1 bg-white/40 rounded-full" />
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* BOTÃO PRINCIPAL VERDE */}
        <div className="w-full sm:w-auto flex justify-center mb-5 sm:mb-6">
          <button
            id="hero-cta-button"
            onClick={handleScrollToOffers}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl sm:rounded-2xl bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Quero Acessar Agora</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* 6. LINHA DE BENEFÍCIOS LOGO ABAIXO DO BOTÃO */}
        <div 
          id="hero-benefits-line"
          className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-xs sm:text-sm font-medium text-slate-600"
        >
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span>⚡</span>
            <span>Acesso imediato</span>
          </span>
          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span>🎓</span>
            <span>Material pronto para aula</span>
          </span>
          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span>🛡</span>
            <span>Garantia de 7 dias</span>
          </span>
        </div>

      </div>
    </section>
  );
};




