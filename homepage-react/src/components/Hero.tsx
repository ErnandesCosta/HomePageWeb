import React from "react";
import FotoAmigo from "../assets/luiz-imagem.png";

const Hero: React.FC = () => {
  return (
    <section className="mt-16 w-full flex items-center justify-center">
      <div className="w-full max-w-[1318px] px-4 md:px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* coluna esquerda */}
        <div className="max-w-xl">
          {/* tag "Conexão e valor" */}
          <div className="mb-8 md:mb-10">
            <div className="relative flex items-center justify-start">
              <span className="h-px w-32 md:w-40 bg-white/40 mx-1" />
              <span className="pointer-events-none absolute left-1/2 top-1 translate-x-[-50%] h-6 w-32 md:w-40 rounded-full bg-white/10 blur-2xl opacity-80" />
            </div>
            <p className="mt-4 text-xs md:text-sm text-[#999999]">
              Conexão e valor
            </p>
          </div>

          {/* título principal */}
          <h1 className="text-[32px] md:text-[44px] lg:text-[48px] leading-tight font-semibold text-[#CCCCCC]">
            A <span className="text-[#3179FF]">sua marca</span> merece mais
            <br />
            que um design bonito.
            <br />
            <span className="text-[#3179FF]">Merece resultados.</span>
          </h1>

          {/* parágrafo */}
          <p className="mt-6 text-sm md:text-[15px] text-[#999999] max-w-md">
            Crio identidades visuais, sites e landing pages que não só
            impressionam visualmente, mas impulsionam o crescimento do seu
            negócio.
          </p>

          {/* botões */}
          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
            <button className="group relative inline-flex items-center rounded-full bg-gradient-to-r from-[#3179FF] to-[#66A4FF] px-9 md:px-11 py-3 text-sm font-medium text-white shadow-[0_40px_120px_rgba(49,121,255,0.9)]">
              <span className="mr-6 md:mr-7">Ver meus projetos</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#3179FF] text-sm font-bold group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform">
                ↗
              </span>
            </button>

            <button className="px-9 md:px-10 py-3 rounded-full border border-[#3179FF] text-sm text-[#3179FF] hover:bg-[#151515] transition-colors">
              Contato
            </button>
          </div>
        </div>

        {/* coluna direita */}
        <div className="relative flex justify-center flex-1 mt-10 md:mt-0 h-[430px] md:h-[540px] lg:h-[580px]">
          {/* shape azul */}
          <div className="absolute -z-10 h-[310px] md:h-[340px] lg:h-[360px] w-[230px] md:w-[270px] lg:w-[290px] bg-[#3179FF] rounded-[60%_40%_55%_45%] left-1/2 top-[110px] -translate-x-[15%] blur-[1px]" />

          {/* foto */}
          <img
            src={FotoAmigo}
            alt="Seu amigo"
            className="absolute left-1/2 -translate-x-[12%] top-[40px] md:top-[50px] h-[390px] md:h-[450px] lg:h-[480px] object-contain drop-shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
          />

          {/* pills – região do braço */}
          <div className="absolute left-[50%] md:left-[51%] top-[210px] md:top-[220px] flex flex-col gap-2.5 text-[11px] md:text-[12px] font-normal">
            <span className="px-5 md:px-6 py-[4px] rounded-full border border-white/15 bg-[rgba(0,0,0,0.55)] backdrop-blur-md text-[#dcdcdc] tracking-[0.02em]">
              Branding
            </span>
            <span className="px-5 md:px-6 py-[4px] rounded-full border border-white/15 bg-[rgba(0,0,0,0.55)] backdrop-blur-md text-[#dcdcdc] tracking-[0.02em]">
              Performance
            </span>
            <span className="px-6 md:px-7 py-[4px] rounded-full border border-[#3179FF] bg-[#3179FF] text-white tracking-[0.02em] shadow-[0_0_30px_rgba(49,121,255,0.95)]">
              Conversão
            </span>
            <span className="px-5 md:px-6 py-[4px] rounded-full border border-white/15 bg-[rgba(0,0,0,0.55)] backdrop-blur-md text-[#dcdcdc] tracking-[0.02em]">
              Impacto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
