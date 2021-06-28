import React,{useState,useContext} from "react";
import { NavLink , useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {userContext} from '../App';

const Login = () => {

    const {state, dispatch} = useContext(userContext);

    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

       //success toast function
       const diffToast =()=>{
        toast.error("Invalid credentials",{
            position: "top-center",
        });
    }
    
    // function for logging the user through backend
    const loginUser= async(e)=>{

     e.preventDefault();
    const response = await fetch('/login',{
        method :"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email,password
        })
    });

    const data = response.json();
    if(response.status == 400 || response.status == 500 || !response){

        console.log("invalid credentials");
     diffToast();
        

    }else{
        history.push('/');
    
        dispatch({type:'USER', payload:true});
        console.log("Logged in");
    
    }
    } 

  return (
      <>
<ToastContainer/>
    <div className="container-fluid mt-5">
    <div className="row main-content bg-success text-center mt-5">
        <div className="col-md-4 text-center company__info">
            <span className="company__logo"><h2><span className="fa fa-android"></span></h2></span>
            <h4 className="company_title">Welcome back</h4>
        </div>
        <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div className="container-fluid">
                <div className="row">
                    <h2>Log In</h2>
                </div>
                <div className="row">
                    <form method="POST" className="form-group">
                        <div className="row">
                            <input type="text" name="username" id="username" className="form__input" placeholder="Username"
                                  value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            {/* <!-- <span className="fa fa-lock"></span> --> */}
                            <input type="password" name="password" id="password" className="form__input" placeholder="Password"
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                        </div>
                        <div className="row">
                            <input type="checkbox" name="remember_me" id="remember_me" className=""/>
                            <label for="remember_me">Remember Me!</label>
                        </div>
                        <div className="row">
                            <input type="submit" value="Submit" className="btn"
                                onClick={ loginUser}
                            />
                        </div>
                    </form>
                </div>
                <div className="row">
                    <p>Don't have an account? <NavLink to="/register">Register Here</NavLink></p>
                </div>
                
            </div>
        </div>
    </div>
</div>
  </>      
  );
};

export default Login;
