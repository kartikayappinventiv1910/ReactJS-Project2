import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { makeStyles, Box, Typography } from "@material-ui/core";
import Cards from "./card";
import { CategoryEquipment } from "./assets/index";

const styles = makeStyles({
  mainContainer:{
    position:"absolute",
    marginTop:"80px",
  },
  mainCardContainer:{
    display:"flex",
    flexWrap:"wrap",
    marginLeft:"100px"
  },
  equipmentHeading:{
    fontSize:"25px",
    marginLeft:"100px",
    fontWeight:"bold",
  }
});

function Category() {
  const classes = styles();
  const { branch } = useParams();
  const location = useLocation();

  const Data = location.state;

  const requireData = Data.find((data) => data.branch_id === branch);
  console.log(requireData);
  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.equipmentHeading}>{"Equipment Catalog"}</Typography>
      <Box className={classes.mainCardContainer}>
        {requireData.categories.map((cat, index) => {
          return (
            <>
              {CategoryEquipment.map((item) => {
                console.log(item.name === cat.image);
                if (item.name === cat.image) {
                  return (
                    <Cards
                      key={index}
                      imgSrc={item.imgSrc}
                      cardText={cat.name}
                      subcategoryData={cat.subcategories}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </>
          );
        })}
      </Box>
    </Box>
  );
}
export default Category;
