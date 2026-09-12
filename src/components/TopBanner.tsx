import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <aside 
      id="faixa-topo-oferta"
      className="w-full bg-[#205487] text-white py-2 px-3 text-center z-50 relative select-none shadow-xs"
      aria-label="Faixa de oferta especial"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-xs sm:text-sm md:text-[15px] font-bold text-white tracking-wide leading-tight whitespace-normal sm:whitespace-nowrap">
          🔥 OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO!
        </p>
      </div>
    </aside>
  );
};
