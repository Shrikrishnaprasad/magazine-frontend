import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import aboutImg from "../../../assets/img/aboutImg.jpg";
//import team1 from "assets/img/faces/avatar.jpg";
const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>ABOUT US</h2>
      <div>
        <GridContainer>
          <GridItem>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  alt="https://play-lh.googleusercontent.com/KjiDen-jMjvmdoQqm5xna8sehCt1H4OBVzD4K5CSu5Usu_ZBgYIgV_VugFxCJylCdQ"
                  src={aboutImg}
                  className={imageClasses}
                />
              </GridItem>
              <br />
              <h4 className={classes.cardTitle}>
                Paramapoojya Sri Sri Satyatma Tirtha Sreepaadangalavaru,
                Peetadhipati of Sri Uttaradi Mutt.
                <br />
              </h4>
              <CardBody>
                <p>
                  <b>
                    The Inspiring Message from Sri Sri Sathyatma Tirtha Swamiji,
                    the illustrious Pitadhipati, Uttaradi Mutt forms part of the
                    features in Sri Sudha Magazine.
                  </b>
                </p>
                <p>
                  “Sri Sudha” Tamil Magazine highlights the religious culture in
                  our families. It attracts modern minds because it shows the
                  way to abridge the practice of our religious duties and
                  preserve our culture in our houses even in today’s condition.
                  The Magazine is a mirror, showing our present day showy
                  life-stlye. It suggests easy and practicable methods for
                  improvement. In that way, it enlightens on the sense of value.
                  “Sri Sudha” has educative value with plenty of Vedic
                  quotations from Dharma Shastras, Bhavagavata, Puranas and
                  Veda. The Magazine is informative, narrating the inspiring
                  incidents from the lives of our saints, sages, and also other
                  information such as the importance of Punya Kshetras and even
                  religious remedies for problems in life.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
