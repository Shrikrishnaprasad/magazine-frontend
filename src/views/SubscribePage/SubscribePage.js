import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg2.jpg";
import { useHistory } from "react-router";
import { useGlobalContext } from "components/ContextApi/context";

const useStyles = makeStyles(styles);

export default function SubscribePage(props) {
  const { URL, user, setUser, initialStateUser } = useGlobalContext();
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 800);
  const classes = useStyles();
  const { ...rest } = props;

  const pay150 = payment(150, user, URL, setUser, initialStateUser);
  const pay300 = payment(300, user, URL, setUser, initialStateUser);

  const openPayModal150 = () => {
    if (user.userId !== "") {
      if (!user.isSubscribed) {
        let rzp1 = new window.Razorpay(pay150);
        rzp1.open();
      } else {
        alert("Your plan is Active !");
      }
    } else {
      alert("Please login to subscribe !");
    }
  };
  const openPayModal300 = () => {
    if (user.userId !== "") {
      if (!user.isSubscribed) {
        let rzp1 = new window.Razorpay(pay300);
        rzp1.open();
      } else {
        alert("Your plan is Active !");
      }
    } else {
      alert("Please login to subscribe !");
    }
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
            <h3 className={classes.title}>
              The Magazine is informative, narrating the inspiring incidents
              from the lives of our saints, sages, and also other information
              such as the importance of Punya Kshetras and even religious
              remedies for problems in life.
            </h3>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <CardBody>
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: 500,
                      fontSize: "24px",
                      color: "gray",
                    }}
                  >
                    <h3>Subscription plan</h3>
                    <br />
                    <p>
                      @ Rs.{" "}
                      <span
                        style={{
                          fontSize: "40px",
                          color: "green",
                        }}
                      >
                        {" "}
                        150{" "}
                      </span>{" "}
                      /- only
                    </p>
                    <hr style={{ margin: "20px 0" }} />
                    <p>
                      <span
                        style={{
                          fontSize: "26px",
                          color: "green",
                        }}
                      >
                        12
                      </span>{" "}
                      Books
                    </p>
                    <hr style={{ margin: "20px 0" }} />
                    <p>
                      <span
                        style={{
                          fontSize: "26px",
                          color: "purple",
                        }}
                      >
                        1
                      </span>{" "}
                      Year
                    </p>
                  </div>
                  <hr style={{ margin: "20px 0" }} />
                </CardBody>

                <CardFooter className={classes.cardFooter}>
                  <Button
                    onClick={openPayModal150}
                    color="primary"
                    round
                    size="lg"
                  >
                    Subscribe
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <CardBody>
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: 500,
                      fontSize: "24px",
                      color: "gray",
                    }}
                  >
                    <h3>Subscription plan</h3>
                    <br />
                    <p>
                      @ Rs.{" "}
                      <span
                        style={{
                          fontSize: "40px",
                          color: "green",
                        }}
                      >
                        {" "}
                        300{" "}
                      </span>{" "}
                      /- only
                    </p>
                    <hr style={{ margin: "20px 0" }} />
                    <p>
                      <span
                        style={{
                          fontSize: "26px",
                          color: "green",
                        }}
                      >
                        24
                      </span>{" "}
                      Books
                    </p>
                    <hr style={{ margin: "20px 0" }} />
                    <p>
                      <span
                        style={{
                          fontSize: "26px",
                          color: "purple",
                        }}
                      >
                        2
                      </span>{" "}
                      Years
                    </p>
                  </div>
                  <hr style={{ margin: "20px 0" }} />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button
                    onClick={openPayModal300}
                    color="primary"
                    round
                    size="lg"
                  >
                    Subscribe
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
function payment(amount, user, URL, setUser, initialStateUser) {
  const history = useHistory();
  return {
    key: "rzp_test_YkCd4OxHtBFQbV",
    amount: amount * 100,
    name: "SHRI SUDHA",
    description: "Your Paying for Shri Sudha subscription",
    image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
    handler: function (response) {
      let headersList = {
        "Content-Type": "application/json",
      };
      fetch(`${URL}/user/subscribe`, {
        method: "POST",
        body: JSON.stringify({ amount: amount, id: user?._id }),
        headers: headersList,
        Accept: "application/json",
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          if (data._id) {
            alert(
              "PayId - " +
                response.razorpay_payment_id +
                " Your Payment successfully done !"
            );
            setUser(initialStateUser);
            history.push("/login");
          } else {
            alert(data);
          }
        })
        .catch((err) => alert(err));
    },
    prefill: {
      name: user?.userName,
      contact: "",
      email: user?.email,
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
  };
}
