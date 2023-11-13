import { createContext, useState } from "react";
import Claims from "./components/claims";
import Donation from "./components/donation";
import Events from "./components/events";
import Footer from "./components/footer";
import Header from "./components/header";
import Issues from "./components/issues";
import Nav from "./components/nav";
import Section from "./components/section";
import Service from "./components/service";
import SideBar from "./components/nav/sidebar";

export const sidebarContext = createContext();

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="App">
      <sidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
        <Nav />
        <SideBar />
      </sidebarContext.Provider>
      <main className="flex flex-col gap-[var(--sp-5)] xl:gap-[var(--sp-7)]">
        <Header />
        <Section>
          <Claims />
        </Section>
        <Section>
          <Events />
        </Section>
        <Section>
          <Issues />
        </Section>
        <Section>
          <Donation />
        </Section>
        <Section>
          <Service />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
