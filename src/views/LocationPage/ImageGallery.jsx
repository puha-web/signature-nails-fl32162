import React from 'react';
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

//Pictures
import Salon1 from "assets/img/salon/salon1.JPEG";
import Salon2 from "assets/img/salon/salon2.JPEG";
import Salon3 from "assets/img/salon/salon3.jpg";
import Salon4 from "assets/img/salon/salon4.JPEG";
import Salon5 from "assets/img/salon/salon5.JPEG";


const stylePhoto = {
  productContainer: {
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto"
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center"
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container a": {
      "&.active > div": {
        opacity: "1",
        borderColor: "#DDDDDD"
      },
      "& > div": {
        width: "80%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "block",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8"
      },
      "& > div img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center"
      }
    }
  }
};

function SalonPhoto(props) {
  const { classes } = props;
  const images = [
    {
      original: Salon1,
      thumbnail: Salon1
    },
    {
      original: Salon2,
      thumbnail: Salon2
    },
    {
      original: Salon3,
      thumbnail: Salon3
    },
    {
      original: Salon5,
      thumbnail: Salon5
    },
    {
      original: Salon4,
      thumbnail: Salon4
    },
  ];
  return (
    <div className={classes.productContainer}>
          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={3}
            items={images}
          />
    </div>
  )
};

export default withStyles(stylePhoto)(SalonPhoto);
