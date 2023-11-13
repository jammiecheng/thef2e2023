import stamp from "../../images/icons/vote.png";
import arrow from "../../images/icons/ArrowRight.png";

export default function Header() {
  return (
    <header className="bg-[var(--color-gray-4)] rounded-[var(--sp-3)] flex items-center justify-center px-[var(--sp-1)] relative mt-[344px] xl:m-auto xl:w-[90%]">
      <p className="text-[80px] leading-normal tracking-[4px] font-bold text-[var(--color-gray-6)] xl:text-[260px] xl:leading-[320px] xl:tracking-[13px]">
        喵喵權益<br></br>我帶頭
      </p>
      <p className="px-[var(--sp-3)] py-[var(--sp-1)] btn rounded-full bg-[var(--color-gray-1)] flex items-center gap-[var(--sp-2)] absolute top-[98px] right-[11px] xl:px-[var(--sp-5)] xl:py-[var(--sp-2)] xl:top-[calc(50%-44px)] xl:left-[-20px] xl:right-auto">
        <img
          className="w-[var(--sp-5)] xl:w-[var(--sp-7)]"
          src={stamp}
          alt="vote-stemp"
        />
        <span className="text-[var(--color-primary-3)] title-24 xl:display">
          立委請支持
        </span>
        <span className="text-[var(--color-primary-3)] title-24 xl:display border-[3px] border-[var(--color-primary-3)] rounded-[var(--sp-6)] w-[var(--sp-5)] xl:w-[var(--sp-7)] h-[var(--sp-5)] xl:h-[var(--sp-7)] flex justify-center items-center">
          1
        </span>
        <span className="text-[var(--color-primary-3)] title-24 xl:display">
          黑新星
        </span>
        <img
          className="w-[var(--sp-5)] xl:w-[var(--sp-7)]"
          src={stamp}
          alt="vote-stemp"
        />
      </p>
      <div className="absolute top-[-343px] xl:-bottom-[var(--sp-3)] xl:-right-[var(--sp-3)] xl:top-auto">
        <div className="header-bg relative">
          <button className="btn-sm absolute px-[var(--sp-3)] py-[var(--sp-2)] gap-[var(--sp-2)] left-[var(--sp-5)] bottom-[var(--sp-5)]">
            候選人簡介
            <img className="w-[var(--sp-4)]" src={arrow} alt="arrow-right" />
          </button>
        </div>
      </div>
    </header>
  );
}
