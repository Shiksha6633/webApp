import React,{ useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';
import avtarPic from '../images/pic.jpeg'
import blank from '../images/blank.png'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  


const Avatars = () => {

    const history = useHistory();
    const [userData,setUserdata] = useState('');
    const classes = useStyles();

    /**--send data to backend-------- */
const callAvatarPage = async()=>{
 try {
    const res = await fetch("/avatar",{ 
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
//  
     

    if(!data.status == 200 || !data){   
     console.log("error About page");  
    
    }
    else{
        console.log("success");
    }
 } catch (error) {
     console.log("errorAbout : "+error);
     setTimeout(function(){  history.push('/login'); }, 100);
    
 }
}

 useEffect(() => {
    callAvatarPage();
 }, []);

 

  return (
    <div>
      <div className={classes.root}>
      {userData.name =="Surya Pratap Singh"?
      <Tooltip title={userData.name}>
      
      <Avatar alt="Remy Sharp" src={avtarPic} className={classes.large} />
      </Tooltip>
      :
        <Tooltip title={userData.name}>
      
        
      <Avatar alt="Remy Sharp" src={blank} className={classes.large}/>
      </Tooltip>}
      
    </div>
    </div>
  );
};

export default Avatars;
