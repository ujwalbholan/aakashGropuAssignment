import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1200/500?random=1",
    title: "We Build Modern Digital Solutions",
    description: "Empowering your business with next Gen tech.",
  },
  {
    id: 2,
    image: "https://picsum.photos/1200/500?random=2",
    title: "Launch Fast. Grow Faster.",
    description: "Helping you scale efficiently and beautifully.",
  },
  {
    id: 3,
    image: "https://picsum.photos/1200/500?random=3",
    title: "Creative Minds. Reliable Code.",
    description: "Partner with people who care about quality.",
  },
  {
    id: 4,
    image: "https://picsum.photos/1200/500?random=4",
    title: "Custom Design. Scalable Code.",
    description: "Your product, your identity — powered by us.",
  },
  {
    id: 5,
    image: "https://picsum.photos/1200/500?random=5",
    title: "Ideas to Execution, Seamlessly",
    description: "Delivering end-to-end solutions with agility.",
  },
];


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // faster sliding
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // faster autoplay
    arrows: false,
  };

  return (
    <div className="mt-20">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
