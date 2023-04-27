import React from "react";
import "../Styles/Login.css";
import Freight from "../Assets/Frieght.png";
import Business from "../Assets/Business.png";
import Shipping from "../Assets/Shipping.png";
import Support from "../Assets/Support.png";

const Services = () => {
  return (
    <>
      <div>
        <div className="h2 mt-4 text-center">Services</div>
      </div>
      <div className="row mx-auto">
        <div class="col-sm-3">
          <img src={Freight} alt="freight" />
        </div>
        <div class="col-sm-3">
          <img src={Business} alt="Business" />
        </div>
        <div class="col-sm-3">
          <img src={Shipping} alt="Shipping" />
        </div>
        <div class="col-sm-3">
          <img src={Support} alt="Support" />
        </div>
      </div>
    </>
  );
};

export default Services;
