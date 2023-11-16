import stamp from "../../images/vote.png";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Header() {
  const el = useRef();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["喵喵權益我帶頭"],
      typeSpeed: 100,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header id="header" className="header">
      <p ref={el} className="header-title">
        喵喵權益
        {window.innerWidth > 768 ? <></> : <br></br>}
        我帶頭
      </p>
      <p className="header-float-item">
        <img
          className="w-[var(--sp-5)] xl:w-[var(--sp-7)]"
          src={stamp}
          alt="vote-stemp"
        />
        <span className="header-float-text">立委請支持</span>
        <span className="header-float-text border-[3px] border-[var(--color-primary-3)] rounded-[var(--sp-6)] w-[var(--sp-5)] xl:w-[var(--sp-7)] h-[var(--sp-5)] xl:h-[var(--sp-7)] flex justify-center items-center">
          1
        </span>
        <span className="header-float-text">黑新星</span>

        <img
          className="w-[var(--sp-5)] xl:w-[var(--sp-7)]"
          src={stamp}
          alt="vote-stemp"
        />
      </p>
      <div className="absolute top-[-343px] xl:-bottom-[var(--sp-3)] xl:-right-[var(--sp-3)] xl:top-auto 2xl:top-0 2xl:-right-[125px]">
        <div className="header-bg relative">
          <button className="btn-sm absolute px-[var(--sp-3)] py-[var(--sp-2)] gap-[var(--sp-2)] left-[var(--sp-5)] bottom-[var(--sp-5)]">
            候選人簡介
            <ArrowRight color="#000000" weight="regular" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
