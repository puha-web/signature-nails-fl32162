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
import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import NavPills from "components/NavPills/NavPills.jsx";
import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import ServiceBgImg from 'assets/img/salon/serviceBg-default.jpg';

//Data
import services from '../../../db/Services';


class Services extends React.Component {

  state = {
    group: [],
    service: []
  }

  componentDidMount() {
    const groups = services.map( group => group.category)
    console.log(groups);

    const groupsUnique = Array.from(new Set (groups));
    console.log(groupsUnique);


    this.setState({ group: groupsUnique })
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
                  tabContent: (
                    <Card style={{
                      backgroundImage: `url(${ServiceBgImg})`,
                    }}
                    >
                      <CardBody>

                        {/* Start Manicure Section */}
                        <div id='manicure-service-list'>
                          <h3 className={classes.CardTitle}
                            style={{
                              fontWeight: 'bold',
                            }}

                          >Manicure Services</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Gel Manicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >30+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Classic Manicure (30minutes) </span>
                                    <span
                                      style={{ float: 'right' }}
                                    >25+</span>
                                  </h5>
                                  <h5>
                                    This service consits of basic manicure services, nail trim,
                                    shapping of nails, soaking, clearning cuticles, hand massage, and the application of polish.
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Spa Manicure (25minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >25+</span>
                                  </h5>
                                  <h5>
                                    This service consists of basic manicure services, nail trim, shaping of nails, soaking,
                                    clearning cuticles, skin exfoliation using Dead Sea Salt, collagen mask, hand massage
                                    using collagen cream, and the application polish.
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Rejuvenate Manicure (40minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >35+</span>
                                  </h5>
                                  <h5>
                                    This service consists of basic manicure services, nail trim, shaping of nails, soaking, clearning
                                    cuticles, hand massage using collagen cream, application of collagen mask, healing herbal gloves, and
                                    the application of polish. It also includes healing herbal neck wrap.
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />
                        {/* End Manicure Section */}

                        {/* Start Pedicure Section */}
                        <div id='pedicure-service-list'>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}>Pedicure Services</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Gel Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >41+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Classic Pedicure (25minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >41+</span>
                                  </h5>
                                  <h5>
                                    This service comes with a foot soak in warm water, nail trim, shaping of nails, clearning of cuticles,
                                    light scrub, massage, warm towel, the application of polish.
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Spa Pedicure (35minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >35+</span>
                                  </h5>
                                  <h5>
                                    This service comes with the basic pedicure services, nail trim, shaping of nails, clearning of cuticles,
                                    exfoliation using Dead Sea Salt, application of collagen mask, hot towels, massage using collagencream,
                                     and the application of polish. It also includes healing herbal neck wrap.
                                    </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Rejuvenate Pedicure (45minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >45+</span>
                                  </h5>
                                  <h5>
                                    This service comes with the basic pedicure services, nail trim, shaping of nails, clearning of cuticles,
                                    exfoliation using Dead Sea Salt, application of collagen mask, hot towels, massage using collagencream,
                                     and the application of polish. It also includes healing herbal neck wrap.
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />

                        {/* End Pedicure Section */}
                        {/* Start Combo Special Section */}
                        <div id='combo-service-list'>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}>Combo Specials</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Classic Manicure & Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >40+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Spa Manicure & Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >58+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Rejuvenate Manicure & Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >78+</span>
                                  </h5>

                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />


                        {/* Start Kids' Services Section */}

                        <div id='kids-service-list'>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}>Kids' Services</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Organic Manicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >10+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Organic Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >22+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Kids' Organic Combo</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >25+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />

                        {/* End Kids Service Section */}
                        {/* Start waxing Section */}
                        <div id='combo-service-list'>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}>Waxing</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Eyebrows</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >10+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Lip & Chin</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >15+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Whole Face</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >35+</span>
                                  </h5>

                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />
                      </CardBody>
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
                    </Card>

                    //   </GridItem>
                    // </GridContainer>

                  )
                },
                {
                  tabButton: "Manicures",
                  tabContent: (
                    // <GridContainer justify="center">
                    //   <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                    <Card style={{
                      backgroundImage: `url(${ServiceBgImg})`,
                    }}
                    >
                      <CardBody>
                        {/* Start Manicure Section */}
                        <div id='manicure-service-list'>
                          <h3 className={classes.CardTitle}
                            style={{
                              fontWeight: 'bold'
                            }}

                          >Manicures Services</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Gel Manicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >30+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Classic Manicure (30minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >25+</span>
                                  </h5>
                                  <h5>
                                    This service consits of basic manicure services, nail trim,
                                    shapping of nails, soaking, clearning cuticles, hand massage, and the application of polish.
                                      </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Spa Manicure (25minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >25+</span>
                                  </h5>
                                  <h5>
                                    This service consists of basic manicure services, nail trim, shaping of nails, soaking,
                                    clearning cuticles, skin exfoliation using Dead Sea Salt, collagen mask, hand massage
                                    using collagen cream, and the application polish.
                        </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Rejuvenate Manicure (40minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >35+</span>
                                  </h5>
                                  <h5>
                                    This service consists of basic manicure services, nail trim, shaping of nails, soaking, clearning
                                    cuticles, hand massage using collagen cream, application of collagen mask, healing herbal gloves, and
                                    the application of polish. It also includes healing herbal neck wrap.
                        </h5>
                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />

                        {/* End Manicure Section */}
                      </CardBody>
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
                    </Card>
                    //   </GridItem>
                    // </GridContainer>
                  )
                },
                {
                  tabButton: "Pedicures",
                  tabContent: (
                    // <GridContainer justify="center">
                    //   <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                    <Card style={{
                      backgroundImage: `url(${ServiceBgImg})`,
                    }}
                    >
                      <CardBody>
                        {/* Start Pedicure Section */}
                        <div id='pedicure-service-list'>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}>Pedicure Services</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Gel Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >41+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5>
                                    <span style={{ fontWeight: 'bold' }}>Classic Pedicure (25minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >41+</span>
                                  </h5>
                                  <h5>
                                    This service comes with a foot soak in warm water, nail trim, shaping of nails, clearning of cuticles,
                                    light scrub, massage, warm towel, the application of polish.
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Spa Pedicure (35minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >35+</span>
                                  </h5>
                                  <h5>
                                    This service comes with the basic pedicure services, nail trim, shaping of nails, clearning of cuticles,
                                    exfoliation using Dead Sea Salt, application of collagen mask, hot towels, massage using collagencream,
                                     and the application of polish. It also includes healing herbal neck wrap.
                                    </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Juvennate Pedicure (45minutes)</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >45+</span>
                                  </h5>
                                  <h5>
                                    This service comes with the basic pedicure services, nail trim, shaping of nails, clearning of cuticles,
                                    exfoliation using Dead Sea Salt, application of collagen mask, hot towels, massage using collagencream,
                                     and the application of polish. It also includes healing herbal neck wrap.
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />

                        {/* End Pedicure Section */}

                      </CardBody>
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
                    </Card>
                    //   </GridItem>
                    // </GridContainer>
                  )
                },
                {
                  tabButton: "Combo Specials",
                  tabContent: (
                    // <GridContainer justify="center">
                    //   <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                    <Card style={{
                      backgroundImage: `url(${ServiceBgImg})`
                    }}
                    >
                      <CardBody>
                        {/* Start Combo Special Section */}
                        <div id='combo-service-list'>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}>Combo Specials</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Classic Manicure & Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >40+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Spa Manicure & Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >58+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Rejuvenate Manicure & Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >78+</span>
                                  </h5>

                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />

