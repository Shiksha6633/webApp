import React from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";

import Data from './Data';

const Card = () => {
  return (
    <div className="products_card d-flex justify-content-center align-items-center">
    {
          Data.products.map(product=> 
          
              <div className=" cards col-md-3 col-10 mx-auto py-2">
                {/* card section starts here */}
                <div className="card col-md-12 col-12">
                <NavLink to={'/detail/' + product._id}>
                  <img className="card-img-top" src={product.imgsrc} alt="Card image cap" />
                  </NavLink>
                  <div className="card-body">
                    <p className="card-text">
                        {product.sname}
                    </p>
                    <NavLink to={'/cart/' +product._id} className="btn btn-dark">
                      Add to Cart
                    </NavLink>
                  </div>
                </div>
                {/* card section ends here */}
              </div>
            

          )
    }
            
    </div>
  );
};

export default Card;
