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


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import WalkIn from "@material-ui/icons/TagFaces";
import CreditCard from "@material-ui/icons/CreditCard";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";


//Components
import SalonPhoto from './ImageGallery.jsx';
import ServiceBgImg from 'assets/img/salon/serviceBg-default.jpg';
import SocialMedia from "../Components/SocialMedia.jsx";



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
    window.scrollTo(0, 5);
    document.body.scrollTop = 0;
  }
  render() {

    const { classes } = this.props;

     return (
      <div>
        {/* <Header /> */}
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
                  <Card style={{ backgroundImage: `url(${ServiceBgImg})` }}>
                    <CardHeader
                      contact
                      color="success"
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Our Location</h4>
                    </CardHeader>
                    <CardBody>
                      <InfoArea
                        className={classes.info}
                        title="1078 Lake Sumter Landing, The Villages, FL 32162"
                        description={
                          <Button
                            round
                            color="success"
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
                            color="success"
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
                        icon={Email}
                        iconColor="success"
                      />
                      <InfoArea
                        className={classes.info}
                        title="Walks-In Welcome"
                        icon={WalkIn}
                        iconColor="success"
                      />
                      <InfoArea
                        className={classes.info}
                        title="We Accept Credit Cards"
                        icon={CreditCard}
                        iconColor="success"
                      />
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem md={7} sm={7} className={classes.mlAuto}>
                  <SalonPhoto />
                </GridItem>
                
              </GridContainer>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(contactUsStyle)(Location);
