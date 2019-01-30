import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import NavPills from "components/NavPills/NavPills.jsx";
import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import ServiceBgImg from 'assets/img/salon/serviceBg-default.jpg';
import ServiceInfo from './ServiceInfo1.jsx';



//Data
import services from '../../../db/Services';


class Services extends React.Component {

  state = {
    services: []
  }

  componentDidMount() {
    this.setState( { services: services })
  }

  // groupingServicesHandler = (groupName) => {
  //   let servicesByGroup = services.filter(group => group.category = groupName)
  //             // .map(serviceListByGroup => serviceListByGroup);
  //   this.setState({services: servicesByGroup})
   
  // }

  // componentDidMount() {
  //   const groupBy = (objectArray, property) => {
  //     return objectArray.reduce(function (acc, obj) {
  //       var key = obj[property];
  //       if (!acc[key]) {
  //         acc[key] = [];
  //       }
  //       acc[key].push(obj);
  //       return acc;
  //     }, {});
  //   }

  //   const groupedServices = groupBy(services, 'category');
  //   console.log(groupedServices);

  //   this.setState({ services: groupedServices })
  // }

  // filteringGroupHandler = (groupNa) => {
  //   const servicesByGroup = Object.keys(services).map(group => {
  //     if (group === groupNa) {
  //       return services[group]
  //     };
  //     console.log(services[group])
  //   });
  //   this.setState({ groupedServices: servicesByGroup })
  // }

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
                  tabButton: "Manicure",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Manicures'/>
                },
                {
                  tabButton: "Pedicures",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Manicures'/>
                },
                {
                  tabButton: "Combo Specials",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Manicures'/>
                },
                {
                  tabButton: "Waxing",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Manicures'/>
                },
                {
                  tabButton: "Kids'Services",
                  tabContent: <ServiceInfo allServices={this.state.services} groupName='Manicures'/>
                },
              ]}
            />
            <div className={classes.tabSpace} />
            <CardFooter>
              <List>
                <ListItem>
                  <ListItemText primary={
                    <h5>
                      The hearling herbal wrap is to help relive stress, aches, tendonitis, arthritis, scramps,
                      muscle pain, and increase blood circulation. It is 100% all nature aromatherapy.
                      When used cold, it can promote muscle relaxation, reduce fever, swelling, sprained hans, bites,
                      bruises, and stings.
                                </h5>
                  }
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary={
                    <h5>
                      If you require any extra services, please talk to our technician and confirm the price.
                                </h5>
                  }
                  />
                </ListItem>
              </List>
            </CardFooter>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(cardsStyle)(Services);

