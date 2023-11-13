import SectionTitle from "../section-title";
import maio from "../../images/Black-02.png";

export default function Service() {
  return (
    <div id="service" className="xl:flex xl:gap-[var(--sp-5)]">
      <div className="relative xl:w-[461px]">
        <SectionTitle title={"服務信箱"} subtitle={"Service Mail"} />
        <p className="title-28 text-[var(--color-1)] mt-[var(--sp-3)] xl:mt-[var(--sp-5)]">
          您的聲音，我們的行動！
        </p>
        <p className="text-[var(--color-1)] mt-[var(--sp-3)]">
          親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
        </p>
        <img className="w-[297px] bottom-0 left-[267px] hidden xl:absolute xl:block" src={maio} alt="maiolihan" />
      </div>
      <form className="flex-1 z-10 bg-[var(--color-primary-5)] rounded-[var(--sp-3)] px-[var(--sp-3)] py-[var(--sp-5)] flex flex-col gap-[var(--sp-3)] mt-[var(--sp-5)] xl:mt-auto xl:px-[var(--sp-5)]">
        <div>
          <label className="mb-[var(--sp-2)] block" htmlFor="name">
            姓名
          </label>
          <input
            type="text"
            name="name"
            className="p-[var(--sp-3)] rounded-[var(--sp-2)] border-2 border-[var(--color-gray-5)] bg-[var(--color-gray-6)] w-full"
          />
        </div>
        <div>
          <label className="mb-[var(--sp-2)] block" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="p-[var(--sp-3)] rounded-[var(--sp-2)] border-2 border-[var(--color-gray-5)] bg-[var(--color-gray-6)] w-full"
          />
        </div>
        <div>
          <label className="mb-[var(--sp-2)] block" htmlFor="phone">
            電話 / 手機
          </label>
          <input
            type="phone"
            name="phone"
            className="p-[var(--sp-3)] rounded-[var(--sp-2)] border-2 border-[var(--color-gray-5)] bg-[var(--color-gray-6)] w-full"
          />
        </div>
        <div>
          <label className="mb-[var(--sp-2)] block" htmlFor="advice">
            對我們的建議
          </label>
          <textarea
            name="advice"
            className="p-[var(--sp-3)] rounded-[var(--sp-2)] border-2 border-[var(--color-gray-5)] bg-[var(--color-gray-6)] w-full"
          ></textarea>
        </div>
        <input className="btn cursor-pointer rounded-[var(--sp-3)] px-[var(--sp-5)] py-[var(--sp-3)]" type="submit" value={'確認送出'} />
      </form>
    </div>
  );
}
