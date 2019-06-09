//===== =====   Header Navigation   =====   ===== //
export const getNavNames = ({ Logic }) => Logic.getIn(["nav_names"]);

//===== =====   Landing Page   =====   ===== //
export const getLandingContext = ({ Logic }) =>
  Logic.getIn(["landing_context"]).toJS();

export const getCardSectionHeadings = ({ Logic }) =>
  Logic.getIn(["cardSectionHeadings"]).toJS();
//===== =====   AboutContainer Page   =====   ===== //
//
export const getAboutContext = ({ Logic }) =>
    Logic.getIn(["about_context"]).toJS();
