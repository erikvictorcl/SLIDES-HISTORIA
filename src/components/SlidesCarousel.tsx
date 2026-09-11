import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { slidesRow1, slidesRow2 } from '../data/materialsData';
import { MaterialImageItem } from '../types';

// =============================================================================
// COMPONENTE DO CARD DE SLIDE
// Proporção 16:9 rigorosa, cantos arredondados, sem distorção e com máxima nitidez
// =============================================================================
interface SlideCardProps {
  slide: MaterialImageItem;
  index: number;
  rowName: string;
}

const SlideCard: React.FC<SlideCardProps> = ({ slide, index, rowName }) => {
  return (
    <div
      id={`slideCard-${rowName}-${index}`}
      className="relative flex-shrink-0 w-[280px] sm:w-[350px] md:w-[410px] lg:w-[460px] mr-3 sm:mr-4.5 aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#0c121e] border border-slate-800/80 shadow-md select-none"
      style={{
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    >
      <div 
        id={`slideImage-${rowName}-${index}`} 
        className="w-full h-full relative overflow-hidden bg-[#0c121e] flex items-center justify-center"
      >
        {slide.src ? (
          <img
            src={slide.src}
            alt={slide.alt || slide.label}
            className="w-full h-full object-contain block select-none slide-img-crisp"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FAFBFD] via-[#F1F5F9] to-[#E2E8F0]/70 text-slate-500 p-4 text-center select-none">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-[#244E73]/60 mb-2">
              <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
            </div>
            <span className="text-xs sm:text-[13px] font-semibold text-slate-700 tracking-tight line-clamp-1 max-w-[90%]">
              {slide.label}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 mt-1">
              Apresentação 16:9 • Pronta para aula
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export const SlidesCarousel: React.FC = () => {
  // Duplicação exata 2x para esteira com ciclo de 50% matematicamente sem pulo
  const duplicatedRow1 = [...slidesRow1, ...slidesRow1];
  const duplicatedRow2 = [...slidesRow2, ...slidesRow2];

  return (
    <section 
      id="slidesCarousel" 
      className="w-full py-12 sm:py-16 bg-white border-t border-slate-100 overflow-hidden"
      aria-label="Carrossel de apresentação dos slides"
    >
      {/* =====================================================================
          CABEÇALHO DA SEÇÃO: Título + Linha Decorativa + Subtítulo (PRESERVADOS)
          ===================================================================== */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B3B57] tracking-tight font-display">
          Veja os slides por dentro
        </h2>
        
        {/* Pequena linha / traço decorativo */}
        <div 
          className="w-12 sm:w-16 h-1 bg-[#F2C553] mx-auto rounded-full mt-3 mb-3.5" 
          aria-hidden="true" 
        />
        
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          Observe algumas apresentações reais do conteúdo que você recebe.
        </p>
      </div>

      {/* =====================================================================
          ESTEIRA DUPLA DE SLIDES (CARROSSEL DUPLO CONTÍNUO EM LOOP INFINITO)
          Row 1: Esquerda para a direita (24s)
          Row 2: Direita para a esquerda (24s)
          ===================================================================== */}
      <div 
        id="slideTrack"
        className="relative w-full overflow-hidden select-none space-y-3.5 sm:space-y-5"
        style={{
          perspective: '1000px',
          WebkitPerspective: '1000px',
        }}
      >
        {/* 1ª FILEIRA: Move automaticamente da ESQUERDA para a DIREITA */}
        <div className="w-full overflow-hidden flex py-1">
          <div 
            className="animate-marquee-right flex items-center"
            style={{ animationDuration: '24s' }}
          >
            {duplicatedRow1.map((slide, index) => (
              <SlideCard 
                key={`row1-${slide.id}-${index}`} 
                slide={slide} 
                index={index} 
                rowName="top" 
              />
            ))}
          </div>
        </div>

        {/* 2ª FILEIRA: Move automaticamente da DIREITA para a ESQUERDA */}
        <div className="w-full overflow-hidden flex py-1">
          <div 
            className="animate-marquee-left flex items-center"
            style={{ animationDuration: '24s' }}
          >
            {duplicatedRow2.map((slide, index) => (
              <SlideCard 
                key={`row2-${slide.id}-${index}`} 
                slide={slide} 
                index={index} 
                rowName="bottom" 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

