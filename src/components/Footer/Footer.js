/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link to="/" className={classes.block}>
                Shri Sudha
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/founder" className={classes.block}>
                Founder
              </Link>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <Link to="/subscribe" className={classes.block}>
                Subscribe
              </Link>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <Link to="/register" className={classes.block}>
                Register
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link to="/login" className={classes.block}>
                Login
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, Created by{" "}
          <Link to="/" className={aClasses}>
            {/* K r ! s H */}
            Shri Sudha Team
          </Link>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
