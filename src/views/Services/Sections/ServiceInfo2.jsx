import React from 'react';

// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const serviceInfo = (props) => (
  <List component='nav'>
    <ListItem>
      <ListItemText primary={
        <div key={props.serviceKey}>
          <h5 style={{ fontWeight: 'bold' }}>
            <span>{props.service}</span>
            <span
              style={{ float: 'right' }}
            >{props.price}</span>
          </h5>
          <h5>
            {props.description}
          </h5>
        </div>
      }
      />
    </ListItem>
  </List>
);

export default serviceInfo;