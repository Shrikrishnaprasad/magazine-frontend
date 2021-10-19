import React from "react";
// react plugin for creating charts

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// @material-ui/icons
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { useHistory } from "react-router";
import { useGlobalContext } from "components/ContextApi/context";

const useStyles = makeStyles(styles);

export default function SubTab() {
  const history = useHistory();
  const classes = useStyles();
  const { user } = useGlobalContext();

  var date = new Date(user.updatedAt);
  if (user.paid === 300) {
    date.setFullYear(date.getFullYear() + 2);
  } else if (user.paid === 150) {
    date.setFullYear(date.getFullYear() + 1);
  }
  return (
    <Grid container justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="success">
            <span className={classes.cardTitle} style={{ fontSize: "16px" }}>
              {" "}
              Subscription
            </span>
          </CardHeader>
          <CardBody>
            <p className={classes.cardCategory}>Valid Upto</p>
            <p>
              Your Shri Sudha subscription plan of{" "}
              {user.paid === 300 && " 2 Years is valid till"}
              {user.paid === 150 && " 1 Year is valid till"}
              {user.paid === 0 && " 0 Year is valid till"}
            </p>
          </CardBody>
          <CardFooter>
            <div className={classes.stats} style={{ marginRight: "auto" }}>
              <AccessTime />{" "}
              {user.paid !== 0
                ? new Date(date).toDateString()
                : new Date().toDateString()}
            </div>
            <Button
              type="button"
              color="success"
              onClick={() => history.push("/subscribe")}
            >
              Renewal
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </Grid>
  );
}
