import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

//data
import aboutUs from '../../db/AboutUs';


class PageHeader extends React.Component {
  render() {
    const { classes, ...rest} = this.props;

    return(
      <Header
      color="transparent"
      brand={
        <a href='/'>
          <img src={aboutUs.logo} style={{height: '50px', margin: 0, padding: 0}}></img>
        </a>
        // <h4
        //   style={{ fontFamily: "'Coiny', cursive", fontSize: '25px', padding: 0, margin: 0 }}
        // >{aboutUs.salonName}</h4>
      }
      links={<HeaderLinks dropdownHoverColor="info" />}
      fixed
      changeColorOnScroll={{
        height: 1,
        color: "warning"
      }}
      {...rest}
    />
    )
  }
}

export default withStyles(landingPageStyle)(PageHeader);