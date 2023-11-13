import SectionTitle from "../section-title";

export default function Claims() {
  return (
    <div className="xl:flex xl:gap-[var(--sp-5)]">
      <SectionTitle title={"候選主張"} subtitle={"Candidate Claims"} />
      <div className="flex-1 mt-[var(--sp-3)] xl:mt-auto">
        <p className="subtitle">
          我黑新星堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
          GDP 經濟帶來巨大效益。<br></br>
          <br></br>
          因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
        </p>
      </div>
    </div>
  );
}
