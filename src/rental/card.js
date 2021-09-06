import React from "react";
import { makeStyles, Card, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";

const styles = makeStyles({
  mainCard:{
    height:"280px",
    width:"280px",
    margin:"0px 25px 70px 0px"
  },
  mainImage:{
    height:"235px",
    width:"280px"
  },
  description:{
    backgroundColor:"blue",
    display:"flex",
    height:"42px",
    textAlign:"center"
  },
  name:{
    color:"white",
    margin:"auto",
    fontWeight:"bold"
  }
});

function Cards(props) {
  const classes = styles();
  const { index, imgSrc, cardText, subcategoryData } = props;
  console.log(subcategoryData);

  return (
    <Card className={classes.mainCard} key={index}>
      <img className={classes.mainImage} src={imgSrc.toString()} alt={cardText} />
      <Box className={classes.description}>
        <Typography className={classes.name}>{cardText}</Typography>
        <Box>
          <Link
            to={{
              pathname: `/EquipmentCatalog/`,
              state: ``,
            }}
          >
            <PlayArrowRoundedIcon style={{ color: "white" ,marginTop:"8px"}} />
          </Link>
        </Box>
      </Box>
    </Card>
  );
}
export default Cards;
