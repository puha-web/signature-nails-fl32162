import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import NavPills from "components/NavPills/NavPills.jsx";
import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import ServiceInfo from './ServiceInfo1.jsx';



//Data
import services from '../../../db/Services';


class Services extends React.Component {

  state = {
    services: [],
    groups: ["Manicure", "Pedicures", "Combo Specials", "Waxing", "Kids' Services",]
  }

  componentDidMount() {
    this.setState( { services: services })
  }

   render() {
    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center"
          style={{
            marginTop: '0',
            paddingTop: 0,
          }}>
          <GridItem xs={12} sm={12} md={12} className={classes.textCenter} style={{ margin: '0', padding: '0' }}>
            <h2 style={{ fontWeight: 'bold' }}>Our Services</h2>

            <NavPills
              headerColor='success'
              alignCenter
              tabs={[
                {
                  tabButton: "Manicures",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Manicures'/>
                },
                {
                  tabButton: "Pedicures",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Pedicures'/>
                },
                {
                  tabButton: "Combo Specials",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Combo Specials'/>
                },
                {
                  tabButton: "Waxing",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Waxing'/>
                },
                {
                  tabButton: "Kids' Services",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName="Kids' Services"/>
                },
              ]}
            />
            <div className={classes.tabSpace} />
            
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(cardsStyle)(Services);

