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
      one: {
        headerClass: "drop-in-visits-header",
        header: "Drop In Visits",

        contextClass: "drop-in-visits-context",
        context:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter " +
          "in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, " +
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",

        imageClass: "cbc-rt-img",
        image:
          "https://sb-sit-2019.s3.amazonaws.com/court-prather-ZGpLHN5lrp8-unsplash-768px.jpg",

        wrapperColor: "drop-in-visits-wrapper"
      },

      two: {
        headerClass: "overnight-header",
        header: "Overnight Stays",
        contextClass: "overnight-context",
        context:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter " +
          "in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, " +
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",

        imageClass: "",
        image:
          "https://sb-sit-2019.s3.amazonaws.com/zack-dowdy-NMVXMIsXas8-unsplash-768px.jpg",

        wrapperColor: ""
      },

      three: {
        headerClass: "board-with-us-header",
        header: "Board with US",
        contextClass: "board-with-us-context",
        context:
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter " +
          "in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, " +
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",

        imageClass: "cbc-rt-img",
        image:
          "https://sb-sit-2019.s3.amazonaws.com/manuel-meza-bOxX33tiQd4-unsplash.jpg",

        wrapperColor: "board-with-us-wrapper"
      }
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
