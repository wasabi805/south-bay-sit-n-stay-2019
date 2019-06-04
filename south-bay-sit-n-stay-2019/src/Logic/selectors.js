//===== =====   Header Navigation   =====   ===== //
export const getNavNames = ({ Logic }) => Logic.getIn(["nav_names"]);

//===== =====   Landing Page   =====   ===== //
export const getLandingContext = ({ Logic }) =>
  Logic.getIn(["landing_context"]).toJS();

export const getCardSectionHeadings = ({ Logic }) =>
  Logic.getIn(["cardSectionHeadings"]).toJS();
