export const INITIAL_STATE = {
  reqCalendarDates: {
    test: ""
  },

  nav_names: [
      // "home ", "services ", "about", "gallery ", "contact "
    {id: '/' ,        name: 'home'},
    {id: 'about' ,    name: 'about'},
    {id: 'services' , name: 'services'},
    {id: 'book-now' , name: 'book now'},
    {id: 'gallery' ,  name: 'gallery'},
    {id: 'contact' ,  name: 'contact'},
  ],

  cardSectionHeadings: [
    {
      id: "landing",
      header:
        "Explore how we can provide the best level of comfort for your pets."
    }
  ],

  landing_context: [
    {
      id: "hero-landing-context",
      heroClassName: "hero-landing",
      heroImg:
        "url('https://sb-sit-2019.s3.amazonaws.com/zoe-ra-43393-cropped-2560X1440.jpg')",
      heroHeader: "We have you and your pet covered",
      heroSubHeader:
        "Have us for drop in visits, schedule boarding when you're away, or have us sit for you.",
      pageClassName: "landing-page",
      heroContext: "landing-hero-context",
      heroButtons: "landing-hero-buttons",
      heroButtonOne: "Get Started",
      heroButtonTwo: "AboutContainer US",

      cards: [
        {
          id: "card-01",
          ariaLabel: "Drop-Ins",
          avatarLetter: "D",
          title: "Drop In Visits",
          imgOrIcon:
            "https://sb-sit-2019.s3.amazonaws.com/dog-out-car-window.jpg",
          imgTitle: "Dog Loving the Car Ride",
          subHeader: "Have us come to you!",
          cardContext:
            "Lorem ipsum is a pseudo-Latin text used in web design,typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text."
        },

        {
          id: "card-02",
          ariaLabel: "Overnight",
          avatarLetter: "O",
          title: "Overnight Care",
          imgOrIcon: "https://sb-sit-2019.s3.amazonaws.com/dog-with-lights.jpg",
          imgTitle: "Dog Enjoying the Evening",
          subHeader: "On site sitting",
          cardContext:
            "Lorem ipsum is a pseudo-Latin text used in web design,typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text."
        },

        {
          id: "card-03",
          ariaLabel: "Boarding",
          avatarLetter: "B",
          title: "Boarding",
          imgOrIcon: "https://sb-sit-2019.s3.amazonaws.com/dog-with-sitter.jpg",
          imgTitle: "Dog Hanging with the Sitter",
          subHeader: "Have them stay with us",
          cardContext:
            "Lorem ipsum is a pseudo-Latin text used in web design,typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text."
        }
      ]
    }
  ],

  about_context: [
    //
    {
      id: "hero-about-context",
      heroClassName: "hero-about",
      heroImg:
        "url('https://sb-sit-2019.s3.amazonaws.com/dog-in-tp-1920x1280.jpg')",
      heroHeader: "",
      heroSubHeader: "",

      heroHeaderBOne: "Neighborly",
      heroHeaderBTwo: "Care Providers",
      heroSubHeaderB: "We're serious about your dog's comfort",

      pageClassName: "landing-page",
      heroContext: "landing-hero-context",
      heroButtons: "landing-hero-buttons",
      heroButtonOne: "",
      heroButtonTwo: ""
    }
  ]
};
