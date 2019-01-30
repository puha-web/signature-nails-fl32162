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
import ServiceInfo from './ServiceInfo2.jsx';



//Data
import services from '../../../db/Services';


class Services extends React.Component {

  state = {
    services: []
  }

  componentDidMount() {

    const groupBy = (objectArray, property) => {
      return objectArray.reduce(function (acc, obj) {
        var key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    }

    const groupedServices = groupBy(services, 'category');
    console.log(groupedServices);

    const servicesByGroup = Object.entries(groupedServices);
    console.log(servicesByGroup);

    this.setState({ services: servicesByGroup })
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
                  tabButton: "All",
                  tabContent:
                    (
                      <CardBody style={{ backgroundImage: `url(${ServiceBgImg})` }}>
                        {this.state.services.map(groupedServices => (
                          <div>
                            <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}
                              >{groupedServices[0]}</h3>
                            {groupedServices[1].map(serviceList => (
                              <ServiceInfo
                                service={serviceList.service}
                                price={serviceList.price}
                                description={serviceList.description}
                                // serviceKey={serviceList.id}
                              />
                            ))}
                            <hr></hr>
                          </div>
                        ))}
                      </CardBody>
                    )
                },
                {
                  tabButton: "Manicure",
                  tabContent:
                    (
                      <CardBody style={{ backgroundImage: `url(${ServiceBgImg})` }}>
                        <div>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}
                            >Manicure</h3>
                          <hr></hr>
                        </div>
                      </CardBody>
                    )
                }
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

