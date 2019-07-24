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
    id: "about-us",
    className: "our_mission",

    context: {
      className: "our_mission_text_box",
      header: "Our Mission",
      body: "South Bay Sit N’ Stay is a unique business offering a wide range of services aimed at the health and happiness of your pets. From overnight stays in our home to adventures to the beach to stop-in visits, we tailor each of our services to your pet so they come home with wagging tails and a big smile for you! ",

      image: "https://sb-sit-2019.s3.amazonaws.com/yuko_kayla_catherine.jpg",
      imageClassName: "about-group-pic"
    },

    list: [
      {
        id: "we-are-list",
        header: "We Are",
        listText: ["Attentive", "Compassionate", "Adventurous", "Fun"],
        listWrapperStyle: "we_are_list_wrapper" //see scss common-body-presenter-01.scss
      },

      {
        id: "we-are-not",
        header: "We Are Not",
        listText: [
          "List item text 1",
          "List item text 2",
          "List item text 3",
          "List item text 4"
        ],
        listWrapperStyle: "we_are_not_wrapper" //see scss common-body-presenter-01.scss
      },

      {
        id: "what-we-do",
        header: "What We Do",
        listText: [
          "List item text 1",
          "List item text 2",
          "List item text 3",
          "List item text 4"
        ],
        listWrapperStyle: "what_we_do_wrapper" //see scss common-body-presenter-01.scss
      }
    ]
  },

  body_02: {
    id: "about-cards-employees",
    header: "Meet the Crew",
    subHeader: "",
    context: [
      {
        id: "card-01",
        class: " catherine-profile",
        ariaLabel: "Catherine",
        avatarLetter: "C",
        title: " Catherine",
        imgOrIcon: "https://sb-sit-2019.s3.amazonaws.com/catherine.jpg",
        imgTitle: "Dog Hanging with the Sitter",
        subHeader: "",
        cardContext:
          "Catherine joined the South Bay Sit N’ Stay team after moving to California in 2016. Her volunteer work at the Humane Society and dog sitting in her home state of Wisconsin has developed her into an incredibly patient caregiver. It is a passion of hers to work with animals and provide them with the love and attention they need, especially when they are away from their owners."
      },

      {
        id: "card-02",
        class: " kayla-profile",
        ariaLabel: "kayla",
        avatarLetter: "K",
        title: "Kayla",
        imgOrIcon: "https://sb-sit-2019.s3.amazonaws.com/kayla-profile-01.jpg",
        imgTitle: "Dog Enjoying the Evening",
        subHeader: "",
        cardContext:
          "Kayla started South Bay Sit N’ Stay in 2013 after receiving her certifications in dog training, pet massage, pet nutrition, and pet boarding through Animal Behavior College. She has also spent over 100 hours working with dogs at the Humane Society- Silicon Valley as a volunteer. She loves taking her own dogs out for adventures to the beach and hiking throughout the South Bay."
      },

      {
        id: "card-03",
        class: " sabrina-profile",
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
