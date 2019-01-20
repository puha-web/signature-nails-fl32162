import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

// Sections for this page
import About from "./Sections/SectionAbout.jsx";
import Services from "./Sections/SectionServices.jsx";
import OpenHrs from "./Sections/SectionHours.jsx";
import Specials from "./Sections/SectionSpecials.jsx";
// import SectionDescription from "./Sections/SectionDescription.jsx";



// const dashboardRoutes = [];

class LandingPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes} = this.props;
    return (
      <div>
        <Header
          color="transparent"
          // routes={dashboardRoutes}
          brand={
            <h4
              style={{ fontFamily: "'Coiny', cursive", fontSize: '25px', padding: 0, margin: 0 }}
            >Signature Nails</h4>
          }
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 50,
            color: "primary"
          }}
          // {...rest}
        />
        <Parallax image={require("assets/img/salon/bg1.jpg")} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem 
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
                }`}
              >
                <h2 className={classes.title}>We Bring Beauty & Happiness to Your Life</h2>
                <br />
                <Button
                  round
                  color="success"
                  size="sm"
                  href="tel:3213104761"
                  rel="noopener noreferrer"
                  className={classes.pullRight}
                >
                  <i className="fas fa-phone fa-rotate-90" />CAll US
                </Button>
                <Button
                  round
                  color="success"
                  size="sm"
                  href="https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.pullRight}

                >
                  <i className="fas fa-directions"/>Directions
                </Button>
              </GridItem>
              
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <About />
            <Services />
            <Specials />
            <br></br>
            <OpenHrs />
            <br></br>
          </div>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                  <Button justIcon round color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                  </ListItem>
                  
                </List>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made by{" "}
                <a href="/">PUHA</a>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
