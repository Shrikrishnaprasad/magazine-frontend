import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import Group from "@material-ui/icons/Group";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import classNames from "classnames";
import { Person } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function FounderSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>FOUNDER</h2>
          <img
            alt="https://play-lh.googleusercontent.com/KjiDen-jMjvmdoQqm5xna8sehCt1H4OBVzD4K5CSu5Usu_ZBgYIgV_VugFxCJylCdQ"
            src="https://i.ytimg.com/vi/CzTn2pII2GI/mqdefault.jpg"
            className={imageClasses}
          />
          <h5 className={classes.description}>
            <b>
              Paramapoojya Sri Sri Satyatma Tirtha Sreepaadangalavaru,
              Peetadhipati of Sri Uttaradi Mutt.
            </b>
          </h5>
        </GridItem>
      </GridContainer>
      <br />
      <div>
        <GridContainer>
          <GridItem justify="center" xs={12} sm={12} md={12}>
            <InfoArea
              title="Hony. Secretary"
              description={
                <div>
                  <ul>
                    <li>
                      <b>Sri R. Ananthan</b>, Chartered Accountant, Tiruppur.
                      Ph: 0421-2201322 / 2243832
                    </li>
                  </ul>
                </div>
              }
              icon={Person}
              iconColor="primary"
              horizontal
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Members"
              description={
                <div>
                  <ul>
                    <li>
                      <b>Sri V. Sethuraman, </b>
                      Kumbakonam – 612 001.
                      <br /> Ph. 0435 – 2424364.
                    </li>
                  </ul>
                </div>
              }
              icon={PeopleAlt}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Editorial Board"
              description={
                <div>
                  <ul>
                    <li>
                      Vedanta Vidwan
                      <b> Sri S.V. Ramachandrachar</b>, <br />
                      Srirangam, Ph: 9080521849
                    </li>
                    <br />
                    <li>
                      <b>Sri T.S. Raghavendran,</b>
                      <br />
                      M.A.B.L., Advocate, Coimbatore
                      <br /> Ph. 0422 – 2344853.
                    </li>
                  </ul>
                </div>
              }
              icon={Group}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Managing Editor"
              description={
                <p>
                  <ul>
                    <li>
                      Vedanta Vidwan Sri <b>S. Yedunandhanachar</b>, <br />
                      Srirangam. Ph: 9245442122
                    </li>
                  </ul>
                </p>
              }
              icon={People}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
