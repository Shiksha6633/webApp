import React ,{ useState,useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Data from "./Data";
import Payment from "./Payment";
import Paypal from "./Paypal";
import offerImg from "../images/exclusive.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const OfferCart = () => {

  const history = useHistory();
  const [userData,setUserdata] = useState('');

  /**--send data to backend-------- */
const callOfferCartPage = async()=>{
  try {
     const res = await fetch("/offercart",{ 
         method :"GET",
         headers: {
             Accept : "application/json",
             "Content-Type" : "application/json"
         },
         credentials:"include"
     });
 
     const data = await res.json();
     console.log("offercart data: "+JSON.stringify(data));
 
     //seting data for dashboard in About page
     setUserdata(data); 
     console.log("setUserdata: "+userData.name);
      
 
     if(!data.status == 200 || !data){   
      console.log("error About page");  
      function toasts(){
         toast.dark("Login Required",{
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
      setTimeout(function(){  history.push('/login'); }, 1000);
     
  }
 }
 
  useEffect(() => {
     callOfferCartPage();
  }, []);
 

  const classes = useStyles();

  return (
    <div>
      <div className="container-fluid mt-5">
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={offerImg}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                     Smart Watch
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    Mi Smart Band 4
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>

                    {/*  */}
                  </Grid>
                  <Grid item>
                    {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                  </Typography> */}
                  </Grid>
                </Grid>
                {/* ///// */}
                <Grid item>
                  <Typography variant="subtitle1" className="px-4">
                    $500.00
                  </Typography>
                </Grid>
                <Grid>
                  <Grid item>
                    <Payment />
                    <Paypal />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default OfferCart;
