import Carousel from "../homeComponent/Slider";
import Services from "../homeComponent/Services";
import AboutOverview from "../homeComponent/AboutOverview";
import FeaturedWork from "../homeComponent/FeaturedWork";

function Home() {
  return (
    <>
      <Carousel />
      <Services />
      <AboutOverview />
      <FeaturedWork />
    </>
  );
}

export default Home;
