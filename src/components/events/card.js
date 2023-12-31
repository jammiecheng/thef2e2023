import { ArrowRight } from "@phosphor-icons/react";

export default function EventCard({ img, title, content, date }) {
  return (
    <li className="event-card">
      <img
        className="w-[325px] xl:w-[250px] h-[184px] xl:h-[144px] rounded-[var(--sp-3)] z-20"
        src={img}
        alt={title}
      />
      <div className="w-[325px] xl:w-[250px] h-[184px] xl:h-[144px] rounded-[var(--sp-3)] bg-[var(--color-primary-4)] z-10 absolute top-[17px] left-[17px] xl:top-[12px] xl:left-[12px]"></div>
      <div className=" flex-grow">
        <p className="text-[var(--color-primary-1)] title-28 mb-[var(--sp-2)]">
          {title}
        </p>
        <p className="text-[var(--color-gray-2)] mb-[var(--sp-2)] whitespace-normal truncate [-webkit-line-clamp:2] [display:-webkit-box] [-webkit-box-orient:vertical]">
          {content}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[var(--color-primary-1)]">{date}</span>
          <button className="btn-sm px-[var(--sp-3)] py-[var(--sp-2)] gap-[var(--sp-2)]">
            閱讀更多
            <ArrowRight color="#000000" weight="regular" size={24} />
          </button>
        </div>
      </div>
    </li>
  );
}
