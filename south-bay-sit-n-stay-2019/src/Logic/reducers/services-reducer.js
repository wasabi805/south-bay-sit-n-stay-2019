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