import { Map, List } from "immutable";

export const INITIAL_STATE = Map({
  nav_names: ["home ", "services ", "menu ", "gallery ", "contact "],

  hero_context: List([
    Map({
      id: "hero-landing-context",
      heroImg:
        "url('https://sb-sit-2019.s3.amazonaws.com/zoe-ra-43393-cropped-2560X1440.jpg')",
      heroHeader: "We have you and your pet covered",
      heroSubHeader:
        "Have us for drop in visits, schedule boarding when you're away, or have us sit for you.",
      pageClassName: "landing-page",
      heroContext: "landing-hero-context",
      heroButtons: "landing-hero-buttons",
      heroButtonOne: "Get Started",
      heroButtonTwo: "About US"
    })
  ])
});
