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
        heroSubHeaderB: "We're serious about your dog's comfort",

    },
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        default:
            return state;
    }
}