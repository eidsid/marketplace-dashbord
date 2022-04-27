import TopContainer from "./sections/section1/TopContainer";
import Section2 from "./sections/section2/Section2";
import Section3 from "./sections/section3/Section3";
import Section4 from "./sections/section4/Section4";
import Section5 from "./sections/section5/Section5";
import "./style.scss";

const Container = () => {
  return (
    <div className="container">
      <TopContainer />
      <div className="left">
        <Section2 />
        <Section3 />
      </div>
      <div className="right">
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
};

export default Container;
