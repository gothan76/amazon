import React from "react";
import Slider from "react-slick";
import screw from "../image/screw.png";
import truck from "../image/truck.png";
import warenty from "../image/war.png";
import cash from "../image/cash.png";
import cup from "../image/cup.png";
import "../components/Slick.css";

const slick1 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div id="slick1">
      <Slider {...settings}>
        <div className="contt">
          <img src={screw} alt="" />
          <a href="">7 Days Service Center and Replacement</a>
        </div>
        <div className="contt">
          <img src={truck} alt="" />
          <a href="">Free Delivary</a>
        </div>
        <div className="contt">
          <img src={warenty} alt="" />
          <a href="">One year warranty</a>
        </div>
        <div className="contt">
          <img src={cash} alt="" />
          <a href="">Cash/Pay on Delivary</a>
        </div>
        <div className="contt">
          <img src={cup} alt="" />
          <a href="">Top Brand</a>
        </div>
      </Slider>
    </div>
  );
};
export default slick1;
