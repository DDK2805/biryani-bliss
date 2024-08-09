import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Dinesh",
    text: "The Chicken Biryani was simply amazing! The flavors were rich and authentic, and the spices were perfectly balanced. Definitely coming back for more!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Rohit",
    text: "I tried the Dum Biryani and was blown away by the taste. It’s the best I’ve had in a long time. The service was quick and friendly too!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Jyoti K",
    text: "Absolutely delicious! The Tandoor Chicken was succulent and flavorful. Biryani Bliss has quickly become my go-to place for biryani!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Customers Reviews</h1>
            <p className="text-xs text-gray-400">
            Here’s what our satisfied customers have to say about their experience with Biryani Bliss. Our commitment to quality and flavor is reflected in every review
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
