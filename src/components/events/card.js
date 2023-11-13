import arrow from "../../images/icons/ArrowRight.png";

export default function EventCard({ img, title, content, date }) {
  return (
    <li className="relative flex flex-col gap-[calc(var(--sp-3)+18px)] xl:gap-[calc(var(--sp-3)+12px)] xl:flex-row">
      <img
        className="w-[325px] xl:w-[250px] h-[184px] xl:h-[144px] rounded-[var(--sp-3)] z-20"
        src={img}
        alt={title}
      />
      <div className="w-[325px] xl:w-[250px] h-[184px] xl:h-[144px] rounded-[var(--sp-3)] bg-[var(--color-primary-4)] z-10 absolute top-[17px] left-[17px] xl:top-[12px] xl:left-[12px]"></div>
      <div className="flex-1">
        <p className="text-[var(--color-primary-1)] title-28 mb-[var(--sp-2)]">
          {title}
        </p>
        <p className="text-[var(--color-gray-2)] mb-[var(--sp-2)] w-full whitespace-normal truncate [-webkit-line-clamp:2] [display:-webkit-box] [-webkit-box-orient:vertical] xl:w-[576px]">
          {content}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-[var(--color-primary-1)]">{date}</span>
          <button className="btn-sm px-[var(--sp-3)] py-[var(--sp-2)] gap-[var(--sp-2)]">
            閱讀更多
            <img className="w-[var(--sp-4)]" src={arrow} alt="arrow-right" />
          </button>
        </div>
      </div>
    </li>
  );
}
