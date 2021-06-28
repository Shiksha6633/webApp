import React ,{useEffect}from "react";
import Data from './Data';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { NavLink,Route } from "react-router-dom";


const ProductDetail = (props) => {

const id = props.match.params.id;
console.log("id:",id);
  const productsRef = Data.products.find(x=> x._id === id); 
  console.log("sdata:"+productsRef); 

useEffect(() => {
  // for coverting small images into bigger
    let ProductImg = document.getElementById("product_img");
    let SmallImg = document.getElementsByClassName('small_productimg');

    SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function(){
        ProductImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function(){
        ProductImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function(){
        ProductImg.src = SmallImg[3].src;
    }
    return () => {
       
    }
}, [])

  return (
    <>
     


      <div className="container-fluid single_product">
        <div className="row mt-5">
          <div className="col-md-10 col-10 mx-auto">
          {/* right side fiv for image */}
            <div className="row">
            {/* small img section */}
            <div className="col-md-1 col-2 mx-2">
             <div className="small_img_row  ">
                <div className="small_img">
                    <img src={productsRef.imgsrc} alt="" className="small_productimg"/>
                </div>
                <div className="small_img">
                    <img src={productsRef.image2} alt="" className="small_productimg"/>
                </div>
                <div className="small_img">
                    <img src={productsRef.image3} alt="" className="small_productimg"/>
                </div>
                <div className="small_img">
                    <img src={productsRef.image4} alt="" className="small_productimg"/>
                </div>
                </div>
            </div>
            {/* big img section */}
              <div className="col-md-5 col-8 mx-auto  product_image">
                <img
                  src={productsRef.imgsrc}
                  alt=""
                  width="100%"
                  id="product_img"
                />
              </div>
          {/* left side div for details */}

              <div className="col-md-4 col-12 mx-auto">
                <p>{productsRef.type}</p>
                <h1>{productsRef.sname}</h1>
                <h4>Price:<AttachMoneyIcon/>{productsRef.Price}</h4>
                <select name="">
                  <option>select size</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select><br/>
                {/* {
                 Data.products.map(productCart=>  */}
                <NavLink to={'/cart/' +productsRef._id} className="btn">
                  Add To Cart
                </NavLink>
       
                <h3>Product Details</h3>
                <p>
                  Perfect for running, workout and training sports and even as
                  an moisture wicking undershirt. Designed for a comfortable
                  experience. Crew-neck provides a nonrestrictive fit;
                  short-sleeve allows for a wider range of motion Moisture
                  wicking fabric is quick-drying, ultra-soft & has a soft feel,
                  keeping you comfortable through any athletic activity. Raglan
                  sleeves for a sporty look
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ProductDetail;
