import React from "react";
import offerImg from "../images/exclusive.png";
import { NavLink } from "react-router-dom";

const Offer = (props) => {
  return (
    <div >
   
      <div className="row offer">
      <div className="col-md-12">
        <div className="row">

       
        <div className=" col-md-6 col-6 d-flex justify-content-center align-items-center mx-auto">
          <div className="small_container">
            <img className="offers_img" src={offerImg} alt="" />
          </div>
        </div>

        <div className="col-md-6 col-6 mx-auto">
          <p>Exclusively Available On Redstore</p>
          <h1>Smart Watch</h1>
          <small>
            Mi Smart Band 4 0.94-inch AMOLED Color Display, 20 Days Battery,
            5ATM Water Resistant, Music Control, Unlimited Watch Faces,
            Compatible with Android and iOS
          </small>
          <NavLink to="/offerCart" className="btn"> 
            Buy Now &#8594;
          </NavLink>
        </div>
      </div>
      </div>
      </div>
    </div>
    
  );
};

export default Offer;
