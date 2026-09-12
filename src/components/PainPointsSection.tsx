import React from 'react';
import { X } from 'lucide-react';

const painPoints = [
  {
    id: 1,
    text: 'Criar slides do zero toda semana',
  },
  {
    id: 2,
    text: 'Passar grande parte da aula escrevendo no quadro',
  },
  {
    id: 3,
    text: 'Procurar atividades espalhadas pela internet',
  },
  {
    id: 4,
    text: 'Gastar horas planejando o conteúdo da semana',
  },
];

export const PainPointsSection: React.FC = () => {
  return (
    <section 
      id="com-esse-material-voce-nao-precisa-mais"
      className="w-full bg-[#FAF9F6] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80"
      aria-label="Com esse material você não precisa mais"
    >
      <div className="max-w-4xl mx-auto">
        {/* =====================================================================
            1. TÍTULO GRANDE, CENTRALIZADO E EM NEGRITO + LINHA DECORATIVA AZUL
            ===================================================================== */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 
            id="titulo-nao-precisa-mais"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B3B57] font-display tracking-tight leading-tight"
          >
            Com esse material você <span className="text-[#26619C]">não precisa mais:</span>
          </h2>
          {/* Pequena linha azul decorativa centralizada abaixo do título */}
          <div 
            className="w-12 sm:w-16 h-1 bg-[#26619C] mx-auto rounded-full mt-3 sm:mt-3.5"
            aria-hidden="true"
          />
        </div>

        {/* =====================================================================
            2. GRADE 2X2 DE CARDS RETANGULARES (1 COLUNA NO MOBILE)
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4.5 mb-6 sm:mb-8">
          {painPoints.map((item) => (
            <div
              key={item.id}
              id={`card-dor-${item.id}`}
              className="flex items-center gap-3.5 sm:gap-4 bg-white p-4.5 sm:p-5 md:p-5.5 rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
            >
              {/* Pequeno bloco arredondado à esquerda com o X vermelho */}
              <div 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 select-none"
                aria-hidden="true"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 stroke-[2.5]" />
              </div>

              {/* Texto em azul-marinho */}
              <p className="text-sm sm:text-base md:text-[16px] text-[#1B3B57] font-bold leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================================
            3. FAIXA GRANDE AZUL ABAIXO DOS CARDS
            ===================================================================== */}
        <div 
          id="faixa-azul-destaque"
          className="w-full bg-[#205487] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 shadow-md text-center"
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-white font-bold">
            Porque você já encontra tudo pronto e organizado em um único lugar.
          </p>
        </div>
      </div>
    </section>
  );
};
