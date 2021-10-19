import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// icons
import RoomIcon from "@material-ui/icons/Room";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import bg from "../../assets/img/bg.jpg";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );

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
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <Card className={classes[cardAnimaton]}>
                    <div>
                      <img
                        src="https://i1.sndcdn.com/artworks-000052583044-rnjhkd-t500x500.jpg"
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <CardBody>
                      <div className={classes.name}>
                        <h3 className={classes.title}>
                          Vedanta Vidwan <b>S. Yedunandhanachar</b>
                        </h3>
                        <h6>Managing Editor</h6>
                      </div>
                    </CardBody>
                  </Card>

                  <br />
                  <div>
                    <ul>
                      <li style={{ display: "flex" }}>
                        <RoomIcon />
                        <span style={{ marginLeft: "16px" }}>
                          15, Vyasaraja Nagar,Srirangam Trichy - 620 006
                        </span>
                      </li>
                      <br />
                      <br />
                      <li style={{ display: "flex" }}>
                        <LocalPhoneIcon />
                        <span style={{ marginLeft: "16px" }}>
                          <a href="tel:+91 9245442122">+91 92454 42122</a>
                        </span>
                      </li>
                      <br />
                      <br />
                      <li style={{ display: "flex" }}>
                        <WhatsAppIcon />
                        <span style={{ marginLeft: "16px" }}>
                          <a href="tel:+91 86674 39077">+91 86674 39077</a>
                        </span>
                      </li>
                      <br />
                      <br />
                      <li style={{ display: "flex" }}>
                        <EmailIcon />
                        <span style={{ marginLeft: "16px" }}>
                          <a href="mailto:shrisudhatamil@gmail.com">
                            shrisudhatamil@gmail.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
