import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Data from "./data.json";
// import { classExpression, typeAlias } from '@babel/types';

const styles = makeStyles({
  header: {
    display: "flex",
    backgroundColor: "black",
    width: "100%",
    height: "60px",
    padding: "10px 100px",
    position: "fixed",
    zIndex:"100",
    // marginTop:"-60px"
  },
  mainHeading: {
    fontSize: "23px",
    marginRight: "250px",
    color: "white",
  },
  selectLocation: {
    color: "white",
    fontSize: "20px",
    border: "2px solid white",
    width: "210px",
    height: "40px",
    paddingTop: "4px",
    paddingLeft: "35px",
    borderRadius: "10px",
    marginLeft: "160px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#3492eb",
    },
  },
  locations: {
    position: "relative",
    listStyleType: "none",
    backgroundColor: "white",
    margin: "50px -220px",
    width: "230px",
    // border:"1px solid black"
  },
  locationList: {
    backgroundColor:"white",
    color: "black",
    border: "1px solid lightgrey",
    textAlign: "left",
    paddingLeft: "30px",
    paddingTop: "5px",
    height: "40px",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  },
  branches: {
    position: "absolute",
    marginLeft: "200px",
    listStyleType: "none",
    width: "250px",
  },
  branchesList: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    color: "black",
    border: "1px solid lightgrey",
    textAlign: "left",
    paddingLeft: "30px",
    paddingTop: "5px",
    height: "40px",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  },
});

function Header() {
  const classes = styles();
  const [data, setData] = useState(Data);
  const [locationDisplay, setLocationDisplay] = useState(false);
  const [branchDisplay, setBranchDisplay] = useState(false);
  const [location, setLocation] = useState("");

  // console.log(data);
  function handleLocationClick() {
    setLocationDisplay(true);
  }
  function handleRentalClick() {
    setLocationDisplay(false);
  }
  function handleHover(locationname) {
    setBranchDisplay(true);
    setLocation(locationname);
  }
  function handleLeave() {
    setBranchDisplay(false);
    setLocation("");
  }
  return (
    <div className={classes.header}>
      <Typography
        className={classes.mainHeading}
        onClick={() => handleRentalClick()}
      >
        RENTAL MANAGEMENT SYSTEM
      </Typography>
      <Typography
        className={classes.selectLocation}
        onClick={() => handleLocationClick()}
      >
        Select Location
      </Typography>

      <ul
        className={classes.locations}
        style={locationDisplay ? { display: "block" } : { display: "none" }}
      >
        {data.data.locations.map((loc, index) => {
          return (
            <li
              className={classes.locationList}
              onMouseOver={() => handleHover(loc.name)}
              onMouseLeave={() => handleLeave()}
              key={`${loc.name}`}
            >
              <div>{loc.name}</div>
              <ul
                className={classes.branches}
                style={
                  branchDisplay ? { display: "block" } : { display: "none" }
                }
              >
                {location === loc.name &&
                  loc.branches.map((branch, index) => {
                    return (
                      <Link
                        className={classes.branchesList}
                        to={{
                          pathname: `/EquipmentCatalog/${branch.branch_id}`,
                          state: loc.branches,
                        }}
                      >
                        {branch.name}
                      </Link>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;