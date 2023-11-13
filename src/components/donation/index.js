import SectionTitle from "../section-title";
import DonationCard from "./card";
import { MoonStars } from "@phosphor-icons/react";
import { Planet } from "@phosphor-icons/react";
import { Sun } from "@phosphor-icons/react";
import { ShootingStar } from "@phosphor-icons/react";

export default function Donation() {
  return (
    <div id="donations" className="flex gap-[var(--sp-5)] flex-col xl:flex-row">
      <div className="flex flex-col justify-between">
        <div>
          <SectionTitle title={"小額捐款"} subtitle={"Small Donations"} />
          <p className="title-28 mt-[var(--sp-3)] text-[var(--color-gray-1)] xl:mt-[var(--sp-5)]">
            您的每筆捐款，是每隻毛孩未來的大大動力！
          </p>
        </div>
        <div className="bg-[var(--color-gray-1)] p-[var(--sp-3)] rounded-[var(--sp-3)] mt-[var(--sp-3)] xl:mt-auto xl:px-[var(--sp-5)]">
          <p className="text-[var(--color-primary-3)] subtitle">
            目前贊助總金額
          </p>
          <p className="text-[var(--color-primary-3)] display">987,655,873</p>
        </div>
      </div>
      <ul className="flex-col gap-[var(--sp-3)] flex-1">
        <DonationCard
          title={"喵衛星"}
          price={600}
          img={<MoonStars color={"#C6C6C6"} weight="regular" size={128} />}
        />
        <DonationCard
          title={"喵行星"}
          price={6000}
          img={<Planet color={"#C6C6C6"} weight="regular" size={128} />}
        />
        <DonationCard
          title={"喵恆星"}
          price={60000}
          img={<Sun color={"#C6C6C6"} weight="regular" size={128} />}
        />
        <DonationCard
          title={"喵彗星"}
          price={"自訂贊助金額"}
          img={<ShootingStar color={"#C6C6C6"} weight="regular" size={128} />}
        />
      </ul>
    </div>
  );
}
