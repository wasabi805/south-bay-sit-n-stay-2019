//===== =====   Header Navigation   =====   ===== //
export const getNavNames = ({Logic}) => {
    return {Logic}.Logic.nav_names
};


//===== =====   Landing Page   =====   ===== //
export const getLandingContext = ({ Logic }) =>{
    return {Logic}.Logic.landing_context;
}


export const getCardSectionHeadings = ({ Logic }) =>{
    return {Logic}.Logic.cardSectionHeadings
}


// //===== =====   AboutContainer Page   =====   ===== //
// //
// export const getAboutContext = ({ Logic }) =>
//     Logic.getIn(["about_context"]).toJS();
