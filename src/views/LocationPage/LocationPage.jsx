import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import Carousel from 'react-slick';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Footer from "components/Footer/Footer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";
import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";

//Components
import SalonPhoto from './ImageGallery.jsx';


const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 28.9085061, lng: -81.9717989 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
      }}
    >
      <Marker position={{ lat: 28.9085061, lng: -81.9717989 }} label={'Signature Nails'} />

    </GoogleMap>
  ))
);

class Location extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {

    const { classes } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    

    return (
      <div
      >
        <Header
          color="primary"
          brand="Signature Nails"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
        />
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCAujiH1lsqv_cLpTQRZS9L6h4cNPcJ-s"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)} >
          <div className={classes.contactContent}
          >
            <div className={classes.container}>
              {/* <h2 className={classes.title}>Our Location</h2> */}
              <GridContainer>
                <GridItem md={5} sm={5} className={classes}>

                  <Card>
                    <CardHeader
                      contact
                      color="success"
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Our Location</h4>
                    </CardHeader>
                    7                    <CardBody>
                      <InfoArea
                        className={classes.info}
                        title="1078 Lake Sumter Landing, The Villages, FL 32162"
                        description={
                          <Button
                            round
                            color="default"
                            size="sm"
                            href="https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Directions
                </Button>
                        }
                        icon={PinDrop}
                        iconColor="success"
                      />
                      <InfoArea
                        className={classes.info}
                        title="(352) 259-2400"
                        description={
                          <Button
                            round
                            color="default"
                            size="sm"
                            href="tel:3213104761"
                            rel="noopener noreferrer"
                          >
                            CAll US
                    </Button>
                        }
                        icon={Phone}
                        iconColor="success"
                      />
                      <InfoArea
                        className={classes.info}
                        title="Signaturenails@gmail.com"
                        // description={
                        //   <Button
                        //     round
                        //     color="default"
                        //     size="sm"
                        //     href="tel:3213104761"
                        //     rel="noopener noreferrer"
                        //   >
                        //     Email Us
                        // </Button>
                        // }
                        icon={Email}
                        iconColor="success"
                      />
                    </CardBody>
                  </Card>



                </GridItem>
                <GridItem md={7} sm={7} className={classes.mlAuto}>
                    {/* <Carousel {...settings}>
                      <div>
                        <img
                          src={Salon1}
                          alt="First slide"
                          className="slick-image"
                        />
                       
                      </div>
                      <div>
                        <img
                          src={Salon2}
                          alt="Second slide"
                          className="slick-image"
                        />
                      </div>
                      <div>
                        <img
                          src={Salon3}
                          alt="Third slide"
                          className="slick-image"
                        />
                      </div>
                      <div>
                        <img
                          src={Salon4}
                          alt="Third slide"
                          className="slick-image"
                        />
                      </div>
                      <div>
                        <img
                          src={Salon5}
                          alt="Third slide"
                          className="slick-image"
                        />
                      </div>
                    </Carousel> */}
                    <SalonPhoto />
                </GridItem>
              </GridContainer>
            </div>
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

export default withStyles(contactUsStyle)(Location);
