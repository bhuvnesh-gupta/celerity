import React from "react";
import "../Styles/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faPallet,
  faPlaneDeparture,
  faStar,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import ship from "../Assets/ship.png";
import xc from "../Assets/xc.png";
import ChatButton from '../Components/ChatButton'


const Grid = () => {
  return (
    <div>
      <div className="container mx-auto my-5">
        <div className="row">
          <div id="booking-summary" className="col-sm-8 bg-light m-2 ">
            <div className="d-flex bg-light">
              <h5 className="bg-light p-3">Booking Summary</h5>
              <h6 id="express" className="bg-light">
                Express
              </h6>
            </div>
            <div className="d-flex bg-light justify-content-center">
              <FontAwesomeIcon
                id="plane"
                className="bg-light"
                icon={faPlaneDeparture}
              />
            </div>
            <div
              id="icons-booking"
              className="d-flex justify-content-between bg-light"
            >
              <FontAwesomeIcon
                id="monument"
                className="bg-light"
                icon={faLandmark} size="2xl"
              />
              <p id="line" className="bg-light">
                ________________________________________________________________________________
              </p>
              <FontAwesomeIcon
                id="monument"
                className="bg-light"
                icon={faLandmark} size="2xl"
              />
            </div>
            <div className="bg-light d-flex justify-content-between">
              <div className="bg-light ms-1 ps-2 py-2">Delhi, 110003</div>
              <div className="bg-light me-1 pe-1 py-2">Shanghai 200080</div>
            </div>
          </div>

          <div id="form-book" className="col-sm-3 m-2 bg-light rounded">
            <div className="bg-light d-flex justify-content-between">
            <h5 className="bg-light p-2 my-3"> Price Details</h5>
            <h6 className="bg-light p-2 my-3"> <span className="bg-light"><FontAwesomeIcon className="bg-light" icon={faStar} /></span>
                Known Shipper</h6>
            </div>
            <div className="d-flex justify-content-between bg-light border-bottom">
                <div className="bg-light p-2">Seller's  Quotes</div>
                <div className="bg-light p-2">Amount</div>
            </div>
            <div className="d-flex justify-content-between bg-light ">
                <div className="bg-light p-2 ">Duties and Taxes</div>
                <div className="bg-light p-2">Not Included</div>
            </div>
            <div className="d-flex justify-content-between bg-light p-2 ">
                <div id="duties" className="bg-light">Insurance    
                </div>
                <div className="bg-light p-2">$</div>
            </div>
            <div className="d-flex bg-light  border-bottom">
            <p className="bg-light p-2 d-block"><sub className="bg-light">Based On the Items Cost</sub></p>
            </div>
            <div className="d-flex justify-content-between bg-light border-bottom ">
                <div className="bg-light p-2">Add a promo code <a className="bg-light" href="/booking">Promo code</a>
                </div>
            </div>
            <div className="d-flex justify-content-between bg-light border-bottom ">
                <div className="bg-light p-2">Platform Fee
                </div>
                <div className="bg-light p-2">$</div>
            </div>
            <div className="d-flex justify-content-between bg-light my-2">
                <h4 className="bg-light p-2">Total
                </h4>
                <h4 className="bg-light p-2">$</h4>
            </div>
          </div>
        </div>
        <div id="margin" className="row">
          <div id="weight" className="col-sm-2 m-2 bg-light">
            <h6 className="bg-light p-2">Total Weight/Volume</h6>
            <FontAwesomeIcon className="bg-light m-4" icon={faWeightScale} size="2xl" />
            <p className="bg-light">114.6kg</p>
          </div>
          <div id="pallete" className="col-sm-6 m-2  bg-light">
            <h6 className="bg-light d-flex p-2">Load</h6>
            
            <FontAwesomeIcon className="bg-light m-4 " icon={faPallet} size="2xl" />
            <p className="bg-light"><strong className="bg-light">Pallete</strong></p>
          </div>
        </div>
        <div className="row">
          <div id="seller" className="col-sm-4 m-2 bg-light">
            <h6 className="bg-light d-flex p-3">Seller: PrimeTime World</h6>
            <div className="bg-light">
              <img className="m-5" src={ship} alt="ship" />
            </div>
          </div>
          <div id="insurance" class="col-sm-4 m-2 bg-light">
            <h6 className="bg-light d-flex p-3">Insurance: Xcover.com</h6>
            <div className="bg-light">
              <img  className="bg-light m-5" src={xc} alt="immg" />
            </div>
          </div>
        </div>
      </div>
      <ChatButton />
    </div>
  );
};

export default Grid;

// <FontAwesomeIcon icon={faPallet} />
