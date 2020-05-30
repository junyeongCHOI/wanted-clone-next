import LayoutUser from "../components/LayoutUser";
import IntroTop from "../components/Intro/IntroTop";
import IntroBottom from "../components/Intro/IntroBottom";
import IntroCards from "../components/Intro/IntroCards";

const Intro = () => {
  return (
    <LayoutUser>
      <IntroTop />
      <IntroCards />
      <IntroBottom />
    </LayoutUser>
  );
};

export default Intro;
