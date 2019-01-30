import React from 'react';

// @material-ui/core components

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import CardBody from "components/Card/CardBody.jsx";

import ServiceBgImg from 'assets/img/salon/serviceBg-default.jpg';

const serviceList = (props) => (

  <CardBody style={{ backgroundImage: `url(${ServiceBgImg})` }}>

    <div>
      <h3 style={{ fontWeight: 'bold' }}
      >{props.groupName}</h3>
      {props.allServices.filter(groupedServices => groupedServices.category === props.groupName)
        .map(serviceInfo =>
          <List component='nav'>
            <ListItem>
              <ListItemText primary={
                <div key={serviceInfo.id}>
                  <h5  style={{ fontWeight: 'bold' }}>
                    <span>{serviceInfo.service}</span>
                    <span
                      style={{ float: 'right' }}
                    >{serviceInfo.price}</span>
                  </h5>
                  <h5>
                    {serviceInfo.description}
                  </h5>
                </div>
              }
              />
            </ListItem>
          </List>
        )
      }
    </div>

  </CardBody>
);

export default serviceList;