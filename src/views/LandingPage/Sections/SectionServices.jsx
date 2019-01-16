import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Muted from "components/Typography/Muted.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";

import bg1 from 'assets/img/salon/bg1.jpg';
import Manicure1 from "assets/img/salon/mani1.jpg";
import Manicure2 from "assets/img/salon/mani2.jpg";
import Pedicure from "assets/img/salon/pedi1.jpg";
import Waxing from "assets/img/salon/waxing.jpg";



import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class SectionTeam extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={`${classes.mlAuto} ${classes.mrAuto} ${
                  classes.textCenter
                  }`}
              >
                <h2 className={classes.title}>We Offer</h2>
                
              </GridItem>
            </GridContainer>

          <GridContainer>
          <GridItem xs={12} sm={3} md={3}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={Manicure1} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Manicure1})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Manicures</h4>
                </CardBody>
                
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={Pedicure} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Pedicure})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Pedicures</h4>
                </CardBody>
                
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={Waxing} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Waxing})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Waxing</h4>
                </CardBody>
                
              </Card>
            </GridItem>

            <GridItem xs={12} sm={3} md={3}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={Manicure2} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${Manicure2})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Kids' Services</h4>
                </CardBody>
                
              </Card>
            </GridItem>
            
            
          </GridContainer>

            {/* <GridContainer>
              <GridItem xs={12} sm={3} md={3}>

                <Card profile plain>
                  <CardAvatar profile plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={Manicure1} alt="..." className={classes.img} />
                    </a>
                    
                  </CardAvatar>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Manicures</h4>
                  </CardBody>
                  
                </Card>

              </GridItem>

              <GridItem xs={12} sm={3} md={3}>

                <Card profile plain>
                  <CardAvatar profile plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={Manicure2} alt="..." className={classes.img} />
                    </a>
                  </CardAvatar>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Pedicures</h4>
                  </CardBody>
                  
                </Card>

              </GridItem>

              <GridItem xs={12} sm={3} md={3}>

                <Card profile plain>
                  <CardAvatar profile plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={Pedicure} alt="..." className={classes.img} />
                    </a>
                  </CardAvatar>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Kids' Services</h4>
                  </CardBody>
                  
                </Card>

              </GridItem>

              <GridItem xs={12} sm={3} md={3}>

                <Card profile plain>
                  <CardAvatar profile plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={Waxing} alt="..." className={classes.img} />
                    </a>
                  </CardAvatar>
                  <CardBody>
                    <h4 className={classes.cardTitle}>Waxing</h4>
                  </CardBody>
                  
                </Card>

              </GridItem>
              
             
            </GridContainer> */}
          </div>
        </div>

    );
  }
}

export default withStyles(style)(SectionTeam);
