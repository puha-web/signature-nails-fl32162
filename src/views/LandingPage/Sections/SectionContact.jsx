import React from "react";
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
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";


const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 28.908300, lng: -81.971630 - 0.025 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
    </GoogleMap>
  ))
);

class SectionContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        <div className={classes.contacts2}>
          <div className={classes.map}>
            <RegularMap
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
          <GridItem xs={12} sm={6} md={6}>
            <Card className={classes.card2}>
              <CardHeader contact color="success" className={classes.textCenter}>
                <h4 className={classes.cardTitle}>Contact Us</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={6}>
                    <InfoArea
                      className={classes.infoArea2}
                      title="Give us a ring"
                      description={
                        <strong>
                          <span>
                            Signature Nails
                            <br /> (352) 259-2400
                            <br /> Monday - Saturday
                            <br /> 9:00am-06:00pm
                            <br /> Sunday
                            <br /> Closed


                          </span>
                        </strong>
                      }
                      icon={Phone}
                      iconColor="success"
                    />

                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <InfoArea
                      className={classes.infoArea2}
                      title="Find our salon at"
                      description={
                        <strong>
                          <span>
                            1078 Lake Sumter Landing,
                            <br /> The Villages,
                            <br /> Fl 32162
                          </span>
                        </strong>
                      }
                      icon={PinDrop}
                      iconColor="success"
                    />
                  </GridItem>
                </GridContainer>
                {/*  */}
              </CardBody>
              <CardFooter className={classes.justifyContentBetween}>
                  <GridItem xs={12} sm={12} md={12}>
                    <Button
                      color="success"
                      size="md"
                      href="tel:3213104761"
                      rel="noopener noreferrer"
                      className={classes.pullRight}
                    >
                      <i className="fas fa-phone fa-rotate-90" />CAll US
                    </Button>
                    <Button
                      color="success"
                      size="md"
                      href="https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.pullRight}
                    >
                      <i class="fas fa-directions" />Directions
                    </Button>
                  </GridItem>
              </CardFooter>
            </Card>
          </GridItem>
        </div>
        {/* Contact us 2 END */}
      </div>
    );
  }
}

export default withStyles(contactsStyle)(SectionContacts);
