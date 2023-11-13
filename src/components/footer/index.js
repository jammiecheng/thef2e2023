import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  YoutubeLogo,
} from "@phosphor-icons/react";
import logo from "../../images/logo-02.png";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 768 ? true : false
  );

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth > 768 ? true : false);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <footer className="footer">
      <img className="w-[161px]" src={logo} alt="logo" />
      <ul
        className={
          "gap-[var(--sp-3)] justify-start my-[var(--sp-3)] " +
          (isDesktop ? "hidden" : "")
        }
      >
        <li>
          <button>
            <FacebookLogo color="#ffffff" weight="regular" size={32} />
          </button>
        </li>
        <li>
          <button>
            <InstagramLogo color="#ffffff" weight="regular" size={32} />
          </button>
        </li>
        <li>
          <button>
            <YoutubeLogo color="#ffffff" weight="regular" size={32} />
          </button>
        </li>
      </ul>
      <div className="flex gap-[var(--sp-5)] items-start flex-col xl:flex-row">
        <ul className="gap-[var(--sp-3)] justify-start items-start flex-wrap xl:gap-[var(--sp-1)]] xl:flex-col">
          <li className="basis-full text-[var(--color-primary-3)] mb-[calc(var(--sp-1)*3)] xl:basis-auto xl:mb-auto">
            快速連結
          </li>
          <li>
            <a href="#nav" className="text-[var(--color-gray-6)]">
              首頁
            </a>
          </li>
          <li>
            <a href="#events" className="text-[var(--color-gray-6)]">
              最新活動
            </a>
          </li>
          <li>
            <a href="#issues" className="text-[var(--color-gray-6)]">
              政策議題
            </a>
          </li>
          <li>
            <a href="#donation" className="text-[var(--color-gray-6)]">
              小額捐款
            </a>
          </li>
        </ul>
        <ul className="gap-[var(--sp-1)] flex-col items-start">
          <li className="text-[var(--color-primary-3)] mb-[calc(var(--sp-2))] xl:mb-[calc(var(--sp-1)*3)]">
            與我們聯繫
          </li>
          <li className="flex gap-[var(--sp-1)] items-center">
            <MapPin color="#d1fa31" weight="regular" size={16} />
            <span className="text-[var(--color-gray-6)]">
              新星區閃耀大道88號 喵喵大樓3樓
            </span>
          </li>
          <li className="flex gap-[var(--sp-1)] items-center">
            <Phone color="#d1fa31" weight="regular" size={16} />
            <span className="text-[var(--color-gray-6)]">(02) 888-5678</span>
          </li>
          <li className="flex gap-[var(--sp-1)] items-center">
            <Envelope color="#d1fa31" weight="regular" size={16} />
            <span className="text-[var(--color-gray-6)]">
              supernova.black@gmail.com
            </span>
          </li>
        </ul>
      </div>
      <p className="text-[var(--color-gray-6)] text-[14px] leading-[24px] font-normal basis-full text-center mt-[var(--sp-5)] xl:mt-[var(--sp-4)]">
        © 2023 黑新星 Supernova Black 版權所有。
      </p>
    </footer>
  );
}
