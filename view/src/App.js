import React, { createContext , useReducer} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup"; 
import Error from "./components/Error"; 
import Logout from "./components/Logout";
import Steppers from './components/Steppers';
import Cart from './components/Cart'; 
import OfferCart from './components/OfferCart';
import Product from './components/Product';
import Avatar from './components/Avatar';
// import Navbar from './components/Navbar';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {initialState , reducer} from "../src/reducer/UseReducer";
import {makeStyles} from '@material-ui/core/styles';
import ProductDetail from './components/ProductDetail';



export const userContext = createContext();

// for Navbars
const useStyles = makeStyles()


// function Product(){
//   return(
//     <Product/>
//   )
// }



const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route> 
      <Route exact path="/register">
        <Signup />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Route exact path="/stepper">
        <Steppers />
      </Route>
      {/* <Route exact path="/detail">
        <ProductDetail />
      </Route> */}
      <Route exact path="/cart">
        <Cart/>
      </Route>
      <Route exact path="/avatar">
        <Avatar/>
      </Route>
      <Route exact path="/product">
        <Product/>
      </Route>
      <Route exact path="/offerCart">
        <OfferCart/>
      </Route>
      
    <Route path="/detail/:id" exact={true} component={ProductDetail} />
    <Route path="/cart/:id" exact={true} component={Cart} />
     
     
      <Route>
        <Error />
      </Route>
    </Switch>
    
  );
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    {/* <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 col-12 mx-auto"> */}
        
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar/>
        <Routing />
      </userContext.Provider>
      {/* </div>
      
      </div>
    </div> */}
    </>
  );
};

export default App;
