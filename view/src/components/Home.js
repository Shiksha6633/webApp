import React from "react";
import Product from "./Product";
import offer from './Offer';
import Offer from "./Offer";
import Pic from '../images/homepic.jpg';
import { NavLink} from "react-router-dom";


const Home = () => {
  return (
    <>
    <section id="header" className="d-flex align-align-items-center">
      <div className="container-fluid">
        <div className="row ">
        <div className="col-10 mx-auto">
          <div className="row">
        
          {/* left div */}
          <div className=" col-md-6  mx-auto order-md-1 order-2 d-flex justify-content-center flex-column">
            <div className="content">
              <NavLink to='/product' className="btn">
                2021 Collection
              </NavLink>
              <h1>
                You Should always
                <br />
                feel pretty
              </h1>

              <div className="arrow-icons">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
          </div>
          {/* right div */}

          <div className=" col-md-6  mx-auto order-md-2 order-1 ">
            <img
              src={Pic}
              alt=""
              className="feature_img image-fluid"
            />
          </div>
        </div>
        </div>
        </div>

        <div className="social_links">
          <a href="">Facbook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
        </div>
        </div>

      </section>


      {/* products card section starts here */}
      
         
            <Product/> 
         
            <Offer/> 



      {/* products card section ends here */}
    </>
  );
};

export default Home;
