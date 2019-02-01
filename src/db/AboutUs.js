import React from 'react';

const AboutUs = {
  salonName: 'LCN NAIL SPA',
  coverPhoto: 'https://s3.amazonaws.com/puha-web-images/PhotoCover/cover1.jpg',
  slogan: 'Let Us Bring You Comfort & Relaxation',
  aboutUs: <span>
            LCN Nails is proud of providing our customers with excellent services at affordable prices. 
            Our well-trained, experienced & talented technicians with a positive attitude will bring customers 
            comfort and relaxation with trending and new beauty techniques with decent prices every time crossing by. 
            Especially, customers’ cleanliness and safety is also of our utmost importance at our salon. 
            All our instruments are autoclave-sterilized, and Files, Buffers, Pumice Stones are disscarded after each client. 
            It would be our pleasure to serve you at LCN Nail Spa.
          </span>
            ,
  weOffer: [
    { name: 'Nails Enhancements',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/mani4.png'
    },
    { name: 'Luxury Pedicures',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/pedi9.png'
    },
    { name: "Waxing",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/waxing1.png'
    },
    { name: "Kids' Services",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/weOffer/nailArt1.png'
    },
  ],
  ourSpecials: [
    {
      name: 'LCN Gel Nails Pink & White',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/ourSpecials/special1.png',
      description: 'Full set. Fill In Pink. Fill In Pink & White ' + 
                      'LCN Gel Nail is the most popular, most advance type of gel nail available today.  ' + 
                      'Made with high quality soft resin that provides a super glossy finish. '
    },
    { 
      name: "LCN's Signature Hand Treatment",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/ourSpecials/special2.png',
      description: 'Refreshing Hand Treatment service followed by collagen mask. ' + 
                    'aging property that absorb into the skin, help the skin nourish and be smooth.  (Collagent Vitamin E)'
    },
    { 
      name: 'Grand LCN Manicure',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/ourSpecials/special3.png',
      description: 'Incorporated Warm Basalt Stone massage with Signature Hand Treatment for total relaxation.  ' + 
                    'Extra shoulder and arm massage for 10 minutes. ' 
    },
    {
      name: "LCN’s Signature Foot Treatment",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/ourSpecials/special1.png',
      description: 'It includes foot exfoliation, nail shaping, cuticle care, callus reduction, and a salt scrub. Foot mask and steamed towel wraps, application of oil, massage w/ hot stone and desired polish'
    },
    { 
      name: "LCN’s Grand Foot Treatment",
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/ourSpecials/special2.png',
      description: "Your feet will be very soft once wrapped in a collagen mask, they are placed in warm mittens. The heat from the mittens helps the anti-aging property of the collagen absorb into the skin"
    },
    { 
      name: 'Grand LCN Manicure',
      img: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/ourSpecials/special3.png',
      description: 'Incorporated Warm Basalt Stone massage with Signature Hand Treatment for total relaxation.  ' + 
                    'Extra shoulder and arm massage for 10 minutes. ' 
    }
  ],
  busHrs: [
    { dates: 'Tuesday - Saturday', time: "9:30 am - 7:00 pm" },
    { dates: 'Sunday', time: "11:00 am - 5:00 pm" },
    { dates: 'Monday', time: "Closed" },
  ],
  address: {
    street: '12341 Strickland Rd, Ste 106',
    city: 'Raleigh',
    state: 'NC',
    zipCode: '27613'
  },
  addressLink: 'https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632',
  phone: '(984) 202-5188',
  email: '',
  salonPhoto: 'https://s3.amazonaws.com/lcn-nail-spa-nc27613/images/gallery/salonPhoto/gallery-160625.jpg'
}

export default AboutUs;