                      </CardBody>
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
                    </Card>
                    //   </GridItem>
                    // </GridContainer>
                  )
                },
                {
                  tabButton: "Waxing",
                  tabContent: (
                    // <GridContainer justify="center">
                    //   <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                    <Card style={{
                      backgroundImage: `url(${ServiceBgImg})`
                    }}
                    >
                      <CardBody>
                        {/* Start waxing Section */}
                        <div id='combo-service-list'>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}>Waxing</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Eyebrows</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >10+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Lip & Chin</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >15+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Whole Face</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >35+</span>
                                  </h5>

                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />

                      </CardBody>
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
                    </Card>
                    //   </GridItem>
                    // </GridContainer>
                  )
                },
                {
                  tabButton: "Kids' Services",
                  tabContent: (
                    // <GridContainer justify="center">
                    //   <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
                    <Card style={{
                      backgroundImage: `url(${ServiceBgImg})`,
                    }}
                    >
                      <CardBody>
                        {/* Start Kids' Services Section */}
                        <div id='kids-service-list'>
                          <h3 className={classes.CardTitle} style={{ fontWeight: 'bold' }}>Kids' Services</h3>
                          <List component='nav'>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Organic Manicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >10+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Organic Pedicure</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >22+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={
                                <div>
                                  <h5 style={{ fontWeight: 'bold' }}>
                                    <span>Kids' Organic Combo</span>
                                    <span
                                      style={{ float: 'right' }}
                                    >25+</span>
                                  </h5>
                                </div>
                              }
                              />
                            </ListItem>

                          </List>
                        </div>
                        <hr />

                        {/* End Kids Service Section */}
                      </CardBody>
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
                    </Card>
                    //   </GridItem>
                    // </GridContainer>
                  )
                }
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

