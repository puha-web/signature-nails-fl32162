import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import office2 from "assets/img/examples/office2.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";
import ManiSpecial from "assets/img/salon/mani3-special.jpg";
import PediSpecial from "assets/img/salon/pedi2-special.jpg";


import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";

function SectionPills({ ...props }) {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${
            classes.textCenter
            }`}
        >
          <h2 className={classes.titleSpecial}>No Valid Coupon Now!</h2>
          <h2 className={classes.titleSpecial}>Please visit us again for future coupons!</h2>


        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + ManiSpecial + ")" }}
          >
            <CardBody background>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  15% Off in November
                </h3>
              </a>
              <p className={classes.category}>
                Visit us get your manicure service for 15% Off this spring break. Can't wait to see you!
              </p>
              <p className={classes.category}>
                Valid through 11/15/2018
              </p>
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
                <i className="fas fa-directions" />Directions
                </Button>

            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + PediSpecial + ")" }}
          >
            <CardBody background>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  20% Off for Pedicure Services
                </h3>
              </a>
              <p className={classes.category}>
                Visit us get your pedicures service for 20% Off this spring break. Can't wait to see you!
              </p>
              <p className={classes.category}>
                Valid through 09/15/2018
              </p>
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
                <i className="fas fa-directions" />Directions
                </Button>

            </CardBody>
          </Card>
        </GridItem>
        {/* 
        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={`${classes.mlAuto} ${classes.mrAuto} ${
            classes.textCenter
            }`}
        >
          <Button
            round
            color="success"
            size="md"
            href="/services"
            rel="noopener noreferrer"
          // className={classes.pullRight}
          >
            <i className="far fa-eye" />View All Services
              </Button>
        </GridItem> */}

      </GridContainer>
    </div>
  );
}

export default withStyles(sectionPillsStyle)(SectionPills);
