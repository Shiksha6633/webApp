import React,{useState} from "react";
import { NavLink , useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
   const history = useHistory();
    const [user,setUser] = useState({
        name:"",email:"",phone:"",password:"",cpassword:"",
    });

    let name,value;
    const handleInput =(e)=>{
    name = e.target.name;  //getting name of input field
    value = e.target.value;   //getting value entered by user in the input field

    setUser({...user,[name]:value});

    }

    //success toast function
    const diffToast =()=>{
        toast.error("Incomplete data",{
            position: "top-center",
        });
    }
 
//sending data to backend for registeration
const postData = async(e)=>{
  e.preventDefault();

  const {name,email,phone,password,cpassword} = user;

  
  const res = await fetch("/register",{
    method :"POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({
        name,email,phone,password,cpassword,
    })
});

const data = await res.json();
console.log("d: "+data);
if(res.status == 500  || !res){
    console.log("invalid registerartion");
    diffToast();
}else if(res.status == 400){
 function toasts(){
    toast.dark("Password not matching",{
        position: "top-center",
    });
 }
 toasts();
}else if(res.status == 422){
    function toaster(){
        toast.dark("Email already exists",{
            position: "top-center",
        });
     }
     toaster();
}
else{
    console.log("singed up");
  history.push("/login");       //after successful registeration user will be redirected to login page
}
}

  return (
    <div>
    <ToastContainer/>
	<div class="container register shadow mt-5 md-5 mb-5">
                <div class="row">
                    <div class="col-md-2 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <NavLink to="/login"><input type="submit" name="" value="Login"/></NavLink><br/>
                    </div>
                    <div class="col-md-10 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Customers</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </li> */}
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Register As a Customer</h3>
                                <form  method="POST" >

                                <div class="row register-form">

                                    <div class="col-md-6">

                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" placeholder="Full Name*" value={user.name} 
                                            onChange={handleInput}
                                             />
                                        </div>
                                        
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" placeholder="Your Email *" value={user.email} 
                                            onChange={handleInput} />
                                        </div>
                                        <div class="form-group">
                                            <input type="number" name="phone" id="phone" minlength="10" maxlength="10"  class="form-control" placeholder="Your Phone *" value={user.phone} 
                                            onChange={handleInput} />
                                        </div>

                                        <div class="form-group">
                                        
                                        </div>
                                        {/* <div class="form-group">
                                            <div class="maxl">
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="male" checked/>
                                                    <span> Male </span> 
                                                </label>
                                                <label class="radio inline"> 
                                                    <input type="radio" name="gender" value="female"/>
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div class="col-md-6">
                                        
                                        <div class="form-group">
                                            <input type="password" name="password" id="password" class="form-control" placeholder="Password *" value={user.password} 
                                            onChange={handleInput} />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="cpassword" id="cpassword" class="form-control"  placeholder="Confirm Password *" value={user.cpassword} 
                                            onChange={handleInput} />
                                        </div>
                                       
                                        <input type="submit" class="btnRegister" name="register" id="register"  value="register" 
                                            onClick={postData}
                                        />
                                    </div>
                                    
                            </div>
                            </form>

                            {/* <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hirer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Full Name*" value="" />
                                        </div>
                                       
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        
                                        <input type="submit" class="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>				                            
          </div>
          </div>

  );
};

export default Signup;
