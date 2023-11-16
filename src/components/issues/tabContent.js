import { useLayoutEffect, useRef } from "react";
import IssueCard from "./card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TabContent({ state, title, item }) {
  const el = useRef();

  useLayoutEffect(() => {
    function hide(element) {
      gsap.set(element, { opacity: 0, scale: 0, visibility: "hidden" });
    }
    function animation(element) {
      gsap.to(element, {
        opacity: 100,
        scale: 1,
        visibility: "visible",
        duration: 1,
      });
    }
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".issue-card").forEach((element) => {
        ScrollTrigger.create({
          trigger: element,
          start: "top 75%",
          end: "+=1000",
          onEnter: () => animation(element),
          onEnterBack: () => animation(element),
          onLeave: () => hide(element),
          onLeaveBack: () => hide(element),
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

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
      <ul ref={el} className="flex-col gap-[var(--sp-5)] lg:flex-row lg:gap-0 lg:items-start">
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
