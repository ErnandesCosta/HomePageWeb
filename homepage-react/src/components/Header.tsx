import React from "react";
import Avatar from "../assets/fotopage.png";

const Header: React.FC = () => {
  return (
    <header className="mt-6 w-full flex items-center justify-center">
      <div className="w-full max-w-[1318px] px-4 md:px-6">
        <div className="flex h-[56px] md:h-[60px] items-center justify-between rounded-full border border-white/30 bg-black/50 px-4 md:px-7 shadow-[0_18px_40px_rgba(0,0,0,0.7)] backdrop-blur-md">
          {/* avatar + nome */}
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 md:h-9 md:w-9 rounded-full border border-[#3179FF] p-[2px] bg-black">
              <img
                src={Avatar}
                alt="Luiz Ramos"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[13px] md:text-[14px] font-medium text-[#CCCCCC]">
                Luiz Ramos | Designer
              </span>
              <span className="text-[10px] md:text-[11px] text-[#999999]">
                @luizramos.07
              </span>
            </div>
          </div>

          {/* NAV centralizada (esconde no mobile) */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 text-sm">
              <li>
                <button className="relative text-[13px] text-white">
                  Início
                  <span className="absolute left-0 -bottom-[3px] h-[2px] w-full bg-[#3179FF]" />
                </button>
              </li>
              <li>
                <button className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Portfólio
                </button>
              </li>
              <li>
                <button className="text-[13px] text-white/80 hover:text-white transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </nav>

          {/* toggle (mantendo proporção do Figma) */}
          <div className="flex h-8 w-[78px] items-center justify-between rounded-full border border-white/30 bg-black/80 px-[6px]">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/50 text-[10px] text-white/80">
              ☾
            </span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFCA28] text-[10px] text-black">
              ☼
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
