import logo from "../../images/logo-01.png";
import {
  FacebookLogo,
  HandCoins,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { sidebarContext } from "../../App";

export default function SideBar() {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 768 ? true : false
  );
  const { showSidebar, setShowSidebar } = useContext(sidebarContext);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth > 768 ? true : false);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <div
        className={
          "fixed w-2/5 top-0 left-0 bottom-0 bg-opacity-30 backdrop-blur-[4px] z-50 " +
          (showSidebar && !isDesktop ? "" : "hidden")
        }
        onClick={() => setShowSidebar(false)}
      ></div>
      <div
        className={
          "fixed bg-[var(--color-gray-6)] w-3/5 top-0 bottom-0 right-0 px-[var(--sp-3)] py-[var(--sp-5)] z-50 " +
          (showSidebar && !isDesktop ? "" : "hidden")
        }
      >
        <a href="#header">
          <img
            className="h-[var(--sp-6)] mb-[var(--sp-5)]"
            src={logo}
            alt="logo"
          />
        </a>
        <ul className="gap-[var(--sp-3)] flex-col items-start">
          <li>
            <a
              href="#donation"
              className="flex items-center px-[var(--sp-3)] py-[var(--sp-2)] btn-sm gap-[var(--sp-2)]"
            >
              <HandCoins color="#000000" weight="regular" size={24} />
              小額捐款
            </a>
          </li>
          <li>
            <a href="#claims">候選主張</a>
          </li>
          <li>
            <a href="#events">最新活動</a>
          </li>
          <li>
            <a href="#issues">政策議題</a>
          </li>
          <li>
            <a href="#service">服務信箱</a>
          </li>
          <li className="w-full border-[var(--color-gray-5) border-t-[1px]"></li>
          <li>
            <a href="/" className="flex items-center gap-[var(--sp-1)]">
              <FacebookLogo color="#000000" weight="regular" size={32} />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-[var(--sp-1)]">
              <InstagramLogo color="#000000" weight="regular" size={32} />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex items-center gap-[var(--sp-1)]">
              <YoutubeLogo color="#000000" weight="regular" size={32} />
              <span>YouTube</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
