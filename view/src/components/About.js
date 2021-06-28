import React,{ useState,useEffect }  from 'react';
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from './Avatar';

const About = () => {

    const history = useHistory();
    const [userData,setUserdata] = useState('');
    

    /**--send data to backend-------- */
const callAboutPage = async()=>{
 try {
    const res = await fetch("/about",{ 
        method :"GET",
        headers: {
            Accept : "application/json",
            "Content-Type" : "application/json"
        },
        credentials:"include"
    });

    const data = await res.json();
    console.log("data: "+JSON.stringify(data));

    //seting data for dashboard in About page
    setUserdata(data); 
    console.log("setUserdata: "+userData.name);
     

    if(!data.status == 200 || !data){   
     console.log("error About page");  
     function toasts(){
        toast.warn("Login Required",{
            position: "top-center",
        });
     }
     toasts(); 
    }
    else{
        console.log("success");
    }
 } catch (error) {
     console.log("errorAbout : "+error);
     function toasts(){
        toast.warn("Login Required",{
            position: "top-center",
        });
     }
     toasts();
     setTimeout(function(){  history.push('/login'); }, 15000);
    
 }
}

 useEffect(() => {
    callAboutPage();
 }, []);

    return (
        <>
        <ToastContainer/>
           <div className="container profile shadow">
               <form method="GET">
                   <div className="row mt-5 ">
                    <div className="col-md-4">
                        <Avatar/>
                    </div>
                      

                       <div className="col-md-6">
                           <div className="profile_head">
                               <h5>{ userData.name }</h5>
                               <h6>Software Engineer</h6>
                               <p className="profile_rating mt-3 mb-5">Ranking <span>1/10</span></p> 
                  
                     

                       {/* Nav tabs */}
                       <ul className="nav nav-tabs" role="tablist">
                         <li className="nav-item">
                          <a className="nav-link active" id="home_tab" data-toggle="tab" href="#home" role="tab">About</a>
                         </li>
                         <li className="nav-item">
                         <a className="nav-link " id="profile_tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                         </li>  
                        </ul>
                   </div>
                   </div>
       
                 <div className="col-md-2">
                     <input type="submit" className="profile_edit_btn" name="btnAddMore" value="Edit Profile"/>
                 </div>
                 </div>

                 <div className="row">
                     {/* left side toogle*/}
                     <div className="col-md-4">
                         <div className="profile_work">
                             <p>work link</p>
                             <a href="" target="_blank">Instagram</a><br/>
                             <a href="" target="_blank">Facebook</a>

                         </div>
                     </div>

                     {/* right side toogle data */}
                     <div className="col-md-8 pl-5 about_info">
                         <div className="tab-content profile_tab" id="myTabContent">
                             <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home_tab">
                                
                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>User ID</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>{userData._id}</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                     <div className="col-md-6">
                                         <label>Name</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>{userData.name}</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                     <div className="col-md-6">
                                         <label>Email</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>{userData.email}</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                     <div className="col-md-6">
                                         <label>Phone</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>{userData.phone}</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                     <div className="col-md-6">
                                         <label>Profession</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Software Engineer</p>
                                      </div>
                                  </div>
                             </div>
                            {/* about section ends here */}
                            {/* Timeline section starts here */}
                            <div className="tab-pane fade show " id="profile" role="tabpanel" aria-labelledby="profile_tab">
                                
                                 <div className="row">
                                     <div className="col-md-6">
                                         <label>Experience</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>6 months</p>
                                      </div>
                                  </div>

                                  <div className="row mt-3">
                                     <div className="col-md-6">
                                         <label>Technical Skills</label>
                                     </div>
                                     <div className="col-md-6">
                                         <p>Salesforce</p>
                                      </div>
                                  </div>

                                  
                             </div>

                         </div>
                     </div>
                 </div>

               </form>
           </div> 
        </>
    )
}

export default About;
