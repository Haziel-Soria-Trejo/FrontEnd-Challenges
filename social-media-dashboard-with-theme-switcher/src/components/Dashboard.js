import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import GeneralCard from "./GeneralCard";
import Header from "./Header";
import TodayCard from "./TodayCard";

export default function Dashboard({ data }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} dashboard`}>
      <Header />

      <section className="content-section main-section">
        {data.generalData.map((d) => {
          return <GeneralCard data={d} />;
        })}
      </section>
      <div style={{marginTop:"-45px"}}>
        <h2>Overview-today</h2>
        <section className="content-section">
          {data.todayOverview.map((d) => {
            return <TodayCard data={d} />;
          })}
        </section>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/profile/Haziel-Soria-Trejo" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Haziel-Soria-Trejo">Your Name Here</a>.
      </div>
    </div>
  );
}
