import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  footer: {
    position: "absolute",
    backgroundColor: "black",
    width: "100%",
    height: "50px",
    marginTop: "658px",
    position: "fixed",
  },
});

function Footer() {
  const classes = styles();
  return <div className={classes.footer}></div>;
}
export default Footer;
