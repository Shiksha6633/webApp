import React from "react";
import Card from './Card';


const Product = (props) => {

  return (
    <>
      <div className="my-5">
        <h1 className="text-center ">Featured Products</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row ">
          <div className="product_card col-10 mx-auto"> 
            <div className="row  mb-5 ">
              <Card/>
            </div>
          </div>
        </div>
      </div> 

      {/* data mapping for card's Product */}
      {/* {Data.map(pcard)} */}
    </>
  );
};

export default Product;
