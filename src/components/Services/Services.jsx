import React from "react";
import Img from "../../assets/biryani.png";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/biryani4.png";
import StarRatings from "react-star-ratings";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Chicken Biryani",
    description:
      "Indulge in our Chicken Biryani, where tender chicken pieces are cooked to perfection with fragrant basmati rice and a blend of aromatic spices that will transport your senses to the heart of India",
  },
  {
    id: 2,
    img: Img2,
    name: "Dum Biryani",
    description:
      "Experience the royal Dum Biryani, slow-cooked under a sealed pot to lock in the rich flavors of marinated meat and long-grain rice, infused with saffron and delicate spices.",
  },
  {
    id: 3,
    img: Img2,
    name: "Tandoor Chicken",
    description:
      "Savor our Tandoor Chicken, marinated in a mix of yogurt and spices, and cooked in a traditional clay oven to achieve the perfect balance of smokiness and tenderness",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-xl font-bold">Crafted with Passion, Served with Love</h1>
            <p className="text-xs text-gray-400">
              
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
