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
          <h2 className={classes.titleSpecial}>Our Specials</h2>

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
                  REJUVENATE MANICURE
                </h3>
              </a>
              <p className={classes.category}>
                Come with basic manicure services, nail trim, shaping of nails, soaking, cleaning cuticles,
                skin exfoliation using Dead Sea salt, hand massage using collagen cream, the application of collagen mask,
                healing herbal gloves, and the application of polish. Also includes healing herbal neck wrap.
              </p>

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
                  REJUVENATE PEDICURE
                </h3>
              </a>
              <p className={classes.category}>
                Come with foot soak in warm water, nail trim, shaping of nails, clearning of cuticles,
                 exfoliation using Dead Sea Salt, light crub application of collagen mask, massage using collagen
                 cream, placing the feet in healing herbal booties, hot towel, application of polish.
                 also includes healing herbal neck wrap.
              </p>

            </CardBody>
          </Card>
        </GridItem>

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
            color="primary"
            size="md"
            href="/services"
            rel="noopener noreferrer"
          // className={classes.pullRight}
          >
            <i className="far fa-eye" />View All Services
              </Button>
        </GridItem>

      </GridContainer>
    </div>
  );
}

export default withStyles(sectionPillsStyle)(SectionPills);
