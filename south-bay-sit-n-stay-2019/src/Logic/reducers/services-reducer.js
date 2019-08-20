const initialState = {
  hero: {
    id: "hero-services-context",
    heroClassName: "hero-services",
    heroImg:
      "url('https://sb-sit-2019.s3.amazonaws.com/justin-veenema-NH1d0xX6Ldk-unsplash.jpg')",
    header: "",
    heroSubHeader: "",
    heroButtonOne: "",
    heroButtonTwo: "",

    heroHeaderBOne: "Services",
    heroHeaderBTwo: "Service Providers",
    heroSubHeaderB: "We're serious about your dog's comfort"
  },

  body_01: {},

  body_02: {
    context: {

      // circleImgs:[
      //   {id: "circle-drop-in-visits" , image: "https://sb-sit-2019.s3.amazonaws.com/court-prather-ZGpLHN5lrp8-unsplash-768px.jpg"},
      //   {id: "circle-overnight" , image: "https://sb-sit-2019.s3.amazonaws.com/zack-dowdy-NMVXMIsXas8-unsplash-768px.jpg"},
      //   {id: "circle-boarding" , image: "https://sb-sit-2019.s3.amazonaws.com/manuel-meza-bOxX33tiQd4-unsplash.jpg"},
      // ],

      one: {
        headerClass: "drop-in-visits-header",
        header: "Drop In Visits",
        header2: "Drop Ins",
        //
        contextClass: "drop-in-visits-context",
        context:
          "Working late? Date night? We’ve got you covered with an hour stop in visit. We can feed, play, and spend quality time with your pet while you are out. \n" +
          "Rate: $25 Per visit can do multiple visits a day.",

        imageClass: "cbc-rt-img",
        image:
          "https://sb-sit-2019.s3.amazonaws.com/court-prather-ZGpLHN5lrp8-unsplash-768px.jpg",
        bgImgPos: "91% 50%",

        wrapperColor: "drop-in-visits-wrapper"
      },

      two: {
        headerClass: "overnight-header",
        header: "Overnight Stays",
        header2: "Overnight",
        contextClass: "overnight-context",
        context:
          "This option is ideal for the homebody pet. We come to you and take care of your pet overnight in the comfort of their home.  Also offered for overnight stays: watering your indoor and outdoor plants, picking up your mail, accepting deliveries, and more!\n" +
          "Rate: $40 Per night\n",

        imageClass: "",
        image:
          "https://sb-sit-2019.s3.amazonaws.com/zack-dowdy-NMVXMIsXas8-unsplash-768px.jpg",
        bgImgPos: "25% 50%",

        wrapperColor: ""
      },

      three: {
        headerClass: "board-with-us-header",
        header: "Board with US",
        header2: "Boarding",
        contextClass: "board-with-us-context",
        context:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter " +
          "in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, " +
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",

        imageClass: "cbc-rt-img",
        image:
          "https://sb-sit-2019.s3.amazonaws.com/manuel-meza-bOxX33tiQd4-unsplash.jpg",
        bgImgPos: "50% 50%",

        wrapperColor: "board-with-us-wrapper"
      }
    }
  },

  body_03: {
    context: {
      header: "Decided on which service works for you?",
      buttons: [
        { id: "book-now-svc-btn", name: "Book Now", goTo: "/#book-now" }
      ]
    }
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
