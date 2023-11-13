import { useState } from "react";
import SectionTitle from "../section-title";
import Tab from "./tab";
import TabContent from "./tabContent";
import { PiggyBank, Park, FirstAidKit, Handshake, Storefront, PawPrint, Buildings, BowlFood, Video } from "@phosphor-icons/react";

export default function Issues() {
  const [state, setState] = useState([1, 0, 0]);

  return (
    <div>
      <SectionTitle title={"政策議題"} subtitle={"Policy Issues"} />
      <div className="mt-[var(--sp-5)]">
        <ul>
          <Tab
            position={0}
            state={state[0]}
            setState={setState}
            title={"寵物醫療保障方案"}
          />
          <Tab
            position={1}
            state={state[1]}
            setState={setState}
            title={"寵物休閒與娛樂場所"}
          />
          <Tab
            position={2}
            state={state[2]}
            setState={setState}
            title={"推廣寵物飼養教育"}
          />
        </ul>
        <TabContent
          state={state[0]}
          title={"為毛孩子謀福利！推動寵物醫療保障方案"}
          item={[
            {
              img: <PiggyBank color="#000000" weight="regular" size={128} />,
              subtitle: "設立寵物醫療基金",
              content:
                "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
            },
            {
              img: <FirstAidKit color="#000000" weight="regular" size={128} />,
              subtitle: "提供醫療補助",
              content:
                "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
            },
            {
              img: <Handshake color="#000000" weight="regular" size={128} />,
              subtitle: "合作動物醫院",
              content: "目前已有和超過 200 家動物醫院進行初步的合作討論。",
            },
          ]}
        />
        <TabContent
          state={state[1]}
          title={"打造休閒天堂！推廣寵物休閒與娛樂場所"}
          item={[
            {
              img: <Park color="#000000" weight="regular" size={128} />,
              subtitle: "建立寵物公園",
              content:
                "每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。",
            },
            {
              img: <Storefront color="#000000" weight="regular" size={128} />,
              subtitle: "推廣寵物友善商家",
              content:
                "鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。",
            },
            {
              img: <PawPrint color="#000000" weight="regular" size={128} />,
              subtitle: "舉辦寵物活動和工作坊",
              content:
                "與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。",
            },
          ]}
        />
        <TabContent
          state={state[2]}
          title={"推廣寵物飼養教育，讓愛更加專業"}
          item={[
            {
              img: <Buildings color="#000000" weight="regular" size={128} />,
              subtitle: "建立寵物飼養教育中心",
              content:
                "每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
            },
            {
              img: <BowlFood color="#000000" weight="regular" size={128} />,
              subtitle: "推廣寵物飼養課程",
              content:
                "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
            },
            {
              img: <Video color="#000000" weight="regular" size={128} />,
              subtitle: "製作教育資料",
              content:
                "出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識",
            },
          ]}
        />
      </div>
    </div>
  );
}
