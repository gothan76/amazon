import React from "react";
import "../components/slick.css";
import Slider from "react-slick";
import '../components/content.css'

const Slick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <div id="slick">
      <Slider {...settings}>
        <div className="cont">
          <h5>Bank Offer</h5>
          <p className="p">Upto <span>&#8377;</span>3,000</p>
          <p className="p">discount on select</p>
          <p className="p">Credit Cards,select...</p>
          <a className="a" href="">8 offer &gt;</a>
        </div>
        <div className="cont">
          <h5>No Cost EMI</h5>
          <p className="p">Upto <span>&#8377;</span>3,000</p>
          <p className="p">discount on select</p>
          <p className="p">Credit Cards,select...</p>
          <a className="a" href="">8 offer &gt;</a>
        </div>
        <div className="cont">
          <h5>Cashback</h5>
          <p className="p">Upto <span>&#8377;</span>3,000</p>
          <p className="p">discount on select</p>
          <p className="p">Credit Cards,select...</p>
          <a className="a" href="">8 offer &gt;</a>
        </div >
        <div className="cont">
          <h5>Partner Offer</h5>
          <p className="p">Upto <span>&#8377;</span>3,000</p>
          <p className="p">discount on select</p>
          <p className="p">Credit Cards,select...</p>
          <a className="a" href="">8 offer &gt;</a>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
