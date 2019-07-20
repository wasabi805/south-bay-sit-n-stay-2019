import { LOAD_LANDING_HERO } from "../types";

const initialState = {
  hero: {
    id: "hero-landing-context",
    heroClassName: "hero-landing",
    heroImg:
      "url('https://sb-sit-2019.s3.amazonaws.com/zoe-ra-43393-cropped-2560X1440.jpg')",
    header: "We have you and your pet covered",
    heroSubHeader:
      "Have us for drop in visits, schedule boarding when you're away, or have us sit for you.",
    heroButtonOne: "Get Started",
    heroButtonOneDestination: "/#book-now",

    heroButtonTwo: "About us"
  },

  body_01: {
    id: "get-started",
    header:
      "Explore how we can provide the best level of comfort for your pets.",
    subHeader: "",
    context: [
      {
        id: "card-01",
        class: "",
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
        class: "",
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
        class: "",
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
  },

  body_02: {
    id: "landing-calendar",
    class: "",
    header: "",
    subHeader: "",
    context: []
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOAD_LANDING_HERO":
      return [{ ...state, newName: action.payload }, action.payload];

    default:
      return state;
  }
}
