import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import bg from "../../assets/img/bg.jpg";
import FounderSection from "./FounderSection";

const useStyles = makeStyles(styles);

export default function FounderPage(props) {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
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
      <Parallax small filter image={bg} />
      <div
        className={classNames(classes.main, classes.mainRaised, cardAnimaton)}
      >
        <FounderSection />
      </div>
      <Footer />
    </div>
  );
}
