import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import bg from "../../assets/img/bg.jpg";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// delete - import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import RegisterTabs from "./Sections/RegisterTabs";

// Sections for this page

const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="SHRI SUDHA"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={bg}>
        {/* image="https://i.ytimg.com/vi/9dy3TA2UQTA/maxresdefault.jpg" */}
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <RegisterTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}
