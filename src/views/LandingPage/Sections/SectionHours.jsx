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
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import OpenHour from "@material-ui/icons/AvTimer";
import OpenHrs from "@material-ui/icons/EventAvailable";
import ClosedHrs from "@material-ui/icons/EventBusy";


import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";

import SalonLocation from "assets/img/salon/bg-location.JPEG";



class SectionContacts extends React.Component {

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        {/* Contact us 1 START */}
        <div
          className={`${classes.contacts} ${classes.section}`}
          style={{ backgroundImage: `url(${SalonLocation})` }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
                <Card className={classes.card1}>
                  <CardHeader
                    contact
                    color="primary"
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Business Hours</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <InfoArea
                          className={classes.infoArea2}
                          title="Monday - Saturday"
                          description={
                            <h5>
                              <strong>9:00am - 06:00pm</strong>
                            </h5>
                          }
                          icon={OpenHrs}
                          iconColor="primary"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <InfoArea
                          className={classes.infoArea2}
                          title="Sunday"
                          description={
                            <h5>
                              <strong>Closed</strong>
                            </h5>
                          }
                          icon={ClosedHrs}
                          iconColor="primary"
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>

                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={5} md={5}>
                {/* <h2 className={classes.title}>Get in Touch</h2> */}
                <InfoArea
                  className={classes.infoArea}
                  title="Our Location"
                  description={
                    <div>
                      <strong>
                        <span>
                          1078 Lake Sumter Landing,
                            <br /> The Villages, Fl 32162
                          </span>
                      </strong>
                      <br></br>
                      <Button
                        round
                        color="primary"
                        size="md"
                        href="https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632"
                        target="_blank"
                        rel="noopener noreferrer"
                        // className={classes.pullRight}
                      >
                        Directions
                    </Button>
                    </div>
                  }
                  icon={PinDrop}
                />


                <InfoArea
                  className={classes.infoArea}
                  title="Give us a ring"
                  description={
                    <div>
                      <strong>
                        <span>
                          Phone Number
                        <br /> (352) 259-2400
                      </span>
                      </strong>
                      <br></br>
                      <Button
                        round
                        color="primary"
                        size="md"
                        href="tel:3213104761"
                        rel="noopener noreferrer"
                      >
                        Call Now</Button>

                    </div>
                  }
                  icon={Phone}
                />

              </GridItem>


            </GridContainer>
          </div>
        </div>
        {/* Contact us 1 END */}

      </div>
    );
  }
}

export default withStyles(contactsStyle)(SectionContacts);
