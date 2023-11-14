import IssueCard from "./card";

export default function TabContent({ state, title, item }) {
  return (
    <div
      className={
        "bg-[var(--color-primary-5)] px-[var(--sp-3)] py-[var(--sp-5)] xl:px-[var(--sp-5)] transition-all duration-300 " +
        (state === 1 ? "" : "hidden")
      }
    >
      <p className="text-[var(--color-primary-1)] title-28 text-center mb-[var(--sp-6)]">
        {title}
      </p>
      <ul className="flex-col gap-[var(--sp-5)] lg:flex-row lg:gap-0 lg:items-start">
        <IssueCard
          img={item[0].img}
          title={item[0].subtitle}
          content={item[0].content}
        />
        <IssueCard
          img={item[1].img}
          title={item[1].subtitle}
          content={item[1].content}
        />
        <IssueCard
          img={item[2].img}
          title={item[2].subtitle}
          content={item[2].content}
        />
      </ul>
    </div>
  );
}
