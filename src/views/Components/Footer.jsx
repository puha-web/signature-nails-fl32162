import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";


class PageFooter extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Footer
        content={
          <div>
            {/* <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <Button justIcon round color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Button justIcon round color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <Button justIcon round color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </ListItem>

              </List>
            </div> */}
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} made by{" "}
              <a href="https://puha.site" target="_blank" rel="noopener noreferrer">PUHA</a>
            </div>
          </div>
        }
      />
    )
  }
}

export default withStyles(landingPageStyle)(PageFooter);