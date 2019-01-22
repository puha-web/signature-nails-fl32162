import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";




import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class Media extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center" >
          <GridItem xs={12} sm={8} md={8} style={{ marginBottom: '50px' }} >
            <h4 className={classes.title}>Thank you for visiting us!</h4>

            <Button round color="google"
              href="https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632"
              target="_blank"
            >
              <i
                className={"fab fa-google"}
              />{" "}
              Google
            </Button>
            <Button round color="facebook"
              href="https://www.facebook.com/pages/Signature-Nails/157494284291095"
              target="_blank"
            >
              <i
                className={"fab fa-facebook"}
              />{" "}
              FaceBook
            </Button>
            <Button round style={{backgroundColor: '#FCF3CF', color: 'black'}}
              href="https://www.yelp.com/biz/signature-nails-lady-lake"
              target="_blank"
            >
              <i
                className={"fab fa-yelp"} style={{color: 'red'}}
              />{" "}
              yelp
            </Button>
          </GridItem>
        </GridContainer>
      </div >
    );
  }
}

export default withStyles(productStyle)(Media);