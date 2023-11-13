import logo from "../../images/logo-01.png";
import { useContext, useEffect, useState } from "react";
import {
  FacebookLogo,
  HandCoins,
  InstagramLogo,
  List,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { sidebarContext } from "../../App";

export default function Nav() {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 768 ? true : false
  );

  const { showSidebar, setShowSidebar } = useContext(sidebarContext);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth > 768 ? true : false);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const clickHandler = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="nav z-50 bg-[var(--color-gray-6)]">
      <div>
        <img className="h-[var(--sp-6)]" src={logo} alt="logo" />
      </div>
      <div className={"flex items-center " + (isDesktop ? "" : "hidden")}>
        <a
          href="#donation"
          className="mr-[var(--sp-3)] flex items-center px-[var(--sp-3)] py-[var(--sp-2)] btn-sm gap-[var(--sp-2)]"
        >
          <HandCoins color="#000000" weight="regular" size={24} />
          小額捐款
        </a>
        <ul className="gap-[var(--sp-4)]">
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
        </ul>
      </div>
      <ul className={"gap-[var(--sp-3)] " + (isDesktop ? "" : "hidden")}>
        <li>
          <a href="/">
            <FacebookLogo color="#000000" weight="regular" size={32} />
          </a>
        </li>
        <li>
          <a href="/">
            <InstagramLogo color="#000000" weight="regular" size={32} />
          </a>
        </li>
        <li>
          <a href="/">
            <YoutubeLogo color="#000000" weight="regular" size={32} />
          </a>
        </li>
      </ul>
      <button className={isDesktop ? "hidden" : ""} onClick={clickHandler}>
        <List color="#000000" weight="regular" size={32} />
      </button>
    </nav>
  );
}
