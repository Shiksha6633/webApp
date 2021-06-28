import React from 'react';
import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <>
           <div className="stars">
           <div className="error">
            <div className="error__subtitle">Hmmm...</div>
            <div className="error__description">It looks like one of the  developers fell asleep</div>
           </div>
           
            <div className="central-body">
                <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px"/>
                <NavLink to="/" className="btn-go-home" >GO BACK HOME</NavLink>
            </div>
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px"/>
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px"/>
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px"/>
                </div>
                <div className="box_astronaut">
                    <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px"/>
                </div>
            </div>
            

        </div>

            </>
    )
}

export default Error;
