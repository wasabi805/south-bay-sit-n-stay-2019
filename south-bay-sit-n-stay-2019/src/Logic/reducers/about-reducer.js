const initialState = {
  hero: {
    id: "hero-about-context",
    heroClassName: "hero-about",
    heroImg:
      "url('https://sb-sit-2019.s3.amazonaws.com/dog-in-tp-1920x1280.jpg')",
    header: "",
    heroSubHeader: "",
    heroButtonOne: "",
    heroButtonTwo: "",

    heroHeaderBOne: "Neighborly",
    heroHeaderBTwo: "Care Providers",
    heroSubHeaderB: "We're serious about your dog's comfort"
  },

  body_01: {
    id: "our-mission",
    className : "our_mission",

    context:{
      className: "our_mission_text_box",
      header: "Our Mission",
      body: "Lorem ipsum is a pseudo-Latin text used in web design,typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text.",
      image: "https://sb-sit-2019.s3.amazonaws.com/yuko_kayla_catherine.jpg",
      imageClassName: "about-group-pic",
    },

    list: [
      {
        id: 'we-are-list',
        header: "We Are",
        listText: ['Attentive' , 'Attentive' , 'Compassionate' , 'Fun' ],
        listWrapperStyle : 'we_are_list_wrapper' //see scss common-body-presenter-01.scss
      },

      {
        id: 'we-are-not',
        header: "We Are Not",
        listText: ['List item text 1' , 'List item text 2' , 'List item text 3' , 'List item text 4' ],
        listWrapperStyle : 'we_are_not_wrapper' //see scss common-body-presenter-01.scss
      },

      {
        id: 'what-we-do',
        header: "What We Do",
        listText: ['List item text 1' , 'List item text 2' , 'List item text 3' , 'List item text 4' ],
        listWrapperStyle : 'what_we_do_wrapper' //see scss common-body-presenter-01.scss
      },
    ]
  },

  body_02: {
    id: "about-cards-employees",
    header: "Meet the Crew",
    subHeader: "",
    context: [
      {
        id: "card-01",
        class: "",
        ariaLabel: "Catherine",
        avatarLetter: "C",
        title: "Catherine",
        imgOrIcon: "https://sb-sit-2019.s3.amazonaws.com/catherine.jpg",
        imgTitle: "Dog Hanging with the Sitter",
        subHeader: "",
        cardContext:
          "Lorem ipsum is a pseudo-Latin text used in web design,typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text."
      },

      {
        id: "card-02",
        class: "",
        ariaLabel: "Overnight",
        avatarLetter: "K",
        title: "Kayla",
        imgOrIcon: "https://sb-sit-2019.s3.amazonaws.com/kayla-profile-02.jpg",
        imgTitle: "Dog Enjoying the Evening",
        subHeader: "",
        cardContext:
          "Lorem ipsum is a pseudo-Latin text used in web design,typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text."
      },

      {
        id: "card-03",
        class: "",
        ariaLabel: "Overnight",
        avatarLetter: "S",
        title: "Sabrina",
        imgOrIcon: "https://sb-sit-2019.s3.amazonaws.com/sabrina.jpg",
        imgTitle: "Dog Enjoying the Evening",
        subHeader: "",
        cardContext:
          "Lorem ipsum is a pseudo-Latin text used in web design,typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text."
      }
    ]
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
