//===== =====   Header Navigation   =====   ===== //
export const getNavNames = ({ Logic }) => Logic.getIn(["nav_names"]);

//===== =====   Landing Page   =====   ===== //
export const getLandingContext = ({ Logic }) =>
  Logic.getIn(["hero_context"]).toJS();
