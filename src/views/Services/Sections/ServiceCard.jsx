import React, {Component} from 'react';

//@material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// 
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/Card.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const styleServiceCard = {
  cardTitle,
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  },
  textCenter: {
    textAlign: 'center'
  },
}

class ServiceCard extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <h4 >Manicure Services</h4>
        <List component='nav'>
                  <ListItem>
                    <ListItemText primary="Gel Manicure" />
                    <ListItemText primary="30+" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Classic Manicure (20 minutes)" />
                    <ListItemText primary="15+" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Cras justo odio" />
                    <ListItemText primary="Cras justo odio" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Cras justo odio" />
                    <ListItemText primary="Cras justo odio" />
                  </ListItem>
                </List>
        </CardBody>
      </Card>
    )
  }
}

export default withStyles(styleServiceCard)(ServiceCard);

// (
//   <Card>
//     <CardBody>
//       <h4 className={.cardTitle}></h4>
//     <List component='nav'>
//               <ListItem>
//                 <ListItemText primary="Gel Manicure" />
//                 <ListItemText primary="30+" />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Classic Manicure (20 minutes)" />
//                 <ListItemText primary="15+" />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Cras justo odio" />
//                 <ListItemText primary="Cras justo odio" />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Cras justo odio" />
//                 <ListItemText primary="Cras justo odio" />
//               </ListItem>
//             </List>
//     </CardBody>
//   </Card>
// )