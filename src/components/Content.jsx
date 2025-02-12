import React from "react";
import "../components/content.css";
import fullfill from "../image/fulfill.png";
import arrow from "../image/arrow.png";
import star from "../image/stars.png";
import Slick from "./Slick";
import Slick1 from "./Slick1";
import offer from "../image/offer.png";
import Specification from "./Specification";

const Content = () => {
  return (
    <div id="left">
      <div id="one">
        <div id="model">
          <p>iQOO Z9 5G (Graphene Blue, 8GB RAM,</p>
          <p>256GB Storage) | Dimensity 7200 5G</p>
          <p>Processor | Sony IMX882 OIS Camera |</p>
          <p>120Hz AMOLED with 1800 nits Local</p>
          <p>Peak Brightness | 44W Charger in The</p>
          <p>Box</p>
          <a href="">Visit the iQOO Store</a>
        </div>
        <div id="ratings">
          <span>4.2 </span>
          <img src={star} alt="" />
          <img src={arrow} id="arr" alt="" />
          <div id="rtng">
            <a href="">5,908 ratings</a>
            <p>|</p>
            <a href="">Search this page</a>
          </div>
        </div>
        <p id="para">1K+ bought in past month</p>
        <hr id="rh" />
      </div>

      <div id="two">
        <p id="ltd">Limited time deal</p>
        <p id="discount">
          -24% <span id="spn">&#8377; 20,498</span>
        </p>
        <h5>
          M.R.P : <span>&#8377; </span>
          <del>26,999</del>
        </h5>
        <img id="full" src={fullfill} alt="" />
        <h5>Inclusive of all taxes</h5>
        <div id="emi">
          <p>
            EMI starts at ₹994. No Cost EMI available{" "}
            <a href="">
              EMI Options <img src={arrow} alt="" />
            </a>
          </p>
        </div>
      </div>
      <hr id="ram"/>
      <div id="offer">
        <img src={offer} alt="" />
        <p>Offers</p>
      </div>
      <Slick />
      <hr className="sl1" />
      <Slick1 />
      <hr className="sl" />
      <div className="spec">
        <Specification />
      </div>
    </div>
  );
};

export default Content;
