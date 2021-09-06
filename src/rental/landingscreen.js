import React,{useState} from 'react';
import { makeStyles ,Typography} from '@material-ui/core';

const styles = makeStyles({
    mainContent:{
        marginTop:"260px",
        marginLeft:"430px",
        position:"absolute",
        width:"450px",
        textAlign:"center"
    },
    welcomeHead:{
        fontSize:"27px",
        fontWeight:"450"
    }  ,
    pleaseSelect:{
        fontSize:"20px",
        marginTop:"20px"
    }
})


function LandingScreen(){
    const classes=styles();
    // const [data,setData] = useState(Data);

  return(
    <div className={classes.mainContent}>
        <p className={classes.welcomeHead}>WELCOME TO <br></br> RENTAL MANAGEMENT SYSTEM</p>
        <p className={classes.pleaseSelect}>Please Select Location</p>
    </div>
   )

 }
 export default LandingScreen;