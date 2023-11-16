import SectionTitle from "../section-title";
import EventCard from "./card";
import event1 from "../../images/pic-01.png";
import event2 from "../../images/pic-02.png";
import event3 from "../../images/pic-03 1.png";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
  const el = useRef();

  useLayoutEffect(() => {
    function hide(element) {
      gsap.set(element, { opacity: 0, x: "100%", visibility: "hidden" });
    }

    function animation(element) {
      gsap.to(element, {
        opacity: 100,
        x: 0,
        visibility: "visible",
        duration: 1,
      });
    }

    let ctx = gsap.context(() => {
      gsap.utils.toArray(".event-card").forEach((element) => {
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
    <div id="events" className="xl:flex xl:gap-[var(--sp-5)]">
      <SectionTitle title={"最新活動"} subtitle={"Latest Events"} />
      <ul
        ref={el}
        className="flex-1 flex-col items-start justify-start gap-[var(--sp-5)] mt-[var(--sp-3)] xl:mt-auto xl:max-w-[calc(100%-296px)] overflow-hidden"
      >
        <EventCard
          img={event1}
          title={"參與台北寵物論壇，爭取貓咪友善環境"}
          content={
            "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。"
          }
          date={"12.26.2023"}
        />
        <EventCard
          img={event2}
          title={"掃街模式開啟！帶著你的貓耳，和我一起走！"}
          content={
            "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。"
          }
          date={"12.24.2023"}
        />
        <EventCard
          img={event3}
          title={"收容所模特兒大比拼！"}
          content={
            "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！"
          }
          date={"12.20.2023"}
        />
      </ul>
    </div>
  );
}
