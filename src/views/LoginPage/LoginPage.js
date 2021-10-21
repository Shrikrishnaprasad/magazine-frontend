import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import { useGlobalContext } from "components/ContextApi/context";
import { useHistory } from "react-router";
import { Phone } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const history = useHistory();
  const { user, setUser, URL } = useGlobalContext();
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const checkLogin = (e) => {
    e.preventDefault();
    if (userId === "admin" && password === "123") {
      setUser({ ...user, userId, isAdmin: true });
      history.push("/dashboard");
    } else if (userId && password) {
      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({ mobile: userId, password }),
        headers: headersList,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.userName) {
            alert("Hi " + data.userName + " ! You are logged in ");
            setUserId("");
            setPassword("");
            var date = new Date(data.updatedAt);

            if (data.paid === 300) {
              date.setFullYear(date.getFullYear() + 2);
            } else if (data.paid === 150) {
              date.setFullYear(date.getFullYear() + 1);
            }

            if (date > new Date()) {
              setUser({ ...data, userId, isSubscribed: true, isAdmin: false });
            } else {
              setUser({ ...data, userId, isAdmin: false });
            }
            history.push("/dashboard");
          } else {
            alert(data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("User Id is invalid");
    }
  };
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="SHRI SUDHA"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form} onSubmit={checkLogin}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h6 style={{ fontSize: "22px" }}>Login</h6>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      required
                      labelText="User Id"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        min: 10,
                        placeholder: "Mobile number (9999999999)",
                        onChange: (e) => setUserId(e.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Phone className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      required
                      labelText="Password"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        onChange: (e) => setPassword(e.target.value),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <p>UserId: 9791627920</p>
                    <p>Password: 123</p>
                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" type="submit">
                      Login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
