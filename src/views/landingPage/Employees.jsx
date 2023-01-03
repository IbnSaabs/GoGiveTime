import React from "react";
import Carousel from "../../components/Carousel";

//slider images imports
import slide_1 from "../../assets/slider_image_1.png";
import slide_2 from "../../assets/slider_image_2.png";
import slide_3 from "../../assets/slider_image_3.png";
import slide_4 from "../../assets/slider_image_4.png";

// static Employee data
const employess = [
  {
    id: 1,
    img: slide_1,
    name: "Kaynor Torgbor",
    message:
      "“ When you volunteer, you open yourself to opportunities and you will be surprised at the places volunteering will take you “",
  },
  {
    id: 2,
    img: slide_2,
    name: "Wilhemina Antwi",
    message:
      "“ Today you might be volunteering with and organisation ,tomorrow they will be recommending you for next big job “",
  },
  {
    id: 3,
    img: slide_3,
    name: "Sarah Amartey Amarh",
    message:
      "“ I am a volunteer because I love to help.I love to impact.I hove the fact that the ripple effect is always huge for me and the people I help “",
  },
  {
    id: 4,
    img: slide_4,
    name: "Hannah Abrahams Appiah",
    message:
      "“ I am a volunteer because I want to be part of the people making the world a better place for others “",
  },
];

const Employees = () => {
  return (
    <div className="px-2 lg:px-5 my-16">
      <Carousel employess={employess} />
    </div>
  );
};

export default Employees;
