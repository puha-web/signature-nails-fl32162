

const AboutUs = {
  salonName: 'Signature Nails',
  coverPhoto: 'https://s3.amazonaws.com/puha-web-images/PhotoCover/cover1.jpg',
  slogan: 'We Bring Beauty & Happiness to Your Life',
  aboutUs: 'Welcome to Signature Nails Salon! Here, you can experience a spacious and bright environment. ' +
            'To ensure the best quality of services, tools are sterilized for sanitization and to better serve you with clean equipment. ' +
            'Feel relax, enjoy some drinks while our expert technicians serve you with trending and new beauty techniques with decent prices. ' +
            'We provide our signature Pedicures, Manicures, and other services, as well as services upon requests. Walk-ins and appointments are available and welcome. ' +
            'Customers’ satisfactions are our top priority, so let’s get ready for your special occasion with us at Signature Nails!',
  weOffer: [
    { name: 'Manicures',
      img: 'https://s3.amazonaws.com/puha-web-images/Manicures/mani1.jpg'
    },
    { name: 'Pedicures',
      img: 'https://s3.amazonaws.com/puha-web-images/Pedicures/pedi1.jpg'
    },
    { name: 'Waxing',
      img: 'https://s3.amazonaws.com/puha-web-images/Waxing/waxing1.jpg'
    },
    { name: "Kids' Services",
      img: 'https://s3.amazonaws.com/puha-web-images/Manicures/nailArt1.jpg'
    }
  ],
  ourSpecials: [
    {
      name: 'REJUVENATE MANICURE',
      img: 'https://s3.amazonaws.com/puha-web-images/Manicures/mani4.jpg',
      description: 'Come with basic manicure services, nail trim ' + 
                      'shaping of nails, soaking, cleaning cuticles, skin exfoliation using Dead Sea salt ' + 
                      'hand massage using collagen cream, the application of collagen mask, healing herbal gloves ' + 
                      'and the application of polish. Also includes healing herbal neck wrap.' 
    },
    { 
      name: 'REJUVENATE PEDICURE',
      img: 'https://s3.amazonaws.com/puha-web-images/Pedicures/pedi3.jpg',
      description: 'Come with foot soak in warm water, nail trim, shaping of nails, clearning of cuticles ' + 
                    'exfoliation using Dead Sea Salt, light crub application of collagen mask, massage using collagen cream ' + 
                    'placing the feet in healing herbal booties, hot towel, application of polish. also includes healing herbal neck wrap.' 
      }
  ],
  busHrs: {
    opening: { dates: 'Monday - Saturday', time: '9:00am - 06:00pm'},
    closed: { dates: 'Sunday', time: 'Closed'}
  },
  address: {
    street: '1078 Lake Sumter Landing',
    city: 'The Villages',
    state: 'Fl.',
    zipCode: '32162'
  },
  addressLink: 'https://www.google.com/maps/place/Signature+Nails/@28.9083275,-81.9716632,15z/data=!4m5!3m4!1s0x0:0xb2bcce2499f299cb!8m2!3d28.9083275!4d-81.9716632',
  phone: '+13522592400',
  email: 'signaturenail@gmail.com'
}

export default AboutUs;