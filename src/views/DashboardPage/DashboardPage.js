import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import bg from "../../assets/img/bg.jpg";
import { useGlobalContext } from "components/ContextApi/context";

const useStyles = makeStyles(styles);
import { useHistory } from "react-router";
import DashboardSection from "./DashboardSection";

export default function DashboardPage(props) {
  const history = useHistory();

  const { user } = useGlobalContext();
  if (!user?.isAdmin && !user?.userId) {
    history.push("/");
  } else if (user.isAdmin) {
    history.push("/admin");
  }
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
      <Parallax small filter image={bg} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <h3 className={classes.title}>USER DASHBOARD</h3>
              <DashboardSection />
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
